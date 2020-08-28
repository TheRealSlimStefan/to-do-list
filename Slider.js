class Slider {
    static changeSlide(logInPanel, signUpPanel, logInInputLogInPanel, passwordInputLogInPanel, emailInputSignUpPanel, passwordInputSignUpPanel, confirmPasswordInputSignUpPanel, pSignUpPanel, pLogInPanel) {
        if (logInPanel.classList.contains('activeWindow')) {
            logInPanel.classList.remove('activeWindow');
            signUpPanel.classList.add('activeWindow');
            logInInputLogInPanel.value = '';
            passwordInputLogInPanel.value = '';
            pSignUpPanel.textContent = '';
            pSignUpPanel.classList.remove('activeP');
            pLogInPanel.textContent = '';
            pLogInPanel.classList.remove('activeP');
        } else {
            signUpPanel.classList.remove('activeWindow');
            logInPanel.classList.add('activeWindow');
            emailInputSignUpPanel.value = '';
            passwordInputSignUpPanel.value = '';
            confirmPasswordInputSignUpPanel.value = '';
        }
    }

    static openActualUserList(logInPanel, logInInputLogInPanel, passwordInputLogInPanel, pLogInPanel, userInterfacePanel) {
        logInPanel.classList.remove('activeWindow');
        logInInputLogInPanel.value = '';
        passwordInputLogInPanel.value = '';
        pLogInPanel.textContent = '';
        userInterfacePanel.classList.add('activeInterface');
    }

    static backToLogInPanel(logInPanel, userInterfacePanel) {
        console.log(logInPanel);
        console.log(userInterfacePanel);
        logInPanel.classList.add('activeWindow');
        // logInInputLogInPanel.value = '';
        // passwordInputLogInPanel.value = '';
        // pLogInPanel.textContent = '';
        userInterfacePanel.classList.remove('activeInterface');
    }

    static openAddTaskPanel(addTaskPanel) {
        addTaskPanel.classList.add('activeInterface');
    }

    static closeAddTaskPanel(addTaskPanel) {
        addTaskPanel.classList.remove('activeInterface');
    }
}