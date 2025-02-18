import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserInfo } from "../utils/api";

export const LoginPage = () => {
  /* const [userInfo, setUserInfo] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchUserInfo().then(({ users }) => {
      setUserInfo(users[0]);
    });
  }, []);

  function handleClick() {
    setIsClicked(true);
    setUserInfo(userInfo);
    console.log(userInfo, "user info");
  } */
  return (
    <Link to="/">
      <button
        type="button"
        className="btn btn-outline-dark btn-lg"
        //onClick={handleClick}
      >
        Login!
      </button>
    </Link>
  );
};
