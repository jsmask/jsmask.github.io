var Typewriter = (function() {
	function Typewriter(option, script) {
		this.elem = option.el;
		this.time = ~~(option.time) || 25;
		this.script = script();
		this.timer = null;
		this.init();
	}
	Typewriter.prototype = {
		init: function() {
			var d = this.elem,
				t = this.time,
				c = d.innerHTML,
				b = 0,
				m = [],
				s = this.script;
			d.innerHTML = "";
			d.style.display="block";
			m = check(c, "<event");
			var self = this;
			this.timer = setInterval(function() {
				var f = c.charAt(b);
				if(f == "<") {
					b = c.indexOf(">", b) + 1;
				} else {
					b++;
					d.innerHTML = c.substring(0, b) + (b & 1 ? "_" : "&nbsp;");
				}
				for(var i = 0; i < m.length; i++) {
					if(b == m[i]) s[i]&&s[i]();
				}
				if(b >= c.length) {
					self.stop();
				}
				d.scrollTop = d.scrollHeight;
			}, t);
		},
		stop: function() {
			clearInterval(this.timer);
		}
	}

	function check(str, subStr) {
		var _arr = [];
		var _pos = str.indexOf(subStr);
		while(_pos > -1) {
			_arr.push(_pos);
			_pos = str.indexOf(subStr, _pos + 1);
		}
		return _arr;
	}

	return Typewriter;
}())