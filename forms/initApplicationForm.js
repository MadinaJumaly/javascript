export function initApplicationForm() {
    const form = document.querySelector('.application-form');


    const personTitleField = document.getElementById('person-title-field');
    const titleDatalist = document.createElement('datalist');
    titleDatalist.id = 'person-title-list';

    const titleOptions = ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Other'];
    for (let i = 0; i < titleOptions.length; i++) {
        const option = document.createElement('option');
        option.value = titleOptions[i];
        titleDatalist.appendChild(option);
    }
    personTitleField.setAttribute('list', 'person-title-list');
    personTitleField.parentNode.appendChild(titleDatalist);

    const jobTitleField = document.getElementById('job-title');
    const jobDatalist = document.createElement('datalist');
    jobDatalist.id = 'job-title-list';

    const jobOptions = ['Junior Developer', 'Middle Developer', 'Senior Developer', 'Other'];
    for (let i = 0; i < jobOptions.length; i++) {
        const option = document.createElement('option');
        option.value = jobOptions[i];
        jobDatalist.appendChild(option);
    }
    jobTitleField.setAttribute('list', 'job-title-list');
    jobTitleField.parentNode.appendChild(jobDatalist);


    personTitleField.setAttribute('autocomplete', 'honorific-prefix');
    document.getElementById('firstname').setAttribute('autocomplete', 'given-name');
    document.getElementById('lastname').setAttribute('autocomplete', 'family-name');
    document.getElementById('github-account-name').setAttribute('autocomplete', 'username');
    document.getElementById('email').setAttribute('autocomplete', 'email');
    jobTitleField.setAttribute('autocomplete', 'organization-title');


    const jobDescWrapper = document.getElementById('job-title-description-wrapper');
    const knownJobs = ['Junior Developer', 'Middle Developer', 'Senior Developer'];

    jobTitleField.addEventListener('change', function () {
        const value = jobTitleField.value;

        if (value === '') {
            jobDescWrapper.classList.add('hidden');
        } else if (knownJobs.includes(value)) {
            jobDescWrapper.classList.add('hidden');
        } else {
            jobDescWrapper.classList.remove('hidden');
        }
    });


    const oneTimeCode = document.getElementById('one-time-code');
    const showOneTimeCode = document.getElementById('show-one-time-code');

    showOneTimeCode.addEventListener('change', function () {
        if (showOneTimeCode.checked) {
            oneTimeCode.type = 'text';
        } else {
            oneTimeCode.type = 'password';
        }
    });


    const firstNameField = document.getElementById('firstname');
    const lastNameField = document.getElementById('lastname');

    function addValidation(field) {
        field.addEventListener('focus', function () {
            field.classList.remove('application-form__input_invalid');
        });

        field.addEventListener('blur', function () {
            if (field.value.trim() === '') {
                field.classList.add('application-form__input_invalid');
            }
        });
    }

    addValidation(firstNameField);
    addValidation(lastNameField);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        if (!knownJobs.includes(jobTitleField.value)) {
            formData.delete('job-title-description');
        }

        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData
        });
    });
}