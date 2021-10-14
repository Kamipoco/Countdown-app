var NGAYTET = new Date("January 1, 2022, 00:00:00").getTime();

setInterval(function () {
  var HIENTAI = new Date().getTime();
  var D = NGAYTET - HIENTAI;

  //hiển thị ngày, giờ, phút giây
  var days = Math.floor(D / (1000 * 60 * 60 * 24));
  var hours = Math.floor(D / (1000 * 60 * 60));
  var minutes = Math.floor(D / (1000 * 60));
  var seconds = Math.floor(D / 1000);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

//run phao hoa
$("#phaohoa").fireworks({
  sound: true,
  opacity: 0.9,
  width: "100%",
  height: "100%",
});

// setInterval(() => {
//     var HIENTAI = new Date.getTime();
//     var D = (NGAYTET = HIENTAI);

//     //hiển thị ngày, giờ, phút giây
//     var days = Math.floor(D / (1000 * 60 * 60 * 24));
//     var hours = Math.floor(D / (1000 * 60 * 60));
//     var minutes = Math.floor(D / (1000 * 60));
//     var seconds = Math.floor(D / 1000);

//     hours %= 24;
//     minutes %= 60;
//     seconds %= 60;

//     document.getElementById("days").innerText = days;
//     document.getElementById("hours").innerText = hours;
//     document.getElementById("minutes").innerText = minutes;
//     document.getElementById("seconds").innerText = seconds;
//   }, 1000);
