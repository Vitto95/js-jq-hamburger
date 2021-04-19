$(document).ready(function () {
  //Qui inseriamo tutto il codice JS

  //Creazione evento per gestire comparsa e scomparsa del menu

  $(".fa-times").click(function () {
    $(".hamburger-menu").hide();
  });
  $(".fa-bars").click(function () {
    $(".hamburger-menu").show();
  });
});
