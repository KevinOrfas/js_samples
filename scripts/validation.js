/*jslint devel: true */
/*jslint bitwise: true */

/* Define Variables */
    var channelForm = document.getElementById('channel_form'),
        inputTitle  = document.getElementById('title'),
        maxLengthFeedback = document.getElementById('maxlength_feedback');

    var textBio = document.getElementById('bio');
    var textMax = 1200;

    var mediaManagerForm = document.getElementById('media_manager_form'),
        executiveAssistantForm = document.getElementById('executive_assistant_form');

    var radioValue;

    var radioButtonsManager = document.getElementsByName('media_manager'),
        radioButtonsAssistant = document.getElementsByName('assistant'),
        checkBoxes = document.getElementsByName('category[]');

    var emailAddress = document.getElementsByName('email_address');
/* End of Variables definition */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
}

var validate = function(){
  var email = emailAddress.value;
  if (validateEmail(email.trim())) {
    console.log('Victory! Valid email address based on regex');
    return true;
  } else if (email !== '' || email === '') {
    window.alert('Please enter a valid email address');
    return false;
  }
};

var isChecked = function() {
    var atLeastOneIsChecked = checkBoxes.checked.length;
    if(atLeastOneIsChecked > 0) {
        console.log('You have selected ' + atLeastOneIsChecked + ' areas of expertise');
        return true;
    } else {
        window.alert('You must select at least one area of expertise');
        return false;
    }
};

var validateFile = function() {
    var size = document.getElementsByName('headshot');
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        //get the file size and file type from file input field
        var fileSize = size[0].files[0].size;

        //do something if file size more than 200 KB (200000)
        if(fileSize>200000) {
           window.alert('The file you are attempting to upload is larger than the maximum permitted size of 200KB');
           return false;
        }
    }
    return true;
};

var validateForm = function () {
    // Enables stricter rules for JavaScript
    'use strict';
    // Function that changes the value of our stateTextBox
    var isFormValid = true;
    var changeState = function() {
        isFormValid = validateFile() && validate() && isChecked();
        return isFormValid;
    };
    // Event handlers for when we click on a button
    return changeState() ? true : false;
};

/* end of validation section */

/* Message for character limitations */
maxLengthFeedback.innerHTML = textMax + ' characters remaining';
textBio.addEventListener('keyup', function() {
    var textLength = textBio.value.length;
    var textRemaining = textMax - textLength;
    console.log(textRemaining);
    maxLengthFeedback.innerHTML = textRemaining + ' characters remaining';
    if (textRemaining < 12) {
        maxLengthFeedback.style.color = 'red';
    } else {
        maxLengthFeedback.style.color = '#999999';
    }
});

