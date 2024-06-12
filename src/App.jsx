import React, { useState } from "react";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const addNote = () => {
    if (newNote.title && newNote.content) {
      setNotes([...notes, newNote]);
      setNewNote({ title: "", content: "" });
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <center>
      <div className="container mx-auto p-20 ">
        <h1 className="text-3xl font-bold mb-4">Aplikasi Catatan Sederhana</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, index) => (
            <Note key={index} note={note} onDelete={() => deleteNote(index)} />
          ))}
        </div>
        <div className="mt-8">
          <input
            type="text"
            className="p-2 w-[500px] rounded-md border-2 border-black"
            placeholder="Judul Catatan"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
          <br></br>
          <textarea
            className="p-2 mt-4 w-[500px] rounded-md border-2 border-black"
            placeholder="Masukkan isi catatannya ya sayang :)"
            value={newNote.content}
            onChange={(e) =>
              setNewNote({ ...newNote, content: e.target.value })
            }
          />
          <br />
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
            onClick={addNote}
          >
            Tambah Catatan
          </button>
        </div>
      </div>{" "}
    </center>
  );
}

export default App;
