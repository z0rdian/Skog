var options = ["Algadelta100", "Algadelta200", "UPP 100", "KING CLON", "LEONARDITA 200ml", "Väx 30ml", "Ento 30ml","STICKER", "Phos 30ml", "Zeta 30ml", "STICKER ", "EMA 30ML", "LEONARDITA 200ml", "Tira de nuevo", "STICKER" ,];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 155;
var spinTimeTotal = 155;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 350;
    var textRadius = 330;
    var insideRadius = 225;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 7;

    ctx.font = 'bold 15px Helvetica, Arial';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];

/* 
      ctx.fillStyle = getColor(i, options.length); */
      var my_gradient = ctx.createLinearGradient(0, 0, 0, 670);
      my_gradient.addColorStop(0, "#0e4749");
      my_gradient.addColorStop(1, "#6c950a");
      ctx.fillStyle = my_gradient;


      ctx.beginPath();
      ctx.arc(350, 350, outsideRadius, angle, angle + arc, false);
      ctx.arc(350, 350, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -2;
      ctx.shadowOffsetY = -2;
      ctx.shadowBlur    = 5;
      ctx.shadowColor   = "rgb(0,0,0)";
      ctx.fillStyle = "white";
      ctx.translate(350 + Math.cos(angle + arc / 2) * textRadius, 
                    350 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(350 - 4, 350 - (outsideRadius + 5));
    ctx.lineTo(350 + 4, 350 - (outsideRadius + 5));
    ctx.lineTo(350 + 4, 350 - (outsideRadius - 5));
    ctx.lineTo(350 + 9, 350 - (outsideRadius - 5));
    ctx.lineTo(350 + 0, 350 - (outsideRadius - 13));
    ctx.lineTo(350 - 9, 350 - (outsideRadius - 5));
    ctx.lineTo(350 - 4, 350 - (outsideRadius - 5));
    ctx.lineTo(350 - 4, 350 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 10;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index]
  ctx.fillText(text, 350 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();