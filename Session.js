class Session {
    constructor() {
        this.logInPanel = document.querySelector('div.log-in-panel');
        this.logInInputLogInPanel = document.querySelector('div.log-in-panel input.login');
        this.passwordInputLogInPanel = document.querySelector('div.log-in-panel input.password');
        this.logInButtonLogInPanel = document.querySelector('div.log-in-panel button.logIn');
        this.signUpButtonLogInPanel = document.querySelector('div.log-in-panel button.signUp');
        this.signUpPanel = document.querySelector('div.sign-up-panel');
        this.emailInputSignUpPanel = document.querySelector('div.sign-up-panel input.login');
        this.passwordInputSignUpPanel = document.querySelector('div.sign-up-panel input.password');
        this.confirmPasswordInputSignUpPanel = document.querySelector('div.sign-up-panel input.confirm-password');
        this.cancelButtonSignUpPanel = document.querySelector('div.sign-up-panel button.cancel');
        this.signUpButtonSignUpPanel = document.querySelector('div.sign-up-panel button.signUp');
        this.pSignUpPanel = document.querySelector('div.panel.sign-up-panel p');
        this.pLogInPanel = document.querySelector('div.panel.log-in-panel p');
        this.users = [];

        for (let i = 0; i < localStorage.length; i++) {
            this.users.push(JSON.parse(localStorage.getItem(`user_${i + 1}`)));
        };

        // console.log(this.logInPanel);
        // console.log(this.logInInputLogInPanel);
        // console.log(this.passwordInputLogInPanel);
        // console.log(this.logInButtonLogInPanel);
        // console.log(this.signUpButtonLogInPanel);

        // console.log(this.signUpPanel);
        // console.log(this.emailInputSignUpPanel);
        // console.log(this.passwordInputSignUpPanel);
        // console.log(this.confirmPasswordInputSignUpPanel);
        // console.log(this.cancelButtonSignUpPanel);
        // console.log(this.signUpButtonSignUpPanel);

        this.signUpButtonSignUpPanel.addEventListener('click', this.register.bind(this));

        this.logInButtonLogInPanel.addEventListener('click', this.login.bind(this));

        this.signUpButtonLogInPanel.addEventListener('click', () => {
            Slider.changeSlide(this.logInPanel, this.signUpPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel, this.pLogInPanel);
        });

        this.cancelButtonSignUpPanel.addEventListener('click', () => {
            Slider.changeSlide(this.logInPanel, this.signUpPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel, this.pLogInPanel);
        });
    }

    register() {
        const registration = new Registration();

        if (registration.checkIfICanRegister(this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel)) {
            if (registration.register(this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.users, this.pSignUpPanel)) Slider.changeSlide(this.logInPanel, this.signUpPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel, this.pLogInPanel);
        }
    }

    login() {
        const login = new Login();
        if (login.checkIfUserCanLogIn(this.logInInputLogInPanel, this.passwordInputLogInPanel, this.users, this.pLogInPanel)) Slider.openActualUserList(this.logInPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.pLogInPanel);
    }
}