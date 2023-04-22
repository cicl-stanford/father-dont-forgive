/**
 * a jspsych plugin for craftspeople 3-slider response question
 *
 * Sarah Wu
 *
 */


jsPsych.plugins['f_knowledge'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'f_knowledge',
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
    html += '<h4><center>Scenario Part 2</center></h4>'
    html += '<p>' + "One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production. Taylor approves the product. <br><br> As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed.<br><br><br><br><br> " + '</p>';
    html += '<em>' + "Please answer the following questions: <br><br><br>" + '</em>';

    for(var p = 0; p < trial.people.length; p++) {

      if (p == 0) {
        html += '<div id="jspsych-html-slider-response-wrapper" </div>';
        html += '<p>' + "To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?" + '</p>';
      } else {
        html += '<div id="jspsych-html-slider-response-wrapper">';
        html += '<p>' + "How likely did Taylor <b>think</b> that several wildlife populations would get harmed?" + '</p>';
      }
      html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 1em auto 2em auto; width:' + trial.slider_width + 'px;">';
      html += '<div style="margin: 1em 0;">';
      html += '<div style="width: 100%; float: right;"> <div style="width: 100%;" class="jspsych-html-slider-response-response" id="jspsych-html-slider-response-response-';
      html += trial.people[p];
      html += '"></div>';
      // labels -- left has to be relative but right absolute
      html += '<div style="display: inline-block; position: relative; left:-50%; text-align: center; width: 100%;">';
      html += '<span style="text-align: center; font-size: 80%;"> Not at all </span></div>';
      html += '<div style="display: inline-block; position: absolute; left:50%; text-align: center; width: 100%;">';
      html += '<span style="text-align: center; font-size: 80%;"> Very much </span></div>';
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
