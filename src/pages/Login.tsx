import Button from '../components/Button';
import img from '../assets/login.jpg';
import { LoginStyles } from '../styles/Login.styled';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
  return (
    <LoginStyles>
      <main>
        <div className="left">
          <h1>Need to go out?</h1>
          <div>
            <h1>Welcome back, Olivia</h1>
            <p>Continue with google or enter your details.</p>
            <button className="gBtn">
              <GoogleIcon color="primary" fontSize="large" />
              Sign up with Google
            </button>
            <div className="line">
              <span>or</span>
            </div>
            <div className="field email">
              <input type="text" />
              <span>Email</span>
            </div>
            <div className="field Password">
              <input type="text" />
              <span>Password</span>
            </div>
            <a href="/forgot-password">Forgot password</a>
            <Button loginText="Log in" />
            <p>
              Don't have account? <a href="/login">Sign up for free</a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={img} alt="..." />
        </div>
      </main>
    </LoginStyles>
  );
};
