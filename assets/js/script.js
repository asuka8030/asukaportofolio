$(function () {
  $(".tabs-item").on("click", function () {
    $(".tabs-item").removeClass("active");
    $(this).addClass("active");

    let index = $(this).index();

    $(".content").removeClass("active");
    $(".content").eq(index).addClass("active");
  });
});
