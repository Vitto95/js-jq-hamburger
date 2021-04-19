$(document).ready(function () {
  //Qui inseriamo tutto il codice JS

  //Creazione flag
  var isMenuVisible = false; //default

  //Creazione evento per gestire comparsa e scomparsa del menu

  /*   $(".fa-bars").click(function () {
    if (isMenuVisible) {
      $("hamburger-menu ul").hide();
      isMenuVisible = false;
    } else {
      $(".hamburger-menu ul").show();
      isMenuVisible = true;
    }
  }); */

  if (isMenuVisible) {
    $(".fa-times").click(function () {
      $("hamburger-menu ul").hide();
    });
    isMenuVisible = false;
  } else {
    $(".fa-bars").click(function () {
      $(".hamburger-menu ul").show();
    });
    isMenuVisible = true;
  }
});
