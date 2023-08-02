$(function () {
  $(".tabs-item").on("click", function () {
    $(".tabs-item").removeClass("active");
    $(this).addClass("active");

    let index = $(".tabs-item").index(this);

    $(".content").removeClass("active");
    $(".content").eq(index).addClass("active");
  });
});
