import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LinkEl = styled(Link)`
  background-color: #5b796c;
  padding: 10px 20px;
  border: 1px solid #0b281b;
  border-radius: 4px;
  margin: 5px;
  display: inline-block;
`;
