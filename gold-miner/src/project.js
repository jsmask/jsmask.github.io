window.__require=function t(e,o,n){function i(r,a){if(!o[r]){if(!e[r]){var c=r.split("/");if(c=c[c.length-1],!e[c]){var d="function"==typeof __require&&__require;if(!a&&d)return d(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+r+"'")}}var h=o[r]={exports:{}};e[r][0].call(h.exports,function(t){return i(e[r][1][t]||t)},h,h.exports,t,e,o,n)}return o[r].exports}for(var s="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({bomb:[function(t,e,o){"use strict";cc._RF.push(e,"9a3587E9H5KGJuQDO1GpCKJ","bomb"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./config"),i=t("./gold"),s=cc._decorator,r=s.ccclass,a=(s.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.is_open=!1,e}var o;return __extends(e,t),o=e,e.prototype.onLoad=function(){this.anim=this.node.getComponent(cc.Animation)},e.prototype.start=function(){},e.prototype.onCollisionEnter=function(t){if(t.node.group!==n.GROUP.HAND||this.is_open||this.play(),this.is_open){if(t.node.group===n.GROUP.BOMB)t.node.getComponent(o).play();if(t.node.group===n.GROUP.GOLD||t.node.group===n.GROUP.MOUSE)t.node.getComponent(i.default).hide()}},e.prototype.play=function(){var t=this;this.is_open=!0,this.node.getComponent(cc.CircleCollider).radius=120,this.anim.play(),this.anim.on(cc.Animation.EventType.FINISHED,function(){t.node.destroy()})},e=o=__decorate([r],e)}(cc.Component));o.default=a,cc._RF.pop()},{"./config":"config","./gold":"gold"}],config:[function(t,e,o){"use strict";cc._RF.push(e,"65dcbrJVttN/InU1Jg0JZuK","config"),Object.defineProperty(o,"__esModule",{value:!0}),o.GROUP={DEFAULT:"default",WALL:"wall",HAND:"hand",GOLD:"gold",MOUSE:"mouse",BOMB:"bomb"},o.ROPETYPE={Normal:0,Throw:1,Back:2,Target:3,Stop:4},o.GAME={score:0,time:0,level:1,target:0,status:0},cc._RF.pop()},{}],enable_collider:[function(t,e,o){"use strict";cc._RF.push(e,"53c7dRlFsNOyLu/lwubLsoN","enable_collider"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.is_enbale=!0,e.is_debug=!0,e}return __extends(e,t),e.prototype.onLoad=function(){if(this.is_enbale){var t=cc.director.getCollisionManager();t.enabled=!0,this.is_debug&&(t.enabledDebugDraw=!0)}},e.prototype.start=function(){},__decorate([s(Boolean)],e.prototype,"is_enbale",void 0),__decorate([s(Boolean)],e.prototype,"is_debug",void 0),e=__decorate([i],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],end:[function(t,e,o){"use strict";cc._RF.push(e,"a335c8wHXZLiJ+CqpTgAObc","end"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./config"),i=cc._decorator,s=i.ccclass,r=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title=null,e.gold=null,e.target=null,e.btn=null,e.main=null,e.key=0,e}return __extends(e,t),e.prototype.start=function(){var t=this;this.gold.string=""+n.GAME.score,this.target.string=""+n.GAME.target,this.btn.on(cc.Node.EventType.TOUCH_END,function(){t.changScore(),t.main&&t.main.restart(),t.node.destroy()},this)},e.prototype.setTitle=function(t){var e=this.btn.getChildByName("Background").getChildByName("Label").getComponent(cc.Label);switch(this.key=t,this.key){case 0:this.title.string="GAME OVER",e.string="Restart";break;case 1:this.title.string="YOU WIN",e.string="Next Level"}},e.prototype.changScore=function(){switch(this.key){case 0:n.GAME.level=1,n.GAME.score=n.GAME.score;break;case 1:n.GAME.level+=1,n.GAME.level=Math.min(Object.keys(this.main.data).length,n.GAME.level),n.GAME.score-=n.GAME.target}},__decorate([r(cc.Label)],e.prototype,"title",void 0),__decorate([r(cc.Label)],e.prototype,"gold",void 0),__decorate([r(cc.Label)],e.prototype,"target",void 0),__decorate([r(cc.Node)],e.prototype,"btn",void 0),e=__decorate([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./config":"config"}],gold:[function(t,e,o){"use strict";cc._RF.push(e,"48df52vT8FN/rEQurC4ZkKf","gold"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./config"),i=cc._decorator,s=i.ccclass,r=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.score=100,e.weight=.1,e.mouse=null,e.is_open=!0,e}return __extends(e,t),e.prototype.onLoad=function(){if(this.node.group===n.GROUP.GOLD){this.node.rotation=360*Math.random();var t=this.node.getComponent(cc.Animation);this.scheduleOnce(function(){t&&t.play()},10*Math.random())}},e.prototype.start=function(){},e.prototype.changeChild=function(t){this.node.setParent(t.node),this.node.x=0,this.node.y=-this.node.height/2,this.is_open=!1,t.score+=this.score,t.weight+=this.weight},e.prototype.show=function(){this.node.opacity=0,this.node.runAction(cc.fadeIn(.25))},e.prototype.hide=function(){var t=this;this.node.runAction(cc.sequence(cc.fadeOut(.2),cc.callFunc(function(){t.node.destroy()})))},__decorate([r(Number)],e.prototype,"score",void 0),__decorate([r(Number)],e.prototype,"weight",void 0),e=__decorate([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./config":"config"}],hand:[function(t,e,o){"use strict";cc._RF.push(e,"7a02dyKoaxDdpQGOSNfc+6p","hand"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./config"),i=t("./gold"),s=cc._decorator,r=s.ccclass,a=(s.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.rope=null,e}return __extends(e,t),e.prototype.start=function(){},e.prototype.onCollisionEnter=function(t){if(t.node.group!==n.GROUP.BOMB&&t.node.group!==n.GROUP.WALL){if(t.node.group===n.GROUP.GOLD||t.node.group===n.GROUP.MOUSE){var e=t.node;if(!e.getComponent(i.default).is_open)return!1;if(e.setPosition(cc.v2(0,-this.rope.hand.node.height/2)),e.setParent(this.rope.hand.node),this.rope.change_statue_target(),this.rope.status!==n.ROPETYPE.Target)return;this.rope.setGold(t)}}else this.rope.change_statue_back()},e=__decorate([r],e)}(cc.Component));o.default=a,cc._RF.pop()},{"./config":"config","./gold":"gold"}],load:[function(t,e,o){"use strict";cc._RF.push(e,"0925c7cecxHNaZyW4HKZ7nF","load"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bar=null,e}return __extends(e,t),e.prototype.start=function(){},e.prototype.setBar=function(t){void 0===t&&(t=0),this.bar.progress=Math.min(t,1),t>=1&&this.node.destroy()},__decorate([s(cc.ProgressBar)],e.prototype,"bar",void 0),e=__decorate([i],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],main:[function(t,e,o){"use strict";cc._RF.push(e,"8abdcWVTmRDXoaT5TtNmLLV","main"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./rope"),i=t("./config"),s=t("./gold"),r=t("./load"),a=t("./end"),c=cc._decorator,d=c.ccclass,h=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadPreb=null,e.endPreb=null,e.rope=null,e.load_view=null,e.end_view=null,e.time=null,e.score=null,e.level=null,e.target=null,e.stage=null,e.cycle=0,e.is_end=!1,e.is_start=!1,e.data=null,e}return __extends(e,t),e.prototype.onLoad=function(){var t=this.node.getChildByName("ui");this.time=t.getChildByName("time").getComponent(cc.Label),this.score=t.getChildByName("score").getComponent(cc.Label),this.target=t.getChildByName("target").getComponent(cc.Label),this.level=t.getChildByName("level").getComponent(cc.Label),this.stage=this.node.getChildByName("stage"),this.beginGame()},e.prototype.start=function(){},e.prototype.createLoad=function(){this.loadPreb&&(this.load_view=cc.instantiate(this.loadPreb),this.load_view.setParent(this.node))},e.prototype.createEnd=function(t){if(void 0===t&&(t=0),this.endPreb){this.end_view=cc.instantiate(this.endPreb),this.end_view.setParent(this.node);var e=this.end_view.getComponent(a.default);e.main=this,e.setTitle(t)}},e.prototype.beginGame=function(){var t=this;this.createLoad(),this.getData().then(function(e){t.data=e;var o=t.data["level"+i.GAME.level];return t.loadData(o)}).then(function(e){t.is_end=!1,t.is_start=!0,t.node.on(cc.Node.EventType.TOUCH_END,function(e){return t.rope.change_statue_throw()},t)})},e.prototype.getData=function(){return new Promise(function(t,e){cc.loader.loadRes("/data",function(o,n){o&&e(o),t(n.json)})})},e.prototype.loadData=function(t){var e=this,o=t.target,n=t.time,s=t.gold;i.GAME.target=o,i.GAME.time=n;var a=s.length,c=0,d=this.load_view.getComponent(r.default);return this.label_update(),new Promise(function(t,o){s.map(function(n){cc.loader.loadRes("/preb/"+n.name,function(i,s){i&&o(i),e.createGold(s,n),c++,d.setBar(c/a),c>=a&&t()})})})},e.prototype.getTestData=function(){var t={target:0,time:60,gold:[]};this.stage.children.map(function(e){t.gold.push({name:e.name,x:e.x,y:e.y,child:[]})}),cc.log(JSON.stringify(t))},e.prototype.createGold=function(t,e){var o=cc.instantiate(t).getComponent(s.default);o.node.x=e.x,o.node.y=e.y,o.node.setParent(this.stage),o.show(),e.child&&e.child.length>0&&cc.loader.loadRes("/preb/"+e.child[0],function(t,e){t||cc.instantiate(e).getComponent(s.default).changeChild(o)})},e.prototype.label_update=function(){this.time.string=""+i.GAME.time,this.score.string=""+i.GAME.score,this.level.string=""+i.GAME.level,this.target.string=""+i.GAME.target},e.prototype.update=function(t){this.is_start&&(this.is_end||(this.cycle+=t,this.cycle>=1&&(this.cycle-=1,i.GAME.time-=1,this.label_update()),i.GAME.time<=0&&(this.is_end=!0,this.rope.stop(),i.GAME.score>=i.GAME.target?this.createEnd(1):this.createEnd(0),this.stage.children.map(function(t){return t.getComponent(s.default).hide()}))))},e.prototype.restart=function(){var t=this;this.createLoad();var e=this.data["level"+i.GAME.level];this.stage.children.map(function(t){return t.destroy()}),this.loadData(e).then(function(e){t.is_end=!1,t.is_start=!0})},__decorate([h(cc.Prefab)],e.prototype,"loadPreb",void 0),__decorate([h(cc.Prefab)],e.prototype,"endPreb",void 0),__decorate([h(n.default)],e.prototype,"rope",void 0),e=__decorate([d],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./config":"config","./end":"end","./gold":"gold","./load":"load","./rope":"rope"}],mouse:[function(t,e,o){"use strict";cc._RF.push(e,"adb43jW9j9H6ZLBYD6li65s","mouse"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./config"),i=cc._decorator,s=i.ccclass,r=i.property,a={RIGHT:1,LEFT:-1},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.speed=80,e.is_move=!1,e.direction=a.LEFT,e.anim=null,e}return __extends(e,t),e.prototype.onLoad=function(){this.is_move=!0,this.anim=this.node.getComponent(cc.Animation),this.is_move&&this.anim.play()},e.prototype.start=function(){},e.prototype.onCollisionEnter=function(t){if(t.node.group!==n.GROUP.HAND){if(t.node.parent===this.node)return;this.speed*=-1,this.node.scaleX*=-1}else this.is_move=!1},e.prototype.update=function(t){this.is_move?this.node.x+=t*this.speed*this.direction:this.anim.stop()},__decorate([r(Number)],e.prototype,"speed",void 0),e=__decorate([s],e)}(cc.Component);o.default=c,cc._RF.pop()},{"./config":"config"}],rope:[function(t,e,o){"use strict";cc._RF.push(e,"40675b7ff1J3rfrajGt9TGu","rope"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./hand"),i=t("./gold"),s=t("./config"),r=cc._decorator,a=r.ccclass,c=r.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hand=null,e.speed=100,e.now_degree=0,e.status=s.ROPETYPE.Normal,e.gold=null,e.friction=0,e}return __extends(e,t),e.prototype.onLoad=function(){this.status=s.ROPETYPE.Normal,this.node.height=100,this.hand.rope=this},e.prototype.start=function(){},e.prototype.update=function(t){this.status===s.ROPETYPE.Normal&&this.normal_update(t),this.status===s.ROPETYPE.Throw&&this.throw_update(t),this.status===s.ROPETYPE.Back&&this.black_update(t),this.status===s.ROPETYPE.Target&&this.target_update(t),this.status===s.ROPETYPE.Stop&&this.stop_update(t)},e.prototype.stop=function(){this.hand.node.childrenCount>0&&this.hand.node.children[0].destroy(),this.gold=null,this.friction=0,this.change_statue_stop()},e.prototype.normal_update=function(t){this.now_degree+=this.speed*t,this.node.rotation=this.now_degree,this.now_degree<-75&&this.speed<0&&(this.speed*=-1),this.now_degree>75&&this.speed>0&&(this.speed*=-1)},e.prototype.throw_update=function(t){this.node.height+=Math.abs(2*this.speed*t),this.hand.node.y=-(this.node.height+this.hand.node.height/2)},e.prototype.black_update=function(t){this.node.height-=Math.abs(5*this.speed*t),this.hand.node.y=-(this.node.height+this.hand.node.height/2),this.node.height<=100&&(this.node.height=100,this.hand.node.y=-(this.node.height+this.hand.node.height/2),this.status=s.ROPETYPE.Normal)},e.prototype.target_update=function(t){this.node.height-=Math.abs(this.speed*(3-this.friction)*t),this.hand.node.y=-(this.node.height+this.hand.node.height/2),this.node.height<=0&&(this.node.height=0,this.hand.node.y=-(this.node.height+this.hand.node.height/2),this.status=s.ROPETYPE.Stop,s.GAME.score+=this.gold.score,this.gold.node.destroy(),this.gold=null,this.friction=0)},e.prototype.stop_update=function(t){this.node.height+=Math.abs(3*this.speed*t),this.hand.node.y=-(this.node.height+this.hand.node.height/2),this.node.height>=100&&(this.node.height=100,this.hand.node.y=-(this.node.height+this.hand.node.height/2),this.status=s.ROPETYPE.Normal)},e.prototype.setGold=function(t){this.gold=t.node.getComponent(i.default),this.friction=Math.min(2.9,this.gold.weight)},e.prototype.change_statue_throw=function(){s.GAME.time<=0||this.status===s.ROPETYPE.Normal&&(this.status=s.ROPETYPE.Throw)},e.prototype.change_statue_back=function(){this.status=s.ROPETYPE.Back},e.prototype.change_statue_target=function(){this.status=s.ROPETYPE.Target},e.prototype.change_statue_stop=function(){this.status=s.ROPETYPE.Stop},__decorate([c(n.default)],e.prototype,"hand",void 0),__decorate([c(Number)],e.prototype,"speed",void 0),e=__decorate([a],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./config":"config","./gold":"gold","./hand":"hand"}]},{},["bomb","config","enable_collider","end","gold","hand","load","main","mouse","rope"]);