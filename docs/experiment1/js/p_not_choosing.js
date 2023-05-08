/**
 * a jspsych plugin for craftspeople 3-slider response question
 *
 * Sarah Wu
 *
 */


jsPsych.plugins['p_not_choosing'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'p_not_choosing',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Slide',
        default: null,
        description: ''
      },
      people: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'People',
        default: ['c', 'b'],
        array: true,
        description: '',
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: 'How responsible is each person here for the success?',
        description: ''
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'Labels',
        default: ['not at all', 'very much'],
        array: true,
        description: 'Labels of the slider.',
      },
      slider_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name:'Slider width',
        default: 500,
        description: 'Width of the slider in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    var html = ''
    //html += '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">';
    html += '<p>' + "One day, the factory committee comes together to discuss the potential production launch of \"ColorShine\". Without Jack\'s approval, the exterior paint will not go into production. Jack approves the product. <br><br> As a result of the widespread use of \"ColorShine\", several ground water systems become contaminated.<br><br><br><br><br> " + '</p>';
    html += '<em>' + "To what extent do you agree or disagree with the following statements: <br><br><br>" + '</em>';

    for(var p = 0; p < trial.people.length; p++) {

      if (p == 0) {
        html += '<div id="jspsych-html-slider-response-wrapper" </div>';
        html += '<p>' + "Jack is responsible for several ground water systems getting contaminated." + '</p>';
      } else {
        html += '<div id="jspsych-html-slider-response-wrapper">';
        html += '<p>' + "Jack knew that ColorShine would contaminate ground water systems." + '</p>';
      }
      html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 1em auto 2em auto; width:' + trial.slider_width + 'px;">';
      html += '<div style="margin: 1em 0;">';
      html += '<div style="width: 100%; float: right;"> <div style="width: 100%;" class="jspsych-html-slider-response-response" id="jspsych-html-slider-response-response-';
      html += trial.people[p];
      html += '"></div>';
      // labels -- left has to be relative but right absolute
      html += '<div style="display: inline-block; position: relative; left:-50%; text-align: center; width: 100%;">';
      html += '<span style="text-align: center; font-size: 80%;"> not at all </span></div>';
      html += '<div style="display: inline-block; position: absolute; left:50%; text-align: center; width: 100%;">';
      html += '<span style="text-align: center; font-size: 80%;"> very much </span></div>';
      html += '</div>';  // for slider + labels
      html += '<div style="clear:both"></div>';  // force containment inside wrapper
      html += '</div>';  // for wrapper for this person
      html += '</div>';  // for response container
      html += '</div>';  // for response wrapper
      html += '</div>';
    }


    // add submit button
    html += '<button id="jspsych-html-slider-response-next" class="jspsych-btn" disabled>'+trial.button_label+'</button>';

    display_element.innerHTML = html;

    var response = {};

    set_slider();

    display_element.querySelector('#jspsych-html-slider-response-next').addEventListener('click', function() {
    for(var p = 0; p < trial.people.length; p++) {
      response['resp_'+trial.people[p]] = $('#jspsych-html-slider-response-response-'+trial.people[p]).slider('option', 'value');
    }
    end_trial();
    });

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {};
      for(var p = 0; p < trial.people.length; p++) {
        trialdata['resp_'+trial.people[p]] = response['resp_'+trial.people[p]];
      }

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

  };

  return plugin;
})();
