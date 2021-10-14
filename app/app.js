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

  //run phao hoa
  // if (days == 77 && hours == 22 && minutes == 43 && seconds == 0) {
  //   $("#phaohoa").fireworks({
  //     sound: true,
  //     opacity: 0.9,
  //     width: "100%",
  //     height: "100%",
  //   });
  // }
}, 1000);

//DOM Or with jQuery MODAL
M.AutoInit();

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".modal");
//   var instances = M.Modal.init(elems, options);
// });

// $(document).ready(function () {
//   $(".modal").modal();
// });

setTimeout(function () {
  $("#phaohoa").fireworks({
    sound: true,
    opacity: 0.9,
    width: "100%",
    height: "100%",
  });
}, 3000);

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
