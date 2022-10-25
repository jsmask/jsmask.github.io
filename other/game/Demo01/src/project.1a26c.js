require=function e(t,n,o){function c(s,r){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!r&&a)return a(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return c(n||e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)c(o[s]);return c}({ani_start:[function(e,t,n){"use strict";cc._RF.push(t,"119a5zMkKFLfqdy36jcnwjT","ani_start"),cc.Class({extends:cc.Component,properties:{ani:{default:null,type:cc.Animation},type:"default"},onLoad:function(){this.bgm=this.node.parent.getChildByName("bgm").getComponent(cc.AudioSource),this.time=this.node.parent.getChildByName("m00").getChildByName("time").getComponent(cc.Label),this.time.string=15,cc.loader.loadRes("data.json",function(e,t){e?console.log(e):console.log(t)})},start:function(){var e=this,t=function(){e.time.string--};this.node.on(cc.Node.EventType.TOUCH_END,function(n){switch(e.type){case"default":e.time.string=15,e.ani.play(),e.bgm.play(),e.time.schedule(t,1,e.time.string-1);break;case"stop":e.ani.stop(),e.bgm.stop(),e.time.unscheduleAllCallbacks();break;case"pause":e.time.unscheduleAllCallbacks(),e.ani.pause(),e.bgm.pause();break;case"resume":e.time.unscheduleAllCallbacks(),e.time.schedule(t,1,e.time.string-1),e.ani.resume(),e.bgm.resume()}},this)}}),cc._RF.pop()},{}],money_down_end:[function(e,t,n){"use strict";cc._RF.push(t,"5c1b10YOw9F8ZzKkpIV8Qll","money_down_end"),cc.Class({extends:cc.Component,properties:{score:{default:null,type:cc.Label},loadimg:{default:null,type:cc.Sprite},sbtn:{default:null,type:cc.Button}},onLoad:function(){this.score.string=window.myscore||0},start:function(){this.sbtn.node.on(cc.Node.EventType.TOUCH_START,function(){cc.director.loadScene("game_card",function(){window.myscore=0})},this)}}),cc._RF.pop()},{}],money_down:[function(e,t,n){"use strict";cc._RF.push(t,"37cb15D+rxAbYAr1rDiT35e","money_down"),cc.Class({extends:cc.Component,properties:{money:{default:null,type:cc.Prefab},time:{default:null,type:cc.Label},score:{default:null,type:cc.Label},setTime:10,speed:.45},onLoad:function(){var e=this;this.score.string=0,this.time.string=this.setTime,cc.director.preloadScene("game_card_end"),this.node.on("setscore",function(t){e.score.string+=Math.floor(t.detail.plus)}),this.schedule(function(){e.createMoney()},this.speed),this.schedule(function(){e.time.string-=1,0==e.time.string&&(e.unscheduleAllCallbacks(),window.myscore=e.score.string,cc.director.loadScene("game_card_end"))},1)},start:function(){},createMoney:function(){var e=cc.instantiate(this.money);this.node.addChild(e),e.setPosition(this.createPos());var t=cc.moveTo(5*cc.random0To1()+1.5,cc.p(e.getPositionX(),-this.node.height/2-50)),n=cc.callFunc(e.removeFromParent,e),o=cc.sequence(t,n);e.runAction(o)},createPos:function(){var e=400*cc.random0To1()-200,t=this.node.height/2+100;return cc.p(e,t)}}),cc._RF.pop()},{}],money_touch:[function(e,t,n){"use strict";cc._RF.push(t,"103e9YlsotAh7vs5JaMF0zO","money_touch"),cc.Class({extends:cc.Component,properties:{},start:function(){var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(){e.node.destroy(),e.node.parent.emit("setscore",{plus:1})},this)}}),cc._RF.pop()},{}],touch_event:[function(e,t,n){"use strict";cc._RF.push(t,"27ad1IMKzJI/54ObQveEqbX","touch_event"),cc.Class({extends:cc.Component,properties:{sname:"",none:{default:null,type:cc.Node},sc:{default:null,type:cc.Node},label:{default:null,type:cc.Label}},onLoad:function(){this.bp_x=this.node.x,this.bp_y=this.node.y,this.none.opacity=0;var e=this.node.parent.getChildByName("loadimg").getComponent(cc.Sprite);cc.loader.load("http://s.aigei.com/src/img/png/89/89e276bbfb5b46e9ba21b8f550e6e795.png?imageMogr2/auto-orient/thumbnail/!220x159r/gravity/Center/crop/220x159/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Tom_mSd7moZxd7dnvU7TX6rIYDA=",function(t,n){t?console.log(t):(console.log(n),e.spriteFrame.setTexture(n),e.node.setContentSize(n.getContentSize()))})},start:function(){var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(t){e.label.string="选择了"+e.sname,e.none.getComponent(cc.Sprite).spriteFrame=e.node.getComponent(cc.Sprite).spriteFrame,e.none.x=e.node.x,e.none.y=e.node.y,e.node.opacity=100},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){e.label.string="正在播种"+e.sname,e.none.opacity=255,e.none.x+=t.getDelta().x,e.none.y+=t.getDelta().y},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){e.label.string="播种结束",e.downFunc()},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(t){e.label.string="播种结束",e.downFunc()},this)},downFunc:function(){var e=this.sc.getBoundingBoxToWorld(),t=this.none.getBoundingBoxToWorld();e.intersects(t)?this.label.string="播种"+this.sname.substr(0,this.sname.length-2)+"成功":this.label.string="播种"+this.sname.substr(0,this.sname.length-2)+"失败",this.none.x=this.node.x,this.none.y=this.node.y,this.none.opacity=0,this.node.opacity=255},update:function(e){}}),cc._RF.pop()},{}]},{},["ani_start","money_down","money_down_end","money_touch","touch_event"]);