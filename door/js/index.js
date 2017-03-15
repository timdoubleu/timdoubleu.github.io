function openDoorLeft(field) {
  var y = $(field).find(".thumb");
  var x = y.attr("class");
  if (y.hasClass("thumbOpenedLeft")) {
    y.removeClass("thumbOpenedLeft");
  }
  else {
    $(".thumb").removeClass("thumbOpenedLeft");
    y.addClass("thumbOpenedLeft");
  }
}

function openDoorRight(field) {
  var y = $(field).find(".thumbRight");
  var x = y.attr("class");
  if (y.hasClass("thumbOpenedRight")) {
    y.removeClass("thumbOpenedRight");
  }
  else {
    $(".thumb").removeClass("thumbOpenedRight");
    y.addClass("thumbOpenedRight");
  }
}