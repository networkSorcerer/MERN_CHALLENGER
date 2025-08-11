import { GoogleLogin } from "@react-oauth/google";

const handleGoogleLogin = async (googleData) => {
  //구글 로그인 하기
  dispatch(loginWithGoogle(googleData.credential));
};
const LoginPage = () => {
  return (
    <div>
      <h1>Challenger</h1>
      <div className="card">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
