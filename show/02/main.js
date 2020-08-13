var root = $("#root").get(0);
var audio = $("#audio").get(0);
var talk_audio = $("#talk_audio").get(0);

var load_stage = {
	$dom: $("#load"),
	$msg: $("#load-msg"),
	$bar: $("#bar"),
	str: "正在修炼",
	timer: null,
	show: function() {
		var n = 0;
		this.timer = setInterval(function() {
			//".".repeat(n++)
			var s = "";
			for(var i = 0; i < n; i++) s += ".";
			n %= 3;
			n++;
			this.$msg.get(0).innerHTML = this.str + s;
		}.bind(this), 300)
	},
	render: function(progress) {
		this.$bar.css({
			"width": progress + "%"
		})
	},
	hide: function() {
		clearInterval(this.timer);
		this.timer = null;
		this.$dom.remove();
	}
}

load_stage.show();

$(function() {
	var allTimeLine = new TimelineMax({
		paused: true
	});
	var win = {
		width: 375,
		height: window.innerHeight,
		pixel: window.devicePixelRatio || 1
	}
	var assets = null;

	var app = new PIXI.Application({
		width: win.width,
		height: win.height,
		transparent: false,
		backgroundColor: 0xFFFFFF,
		resolution: 1,
		antialias: true,
	});
	root.appendChild(app.view);

	var content = new PIXI.Container();
	app.stage.addChild(content);

	var loader = new PIXI.Loader();

	MYDATA.forEach(function(item) {
		loader.add(item.name, item.url)
	});

	loader.onProgress.add(loadProgressHandler);
	loader.load(setup);

	function loadProgressHandler(res) {
		load_stage.render(res.progress);
	}

	function setup(loader, resources) {
		load_stage.hide();
		assets = resources;
		readerStage(resources);
	}

	function readerStage() {
		if(assets == null) return;
		var sence1 = createSence1();
		var sence2 = createSence2();
		var sence3 = createSence3();
		sence1.position.set(0, 0);
		sence2.position.set(0, 1000);
		sence3.position.set(0, 2600);
		content.addChild(sence3,sence1, sence2);
	}

	function playBgm() {
		if(audio.paused) {
			audio.play();
		}
	}

	function createSence1() {
		var sence = new PIXI.Container();

		var title = spriteFactory("title.png", 320, {
			x: "center",
			y: 100
		}, "stage0", assets);
		sence.addChild(title);

		var b3 = spriteFactory("b3.png", 320, {
			x: -20,
			y: 300
		}, "stage0", assets);
		sence.addChild(b3);

		var b2 = spriteFactory("b2.png", win.width, {
			x: 0,
			y: 400
		}, "stage0", assets);
		sence.addChild(b2);

		var b0 = spriteFactory("b0.png", 400, {
			x: "center",
			y: 400
		}, "stage0", assets);
		sence.addChild(b0);

		var b1 = spriteFactory("b1.png", 190, {
			x: 230,
			y: 495
		}, "stage0", assets);
		sence.addChild(b1);

		var d = spriteFactory("d.jpeg", win.width, {
			x: "center",
			y: 970
		}, "stage0", assets);
		sence.addChild(d);

		var a5 = spriteFactory("a5.png", 65, {
			x: 240,
			y: 60
		}, "stage0", assets);
		sence.addChild(a5);

		var a3 = animatedSpriteFactory(["a3.png", "a4.png"], 160, {
			x: -80,
			y: 380
		}, .03, "stage0", assets);
		a3.play();
		sence.addChild(a3);

		var a0 = animatedSpriteFactory(["a0.png", "a1.png", "a2.png"], 95, {
			x: 135,
			y: 477
		}, .1, "stage0", assets);
		a0.play();
		a0.onFrameChange = function(res) {
			if(res == 0) a0.x = 135;
			if(res == 1) a0.x = 144.2;
			if(res == 2) a0.x = 139;
		}
		sence.addChild(a0);

		var c0 = spriteFactory("c0.png", 280, {
			x: 70,
			y: 770
		}, "stage0", assets);
		sence.addChild(c0);
		var c4 = spriteFactory("c4.png", 300, {
			x: 0,
			y: 710
		}, "stage0", assets);
		sence.addChild(c4);
		var c1 = spriteFactory("c1.png", 210, {
			x: 20,
			y: 920
		}, "stage0", assets);
		sence.addChild(c1);
		var c2 = spriteFactory("c2.png", 260, {
			x: -50,
			y: 790
		}, "stage0", assets);
		sence.addChild(c2);
		var c3 = spriteFactory("c3.png", 360, {
			x: 80,
			y: 800
		}, "stage0", assets);
		sence.addChild(c3);
		var c5 = spriteFactory("c5.png", 310, {
			x: 80,
			y: 910
		}, "stage0", assets);
		sence.addChild(c5);
		var c6 = spriteFactory("c6.png", 330, {
			x: 130,
			y: 870
		}, "stage0", assets);
		sence.addChild(c6);

		var d1 = spriteFactory("d1", 120, {
			x: win.width / 2,
			y: 900
		}, null, assets);
		d1.anchor.set(0.5, 0.5)
		d1.alpha = 0;
		sence.addChild(d1);

		var timeLine1 = new TimelineMax({
			delay: 0
		});
		var lineMax1_0 = new TweenMax.to(a5, .07, {
			x: 380,
			y: 30,
			alpha: 0.2
		});
		timeLine1.add(lineMax1_0, 0);
		var lineMax1_1 = new TweenMax.to(a3, .1, {
			x: 380,
			y: 210
		});
		timeLine1.add(lineMax1_1, 0);

		var lineMax1_2 = new TweenMax.to([c0, c1, c2, c4], .16, {
			x: "-=200"
		});
		var lineMax1_3 = new TweenMax.to([c3, c5, c6], .16, {
			x: "+=200"
		});
		timeLine1.add(lineMax1_2, .01);
		timeLine1.add(lineMax1_3, .01);

		var lineMax1_4 = new TweenMax.to(d1, .05, {
			alpha: 1
		});
		var lineMax1_5 = new TweenMax.to(d1, .05, {
			alpha: 0,
			width: 194.5,
			height: 30
		});
		timeLine1.add(lineMax1_4, .05);
		timeLine1.add(lineMax1_5, .1);

		allTimeLine.add(timeLine1);

		return sence;
	}

	function createSence2() {
		var sence = new PIXI.Container();

		var t1 = textFactory(assets["word"].data[0], {
			x: "center",
			y: 30
		})
		t1.alpha = 0;
		sence.addChild(t1);

		var t2 = textFactory(assets["word"].data[1], {
			x: "center",
			y: 80
		});
		t2.alpha = 0;
		sence.addChild(t2);
		var t3 = textFactory(assets["word"].data[2], {
			x: "center",
			y: 105
		});
		t3.alpha = 0;
		sence.addChild(t3);

		var box = new PIXI.Container();
		var d2 = spriteFactory("d2", 280, {
			x: 0,
			y: 0
		}, null, assets);
		var d3 = spriteFactory("d3", 280, {
			x: 0,
			y: 0
		}, null, assets);
		var rectangle = new PIXI.Graphics();
		rectangle.beginFill(0xFFFFFF);
		rectangle.lineStyle(2, 0x000000, 1);
		rectangle.drawRect(0, 0, d2.width, d2.height);
		rectangle.endFill();
		box.addChild(rectangle);
		var d4 = spriteFactory("d4", 150, {
			x: 0,
			y: 0
		}, null, assets);
		d4.position.set(d2.width - d4.width, d2.height - d4.height);
		var logo = spriteFactory("logo", 40, {
			x: 0,
			y: 0
		}, null, assets);
		logo.position.set(50, 280)

		var d5 = spriteFactory("d5", 60, {
			x: 140,
			y: 36
		}, null, assets);
		var d7 = spriteFactory("d7", 140, {
			x: 40,
			y: 56
		}, null, assets);
		var d6 = spriteFactory("d6", 85, {
			x: 0,
			y: 0
		}, null, assets);
		d6.position.set(150, d2.height - d6.height);
		box.addChild(d2, d3, d4, logo, d5, d7, d6);
		box.position.set((win.width - d2.width) / 2, 180);
		sence.addChild(box);

		var face = new PIXI.Container();
		var d10 = spriteFactory("d10", 120, {
			x: 0,
			y: 0
		}, null, assets);
		var d9 = spriteFactory("d9", 120, {
			x: 0,
			y: 0
		}, null, assets);
		var d11 = spriteFactory("d11", 90, {
			x: 32,
			y: 0
		}, null, assets);
		var d12 = spriteFactory("d12", 120, {
			x: 0,
			y: 0
		}, null, assets);
		var d8 = spriteFactory("d8", 20, {
			x: 15,
			y: 20
		}, null, assets);
		face.addChild(d10, d9, d11, d12, d8);
		face.position.set(240, 510)
		sence.addChild(face)

		var t4 = textFactory(assets["word"].data[3], {
			x: -30,
			y: 600
		}, true);
		t4.alpha = 0;
		sence.addChild(t4);

		var fightbox = new PIXI.Container();
		var rectangle1 = new PIXI.Graphics();
		rectangle1.beginFill(0xFFFFFF);
		rectangle1.lineStyle(2, 0x000000, 1);
		rectangle1.drawRect(0, 0, 240, 400);
		rectangle1.endFill();

		var e0 = spriteFactory("e0", 140, {
			x: 80,
			y: 130
		}, null, assets);
		var e1 = spriteFactory("e1", 140, {
			x: 40,
			y: 70
		}, null, assets);
		fightbox.addChild(rectangle1, e1, e0);
		fightbox.position.set(win.width / 2 - 240 / 2, 670);
		sence.addChild(fightbox);

		var t5 = textFactory(assets["word"].data[4], {
			x: 245,
			y: 700
		}, true);
		var t6 = textFactory(assets["word"].data[5], {
			x: 170,
			y: 740
		}, true);
		var t7 = textFactory(assets["word"].data[6], {
			x: 20,
			y: 990
		}, true);
		var t8 = textFactory(assets["word"].data[7], {
			x: 20,
			y: 1025
		}, true);
		sence.addChild(t5, t6, t7, t8);

		var d10 = spriteFactory("d10", 120, {
			x: 0,
			y: 0
		}, null, assets);

		//	var e2 = spriteFactory("e2", 180, {
		//		x: 160,
		//		y: 1030
		//	}, null, assets);
		//	var e5 = spriteFactory("e5", 180, {
		//		x: 30,
		//		y: 1030
		//	}, null, assets);

		//	sence.addChild(e2,e5);

		var fight1 = animatedSpriteFactory(["e2", "e3", "e4"], 180, {
			x: 160,
			y: 1080
		}, .02, null, assets);
		fight1.play();
		fight1.onFrameChange = function(res) {
			var v = fight1.height / fight1.width
			if(res == 0) {
				fight1.width = 180;
				fight1.x = 160
			}
			if(res == 1) {
				fight1.width = 260;
				fight1.x = 80
			}
			if(res == 2) {
				fight1.width = 200;
				fight1.x = 160
			}
			fight1.height = fight1.width * v;
		}
		var fight2 = animatedSpriteFactory(["e5", "e6", "e7"], 180, {
			x: 30,
			y: 1100
		}, .02, null, assets);
		fight2.play();
		fight2.onFrameChange = function(res) {
			var v = fight2.height / fight2.width
			if(res == 0) {
				fight2.width = 180;
				fight2.x = 30
			}
			if(res == 1) {
				fight2.width = 170;
				fight2.x = 40
			}
			if(res == 2) {
				fight2.width = 240;
				fight2.x = 30
			}
			fight2.height = fight2.width * v;
		}

		fight1.alpha = fight2.alpha = 0;

		sence.addChild(fight1, fight2);

		var e8 = spriteFactory("e8", 160, {
			x: 200,
			y: 1250
		}, null, assets);
		var e9 = spriteFactory("e9", 150, {
			x: 170,
			y: 1250
		}, null, assets);

		sence.addChild(e8);
		sence.addChild(e9);

		var lineMax2_0 = new TweenMax.to(t1, .03, {
			alpha: 1,
			y: "-=10",
			start: function() {
				playTalkAudio(0);
			}
		});

		var lineMax2_1 = new TweenMax.to(t2, .03, {
			alpha: 1,
			y: "-=10"
		});
		var lineMax2_2 = new TweenMax.to(t3, .03, {
			alpha: 1,
			y: "-=10"
		});

		var lineMax2_3 = new TweenMax.from(box, .03, {
			alpha: 0
		});
		var lineMax2_4 = new TweenMax.from(d5, .05, {
			alpha: 0,
			y: "-=130"
		});
		var lineMax2_5 = new TweenMax.from(d7, .05, {
			alpha: 0,
			y: "-=100"
		});
		var lineMax2_6 = new TweenMax.from(d6, .03, {
			alpha: 0,
			x: "+=50"
		});
		var lineMax2_7 = new TweenMax.from(face, .03, {
			alpha: 0,
			x: "+=50"
		});
		var lineMax2_8 = new TweenMax.from(d8, .03, {
			alpha: 0,
			width: "-=5",
			height: "-=5"
		});
		var lineMax2_9 = new TweenMax.to(t4, .03, {
			alpha: 1,
			x: "+=50",
			start: function() {
				playTalkAudio(1);
			}
		});
		var lineMax2_10 = new TweenMax.from(t5, .03, {
			alpha: 0,
			x: "+=30",
		});
		var lineMax2_11 = new TweenMax.from(t6, .03, {
			alpha: 0,
			x: "+=30"
		});
		var lineMax2_12 = new TweenMax.from(fightbox, .03, {
			alpha: 0,
			y: "+=30"
		});
		var lineMax2_13 = new TweenMax.from(e1, .07, {
			x: "-=40",
			y: "-=30"
		});
		var lineMax2_14 = new TweenMax.from(e0, .07, {
			x: "+=20",
			y: "+=30"
		});
		var lineMax2_15 = new TweenMax.from(t7, .03, {
			alpha: 0,
			x: "-=30",
		});
		var lineMax2_16 = new TweenMax.from(t8, .03, {
			alpha: 0,
			x: "-=30",
		});
		var lineMax2_17 = new TweenMax.to([fight1, fight2], .04, {
			alpha: 1,
			y: "-=50",
			start: function() {
				playTalkAudio(2)
			}
		});
		var lineMax2_18 = new TweenMax.from(e8, .1, {
			alpha: 0,
			x: "-=30",
			y: "-=100",
		});
		var lineMax2_19 = new TweenMax.from(e9, .1, {
			alpha: 0,
			x: "+=30",
			y: "+=100",
		});

		var timeLine2 = new TimelineMax({
			delay: -.05
		});

		timeLine2
			.add(lineMax2_0, 0)
			.add(lineMax2_1, .01)
			.add(lineMax2_2, .02)
			.add(lineMax2_3, .03)
			.add(lineMax2_4, .05)
			.add(lineMax2_5, .05)
			.add(lineMax2_6, .08)
			.add(lineMax2_7, .1)
			.add(lineMax2_8, .11)
			.add(lineMax2_9, .12)
			.add(lineMax2_10, .13)
			.add(lineMax2_11, .14)
			.add(lineMax2_12, .14)
			.add(lineMax2_13, .15)
			.add(lineMax2_14, .15)
			.add(lineMax2_15, .17)
			.add(lineMax2_16, .18)
			.add(lineMax2_17, .2)
			.add(lineMax2_18, .25)
			.add(lineMax2_19, .25)
		allTimeLine.add(timeLine2);
		return sence;
	}

	function createSence3() {
		var sence = new PIXI.Container();
		var d1 = spriteFactory("d.jpeg", win.width, {
				x: win.width/2,
				y: 0
		}, "stage0", assets);
		
		d1.anchor.set(0.5,0.5)
		d1.rotation = 1 * Math.PI;
		var d2 = spriteFactory("d.jpeg", win.width, {
				x: 0,
				y: 1800
		}, "stage0", assets);
		var black = new PIXI.Graphics();
		black.beginFill(0x000000);
		black.drawRect(0, 260, win.width, 1550);
		black.endFill();
		sence.addChild(d1,black,d2);
		
		
		var t1 = textFactory(assets["word"].data[8], {
			x: "center",
			y: -40
		})
		sence.addChild(t1);

		var t2 = textFactory(assets["word"].data[9], {
			x: "center",
			y: -10
		});
		sence.addChild(t2);
		var t3 = textFactory(assets["word"].data[10], {
			x: "center",
			y: 50
		});
		sence.addChild(t3);
		
		var t4 = textFactory(assets["word"].data[11], {
			x: "center",
			y: 140
		});
		sence.addChild(t4);
		
		var t5 = textFactory(assets["word"].data[12], {
			x: "center",
			y: 160
		});
		sence.addChild(t5);
		
		
		
		var box0 = new PIXI.Container();
		var f0 = spriteFactory("f0", 300, {
			x: 0,
			y: 0
		}, null, assets);
		var f12 = spriteFactory("f12", 100, {
			x: 180,
			y: 375
		}, null, assets);
		var whileRect = new PIXI.Graphics();
		whileRect.beginFill(0xFFFFFF);
		whileRect.drawRect(0, 0, f0.width, 420);
		whileRect.endFill();
		box0.addChild(whileRect,f0,f12)
		box0.position.set(win.width/2-f0.width/2,200);
		sence.addChild(box0);
		
		var box1 = new PIXI.Container();
		var f1 = spriteFactory("f1", 180, {
			x: 0,
			y: 0
		}, null, assets);
		var whileRect1 = new PIXI.Graphics();
		whileRect1.beginFill(0xFFFFFF);
		whileRect1.drawRect(0, 0, f1.width, 240);
		whileRect1.endFill();
		var f2 = spriteFactory("f2", 110, {
			x: 105,
			y: 10
		}, null, assets);
		f2.anchor.x = 0.5;
		new TweenMax(f2, .8, {
		    alpha: 0,
		    width:150,
		    height:100,
		    repeat: -1,
		}).play();
		box1.addChild(whileRect1,f1,f2)
		box1.position.set(36,630);
		sence.addChild(box1);
		
		var t6 = textFactory(assets["word"].data[13], {
			x:200,
			y: 750
		},true);
		sence.addChild(t6);
		
		var t7 = textFactory(assets["word"].data[14], {
			x: 130,
			y: 790
		},true);
		sence.addChild(t7);
		
		var box2 = new PIXI.Container();
		var f3 = animatedSpriteFactory(["f3", "f4"], 200, {
			x: 0,
			y: 0
		}, .03, null, assets);
		f3.play();
		f3.onFrameChange = function(res) {
			if(res == 0) {
				f3.y = 0;
				f3.width = 200;
			}
			if(res == 1) {
				f3.y=20;
				f3.width = 202;
			}
		}
		var whileRect2 = new PIXI.Graphics();
		whileRect2.beginFill(0xFFFFFF);
		whileRect2.lineStyle(2, 0x000000, 1);
		whileRect2.drawRect(-20, -20, f3.width+40, f3.height+40);
		whileRect2.endFill();
		box2.addChild(whileRect2,f3)
		box2.position.set(120,870);
		sence.addChild(box2);
		
		var box3 = new PIXI.Container();
		var f5 = animatedSpriteFactory(["f5", "f6"], 180, {
			x: 0,
			y:10
		}, .05, null, assets);
		f5.play();
		f5.onFrameChange = function(res) {
			var v = f5.height / f5.width
			if(res == 0) {
				f5.width = 180;
				f5.x = 0;
				f5.y = 10;
			}
			if(res == 1) {
				f5.width = 185;
				f5.x = -5;
				f5.y = 18;
			}
			f5.height = f5.width * v;
		}
		var whileRect3 = new PIXI.Graphics();
		whileRect3.beginFill(0xFFFFFF);
		whileRect3.lineStyle(2, 0x000000, 1);
		whileRect3.drawRect(-20, -40, f5.width+60, f5.height+80);
		whileRect3.endFill();
		box3.addChild(whileRect3,f5);
		box3.position.set(60,1100);
		
		
		var box4 = new PIXI.Container();
		var f7 = animatedSpriteFactory(["f7", "f8"], 180, {
			x: 60,
			y:0
		}, .03, null, assets);
		f7.play();
		f7.onFrameChange = function(res) {
			var v = f7.height / f7.width
			if(res == 0) {
				f7.width = 180;
				f7.x = 60;
				f7.y = 0;
			}
			if(res == 1) {
				f7.width = 200;
				f7.x = 32;
				f7.y = 1;
			}
			f7.height = f7.width * v;
		}
		var whileRect4 = new PIXI.Graphics();
		whileRect4.beginFill(0xFFFFFF);
		whileRect4.lineStyle(2, 0x000000, 1);
		whileRect4.drawRect(-30, -40, f7.width+60, f7.height+80);
		whileRect4.endFill();
		var f13 = spriteFactory("f13", f7.width+60, {
			x: -30,
			y: 200
		}, null, assets);
		box4.addChild(whileRect4,f13,f7)
		box4.position.set(120,1340);
		sence.addChild(box4,box3);
		
		var t8 = textFactory(assets["word"].data[15], {
			x:20,
			y: 1450
		},true);
		sence.addChild(t8);
		
		var t9 = textFactory(assets["word"].data[16], {
			x: 20,
			y: 1490
		},true);
		sence.addChild(t9);
		
		var box5 = new PIXI.Container();
		var f9 = animatedSpriteFactory(["f9", "f10"], 200, {
			x: 0,
			y:0
		}, .04, null, assets);
		f9.play();
		f9.onFrameChange = function(res) {
			var v = f9.height / f9.width
			if(res == 0) {
				f9.width = 200;
				f9.x =0;
			}
			if(res == 1) {
				f9.width = 180;
				f9.x =10;
			}
			f9.height = f9.width * v;
		}
		var f11 = spriteFactory("f11", 110, {
			x: 115,
			y: 152,
			alpha: 1
		}, null, assets);
		new TweenMax(f11, 1, {
		    alpha: 0,
		    repeat: -1,
		    x:"-=20",
		    y:"+=10"
		}).play();
		box5.addChild(f11,f9)
		box5.position.set(30,1620);
		sence.addChild(box5);
		
		var box6 = new PIXI.Container();
		var ellipse1 = new PIXI.Graphics();
		ellipse1.beginFill(0xFFFFFF);
		ellipse1.drawEllipse(0, 0, 50, 25);
		ellipse1.endFill();
		ellipse1.position.set(0,0);
		var t10 = textFactory(assets["word"].data[17], {
			x: -18,
			y: -8
		},false,"#000000",18);
		box6.addChild(ellipse1,t10);
		box6.position.set(120,1920);
		sence.addChild(box6);
		
		var box7 = new PIXI.Container();
		var ellipse2 = new PIXI.Graphics();
		ellipse2.beginFill(0xFFFFFF);
		ellipse2.drawEllipse(0, 0, 40, 40);
		ellipse2.endFill();
		ellipse2.position.set(0,0);
		var t11 = textFactory(assets["word"].data[18], {
			x: -20,
			y: -8
		},false,"#000000",18);
		box7.addChild(ellipse2,t11);
		box7.position.set(280,2020);
		sence.addChild(box7);
		
		var box8 = new PIXI.Container();
		var ellipse3 = new PIXI.Graphics();
		ellipse3.beginFill(0xFFFFFF);
		ellipse3.drawEllipse(0, 0, 100, 30);
		ellipse3.endFill();
		ellipse3.position.set(0,0);
		var t12 = textFactory(assets["word"].data[19], {
			x: -60,
			y: -8
		},false,"#000000",18);
		box8.addChild(ellipse3,t12);
		box8.position.set(140,2130);
		sence.addChild(box8);
		
		var lineMax3_0 = new TweenMax.from(t1, .03, {
			alpha: 0,
			y: "+=20"
		});
		
		var lineMax3_1 = new TweenMax.from(t2, .03, {
			alpha: 0,
			y: "+=20"
		});
		
		var lineMax3_2 = new TweenMax.from(t3, .03, {
			alpha: 0,
			y: "+=20"
		});
		
		var lineMax3_3 = new TweenMax.from(t4, .03, {
			alpha: 0,
			y: "+=20"
		});
		var lineMax3_4 = new TweenMax.from(t5, .03, {
			alpha: 0,
			y: "+=20"
		});
		var lineMax3_5 = new TweenMax.from(box0, .05, {
			alpha: 0,
			y: "-=100",
			x:"+=30"
		});
		var lineMax3_6 = new TweenMax.from(box1, .06, {
			alpha: 0,
			x: "-=30",
			y:"-=100"
		});
		var lineMax3_7 = new TweenMax.from(t6, .03, {
			alpha: 0,
			x: "+=30"
		});
		var lineMax3_8 = new TweenMax.from(t7, .03, {
			alpha: 0,
			x: "+=30",
		});
		var lineMax3_9 = new TweenMax.from(box2, .03, {
			alpha: 0,
			x: "-=30",
			y:"+=100"
		});
		var lineMax3_10 = new TweenMax.from(box3, .03, {
			alpha: 0,
			x: "+=30",
			y:"+=100"
		});
		var lineMax3_11 = new TweenMax.from(box4, .03, {
			alpha: 0,
			x: "-=30",
			y:"-=100"
		});
		var lineMax3_12 = new TweenMax.from(t8, .03, {
			alpha: 0,
			x: "-=30",
		});
		var lineMax3_13 = new TweenMax.from(t9, .03, {
			alpha: 0,
			x: "-=30",
		});
		var lineMax3_14 = new TweenMax.from(box5, .03, {
			alpha: 0,
			y: "-=30",
		});
		var lineMax3_15 = new TweenMax.from(box6, .03, {
			alpha: 0,
			width:0,
			height:0
		});
		var lineMax3_16 = new TweenMax.from(box7, .03, {
			alpha: 0,
			width:0,
			height:0
		});
		var lineMax3_17 = new TweenMax.from(box8, .03, {
			alpha: 0,
			width:0,
			height:0
		});
		var timeLine3 = new TimelineMax({
			delay: -0.05
		});

		timeLine3
			.add(lineMax3_0, 0)
			.add(lineMax3_1, .01)
			.add(lineMax3_2, .04)
			.add(lineMax3_3, .07)
			.add(lineMax3_4, .08)
			.add(lineMax3_5, .09)
			.add(lineMax3_6, .16)
			.add(lineMax3_7, .17)
			.add(lineMax3_8, .18)
			.add(lineMax3_9, .22)
			.add(lineMax3_10, .25)
			.add(lineMax3_11, .29)
			.add(lineMax3_12, .33)
			.add(lineMax3_13, .34)
			.add(lineMax3_14, .36)
			.add(lineMax3_15, .4)
			.add(lineMax3_16, .42)
			.add(lineMax3_17, .44)
		allTimeLine.add(timeLine3);

		return sence;
	}

	function textFactory(str, position, bool, color,size) {
		var c = color || "white";
		var z = size || 15;
		var box = new PIXI.Container();
		var text = new PIXI.Text(str, {
			fontSize: z,
			fill: c
		});
		if(bool) {
			var rectangle = new PIXI.Graphics();
			rectangle.beginFill(0x121212);
			rectangle.drawRect(-10, -5, text.width + 20, text.height + 10);
			rectangle.endFill();
			box.addChild(rectangle);
		}
		box.addChild(text);
		if(position) {
			if(position.x === "center") position.x = (win.width - box.width) >> 1;
			box.position.set(position.x, position.y);
		}
		return box;
	}

	function spriteFactory(name, width, position, stage, assets) {
		var sprite, v;

		if(stage) {
			sprite = new PIXI.Sprite(assets[stage].textures[name]);
		} else {
			sprite = new PIXI.Sprite(assets[name].texture);
		}

		if(width) {
			v = sprite.height / sprite.width;
			sprite.width = width;
			sprite.height = width * v;
		}
		if(position) {
			if(position.x === "center") position.x = (win.width - sprite.width) >> 1;
			sprite.position.set(position.x, position.y);
		}
		return sprite;
	}

	function animatedSpriteFactory(arr, width, position, speed, stage, assets) {
		var imgSprArr = [];
		// var base = PIXI.utils.TextureCache[name];
		//for(var i = 0;i<num;i++){    
		// (function(i){
		//     var te = new PIXI.Texture(base)
		//     te.frame= new PIXI.Rectangle(144*i,0,144,232);
		//     imgSprArr.push(te);
		// })(i);
		//}
		arr.forEach(function(name) {
			if(stage) {
				imgSprArr.push(assets[stage].textures[name])
			} else {
				imgSprArr.push(assets[name].texture)
			}
		})

		var animatedSprite = new PIXI.extras.AnimatedSprite(imgSprArr);

		if(width) {
			v = animatedSprite.height / animatedSprite.width;
			animatedSprite.width = width;
			animatedSprite.height = width * v;
		}
		if(position) {
			if(position.x === "center") position.x = (win.width - animatedSprite.width) >> 1;
			animatedSprite.position.set(position.x, position.y);
		}
		animatedSprite.animationSpeed = speed;
		return animatedSprite;
	}

	var moveMin = -5000;

	var phyTouch = new PhyTouch({
		touch: "#root",
		vertical: true,
		maxSpeed: .1,
		target: {
			y: 0
		},
		property: "y",
		min: moveMin,
		max: 0,
		sensitivity: 1,
		factor: 1,
		spet: 45,
		moveFactor: 1,
		bindSelf: false,
		change: function(value) {
			content.y = value;
			var v = value / moveMin;
			allTimeLine.seek(v);
		},
		touchEnd: function() {
			playBgm();
		}
	});

	function playTalkAudio(name) {
		talk_audio.src = "./assets/audio/" + name + ".mp3";
		if(talk_audio.paused) {
			talk_audio.play();
		}

	}

})