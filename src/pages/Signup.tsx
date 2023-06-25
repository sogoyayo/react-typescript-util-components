import img from '../assets/login.jpg';
import { SignupStyles } from '../styles/Signup.styled';
import Button from '../components/Button';
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
  return (
    <SignupStyles>
      <main>
        <div className="left">
          <div className="logo">Utility</div>
          <form>
            <h1>Create an account</h1>
            <p>Let's get started with 30 day free trial.</p>
            <div className="field name">
              <input type="text" />
              <span>name</span>
            </div>
            <div className="field email">
              <input type="text" />
              <span>Email</span>
            </div>
            <div className="field Password">
              <input type="text" />
              <span>Password</span>
            </div>
            <Button registerText="Create account" />
            <button className="gBtn">
              <GoogleIcon color="primary" fontSize="large" />
              Sign up with Google
            </button>
          </form>
        </div>
        <div className="img-box">
          <Button
            position="absolute"
            right="20px"
            top="20px"
            loginBtn="login"
            width="fit-content"
            pd="0 20px"
            bg="#fff"
            gcolor="#000"
          />
          <img src={img} alt="..." />
        </div>
      </main>
    </SignupStyles>
  );
};

export default Signup;
