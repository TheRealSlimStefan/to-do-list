class Notes {
    constructor() {

    }

    renderNotes(actualUser, placeToAddNewNote) {
        if (actualUser.notes.length) {
            let notes = [];

            for (let i = 0; i < actualUser.notes.length; i++) {
                const divTask = document.createElement('div');
                divTask.classList.add('task');

                const divTaskHead = document.createElement('div');
                divTaskHead.classList.add('taskHead');
                divTaskHead.classList.add('clearfix');

                const divTaskName = document.createElement('div');
                divTaskName.classList.add('taskName');
                divTaskName.textContent = actualUser.notes[i].title;

                const divTaskControllers = document.createElement('div');
                divTaskControllers.classList.add('taskControllers');

                const iChewronDown = document.createElement('i');
                iChewronDown.classList.add('fa');
                iChewronDown.classList.add('fa-chevron-down');

                const iChewronUp = document.createElement('i');
                iChewronUp.classList.add('fa');
                iChewronUp.classList.add('fa-chevron-up');

                const iTimes = document.createElement('i');
                iTimes.classList.add('fa');
                iTimes.classList.add('fa-times');

                divTaskControllers.appendChild(iChewronDown);
                divTaskControllers.appendChild(iChewronUp);
                divTaskControllers.appendChild(iTimes);

                const divTaskBody = document.createElement('div');
                divTaskBody.classList.add('taskBody');
                divTaskBody.textContent = actualUser.notes[i].content;

                divTaskHead.appendChild(divTaskName);
                divTaskHead.appendChild(divTaskControllers);

                divTask.appendChild(divTaskHead);
                divTask.appendChild(divTaskBody);

                notes.push(divTask);

                placeToAddNewNote.appendChild(divTask);
            }
            return notes;
        }
        return [];
    }

    addNewNote(noteTitle, noteContent, placeToAddNewNote, actualUser, users) {
        actualUser.notes.push({
            title: noteTitle.value,
            content: noteContent.value,
        })

        for (let i = 0; i < users.length; i++) {
            if (users[i] == actualUser) {
                localStorage.setItem(`user_${i + 1}`, JSON.stringify(actualUser));
            }
        }

        const divTask = document.createElement('div');
        divTask.classList.add('task');

        const divTaskHead = document.createElement('div');
        divTaskHead.classList.add('taskHead');
        divTaskHead.classList.add('clearfix');

        const divTaskName = document.createElement('div');
        divTaskName.classList.add('taskName');
        divTaskName.textContent = noteTitle.value;

        const divTaskControllers = document.createElement('div');
        divTaskControllers.classList.add('taskControllers');

        const iChewronDown = document.createElement('i');
        iChewronDown.classList.add('fa');
        iChewronDown.classList.add('fa-chevron-down');

        const iChewronUp = document.createElement('i');
        iChewronUp.classList.add('fa');
        iChewronUp.classList.add('fa-chevron-up');

        const iTimes = document.createElement('i');
        iTimes.classList.add('fa');
        iTimes.classList.add('fa-times');

        divTaskControllers.appendChild(iChewronDown);
        divTaskControllers.appendChild(iChewronUp);
        divTaskControllers.appendChild(iTimes);

        const divTaskBody = document.createElement('div');
        divTaskBody.classList.add('taskBody');
        divTaskBody.textContent = noteContent.value;

        divTaskHead.appendChild(divTaskName);
        divTaskHead.appendChild(divTaskControllers);

        divTask.appendChild(divTaskHead);
        divTask.appendChild(divTaskBody);

        placeToAddNewNote.appendChild(divTask);

        return actualUser;
    }
}