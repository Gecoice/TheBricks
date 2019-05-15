			var x=212.5;
			var y=150;
			var dx=2;
			var dy=4;
			var x2=212.5;
			var y2=150;
			var dx2=2;
			var dy2=4;
			var r=5;
			var r2=5;
			var Cwidth=425;
			var ctx;
			var ctx2;
			var canvas;
			var canvas2;
			var paddlex;
			var paddleh;
			var paddlew;
			var paddlex2;
			var paddleh2;
			var paddlew2;
			var rightDown = false;
			var leftDown = false;
			var aDown = false;
			var dDown = false;
			var f=5;
			var f2 = 5;
			var BRICKWIDTH;
			var BRICKHEIGHT;
			var PADDING;
			var NROWS;
			var NCOLS;
			var BRICKWIDTH2;
			var BRICKHEIGHT2;
			var PADDING2;
			var NROWS2;
			var NCOLS2;
			var rowheight;
			var colwidth;
			var f=1;
			var row;
			var col;
			var rowheight2;
			var colwidth2;
			var f2=1;
			var row2;
			var col2;
			var reset = false;
			var tocke=0;
			var tocke2=0;
			var frezze=false;
			var frezze2=false;
			var running;
			var running2;
			var paddle1 = new Image();
			var paddle2 = new Image();
			var ball = new Image();
			var colorPicker;
			var pause = true;
			var pause2 = true;

			paddle1.src="slike/paddle.png";
			paddle2.src="slike/paddle.png";
			ball.src="slike/ball.png";

			function start(){
				drawIt();
				drawIt2();
			}
		function drawIt(){

			/* Arrow key left , right and reset */
			function onKeyDown(evt) {
			if (evt.keyCode == 39){
			rightDown = true;
			}
			else if (evt.keyCode == 37){
				leftDown = true;
			}
			else if (evt.keyCode == 82){
			location.reload();
			}
			else if(evt.keyCode == 81){
				frezze = true;
			}
			else if(evt.keyCode == 80){
			/*	gamePause();*/
			/*	gamePause2();*/
			}

		}
			function onKeyUp(evt) {
			if (evt.keyCode == 39)
			rightDown = false;
			else if (evt.keyCode == 37) leftDown = false;
			}

			/*calling in the functions*/
			$(document).keydown(onKeyDown);
			$(document).keyup(onKeyUp);

			/* initializing bricks */
			function init_bricks(){
				NROWS=5;
				NCOLS=7;
				BRICKHEIGHT = 25;
				BRICKWIDTH=(425/NCOLS)-1;
				PADDING =2;
				bricks = new Array(NROWS);
				for(i=0;i<NROWS;i++){
					bricks[i] = new Array(NCOLS);
					for(j=0;j<NCOLS;j++){
						if(i==0){
						bricks[i][j] = 1;
						}
						else if(i==1){
						bricks[i][j] = 2;
						}
						else if(i==2){
						bricks[i][j] = 3;
						}
						else if(i==3){
						bricks[i][j] = 4;
						}
						else if(i==4){
						bricks[i][j] = 5;
						}
						else{
					}
				}
			}
		}
		//changing lines color*/
			function colorChange(){
				/* first canvas color changing*/
					var hue = Math.floor(Math.random()*360);
					var hue2 = Math.floor(Math.random()*360);
					$(":root").get(0).style.setProperty("--colorC", "hsl("+hue+",100%,50%)");
					$(":root").get(0).style.setProperty("--colorC2", "hsl("+hue2+",100%,50%)");

				/* second canvas color changing*/
					var hue3 = Math.floor(Math.random()*360);
					var hue4 = Math.floor(Math.random()*360);
					$(":root").get(0).style.setProperty("--colorC3", "hsl("+hue3+",100%,50%)");
					$(":root").get(0).style.setProperty("--colorC4", "hsl("+hue4+",100%,50%)");
			}
			/*fuction to pause the game not working*/
			function gamePause(){
				if(pause){

					clearInterval(running2);
					pause = false;
				}
				else{
					running = setInterval(draw, 12);
					pause = true;
				}
			}
			/*getting my canvas and starting my interval*/
			function init() {
				canvas=document.getElementById('canvas');
				ctx = canvas.getContext('2d');
				colorPicker = setInterval(colorChange,1000);
				running = setInterval(draw, 12);
				tocke = 0;
				$("#tocke").html(tocke);
			}
			/* Rectangle draw*/
			function rect(x,y,w,h){
				ctx.beginPath();
				ctx.rect(x,y,w,h);
				ctx.closePath();
				ctx.fill();
			}
			/* Creating paddle */
			function init_paddle(){
				paddlex = 425/2;
				paddleh = 10;
				paddlew = 80;
			}
			/*main method*/
			function draw(){

				ctx.clearRect(0,0,425,425);
				ctx.beginPath();
				ctx.arc(x, y, 10, 0, Math.PI*2, true);
				ctx.fillStyle = 'rgb(204, 181, 210)';
				if (rightDown) paddlex += 3;
				else if (leftDown) paddlex -= 3;
				/*rect(paddlex, 425-paddleh, paddlew, paddleh);*/
				ctx.drawImage(paddle1,paddlex, 425-paddleh, paddlew, paddleh);
				ctx.closePath();
				ctx.fill();
				for(i=0; i < NROWS; i++) {
					for (j=0; j < NCOLS; j++) {
					if (bricks[i][j] == 1) {
					ctx.fillStyle='rgb(53, 11, 64)';
					rect((j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING,BRICKWIDTH, BRICKHEIGHT);
				}
					else if(bricks[i][j]==2){
						ctx.fillStyle='rgb(118, 26, 122)';
						rect((j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING,BRICKWIDTH, BRICKHEIGHT);
					}
					else if(bricks[i][j]==3){
						ctx.fillStyle='rgb(182, 40, 189)';
						rect((j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING,BRICKWIDTH, BRICKHEIGHT);
					}
					else if(bricks[i][j]==4){
						ctx.fillStyle='rgb(232, 57, 252)';
						rect((j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING,BRICKWIDTH, BRICKHEIGHT);
					}
					else if(bricks[i][j]==5){
						ctx.fillStyle='rgb(229, 98, 247)';
						rect((j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING,BRICKWIDTH, BRICKHEIGHT);
					}
			}
		}


			/*ball movement and paddle hitting*/
			if(frezze){

				if (x + dx > 425-r || x + dx < 0+r){
					dx = -dx;
				}
				if (y + dy < 0+r){
					dy = -dy;
				}
				else if (y + dy > 425-r-paddleh) {
					if (x > paddlex && x < paddlex + paddlew && y + dy > 425-r-paddleh) {
					dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
					dy = -dy;
					}

				else{
				swal("Levi igralec je zmagal, pritisni R za reset");
				clearInterval(running2);
				clearInterval(running);
			}
				}

				if (x + dx > 425 -r|| x + dx < 0 +r){
				dx = -dx;
				}
				if (y + dy > 425 -r|| y + dy < 0 +r){
				dy = -dy;
				}

				/* breking the bricks*/
				rowheight = BRICKHEIGHT + PADDING + f/2;
				colwidth = BRICKWIDTH + PADDING + f/2;
				row = Math.floor(y/rowheight);
				col = Math.floor(x/colwidth);
				if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] > 0) {
				dy = -dy; bricks[row][col] = bricks[row][col]-1;

				if(bricks[row][col]==0){
					tocke += 150;
					$("#tocke").html(tocke);
				}
				if(tocke==5250){
					swal("Zmagal je desni igralec");
				}
				}

				x += dx;
				y += dy;
				/* Limit the paddle*/
				 if(rightDown){
					if((paddlex+paddlew) < Cwidth){
					paddlex += 0.2;
					}else{
						paddlex = Cwidth-paddlew;
					}
				}
				else if(leftDown){
					if(paddlex>0){
						paddlex -=0.2;
					}else{
						paddlex=0;
					}
				}
			}
			}
			init();
			init_paddle();
			init_bricks();

		}
			/*Second function for our second canvas*/
		function drawIt2(){
			/*initializing the canvas*/

			function init2(){
			canvas2=document.getElementById('canvas2');
			ctx2 = canvas2.getContext('2d');
			running2 = setInterval(draw2,12);
			tocke2 = 0;
			$("#tocke").html(tocke);
			}
			/*Drawing a function to draw a rectangle*/

			function rect2(x2,y2,w2,h2){
				ctx2.beginPath();
				ctx2.rect(x2,y2,w2,h2);
				ctx2.closePath();
				ctx2.fill();
			}

			/*initializing the paddle*/

			function init_paddle2(){
				paddlex2 = 425/2;
				paddleh2 = 10;
				paddlew2 = 75;
			}

			/*putting bricks in an array*/

			function init_bricks2(){
				NROWS2=5;
				NCOLS2=7;
				BRICKHEIGHT2 = 25;
				BRICKWIDTH2=(425/NCOLS2)-1;
				PADDING2 =2;
				bricks2 = new Array(NROWS2);
				for(i=0;i<NROWS2;i++){
					bricks2[i] = new Array(NCOLS2);
					for(j=0;j<NCOLS2;j++){
						if(i==0){
						bricks2[i][j] = 1;
						}
						else if(i==1){
						bricks2[i][j] = 2;
						}
						else if(i==2){
						bricks2[i][j] = 3;
						}
						else if(i==3){
						bricks2[i][j] = 4;
						}
						else if(i==4){
						bricks2[i][j] = 5;
						}
						else{

					}
					}
				}
			}

			/* main function for our second canvas*/

			function draw2(){


				/* A and D key movement */
				function onKeyDown2(evt) {
				if (evt.keyCode == 65){
				aDown = true;
			}
				else if (evt.keyCode == 68){
					dDown = true;
				}
				else if(evt.keyCode == 81){
					frezze2 = true;
				}
				else if(evt.keyCode == 80){

				}
				}


				function onKeyUp2(evt) {
				if (evt.keyCode == 65)
				aDown = false;
				else if (evt.keyCode == 68) dDown = false;
				}
				$(document).keydown(onKeyDown2);
				$(document).keyup(onKeyUp2);

				/*fuction to pause the game
				function gamePause2(){
					if(pause2){
						clearInterval(running2);
						pause2 = false;
					}
					else{
						running2 = setInterval(draw2, 12);
						pause2 = true;
					}
				}*/
				/* drawing the paddle bricks and other stuff*/
				ctx2.clearRect(0,0,425,425);
				ctx2.beginPath();
				ctx2.fillStyle ='rgb(204, 181, 210)';
				ctx2.arc(x2, y2, 10, 0, Math.PI*2, true);
				if (dDown) paddlex2 += 3;
				else if (aDown) paddlex2 -= 3;
				ctx2.drawImage(paddle2,paddlex2, 425-paddleh2, paddlew2, paddleh2);
				ctx2.closePath();
				ctx2.fill();
				for(i=0; i < NROWS2; i++) {
					for (j=0; j < NCOLS2; j++) {
					if (bricks2[i][j] == 1) {
					ctx2.fillStyle='rgb(53, 11, 64)';
					rect2((j * (BRICKWIDTH2 + PADDING2)) + PADDING2, (i * (BRICKHEIGHT2 + PADDING2)) + PADDING2,BRICKWIDTH2, BRICKHEIGHT2);
				}
					else if(bricks2[i][j]==2){
						ctx2.fillStyle='rgb(118, 26, 122)';
						rect2((j * (BRICKWIDTH2 + PADDING2)) + PADDING2, (i * (BRICKHEIGHT2 + PADDING2)) + PADDING2,BRICKWIDTH2, BRICKHEIGHT2);
					}
					else if(bricks2[i][j]==3){
						ctx2.fillStyle='rgb(182, 40, 189)';
						rect2((j * (BRICKWIDTH2 + PADDING2)) + PADDING2, (i * (BRICKHEIGHT2 + PADDING2)) + PADDING2,BRICKWIDTH2, BRICKHEIGHT2);
					}
					else if(bricks2[i][j]==4){
						ctx2.fillStyle='rgb(232, 57, 252)';
						rect2((j * (BRICKWIDTH2 + PADDING2)) + PADDING2, (i * (BRICKHEIGHT2 + PADDING2)) + PADDING2,BRICKWIDTH2, BRICKHEIGHT2);
					}
					else if(bricks2[i][j]==5){
						ctx2.fillStyle='rgb(229, 98, 247)';
						rect2((j * (BRICKWIDTH2 + PADDING2)) + PADDING2, (i * (BRICKHEIGHT2 + PADDING2)) + PADDING2,BRICKWIDTH2, BRICKHEIGHT2);
					}
					}
				}

				/*ball movement and paddle hitting*/
				if(frezze2){

				if (x2 + dx2 > 425-r2 || x2 + dx2 < 0+r2)
					dx2 = -dx2;
				if (y2 + dy2 < 0+r2)
					dy2 = -dy2;
				else if (y2 + dy2 > 425-r2-paddleh2) {
					if (x2 > paddlex2 && x2 < paddlex2 + paddlew2 && y2 + dy2 > 425-r2-paddleh2) {
					dx2 = 8 * ((x2-(paddlex2+paddlew2/2))/paddlew2);
					dy2 = -dy2;
					}
					else if (x2 > paddlex2 && x2 < paddlex2 + paddlew2)
					dy2 = -dy2;
				else{
					clearInterval(running2);
					clearInterval(running);
					swal("Desni igralec je zmagal, pritisni R za reset");

			}
				}

				if (x2 + dx2 > 425 -r2|| x2 + dx2 < 0 +r2){
				dx2 = -dx2;
				}
				if (y2 + dy2 > 425 -r2|| y2 + dy2 < 0 +r2){
				dy2 = -dy2;
				}



				/*breaking the bricks */
				rowheight2 = BRICKHEIGHT2 + PADDING2 + f2/2;
				colwidth2 = BRICKWIDTH2 + PADDING2 + f2/2;
				row2 = Math.floor(y2/rowheight2);
				col2 = Math.floor(x2/colwidth2);
				if (y2 < NROWS2 * rowheight2 && row2 >= 0 && col2 >= 0 && bricks2[row2][col2] > 0) {
				dy2 = -dy2; bricks2[row2][col2] = bricks2[row2][col2]-1;

				if(bricks2[row2][col2]==0){
					tocke2 += 150;
					$("#tocke2").html(tocke2);
				}
				if(tocke2==5250){
					swal("Zmagal je levi igralec");
				}

				}
				x2 += dx2;
				y2 += dy2;

				/* Limit the paddle*/
					if(dDown){
					if((paddlex2+paddlew2) < Cwidth){
						paddlex2 += 0.2;
					}else{
						paddlex2 = Cwidth-paddlew2;
					}
				}
				else if(aDown){
					if(paddlex2>0){
						paddlex2 -=0.2;
					}else{
						paddlex2=0;
					}
				}

			}
			}
			init2();
			init_paddle2();
			init_bricks2();
		}
