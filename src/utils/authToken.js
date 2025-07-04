import { useAuth } from "@/hooks/useAuth";

export const useGetUserToken = () => {
  const { loading, setLoading } = useAuth();
  const data = JSON.parse(
    localStorage.getItem("sb-lovswdqjlfehafazgjkm-auth-token")
  );
  if (loading && data === null) {
    setLoading(true);
  }
  return data ? data.access_token : null;
};

export const useGetUserId = () => {
  const data = JSON.parse(
    localStorage.getItem("sb-lovswdqjlfehafazgjkm-auth-token")
  );
  return data ? data.user.id : null;
};
