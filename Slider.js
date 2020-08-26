class Slider {
    static changeSlide(logInPanel, signUpPanel, logInInputLogInPanel, passwordInputLogInPanel, emailInputSignUpPanel, passwordInputSignUpPanel, confirmPasswordInputSignUpPanel, pSignUpPanel) {
        if (logInPanel.classList.contains('activeWindow')) {
            logInPanel.classList.remove('activeWindow');
            signUpPanel.classList.add('activeWindow');
            logInInputLogInPanel.value = '';
            passwordInputLogInPanel.value = '';
            pSignUpPanel.textContent = '';
            pSignUpPanel.classList.remove('activeP');
        } else {
            signUpPanel.classList.remove('activeWindow');
            logInPanel.classList.add('activeWindow');
            emailInputSignUpPanel.value = '';
            passwordInputSignUpPanel.value = '';
            confirmPasswordInputSignUpPanel.value = '';
        }
    }
}