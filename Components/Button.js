"use strict"
export default function Button({ text, color = "blue" }) {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
  };

  return (
    <button className={`${colors[color]} text-white px-4 py-2 rounded`}>
      {text}
    </button>
  );
}