import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div className="bg-white p-4 m-4 rounded-md shadow-md border-2 border-black">
      <h2 className="text-2xl font-semibold mb-2">{note.title}</h2>
      <p className="text-gray-700">{note.content}</p>
      <button
        onClick={onDelete}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Hapus
      </button>
    </div>
  );
};

export default Note;
