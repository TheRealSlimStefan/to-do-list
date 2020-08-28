class Registration {
    constructor() {
        this.email = null;
        this.password = null;
        this.notes = null;
    }

    register(email, password, users, pSignUpPanel) {
        this.email = email;
        this.password = password;
        this.notes = [];

        // console.log(this.email.value);
        // console.log(this.password.value);
        // console.log(users);

        for (let i = 0; i <= users.length; i++) {
            if (i != 0) {
                // console.log(JSON.parse(localStorage.getItem(`user_${i}`)));
                if (JSON.parse(localStorage.getItem(`user_${i}`)).email == this.email.value) {
                    pSignUpPanel.classList.add('activeP');
                    pSignUpPanel.textContent = 'The specified user already exists';
                    return false;
                }
            }
        }

        users.push({
            email: this.email.value,
            password: this.password.value,
            notes: this.notes,
        });

        console.log(users);

        localStorage.setItem(`user_${users.length}`, JSON.stringify(users[users.length - 1]));

        return true;
    }

    checkIfICanRegister(emailInputSignUpPanel, passwordInputSignUpPanel, confirmPasswordSignUpPanel, pSignUpPanel) {

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