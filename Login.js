class Login {
    constructor() {
        this.actualUser = null;
        this.isExist = false;
    }

    checkIfUserCanLogIn(email, password, users, p) {
        // console.log(email.value, password.value, users);
        users.forEach(user => {
            if (user.email === email.value && user.password === password.value) {
                this.actualUser = user;
                // console.log(this.actualUser);
                console.log('zalogowano!');
                this.isExist = true;
            }
        })

        if (this.isExist) {
            return true;
        } else {
            p.classList.add('activeP');
            p.textContent = 'This user does not exist!';
            return false;
        }
    }

    getActualUser() {
        return this.actualUser;
    }
}