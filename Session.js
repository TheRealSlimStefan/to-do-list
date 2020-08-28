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
        this.userInterfacePanel = document.querySelector('div.userInterfacePanel');
        this.logOutButton = document.querySelector('div.userInterfacePanel i.fa-sign-out');
        this.addTaskButton = document.querySelector('div.userInterfacePanel div.button button');
        this.addTaskPanel = document.querySelector('div.createNoteInterface');
        this.closeAndSaveAddTaskPanelButton = document.querySelector('div.createNoteInterface div.createNotePanel button');
        this.createNotePanelInput = document.querySelector('div.createNoteInterface div.createNotePanel input');
        this.createNotePanelTextArea = document.querySelector('div.createNoteInterface div.createNotePanel textarea');
        this.placeToAddNewNote = document.querySelector('div.userInterfacePanel div.toDoList');
        this.removeTaskButtons = [];
        this.users = [];
        this.actualUser = null;

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
        // console.log(this.signUpButtonSignUpPanel);

        // console.log(this.logOutButton);
        // console.log(this.addTaskButton);
        // console.log(this.addTaskPanel);
        // console.log(this.closeAndSaveAddTaskPanelButton);
        // console.log(this.createNotePanelInput);
        // console.log(this.createNotePanelTextArea);
        // console.log(this.placeToAddNewNote);

        this.signUpButtonSignUpPanel.addEventListener('click', this.register.bind(this));

        this.logInButtonLogInPanel.addEventListener('click', this.login.bind(this));

        this.signUpButtonLogInPanel.addEventListener('click', () => {
            Slider.changeSlide(this.logInPanel, this.signUpPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel, this.pLogInPanel);
        });

        this.cancelButtonSignUpPanel.addEventListener('click', () => {
            Slider.changeSlide(this.logInPanel, this.signUpPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel, this.pLogInPanel);
        });

        this.logOutButton.addEventListener('click', this.logOut.bind(this));

        this.addTaskButton.addEventListener('click', this.addTask.bind(this));

        this.closeAndSaveAddTaskPanelButton.addEventListener('click', this.closeAndSaveAddTaskPanel.bind(this));
    }

    register() {
        const registration = new Registration();

        if (registration.checkIfICanRegister(this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel)) {
            if (registration.register(this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.users, this.pSignUpPanel)) Slider.changeSlide(this.logInPanel, this.signUpPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.emailInputSignUpPanel, this.passwordInputSignUpPanel, this.confirmPasswordInputSignUpPanel, this.pSignUpPanel, this.pLogInPanel);
        }
    }

    login() {
        const login = new Login();
        if (login.checkIfUserCanLogIn(this.logInInputLogInPanel, this.passwordInputLogInPanel, this.users, this.pLogInPanel)) {
            this.actualUser = login.getActualUser();
            console.log(this.actualUser);
            Slider.openActualUserList(this.logInPanel, this.logInInputLogInPanel, this.passwordInputLogInPanel, this.pLogInPanel, this.userInterfacePanel);
            this.renderUserTasks();
        }
    }

    logOut() {
        Slider.backToLogInPanel(this.logInPanel, this.userInterfacePanel);
        this.actualUser = null;
        this.placeToAddNewNote.innerHTML = '';
    }

    addTask() {
        Slider.openAddTaskPanel(this.addTaskPanel);

        this.renderUserTasks();
    }

    closeAndSaveAddTaskPanel() {
        Slider.closeAddTaskPanel(this.addTaskPanel);
        const note = new Notes();
        this.actualUser = note.addNewNote(this.createNotePanelInput, this.createNotePanelTextArea, this.placeToAddNewNote, this.actualUser, this.users)
    }

    renderUserTasks() {
        const notes = new Notes();

        this.removeTaskButtons = notes.renderNotes(this.actualUser, this.placeToAddNewNote);

        console.log(this.removeTaskButtons);
        this.removeTaskButtons.forEach(button => {
            button.addEventListener('click', this.removeTask.bind(this));
        })

    }

    removeTask(event) {
        if (event.target.classList.contains('fa-times')) {
            let parent = event.target.parentNode.parentNode.parentNode.parentNode;

            let task = event.target.parentNode.parentNode.parentNode;

            let taskTitle = event.target.parentNode.parentNode.parentNode.firstChild.firstChild.textContent;

            let taskContent = event.target.parentNode.parentNode.parentNode.lastChild.textContent;

            for (let i = 0; i < this.actualUser.notes.length; i++) {
                // console.log(this.actualUser.notes[i].title);
                // console.log(taskTitle);
                // console.log(this.actualUser.notes[i].content);
                // console.log(taskContent);
                // console.log(...this.actualUser.notes);
                if (this.actualUser.notes[i].title === taskTitle && this.actualUser.notes[i].content === taskContent) this.actualUser.notes = this.actualUser.notes.splice(i, 1);
                // console.log(this.actualUser.notes);
            }
        }
    }
}