// src/components/AddNote.jsx

import { useState } from "react";
import { saveNotes, getNotes } from "../storage";

// Why I chose useState + this submit handler: useState is simple and ideal for local component state

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, content };
    const existingNotes = getNotes();
    const updatedNotes = [...existingNotes, newNote];

    saveNotes(updatedNotes);
    onAdd(updatedNotes); // update parent state

    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Add a Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default AddNote;
