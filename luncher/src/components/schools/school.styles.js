import Styled from "styled-components";

export const Card = Styled.div`
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 10px;
  margin: 20px 10px;
  font-size: 0.8rem;
  background-color: #fffff5;
`;

export const DivContainer = Styled.div`
  margin: 20px;
`;

export const SchoolsStyleDiv = {
  display: "grid",
  gridGap: "1rem",
  gridTemplateColumns: "repeat(auto-fill, 390px)",
  fontSize: "15px",
  margin: " auto",
  justifyContent: "center",
  width: "90%"
};

export const ButtonLinkContainer = Styled.div`
  margin: 10px 0;
`;

export const ButtonLink = Styled.button`
  margin: 20px 0;
  text-decoration: none;
  border: 1px solid black;
  padding: 5px;
  color: black;
  margin-top: 20px;
  border-radius: 2px;
`;
