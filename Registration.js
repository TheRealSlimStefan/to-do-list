class Registration {
    constructor() {

    }

    register() {
        console.log('user registered!');
    }

    checkIfICanRegister(emailInputSignUpPanel, passwordInputSignUpPanel, confirmPasswordSignUpPanel, pSignUpPanel) {
        console.log(emailInputSignUpPanel.value);
        console.log(passwordInputSignUpPanel.value);
        console.log(confirmPasswordSignUpPanel.value);
        console.log(emailInputSignUpPanel.value.length - emailInputSignUpPanel.value.indexOf('.'));

        if ((emailInputSignUpPanel.value.length >= 8 && passwordInputSignUpPanel.value.length >= 5 && confirmPasswordSignUpPanel.value.length >= 5) && (passwordInputSignUpPanel.value === confirmPasswordSignUpPanel.value) && (emailInputSignUpPanel.value.includes('@') && (emailInputSignUpPanel.value.includes('.') && (!emailInputSignUpPanel.value.endsWith('.') && !emailInputSignUpPanel.value.endsWith('@') && (emailInputSignUpPanel.value.indexOf('.') - emailInputSignUpPanel.value.indexOf('@') > 2) && (emailInputSignUpPanel.value.length - emailInputSignUpPanel.value.indexOf('.') >= 3) && (emailInputSignUpPanel.value.indexOf('@') > 1))))) {
            pSignUpPanel.classList.remove('activeP');
            pSignUpPanel.textContent = '';
            return true;
        } else if (!emailInputSignUpPanel.value || !passwordInputSignUpPanel.value || !confirmPasswordSignUpPanel.value) {
            // console.log('Uzupełnij wszystkie pola');
            pSignUpPanel.classList.add('activeP');
            pSignUpPanel.textContent = 'Complete all fields';
            return false;
        } else if (emailInputSignUpPanel.value.length < 8 || !emailInputSignUpPanel.value.includes('@') || !emailInputSignUpPanel.value.includes('.') || emailInputSignUpPanel.value.endsWith('.') || emailInputSignUpPanel.value.endsWith('@')) {
            // console.log('Niepoprawny adres email!');
            pSignUpPanel.classList.add('activeP');
            pSignUpPanel.textContent = 'Invalid mail adress!';
            return false;
        } else if (passwordInputSignUpPanel.value !== confirmPasswordSignUpPanel.value) {
            // console.log('Podane hasła są różne!');
            pSignUpPanel.classList.add('activeP');
            pSignUpPanel.textContent = 'Entered passwords are different!';
            return false;
        } else if (passwordInputSignUpPanel.value.length < 5) {
            // console.log('hasło jest za krótkie!');
            pSignUpPanel.classList.add('activeP');
            pSignUpPanel.textContent = 'Entered passwords are too short!';
            return false;
        } else {
            // console.log('Coś poszło nie tak!');
            pSignUpPanel.classList.add('activeP');
            pSignUpPanel.textContent = `Something gone wrong!`;
            return false;
        }
    }
}