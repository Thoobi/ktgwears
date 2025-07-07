export const navcomponent = [
  {
    title: "SHOP",
    path: "/Shop",
  },
  {
    title: "STORIES",
    path: "/Stories",
  },
  {
    title: "ABOUT",
    path: "/About",
  },
];

export const authcomponent = (isAuthenticated) => [
  {
    title: isAuthenticated ? "DASHBOARD" : "LOGIN",
    path: isAuthenticated ? "/user" : "/auth",
  },
  {
    title: "CART",
  },
];
