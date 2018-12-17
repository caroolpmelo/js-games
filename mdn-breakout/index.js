const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // actual tool to paint on canvas

ctx.beginPath();
ctx.rect(20, 40, 50, 50); // (x, y, width, height)
ctx.fillStyle = "#FF0000"; // 'color | gradient | pattern'
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0,0,255,0.5)";
ctx.stroke();
ctx.closePath();