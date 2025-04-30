
import { useEffect, useState } from "react";
import { getNotes } from "../storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes available. Start adding some!</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index} className="note-item">
              <h3>{note.title}</h3>
              <p>{note.content.slice(0, 50)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
