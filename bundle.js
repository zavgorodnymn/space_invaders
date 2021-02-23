!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=e,s.c=t,s.p="",s(0)}([function(e,t,s){const i=s(1);document.addEventListener("DOMContentLoaded",()=>{const e=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(e=>navigator.userAgent.match(e));e&&window.self!==window.top&&window.top.location.replace("https://zavgorodnymn.github.io/space_invaders_test/");const t=document.getElementById("game-canvas");t.height=600,t.width=900;const s=[t.width,t.height],n=t.getContext("2d"),o=new i(n,s);o.welcome();const a=document.getElementById("main-logo"),h=document.getElementById("play-game"),d=document.getElementById("game-over"),r=document.getElementById("name-input"),l=document.getElementById("final-score"),c=document.getElementById("success"),m=document.getElementById("create-qr"),u=document.getElementById("menu-button"),p=document.getElementById("menu-container"),f=document.getElementById("about-button"),g=document.getElementById("about"),v=document.getElementById("instructions-button"),y=document.getElementById("instructions"),w=document.getElementById("resume-button"),I=document.getElementById("restart-button"),E=document.getElementById("close-about"),S=document.getElementById("close-instructions"),N=document.getElementById("grunt-1"),B=document.getElementById("soldier-1"),M=document.getElementById("invader-1"),b=document.getElementById("ufo"),x=document.getElementById("invader-info"),P=document.getElementById("audio"),D=document.getElementById("mute"),L=document.getElementById("splash-instruction"),_=document.getElementById("arrow-left"),U=document.getElementById("arrow-right"),T=document.getElementById("arrow-fire");P.addEventListener("click",()=>{"hide"===P.className?(P.className="show",D.className="hide"):(P.className="hide",D.className="show"),o.toggleAudio()}),D.addEventListener("click",()=>{"hide"===P.className?(P.className="show",D.className="hide"):(P.className="hide",D.className="show"),o.toggleAudio()}),h.addEventListener("click",()=>{"BACK TO MENU"===h.getElementsByTagName("p")[0].firstChild.data&&document.location.reload(),u.className="",h.className="hide",a.className="hide",r.className="hide",d.className="hide",c.className="hide",m.className="hide",l.className="hide",N.className="hide",B.className="hide",M.className="hide",b.className="hide",x.className="hide",L.className="hide",e&&(T.className="",_.className="",U.className=""),o.start()}),u.addEventListener("click",()=>{o.pause(),p.className="show",f.className="",v.className="",w.className="",I.className=""}),m.addEventListener("click",()=>{r.value?(r.className="hide",m.className="hide",o.createQR()):r.className="error"}),E.addEventListener("click",()=>{o.pause(),g.className="hide",y.className="hide",E.className="hide",p.className="",f.className="",v.className="",w.className="",I.className=""}),f.addEventListener("click",()=>{o.pause(),p.className="hide",f.className="hide",v.className="hide",w.className="hide",I.className="hide",g.className="show",E.className="show"}),S.addEventListener("click",()=>{o.pause(),g.className="hide",y.className="hide",E.className="hide",p.className="show",f.className="",v.className="",w.className="",I.className=""}),v.addEventListener("click",()=>{o.pause(),p.className="hide",f.className="hide",v.className="hide",w.className="hide",I.className="hide",y.className="",S.className=""}),w.addEventListener("click",()=>{p.className="hide",f.className="hide",v.className="hide",w.className="hide",I.className="hide",o.resume()}),I.addEventListener("click",()=>{p.className="hide",f.className="hide",v.className="hide",w.className="hide",I.className="hide",o.restart()})})},function(e,t,s){const i=s(2),n=function(e,t){this.ctx=e,this.canvasSize=t,this.game=new i({canvasSize:this.canvasSize,ctx:this.ctx,gameView:this}),this.finalScore=0,this.defender=this.game.defender,this.isPaused=!1,this.rightPressed=!1,this.leftPressed=!1,this.spacePressed=!1,this.isMuted=!1,this.addKeyListeners()};n.prototype.toggleAudio=function(){this.isMuted=!this.isMuted},n.prototype.start=function(){this.interval=setInterval(()=>{this.isPaused||(this.game.draw(this.ctx),this.addLivesText(this.ctx),this.addScoreText(this.ctx),this.addLevelText(this.ctx),this.moveDefender(),this.game.moveInvaders(),this.game.addUfo(),this.game.step())},10),this.toggle=setInterval(()=>{this.isPaused||this.game.toggleInvaders()},500)},n.prototype.stop=function(){clearInterval(this.interval),clearInterval(this.toggle),this.interval=null,this.toggle=null,this.rightPressed=!1,this.leftPressed=!1,this.spacePressed=!1,this.isPaused=!1,this.defender=this.game.defender,this.game=new i({canvasSize:this.canvasSize,gameView:this,ctx:this.ctx})},n.prototype.restart=function(){this.stop(),this.start()},n.prototype.welcome=function(){this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.game.DIM_X,this.game.DIM_Y)},n.prototype.pause=function(){this.isPaused=!0},n.prototype.resume=function(){this.isPaused=!1},n.prototype.gameOver=function(){this.finalScore=this.game.score,this.stop(),document.getElementById("menu-container").className="hide",setTimeout(()=>{this.ctx.clearRect(0,0,this.DIM_X,this.DIM_Y),this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.game.DIM_X,this.game.DIM_Y);let e=document.getElementById("game-over"),t=document.getElementById("final-score"),s=document.getElementById("name-input"),i=document.getElementById("create-qr"),n=document.getElementById("play-game");menuButton=document.getElementById("menu-button"),arrowFire=document.getElementById("arrow-fire"),arrowLeft=document.getElementById("arrow-left"),arrowRight=document.getElementById("arrow-right"),t.firstChild.data=`SCORE: ${this.finalScore}`,n.getElementsByTagName("p")[0].firstChild.data="BACK TO MENU",n.className="",e.className="",s.className="",i.className="",menuButton.className="hide",t.className="",arrowFire.className="hide",arrowLeft.className="hide",arrowRight.className="hide"},600)},n.prototype.createQR=function(){let e=document.getElementById("name-input"),t=document.getElementById("success");const s=(new Date).toLocaleString(),i=`Name: ${e.value}, Score: ${this.finalScore}, Date: ${s}`;new QRCode("qrcode",{text:i,width:130,height:130,id:"testimg"}).makeCode(i),t.firstChild.data="SUCCESS!",t.className="",setTimeout(()=>{Email.send({SecureToken:"2174872e-fe1c-43df-a98b-02430b42e67e",To:["ya.saprykin@gmail.com","Yaroh@yandex.ru","m.zavgar@mail.ru"],From:"makszavgar@gmail.com",Subject:this.finalScore,Body:`Я ${e.value}, и мой результат: ${this.finalScore}!`,Attachments:[{name:"qrresult.png",data:document.getElementById("qrcode").getElementsByTagName("img")[0].src}]}).then()},1e3)},n.KEY_BINDS={left:[-2,0],right:[2,0]},n.prototype.addLivesText=function(e){let t=.87*this.game.DIM_X,s=.05*this.game.DIM_Y;e.font="23px Bungee Inline",e.fillText(`LIVES: ${this.game.defenderLives}`,t,s)},n.prototype.addMenu=function(e){this.game.DIM_X,this.game.DIM_Y},n.prototype.addScoreText=function(e){let t=.01*this.game.DIM_X,s=.05*this.game.DIM_Y;e.fillText(`SCORE: ${this.game.score}`,t,s)},n.prototype.addEndScoreText=function(e,t){let s=.4*this.game.DIM_X,i=.7*this.game.DIM_Y;e.font="50px Bungee Inline",e.fillText(`SCORE: ${t}`,s,i)},n.prototype.addLevelText=function(e){let t=.01*this.game.DIM_X,s=.95*this.game.DIM_Y;e.fillText(`LEVEL: ${this.game.level}`,t,s)},n.prototype.bindKeyHandlers=function(){const e=this.defender;Object.keys(n.KEY_BINDS).forEach(t=>{let s=n.KEY_BINDS[t];key(t,function(){e.power(s)})}),key("space",function(){e.fireBullet()})},n.prototype.addKeyListeners=function(){document.addEventListener("keydown",this.handleKeyDown.bind(this),!1),document.addEventListener("keyup",this.handleKeyUp.bind(this),!1);let e=document.getElementById("arrow-fire"),t=document.getElementById("arrow-left"),s=document.getElementById("arrow-right");e.addEventListener("touchstart",this.handleMouseDown.bind(this,"fire"),!1),e.addEventListener("touchend",this.handleMouseUp.bind(this,"fire"),!1),t.addEventListener("touchstart",this.handleMouseDown.bind(this,"left"),!1),t.addEventListener("touchend",this.handleMouseUp.bind(this,"left"),!1),s.addEventListener("touchstart",this.handleMouseDown.bind(this,"right"),!1),s.addEventListener("touchend",this.handleMouseUp.bind(this,"right"),!1)},n.prototype.handleKeyDown=function(e){37===e.keyCode?this.leftPressed=!0:39===e.keyCode&&(this.rightPressed=!0),32===e.keyCode&&(this.spacePressed=!0)},n.prototype.handleKeyUp=function(e){37===e.keyCode?this.leftPressed=!1:39===e.keyCode&&(this.rightPressed=!1),32===e.keyCode&&(this.spacePressed=!1)},n.prototype.handleMouseDown=function(e,t){t.preventDefault(),"left"===e?this.leftPressed=!0:"right"===e&&(this.rightPressed=!0),"fire"===e&&(this.spacePressed=!0)},n.prototype.handleMouseUp=function(e,t){t.preventDefault(),"left"===e?this.leftPressed=!1:"right"===e&&(this.rightPressed=!1),"fire"===e&&(this.spacePressed=!1)},n.prototype.moveDefender=function(){this.leftPressed?this.defender.power([-3,0]):this.rightPressed&&this.defender.power([3,0]),this.spacePressed&&this.defender.fireBullet()},e.exports=n},function(e,t,s){const i=s(3),n=s(6),o=s(10),a=s(7),h=s(11),d=s(9),r=s(5),l=function(e){this.canvasSize=e.canvasSize,this.ctx=e.ctx,this.stars=[],this.defender=null,this.defenderLives=3,this.score=0,this.level=1,this.invaderShips=[],this.ufo=null,this.bullets=[],this.bulletId=0,this.shields=[],this.shieldPieces=[],this.powerUps=[],this.gameView=e.gameView,this.DIM_X=this.canvasSize[0],this.DIM_Y=this.canvasSize[1],this.addStars(),this.addDefenderShip(),this.addInvaderShips(),this.addShields(),this.gameView.addKeyListeners()};l.BG_COLOR="#000000",l.NUM_STARS=50,l.prototype.randomPosition=function(){return[this.DIM_X*Math.random(),this.DIM_Y*Math.random()]},l.prototype.addStars=function(){for(let e=0;e<l.NUM_STARS;e++)this.stars.push(new h({id:e,color:"#ffffff",pos:this.randomPosition(),vel:r.randomVec(.1),game:this}))},l.prototype.addUfo=function(e){if(this.ufo)return;let t,s,n=700*Math.random();Math.round(10*Math.random())>5?(s=0,t=[2,0]):(s=1,t=[-2,0]);let o=[-30,930];if(n<1){let e=document.getElementById("ufo"),n=new i({name:"ufo",game:this,canvasSize:this.canvasSize,img:e,radius:27,pos:[o[s],45],vel:t,side:"invader"});this.ufo=n}},l.prototype.addInvaderShips=function(e=1){let t,s,n=100,o=0,a=[.27,0];a[0]+=.05*e;for(let e=0;e<5;e++){e<1?(t="invader",s=document.getElementById("invader-1")):e<3?(t="soldier",s=document.getElementById("soldier-1")):e>2&&(t="grunt",s=document.getElementById("grunt-1"));for(let e=1;e<14;e++,o++){let h=new i({id:o,name:t,game:this,canvasSize:this.canvasSize,img:s,radius:12,pos:[35*e,n],vel:a,side:"invader"});this.invaderShips.push(h)}n+=40}},l.prototype.addShields=function(){for(let e=0,t=.05;e<5;e++,t+=.2){let s=this.canvasSize[0]*t+14,i=.8*this.canvasSize[1];new o({id:e,pos:[s,i],radius:7,color:"#a0a09b",game:this}).draw(this.ctx)}},l.prototype.refreshShields=function(){this.shieldPieces=[],this.shields=[],this.addShields()},l.prototype.addDefenderShip=function(){const e=new i({name:"defender",game:this,canvasSize:this.canvasSize,img:document.getElementById("defender"),radius:16,pos:[.52*(this.canvasSize[0]-30),this.canvasSize[1]-70],vel:[0,0],side:"defender"});this.defender=e},l.prototype.getAllObjects=function(){return[].concat(this.ufo,this.shieldPieces,this.bullets,this.stars,this.powerUps)},l.prototype.moveObjects=function(){this.getAllObjects().forEach(e=>{null!=e&&e.move()})},l.prototype.moveInvaders=function(){this.invaderShips.forEach(e=>{e.move()})},l.prototype.toggleInvaders=function(){this.invaderShips.forEach(e=>{e.toggleImage()})},l.prototype.reverseAllInvaders=function(){this.invaderShips.forEach(e=>{e.reverse()})},l.prototype.wrap=function(e){let t=e[0],s=e[1],i=this.DIM_X,n=this.DIM_Y;return[r.wrap(t,i),r.wrap(s,n)]},l.prototype.draw=function(e){e.clearRect(0,0,this.DIM_X,this.DIM_Y),e.fillStyle=l.BG_COLOR,e.fillRect(0,0,this.DIM_X,this.DIM_Y),this.defender.draw(e),this.getAllObjects().forEach(t=>{null!=t&&t.draw(e)})},l.prototype.lose=function(){this.gameView.pause(),this.gameView.addLivesText(this.ctx),this.gameView.gameOver()},l.prototype.winRound=function(){0===this.invaderShips.length&&setTimeout(()=>{0===this.invaderShips.length&&(this.refreshShields(),this.level++,this.defenderLives++,this.addInvaderShips(this.level))},1e3)},l.prototype.isOutOfBounds=function(e){return e[0]<-50||e[1]<0||e[0]>this.DIM_X+50||e[1]>this.DIM_Y},l.prototype.collisionObjects=function(){return[].concat(this.bullets,this.invaderShips,this.defender,this.shieldPieces,this.ufo,this.powerUps)},l.prototype.enemyFire=function(){let e,t=this.invaderShips.length;e=t<10?500:t<25?1500:t<40?3e3:t<50?4e3:5e3,this.invaderShips.forEach(t=>{Math.random()*e<1&&(t.fireBullet(),t.currentBullet=!1)}),null!=this.ufo&&1e3*Math.random()<15&&this.ufo.fireBullet()},l.prototype.increaseInvadersSpeed=function(){this.invaderShips.forEach(e=>{e.increaseSpeed()})},l.prototype.checkCollisions=function(){let e=this.collisionObjects();for(var t=0;t<e.length;t++)for(var s=0;s<e.length;s++){let o=e[t],h=e[s],l={ship:i,bullet:n,shieldPiece:a,powerUp:d,object1:o,object2:h};r.validCollision(l)&&o.isCollidedWith(h)&&o.collideWith(h)}},l.prototype.currentDefenderBullet=function(){return this.bullets.forEach(e=>{if("defender"===e.ship.name)return!0}),!1},l.prototype.remove=function(e){if(e instanceof n)e.removeBullet(e);else if(e instanceof i){if("ufo"===e.name)return void(this.ufo=null);e.removeShip(e)}else e instanceof a?this.shieldPieces.splice(this.shieldPieces.indexOf(e),1):e instanceof d&&this.powerUps.splice(this.powerUps.indexOf(e),1)},l.prototype.step=function(){this.moveObjects(),this.checkCollisions(),this.enemyFire(),this.winRound()},e.exports=l},function(e,t,s){const i=s(4),n=s(5),o=s(6),a=(s(8),s(9)),h=function(e={radius:13}){this.id=e.id,this.name=e.name,this.game=e.game,this.canvasSize=e.canvasSize,this.img=e.img,this.pos=e.pos,this.vel=e.vel,this.radius=e.radius,this.side=e.side,this.currentBullet=!1,this.isDead=!1,this.hasThreeGuns=!1,this.hasFiveGuns=!1,this.speedUp=!1,this.speedUp2=!1,this.bulletsInPlay=[],i.call(this,e)};n.inherits(h,i),h.prototype.removeShip=function(e){this.game.invaderShips.forEach(t=>{t.id===e.id&&(this.game.invaderShips=this.game.invaderShips.filter(t=>t.id!==e.id))})},h.prototype.draw=function(e){if("ufo"===this.name){let t=this.pos[0]-26,s=this.pos[1]-3;return void e.drawImage(this.img,t,s,53,30)}let t=this.pos[0]-12,s=this.pos[1]-12;"defender"===this.name?(t-=4,s-=4,e.drawImage(this.img,t,s,33,33)):e.drawImage(this.img,t,s,25,25)},h.prototype.respawn=function(){this.deathImage(),this.game.defenderLives-=1,this.hasThreeGuns=!1,this.hasFiveGuns=!1,this.speedUp=!1,this.speedUp2=!1,this.game.defenderLives<0&&this.game.lose(),this.game.gameView.pause(),setTimeout(()=>{this.pos=[.52*(this.canvasSize[0]-30),this.canvasSize[1]-70],this.vel=[0,0],this.img=document.getElementById("defender"),this.game.gameView.resume()},600)},h.prototype.death=function(){let e;"defender"===this.name?(this.game.gameView.isMuted||(e="./sounds/defender_death.mp3"),this.respawn()):(this.game.score+=this.killScore(),this.game.increaseInvadersSpeed(),this.currentBullet=!1,this.isDead=!0,this.deathImage(),"ufo"===this.name&&(this.dropPowerUp(this.pos),this.vel=[0,0]),setTimeout(()=>{this.game.remove(this)},200),this.game.gameView.isMuted||(e="ufo"===this.name?"./sounds/ufo_death.wav":"./sounds/grunt_death.wav")),new Howl({src:[e],volume:.5}).play()},h.prototype.deathImage=function(){"defender"===this.name?this.img=document.getElementById("defender-death"):this.img=document.getElementById("ship-death"),this.draw(this.game.ctx)},h.prototype.dropPowerUp=function(e){const t=new a({vel:[0,4],pos:e,radius:5,color:"#ff00ff",game:this.game,ship:this,ctx:this.game.ctx});this.game.powerUps.push(t)},h.prototype.toggleImage=function(){if(!this.isDead)if("grunt"===this.name){let e=document.getElementById("grunt-1"),t=document.getElementById("grunt-2");"grunt-1"===this.img.id?this.img=t:this.img=e}else if("soldier"===this.name){let e=document.getElementById("soldier-1"),t=document.getElementById("soldier-2");"soldier-1"===this.img.id?this.img=t:this.img=e}else if("invader"===this.name){let e=document.getElementById("invader-1"),t=document.getElementById("invader-2");"invader-1"===this.img.id?this.img=t:this.img=e}},h.prototype.killScore=function(){if("grunt"===this.name)return 10;if("soldier"===this.name)return 20;if("invader"===this.name)return 40;if("ufo"===this.name){let e=[50,100,200,300,500],t=4*Math.random();return e[t=Math.round(t)]}},h.prototype.collideWith=function(e){this.side!==e.shipSide&&(this.bulletsInPlay.shift(),0===this.bulletsInPlay.length&&(this.currentBullet=!1),"powerUp"===e.type&&"defender"===this.name&&("life"===e.power?this.game.defenderLives++:"gun"===e.power?this.hasThreeGuns?this.hasFiveGuns=!0:this.hasThreeGuns=!0:"speed"===e.power&&(this.speedUp?this.speedUp2=!0:this.speedUp=!0)))},h.prototype.fireBullet=function(){if(this.currentBullet)return;let e,t,s=this.pos[0]-2,i=this.pos[1]-25;"defender"===this.name?(t=[0,-4],e="#FF00FF"):(t=[0,4],i+=30);let n=[s,i];if("grunt"===this.name?e="#a2d3f5":"soldier"===this.name?e="#fdfd67":"invader"===this.name?e="#ff884e":"ufo"===this.name&&(e="red"),this.hasFiveGuns){[[s,i],[s-8,i+8],[s+8,i+8],[s-14,i+16],[s+14,i+16]].forEach(s=>{let i=new o({id:this.game.bulletId,vel:t,pos:s,color:e,game:this.game,radius:1,shipName:this.name,shipSide:this.side,ship:this});this.game.bullets.push(i),this.bulletsInPlay.push(i),this.game.bulletId++})}else if(this.hasThreeGuns){[[s,i],[s-8,i+8],[s+8,i+8]].forEach(s=>{let i=new o({id:this.game.bulletId,vel:t,pos:s,color:e,game:this.game,radius:1,shipName:this.name,shipSide:this.side,ship:this});this.game.bullets.push(i),this.bulletsInPlay.push(i),this.game.bulletId++})}else{let s=new o({id:this.game.bulletId,vel:t,pos:n,color:e,game:this.game,radius:1,shipName:this.name,shipSide:this.side,ship:this});this.game.bullets.push(s),this.bulletsInPlay.push(s)}if(!this.game.gameView.isMuted){let e="";e="defender"===this.name?"./sounds/defender_gun2.wav":"ufo"===this.name?"./sounds/ufo_gun.wav":"./sounds/defender_gun.wav",new Howl({src:[e],volume:.3}).play()}this.game.bulletId++,this.currentBullet=!0},h.prototype.reverse=function(){let e=Math.abs(this.vel[0])+.02;this.vel[0]>0?(e=0-e,this.vel=[e,0],this.pos[0]-=5):(this.vel=[e,0],this.pos[0]+=5),this.pos[1]+=20},h.prototype.increaseSpeed=function(){let e=Math.abs(this.vel[0])+.001;this.vel[0]<0?(e=0-e,this.vel=[e,0]):this.vel=[e,0]},h.prototype.move=function(){if("ufo"===this.name)return this.game.isOutOfBounds(this.pos)?void this.game.remove(this):void(this.pos[0]+=this.vel[0]);this.pos[1]>this.canvasSize[1]-100&&this.game.lose(),this.pos[0]>this.canvasSize[0]-20?this.game.reverseAllInvaders():this.pos[0]<20?this.game.reverseAllInvaders():(this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]),this.draw(this.game.ctx)},h.prototype.power=function(e){if(this.speedUp){let t=this.speedUp2?8:5;e[0]<0?e[0]=-t:e[0]=t}if(this.pos[0]>this.canvasSize[0]-20){if(e[0]>0)return}else if(this.pos[0]<20&&e[0]<0)return;let t=e[0];this.pos[0]+=t},e.exports=h},function(e,t,s){const i=s(5),n=function(e){this.color=e.color,this.pos=e.pos,this.vel=e.vel,this.img=e.img,this.game=e.game,this.canvasSize=e.canvasSize};n.prototype.draw=function(e){let t=this.pos[0],s=this.pos[1];e.drawImage(this.img,t,s,50,30)},n.prototype.move=function(){this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1],this.game.isOutOfBounds(this.pos)&&(this.ship.bulletsInPlay.shift(),0===this.ship.bulletsInPlay.length&&(this.ship.currentBullet=!1),this.game.remove(this))},n.prototype.collideWith=function(e){},n.prototype.isCollidedWith=function(e){let t=this.radius+e.radius;return i.dist(this.pos,e.pos)<t},e.exports=n},function(e,t){const s={inherits(e,t){function s(){}s.prototype=t.prototype,e.prototype=new s,e.prototype.constructor=e},randomVec(e){let t=2*Math.PI*Math.random();return s.scale([Math.sin(t),Math.cos(t)],e)},scale:(e,t)=>[e[0]*t,e[1]*t],dist:(e,t)=>Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)),wrap:(e,t)=>e<0?t-e%t:e>t?e%t:e,validCollision(e){const t=e.ship,s=e.bullet,i=e.shieldPiece,n=e.powerUp,o=e.object1,a=e.object2;if(o instanceof s&&a instanceof t||o instanceof t&&a instanceof s||o instanceof s&&a instanceof i||o instanceof i&&a instanceof s)return!0;if(o instanceof t&&a instanceof n){if("defender"===o.name)return!0}else if(a instanceof t&&o instanceof n&&"defender"===a.name)return!0}};e.exports=s},function(e,t,s){const i=s(4),n=s(5),o=s(7),a=function(e={}){this.id=e.id,this.vel=e.vel,this.pos=e.pos,this.color=e.color,this.radius=e.radius,this.shipSide=e.shipSide,this.ship=e.ship,i.call(this,e)};n.inherits(a,i),a.prototype.draw=function(e){e.fillStyle=this.color,e.fillRect(this.pos[0],this.pos[1],4,14)},a.prototype.removeBullet=function(e){this.game.bullets.forEach(t=>{t.id===e.id&&(this.game.bullets=this.game.bullets.filter(t=>t.id!==e.id))})},a.prototype.collideWith=function(e){if(this.ship.bulletsInPlay.shift(),0===this.ship.bulletsInPlay.length&&(this.ship.currentBullet=!1),this.shipSide!==e.side){if(e instanceof o)this.game.remove(e);else{e.death()}this.game.remove(this)}},e.exports=a},function(e,t){const s=function(e){this.id=e.id,this.pos=e.pos,this.radius=e.radius,this.color=e.color,this.util=e.util,this.game=e.game};s.prototype.move=function(){},s.prototype.draw=function(e){e.fillStyle=this.color,e.fillRect(this.pos[0],this.pos[1],this.radius,this.radius)},s.prototype.isCollidedWith=function(e){let t=this.radius+e.radius;return this.util.dist(this.pos,e.pos)<t},s.prototype.collideWith=function(e){},e.exports=s},function(e,t){const s=new(window.AudioContext||window.webkitAudioContext),i=function(e){this.oscillatorNode=(e=>{const t=s.createOscillator();return t.type="sine",t.frequency.value=e,t.detune.value=0,t.start(s.currentTime),t})(e),this.gainNode=(()=>{const e=s.createGain();return e.gain.value=0,e.connect(s.destination),e})(),this.oscillatorNode.connect(this.gainNode),this.tones={fireBullet:880,death:1046.5}};i.prototype.start=function(){this.gainNode.gain.value=.3},i.prototype.stop=function(){this.gainNode.gain.value=0},e.exports=i},function(e,t,s){const i=s(4),n=function(e){this.type="powerUp",this.vel=e.vel,this.pos=e.pos,this.radius=e.radius,this.color=e.color,this.game=e.game,this.ship=e.ship,this.ctx=e.ctx,this.power=null,this.spawned=!1,i.call(this,e),this.spawn(this.ctx)};s(5).inherits(n,i),n.prototype.spawn=function(e){if(100*Math.random()<50){100*Math.random()<50?this.spawnGun():this.spawnSpeed(),setTimeout(()=>{this.spawned=!1,this.game.remove(this)},5e3)}},n.prototype.spawnGun=function(){this.spawned=!0,this.color="#FF00FF",this.draw(this.ctx),this.power="gun"},n.prototype.spawnSpeed=function(){this.spawned=!0,this.color="#ADD8E6",this.draw(this.ctx),this.power="speed"},n.prototype.spawnLife=function(){this.spawned=!0,this.color="#66CD00",this.draw(this.ctx),this.power="life"},n.prototype.collideWith=function(e){"powerUp"===this.type&&"defender"===e.name&&("life"===this.power?this.game.defenderLives++:"gun"===this.power?this.ship.hasThreeGuns=!0:"speed"===this.power&&(this.ship.speedUp=!0)),this.game.remove(this)},n.prototype.move=function(){this.pos[1]>=this.game.DIM_Y-70||(this.pos[1]+=this.vel[1])},n.prototype.draw=function(e){this.spawned&&(e.fillStyle=this.color,e.beginPath(),e.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),e.fill())},e.exports=n},function(e,t,s){const i=s(7),n=s(5),o=function(e){this.id=e.id,this.pos=e.pos,this.radius=e.radius,this.color=e.color,this.game=e.game};o.prototype.draw=function(e){e.fillStyle=this.color;let t=this.pos[0],s=this.pos[1];for(let o=1;o<21;o++){let a=new i({id:o,pos:[t,s],radius:this.radius,color:this.color,util:n,game:this.game});a.draw(e),this.game.shieldPieces.push(a),o<10?t+=7:10===o?s-=7:o<20?t-=7:20===o&&(s-=7)}},e.exports=o},function(e,t,s){const i=s(5),n=s(4),o=function(e={}){this.id=e.id,this.color="#ffffff",this.radius=1.5*Math.random(),this.pos=e.pos||e.game.randomPosition(),this.vel=e.vel||i.randomVec(50),this.game=e.game,n.call(this,e)};i.inherits(o,n),o.prototype.move=function(){this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1],this.pos=this.game.wrap(this.pos)},o.prototype.draw=function(e){e.fillStyle=this.color,e.beginPath(),e.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!0),e.fill()},e.exports=o}]);