/* Manipulate radio buttons */
    var assignListener = function(element, target) {
        target.style.display = 'none';
        for (var i = 0; i < radioButtonsManager.length; i++) {

            if(element[i].value === 'NO') { element[i].checked = true; }

            element[i].addEventListener('click', function() {
                for (var i = 0; i < element.length; i++) {
                    if (element[i].checked) {
                        console.log('radioButton ' + i + ': ' + element[i].value);
                        radioValue = element[i].value;
                    }
                }
                switch (radioValue) {
                    case 'YES' :
                        console.log('It\'s yes');
                        target.style.display = 'block';
                        break;
                    case 'NO' :
                        target.style.display = 'none';
                        break;
                    default :
                        console.log('Please select an option');
                        break;
                }
            });
        }
    };

    assignListener(radioButtonsManager,mediaManagerForm);
    assignListener(radioButtonsAssistant,executiveAssistantForm);
/* end of radio buttons manipulation */