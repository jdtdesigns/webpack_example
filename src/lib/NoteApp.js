import Database from './Database';

const noteForm = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const notesOutput = document.querySelector('.notes');

class NoteApp {
  static async init() {
    noteForm.addEventListener('submit', NoteApp.saveNote);
    notesOutput.addEventListener('click', e => {
      const el = e.target;

      if (el.tagName === 'BUTTON') {
        const id = el.dataset.id;
        NoteApp.deleteNote(id);
      }
    });

    await Database.init();

    NoteApp.showNotes();
  }

  static async saveNote(e) {
    e.preventDefault();

    await Database.save(noteInput.value);

    noteInput.value = '';
    NoteApp.showNotes();
  }

  static async deleteNote(id) {
    await Database.delete(+id);

    NoteApp.showNotes();
  }

  static async showNotes() {
    // Grab the notes from the db
    const notes = await Database.getAll();

    notesOutput.innerHTML = '';

    if (!notes.length) {
      notesOutput.innerHTML = '<p class="no-notes">No notes have been added.</p>';
    }

    notes.forEach(note => {
      notesOutput.insertAdjacentHTML('beforeend', `
      <div class="note">
        <p>${note.text}</p>
        <button data-id="${note.id}">Delete</button>
      </div>
      `);
    })
  }
}

export default NoteApp;