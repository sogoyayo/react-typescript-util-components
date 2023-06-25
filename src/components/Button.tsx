import { ButtonStyled } from '../styles/Button.styled';
import { IButton } from '../types/proptypes';

const Button = ({
  registerText,
  googleText,
  loginBtn,
  gcolor,
  gbg,
  top,
  bg,
  right,
  position,
  pd,
  width,
  loginText,
  gloginText,
}: IButton) => {
  return (
    <ButtonStyled
      position={position}
      top={top}
      right={right}
      gcolor={gcolor}
      gbg={gbg}
      width={width}
      pd={pd}
      bg={bg}
    >
      {registerText} {googleText} {loginBtn} {loginText} {gloginText}
    </ButtonStyled>
  );
};

export default Button;
