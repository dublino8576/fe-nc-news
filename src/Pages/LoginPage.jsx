import { useNavigate } from "react-router-dom";

export const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn btn-outline-dark btn-lg"
      onClick={() => {
        navigate(`/`);
        setIsLoggedIn(true);
      }}
    >
      Login!
    </button>
  );
};
