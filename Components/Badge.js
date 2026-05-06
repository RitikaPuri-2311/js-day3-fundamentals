"use strict"
export default function Badge({ label }) {
  return (
    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
      {label}
    </span>
  );
}