import { useState } from "react";
import { saveNotes, getNotes } from "../storage";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, content };
    const existingNotes = getNotes();
    const updatedNotes = [...existingNotes, newNote];

    saveNotes(updatedNotes);
    onAdd(updatedNotes); 

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
