class Session {
    constructor() {
        this.logInInputLogInPanel = document.querySelector('div.log-in-panel input.login');
        this.passwordInputLogInPanel = document.querySelector('div.log-in-panel input.password');
        this.logInButtonLogInPanel = document.querySelector('div.log-in-panel button.logIn');
        this.signUpButtonLogInPanel = document.querySelector('div.log-in-panel button.signUp');
        this.logInInputSignUpPanel = document.querySelector('div.sign-up-panel input.login');
        this.passwordInputSignUpPanel = document.querySelector('div.sign-up-panel input.password');
        this.confirmPasswordInputSignUpPanel = document.querySelector('div.sign-up-panel input.confirm-password');
        this.logInButtonSignUpPanel = document.querySelector('div.sign-up-panel button.cancel');
        this.signUpButtonSignUpPanel = document.querySelector('div.sign-up-panel button.signUp');

        console.log(this.logInInputLogInPanel);
        console.log(this.passwordInputLogInPanel);
        console.log(this.logInButtonLogInPanel);
        console.log(this.signUpButtonLogInPanel);

        console.log(this.logInInputSignUpPanel);
        console.log(this.passwordInputSignUpPanel);
        console.log(this.confirmPasswordInputSignUpPanel);
        console.log(this.logInButtonSignUpPanel);
        console.log(this.signUpButtonSignUpPanel);
    }
}