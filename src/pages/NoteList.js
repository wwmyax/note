import React from 'react';

function NoteList({ notes, onSelectNote, selectedNoteId }) {
  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => onSelectNote(note)}
          className={note.id === selectedNoteId ? 'selected' : ''}
        >
          {note.title}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;