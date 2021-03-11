$(document).ready(function () {
  $(".header__menu-icon").click(function () {
    $(".header__menu-list").toggleClass("hides");
    $(".back2").toggleClass("tranform");
    $(".main").toggleClass("mainTran");
  });
  $(".header__filter-bt").click(function () {
    $(".header__filter-list ").toggle();
  });
});