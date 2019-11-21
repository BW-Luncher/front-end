import styled from "styled-components";

export const Card = styled.div`
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 10px;
  margin: 40px 10px;
  font-size: 1rem;
  background-color: #fffff5;
  opacity: 88%;
  box-shadow: 5px 10px 2px #2d2b2b;
`;

export const DivContainer = styled.div`
  margin: 20px;
`;

export const ButtonLinkContainer = styled.div`
  margin: 10px 0;
`;

export const ButtonLink = styled.button`
  margin: 20px 0;
  text-decoration: none;
  border: 1px solid black;
  padding: 10px;
  color: black;
  margin-top: 20px;
  border-radius: 2px;
  font-size: 15px;
  color: white;
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
