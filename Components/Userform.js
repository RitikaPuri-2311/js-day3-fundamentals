"use client";
import { useState } from "react";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    addUser(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <button className="bg-blue-500 text-white px-3 py-2 rounded">
        Add User
      </button>
    </form>
  );
}