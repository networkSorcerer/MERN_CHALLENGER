import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../../features/user/userSlice";
import { useNavigate } from "react-router";
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loginError } = useSelector((state) => state.user);
  const handleGoogleLogin = async (googleData) => {
    dispatch(loginWithGoogle(googleData.credential));
  };
  if (user) {
    navigate("/");
  }

  return (
    <div>
      <h1>Challenger</h1>
      {loginError && (
        <div className="error-message">
          <Alert variant="danger">{loginError}</Alert>
        </div>
      )}
      <div className="card">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default LoginPage;
