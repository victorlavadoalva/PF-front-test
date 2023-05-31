import { ColorRing } from "react-loader-spinner";
import LoginButton from "../../Components/LoginButton/LoginButton";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import Profile from "../../Components/Profile/Profile";

import { useAuth0 } from "@auth0/auth0-react";
export default function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div>
        <h1>loading</h1>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );

  return (
    <div>
      <h1>Application</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}
