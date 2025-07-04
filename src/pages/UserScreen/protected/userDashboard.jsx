import { useAuth } from "@/hooks/useAuth";
export function UserDashboard() {
  const { handleLogout } = useAuth();
  return (
    <div>
      <h1 className="text-7xl">User Dashboard</h1>
      <button
        onClick={handleLogout}
        className="mt-5 px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
