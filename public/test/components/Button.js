import styled, { css } from 'styled-components';
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  color: #d32323;
  font-size: 16px;
  margin: 0.5em 0.3em;
  padding: 0.25em 1em;
  ${props => props.secondary && css`
    color: #666666;
  `}
`;
const Container = styled.div`
  text-align: center;
`;
export default Button;