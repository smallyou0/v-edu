const openEls = document.querySelectorAll(".btn-upload");
const closeEls = document.querySelectorAll(".btn-send");
const dialogEl4 = document.querySelector(".dialog4");

for (const openEl of openEls) {
  openEl.addEventListener("click", () => {
    dialogEl4.showModal();
  });
}

for (const closeEl of closeEls) {
  closeEl.addEventListener("click", () => {
    dialogEl4.close();
  });
}

$(".tab-type1__button button").click(function () {
  $(".tab-type1__button button").removeClass("active");
  $(this).addClass("active");
});
// company-info-input.html
$(".btn-gender").click(function () {
  $(".btn-gender").removeClass("active");
  $(this).addClass("active");
});
// select-current.html
// select-interest.html
$(".btn-business").click(function () {
  $(this).toggleClass("active");
});
// weighing-confirm-list.html
$(".btn-tab-type2").click(function () {
  $(".btn-tab-type2").removeClass("active");
  $(this).addClass("active");
});
$(".table-type2 tr").click(function () {
  // 현재 행이 이미 활성화되어 있는지 확인
  var isActive = $(this).hasClass("active");
  // 현재 행이 이미 활성화되어 있으면 활성화 클래스 제거, 그렇지 않으면 추가
  $(this).toggleClass("active", !isActive);
  $(".btn-main-off i").addClass("active");
  $(".btn-off").addClass("active");
});
$(".btn-edit-post").click(function () {
  $(".dialog2").css({ display: "block" });
  $(".layer").css({ display: "block" });
});
$(".btn-edit-review").click(function () {
  $(".dialog2").css({ display: "none" });
  $(".layer").css({ display: "none" });
});
$(".btn-delete-review").click(function () {
  $(".dialog2").css({ display: "none" });
  $(".layer").css({ display: "none" });
});
$(".cam-write").click(function () {
  $(".cam-wrap").removeClass("cam-shot");
  $(".cam-wrap").addClass("cam-next");
});
$(".btn2 .btn-next").click(function () {
  $(".cam-wrap .order3").addClass("next");
});
$(".load-shot .cam-shot").click(function () {
  $(".cam-wrap").removeClass("cam-shot");
  $(".cam-wrap").addClass("cam-next");
});

// 각 버튼들을 선택
const uploadButtons = document.querySelectorAll(".btn-share");
const sendButtons = document.querySelectorAll(".btn-send");
const dialogEl = document.querySelector(".dialog4");

// 각 버튼에 대한 클릭 이벤트 등록
uploadButtons.forEach((openEl) => {
  openEl.addEventListener("click", () => {
    dialogEl.showModal();
  });
});

// 닫기 버튼에 대한 클릭 이벤트 등록
sendButtons.forEach((closeEl) => {
  closeEl.addEventListener("click", () => {
    dialogEl.close();
  });
});

// weighing confirm list
$(".btn-tab-type2").click(function () {
  $(".btn-tab-type2").removeClass("active");
  $(this).toggleClass("active");
});
$(".tab-type2 li:nth-child(1) a").click(function () {
  $(".table-list").removeClass("active");
  $("#tableTab1").addClass("active");
});
$(".tab-type2 li:nth-child(2) a").click(function () {
  $(".table-list").removeClass("active");
  $("#tableTab2").addClass("active");
});

// 고정버튼 있을시 body에 padding-bottom값 생기도록
const fixE1 = document.querySelector(".fix-bottom");
const body = document.body;

const fixE1Height = fixE1.offsetHeight;
body.style.paddingBottom = fixE1Height + 40 + "px";
