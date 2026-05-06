export default function UserList({ users }) {
  return (
    <ul className="mt-4">
      {users.map((user, index) => (
        <li key={index} className="border p-2 mb-2">
          {user}
        </li>
      ))}
    </ul>
  );
}