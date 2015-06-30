/* Seesion storage */
    if (sessionStorage.getItem('lastname')) {
        // Restore the contents of the text field
        inputTitle.value = sessionStorage.getItem('lastname');
    } else {
        inputTitle.value = '';
    }

    inputTitle.addEventListener('change', function() {
        if (typeof(Storage) !== 'undefined') {
            // Store
            sessionStorage.setItem('lastname', inputTitle.value);
            // Retrieve
            sessionStorage.getItem('lastname');
        }
    });

    inputTitle.setAttribute('value', sessionStorage.getItem('lastname'));

    textBio.addEventListener('change', function() {
        if (typeof(Storage) !== 'undefined') {
                // Store
                sessionStorage.setItem('biography', textBio.value);
                // Retrieve
                sessionStorage.getItem('biography');
            }
    });

    textBio.value = sessionStorage.getItem('biography');

    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
       // MSIE
      if (sessionStorage.getItem('biography')) {
        // Restore the contents of the text field
            textBio.value = sessionStorage.getItem('biography');
        } else {
            textBio.innerHTML = '';
        }
    }
