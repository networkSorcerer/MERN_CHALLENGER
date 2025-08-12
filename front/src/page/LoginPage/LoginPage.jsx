import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../../features/user/userSlice";
import { SidebarContainer } from "../../Layout/style/GlobalStyle";
import { useNavigate } from "react-router";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loginError } = useSelector((state) => state.user);
  const handleGoogleLogin = async (googleData) => {
    dispatch(loginWithGoogle(googleData.credential));
  };
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(clearUser());
   
  };
  return (
    <SidebarContainer>
      {loginError && (
        <div className="error-message">
          <Alert variant="danger">{loginError}</Alert>
        </div>
      )}
      {user ? (
        <div onClick={handleLogout}>
          <p>logout</p>
        </div>
      ) : (
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
      )}
    </SidebarContainer>
  );
};

export default LoginPage;
