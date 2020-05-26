!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=document.getElementById("board");i.width=t,i.height=n},o=function(e){return Math.round(Math.random()*e)},r=n.p+"images/apple-icon-4017545_1280.png";function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=new Image,this.size_of_snake=t,this.board=n,this.image.src=r,this.x=o(Math.round(this.board.width/this.size_of_snake)-1),this.y=o(Math.round(this.board.height/this.size_of_snake)-1)}var t,n,i;return t=e,(n=[{key:"drawFood",value:function(){var e=this,t=document.getElementById("board").getContext("2d");this.image.onload=function(){t.drawImage(e.image,e.x*e.size_of_snake,e.y*e.size_of_snake,e.size_of_snake,e.size_of_snake)}}}])&&a(t.prototype,n),i&&a(t,i),e}(),h=function(e,t,n,i){var o=e.x,r=e.y,a=Math.round(n.width/i)-1;o<0&&(o=a),o>a&&(o=-1);var s=Math.round(n.height/i)-1;return r<0&&(r=s),r>s&&(r=-1),"ArrowLeft"==t?{x:o-1,y:r}:"ArrowRight"==t?{x:o+1,y:r}:"ArrowUp"==t?{x:o,y:r-1}:"ArrowDown"==t?{x:o,y:r+1}:void 0},f=function(e,t){for(var n=0;n<e.length;n++){var i=e[n];if(i.x==t.x&&i.y==t.y)return!0}return!1};function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t,n,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.getElementById("board"),this.ctx=this.canvas.getContext("2d"),this.cells=[],this.size_of_snake=n,this.food=new s(n,o),this.food.drawFood(),this.color=i,this.board=o,this.popX=0,this.popY=0,this.state="ArrowRight",this.eaten=!1;for(var r=1;r<=t;r++)this.cells.unshift({x:r,y:0}),this.ctx.fillRect(r*n,0,n-2,n-2)}var t,n,i;return t=e,(n=[{key:"updateSanke",value:function(e){if(function(e,t,n,i){for(var o=e[0],r=h(o,t,n,i),a=r.x,s=r.y,f=(Math.round(n.width/i),Math.round(n.height/i),0);f<e.length;f++){var u=e[f];if(u.x==a&&u.y==s)return!1}return!0}(this.cells,this.state,this.board,this.size_of_snake)){var t;if(function(e,t,n,i,o){var r=e[0],a=h(r,t,i,o),s=a.x,f=a.y;return s==n.x&&f==n.y}(this.cells,this.state,this.food,this.board,this.size_of_snake)){var n=document.getElementById("score");for(n.innerText=parseInt(n.innerText)+1;this.food=new s(this.size_of_snake,this.board),f(this.cells,this.food););this.eaten=!this.eaten,t=this.cells[this.cells.length-1]}else t=this.cells.pop();this.popX=t.x*this.size_of_snake,this.popY=t.y*this.size_of_snake,this.cells.unshift(h(this.cells[0],this.state,this.board,this.size_of_snake))}else e()}},{key:"drawSnake",value:function(){var e=this;this.ctx.fillStyle=this.color,this.eaten?this.eaten=!this.eaten:this.ctx.clearRect(this.popX,this.popY,this.size_of_snake,this.size_of_snake),this.cells.forEach((function(t){e.ctx.fillRect(t.x*e.size_of_snake,t.y*e.size_of_snake,e.size_of_snake-2,e.size_of_snake-2)})),this.food.drawFood()}}])&&u(t.prototype,n),i&&u(t,i),e}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t,n){var o,r,a,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=function(){clearInterval(s.timer),s.isPlaying=!1,alert("Game is Over")},(r="end")in(o=this)?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a,this.board=new i(t.width,t.height),this.snake=new c(n.init_block_in_snake,n.size_of_block,n.color_of_snake,t),this.timer="",this.speed=n.speed,this.isPlaying=!0,document.addEventListener("keydown",(function(e){s.snake.state=e.key}))}var t,n,o;return t=e,(n=[{key:"draw",value:function(){this.snake.drawSnake()}},{key:"update",value:function(){this.snake.updateSanke(this.end)}},{key:"start",value:function(){var e=this;this.timer=setInterval((function(){e.update(),e.draw()}),this.speed)}}])&&l(t.prototype,n),o&&l(t,o),e}(),_=(n(0),{width:1e3,height:500}),y={init_block_in_snake:4,size_of_block:50,color_of_snake:"blue",speed:100},p=new d(_,y);p.start(),document.querySelector("#reset").addEventListener("click",(function(){p.isPlaying&&p.end(),(p=new d(_,y)).start()}))}]);