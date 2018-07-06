$(document).ready(function() {
    if(location.hash.length < 1 || location.hash != "#monday" || location.hash == "#monday") {
        location.hash = "#monday";
        $("#dmonday").toggleClass('day-set');
    }
});

$('.clockpicker').clockpicker({
    autoclose: true
});


$(".day-pick").click(function(e) {
    if(!e.target.className.includes('day-pick'))
        return;
    $('.day-pick').removeClass('day-set');
    $(e.target).toggleClass('day-set');
});

// ====================

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 510;
canvas.height = 130;

ctx.beginPath();
ctx.strokeStyle = '#459DFC';
ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.moveTo(5, 90);
ctx.lineTo(500, 90);
ctx.stroke();

// let grd = ctx.createLinearGradient(0, 90, 0, 70);
// grd.addColorStop(0, '#32ccfe10');
// grd.addColorStop(0.1, '#32ccfe84');
// grd.addColorStop(0.3, "#32ccfe34");
// grd.addColorStop(0.5, '#32ccfe14');
// grd.addColorStop(0.8, '#32ccfe00');
// grd.addColorStop(1, 'white');
// ctx.fillStyle = grd;
// ctx.fillRect(4, 70, 496, 20);

for(let i = 1; i < 25; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#39BBFE';
    ctx.moveTo((500 / 24) * i, 85);
    ctx.lineTo((500 / 24) * i, 95);
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.font = "12px sans-serif";
    let hour = (i < 18) ? i + 6 : i - 18
    ctx.fillText( hour < 10 ? hour = '0' + hour : hour , (500 / 24) * i - 4, 107);
}

ctx.fillStyle = '#254463';
ctx.font = '16px Segoe UI';
ctx.fillText("SHIFT TIMELINE / HOURS", 4, 70);

ctx.beginPath();
ctx.strokeStyle = '#FF6347';
ctx.lineWidth = 6;
ctx.moveTo(50, 90);
ctx.lineTo(110, 90);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#FF6347';
ctx.lineWidth = 6;
ctx.moveTo(250, 90);
ctx.lineTo(390, 90);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(8, 123, 1, 0, Math.PI * 2, false)
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "#459DFC";
ctx.lineWidth = 5;
ctx.arc(120, 123, 1, 0, Math.PI * 2, false)
ctx.stroke();

ctx.fillStyle = '#254463';
ctx.font = '12px Segoe UI';
ctx.fillText("SHIFT TIME", 20, 128);
ctx.fillText("FREE", 130, 128);

// HARD CODE

$('#timePickerL1').val('08:20');
$('#timePickerR1').val('11:15');

$("#timePickerL4").val("17:50");
$('#timePickerR4').val("00:45");