const btnElement = document.getElementById('btn');
const notesContainer  = document.getElementById('notescontainer');

loadNotes();

function createNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = `<textarea></textarea>`;
    notesContainer.appendChild(note);
    note.querySelector('textarea').focus();
    saveNotes();
}


function deleteNote(event) {
    if (event.target.classList.contains('note') || event.target.closest('.note')) {
        const note = event.target.closest('.note');
        if (confirm('Are you sure you want to delete this note?')) {
            note.remove();
            saveNotes();
        }
    }
}

function saveNotes() {
    const notes = Array.from(notesContainer.querySelectorAll('.note textarea'))
                       .map(note => note.value);
    localStorage.setItem('notes', JSON.stringify(notes));
}


function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(noteContent => {
        const note = document.createElement('div');
        note.className = 'note';
        note.innerHTML = `<textarea>${noteContent}</textarea>`;
        notesContainer.appendChild(note);
    });
}

btnElement.addEventListener('click', createNote);
notesContainer.addEventListener('dblclick', deleteNote);
