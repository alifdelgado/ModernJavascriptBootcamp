const titleElement = document.getElementById('note-title');
const bodyElement = document.getElementById('note-body');
const removeElement = document.getElementById('remove-note');
const dateElement = document.getElementById('last-edited');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note){
    return note.id === noteId;
});

if(note === undefined){
    location.assign('./index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function(e){
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    saveNotes(notes);
});

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    saveNotes(notes);
});

removeElement.addEventListener('click', function(e){
    removeNote(note.id);
    saveNotes(notes);
    location.assign('./index.html');
});

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        note = notes.find(function(note){
            return note.id === noteId;
        });
        
        if(note === undefined){
            location.assign('./index.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
        
    }
});