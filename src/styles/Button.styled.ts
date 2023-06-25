import styled from 'styled-components';

interface ButtonStyledProps {
  gcolor?: string; // Update prop name to 'color'
  gbg?: string; // Update prop name to 'back'
  top?: string; // Update prop name to 'back'
  right?: string; // Update prop name to 'back'
  position?: string;
  pd?: string;
  width?: string;
  bg?: string; // Update prop name to 'back'
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${(props) => props.width || '100%'};
  max-width: 100%;
  height: 45px;
  color: ${(props) => props.gcolor || '#fff'};
  background-color: ${(props) => props.gbg || props.bg || '#000'};
  border-radius: 6px;
  outline: none;
  margin-top: 15px;
  cursor: pointer;
  padding: ${(props) => props.pd || 'none'};
  position: ${(props) => props.position || 'static'};
  right: ${(props) => props.right || '0'};
`;
