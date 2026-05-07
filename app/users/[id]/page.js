export default function UserProfile({ params }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <p className="mt-2">User ID: {params.id}</p>
    </div>
  );
}