$('#doors .perspective').on('click', function() {
  console.log("clicked the doors");
  var leftThis = $('#left-door');
  var rightThis = $('#right-door');
  openDoorLeft(leftThis);
  openDoorRight(rightThis);
});


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

var passMap = {
  'investor' : 'about',
  'buyer' : '',
  'pass3' : 'location3',
  'pass4' : 'location4'
};

$('#secret').on('keydown', function(event) {
  if (event.keyCode == 13) {
    var inputVal = $('#secret').val();
    var destination = passMap[inputVal];

    if (destination) {
      $('#msg').html("Welcome to Paul Hardt..");
      $('#msg').css('color', 'green');
      // console.log("Got password " + inputVal + " sending to location: " + destination);
      var leftThis = $('#left-door');
      var rightThis = $('#right-door');
      openDoorLeft(leftThis);
      openDoorRight(rightThis);

      setTimeout(function() {
        // similar behavior as an HTTP redirect
        // window.location.replace('../'+destination);

        // similar behavior as clicking on a link
        // window.location.href = '../'+destination;
        $(location).attr('href', '/'+destination);
      }, 1500);
    } else {
      console.log("No destination for that password");
      $('#msg').html("I'm sorry there's no destination for that phrase");
      $('#msg').css('color', 'red');
    }
  }
});

$('#submit-secret').on('click', function () {
  var inputVal = $('#secret').val();
  var destination = passMap[inputVal];

  if (destination) {
    $('#msg').html("Welcome to Paul Hardt..");
    $('#msg').css('color', 'green');
    // console.log("Got password " + inputVal + " sending to location: " + destination);
    var leftThis = $('#left-door');
    var rightThis = $('#right-door');
    openDoorLeft(leftThis);
    openDoorRight(rightThis);

    setTimeout(function() {
      // similar behavior as an HTTP redirect
      // window.location.replace('../'+destination);

      // similar behavior as clicking on a link
      // window.location.href = '../'+destination;
      $(location).attr('href', '/'+destination);
    }, 1500);
  } else {
    console.log("No destination for that password");
    $('#msg').html("I'm sorry there's no destination for that phrase");
    $('#msg').css('color', 'red');
  }
});

