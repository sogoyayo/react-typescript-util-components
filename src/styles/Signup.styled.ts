import styled from 'styled-components';

export const SignupStyles = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow-y: auto;

  main {
    height: 100%;
    width: 90%;
    max-width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }

  .left {
    width: 45%;
    max-width: 100%;
    height: 100%;
  }

  .logo {
    font-size: 32px;
  }

  form {
    width: 80%;
    margin: 0px auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-top: 15px;
  }

  .field {
    width: 100%;
    height: 45px;
    border-bottom: 2px solid lightgray;
    position: relative;
    display: flex;
    border-radius: 6px;
    align-items: center;
    margin-top: 20px;
  }

  .field:hover {
    border: 2px solid skyblue;
  }

  .field span {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    left: 5px;
    transition: all 0.3s ease;
    background-color: #fff;
  }

  .field:hover span {
    top: -10px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 6px;
    border: none;
    padding: 0 0 0 5px;
    font-size: 16px;
  }

  .img-box {
    margin-left: 20px;
    height: 100%;
    width: 60%;
    position: relative;
    border-radius: 24px 0px 0px 24px;
  }

  .img-box img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 24px 0px 0px 24px;
  }

  .gBtn {
    width: '100%';
    max-width: 100%;
    height: 45px;
    color: '#fff';
    background-color: '#fff';
    border-radius: 6px;
    outline: none;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
