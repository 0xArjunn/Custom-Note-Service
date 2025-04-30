import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import { getNotes, saveNotes } from "./storage";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(getNotes());
  const [activeView, setActiveView] = useState("add");
  const [isLoading, setIsLoading] = useState(false); 
  const [hasError, setHasError] = useState(false); 

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleAddNote = (newNotes) => {
    setIsLoading(true); 
    setHasError(false); 

    try {
      saveNotes(newNotes);
      setNotes(newNotes);
    } catch (error) {
      setHasError(true); 
    } finally {
      setIsLoading(false); 
    }
  };

  const handleToggleView = () => {
    setActiveView(activeView === "add" ? "view" : "add");
  };

  return (
    <div className="app">
      <h1>Custom Note App</h1>
      <nav>
        <button onClick={handleToggleView}>
          {activeView === "add" ? "View Notes" : "Add Note"}
        </button>
      </nav>

      {hasError && <div className="error-banner">Error saving/loading notes!</div>}

      {isLoading && <div className="loading-spinner">Saving...</div>}

      {activeView === "add" ? (
        <AddNote onAdd={handleAddNote} />
      ) : (
        <NotesList notes={notes} />
      )}
    </div>
  );
}

export default App;
