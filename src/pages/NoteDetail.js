import React, { useState, useEffect } from 'react';

function NoteDetail({ note, onSave, onDelete }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  const handleSave = () => {
    onSave(note.id, title, content);
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>保存</button>
      <button onClick={handleDelete}>删除</button>
    </div>
  );
}

export default NoteDetail;