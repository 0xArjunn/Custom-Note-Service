# 📝 Custom Note Service (Frontend Only)

A lightweight React-based note-taking app that allows users to add and view notes without a backend. All data is stored locally in the browser using `localStorage`. The app has a dark theme, centered form layout, and clean UI for a smooth user experience.

---

## 📖 Features

- Add new notes with title and content
- View all saved notes in a card-style layout
- Notes persist using `localStorage`
- Dark theme with centered, responsive form
- Graceful error handling and loading indicators

---

## 🎯 Assignment Objectives Met

### ✅ Build a Simple Note UI
- App built with React using function components and hooks
- Component structure: `AddNote`, `NotesList`, and `App` for routing and state

### ✅ Client-Side Persistence
- Notes are stored in `localStorage` with a key: `"notes"`

### ✅ Design Documentation (“Why?”)

#### **Storage Strategy**
- **Why localStorage + key naming**:  
  `localStorage` is ideal for lightweight client-only persistence without a backend. Key `"notes"` is simple and descriptive for easier debugging and future extension.

#### **Component Structure**
- **Why separate components**:  
  Isolating `AddNote` and `NotesList` improves readability, modularity, and allows individual logic for form and display to remain clean.

#### **State Management**
- **Why useState + this submit handler**:  
  `useState` is ideal for managing local UI state in a small app. Using a submit handler ensures synchronous updates and storage together.

- **Why useEffect to sync storage → state**:  
  `useEffect` runs once when the component mounts, allowing us to load stored notes only when the UI is first loaded.

#### **Styling**
- **Why plain CSS**:  
  Plain CSS gives full control over styling and is more lightweight than UI libraries or Tailwind for a small project.

- **Why display error banner**:  
  Helps notify the user if localStorage fails (e.g. storage quota issues).

---

## 🧪 How to Run

```bash
git clone <-link->
cd custom-note-service
npm install
npm run dev

---

## 🎯 Tech Stack

- React (Vite)
- JavaScript
- Plain CSS
- LocalStorage for persistence

---

##🙌 Author
Made by Arjun Bisht for a frontend mini-project assignment.