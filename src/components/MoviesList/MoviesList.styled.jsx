import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackStyled = styled.button`
  padding: 5px 15px;
  margin: 15px;
  border-radius: 10px;
  border: 0.5px solid #cccccc;
`;

export const AdditionalStyled = styled.h4`
  padding-left: 15px;
  font-size: 20px;
`;

export const LinkStyled = styled(Link)`
display: inline-block;
  padding: 5px 15px;
  margin: 0 15px 5px;
  border-radius: 10px;
  border: 0.5px solid #cccccc;
  font-weight:600;
  text-decoration: none;
`;

export const FormStyled = styled.form`
  margin: 15px;  
`
