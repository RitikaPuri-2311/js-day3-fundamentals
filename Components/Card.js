"use strict"
export default function Card({ title, description, children }) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-64">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-Red-500">{description}</p>
      {children}
    </div>
  );
}