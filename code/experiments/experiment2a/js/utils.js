<<<<<<< Updated upstream
// checking that both sliders are clicked 
function set_slider(slider_counters) {
  $('#slider1').click(function(e) {
    slider_clicked[0] = true
    $(this).removeClass('unclicked');
    $(this).addClass('clicked');
    if (slider_clicked[0] == true & slider_clicked[1] == true){
      $('#jspsych-survey-html-form-next').css("visibility", "visible");
    }
  })

  $('#slider2').click(function(e) {
    slider_clicked[1] = true
    $(this).removeClass('unclicked');
    $(this).addClass('clicked');
    if (slider_clicked[0] == true & slider_clicked[1] == true){
      $('#jspsych-survey-html-form-next').css("visibility", "visible");
    }
  })
}

function enable_continue() {
  $('#jspsych-survey-html-form-next').css("visibility", "visible");
}

=======

function set_slider() {
  $('.jspsych-slider').slider();
  
  // hide all slider handles
  $('.ui-slider-handle').hide();

  // show pips
  $('.jspsych-slider').slider({ min: 0, max: 100 })

  $('.jspsych-slider').slider().on('slidestart', function( event, ui ) {
      // show handle
      $(this).find('.ui-slider-handle').show();
      $('#jspsych-survey-html-form-next').prop('disabled', false);
  });
}

>>>>>>> Stashed changes

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function order_condensed(t) {
    var order = [...Array(19).keys()];
    order = shuffle(order);
    order.splice(10, 0, 19);   // X1 
    //console.log(order);
    return order;
}

//this function parses a URL parameter of the form experiment.html?condition=
function get_url_param(name, defaultValue) { 
  var regexS = "[\?&]"+name+"=([^&#]*)"; 
  var regex = new RegExp(regexS); 
  var tmpURL = window.location.href; 
  var results = regex.exec(tmpURL); 
  if( results == null ) { 
      return defaultValue; 
  } else { 
      return results[1];    
  } 
}