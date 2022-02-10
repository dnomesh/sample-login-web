import "./App.scss";
import styled from "styled-components";
import { AccountBox } from "./components/login/accountBox";
import Example from "./components/userForms/login";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
      <Example />
    // <AppContainer>
    //   <AccountBox />
    // </AppContainer>
  );
}

export default App;
