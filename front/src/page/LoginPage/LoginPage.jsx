import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google/dist";
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const handleGoogleLogin = async (googleData) => {
  //구글 로그인 하기
  dispatch(loginWithGoogle(googleData.credential));
};
const LoginPage = () => {
  console.log("Login Page google api id ", GOOGLE_CLIENT_ID);
  return (
    <div>
      <h1>Challenger</h1>
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
