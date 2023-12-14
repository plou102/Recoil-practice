import { RecoilRoot } from "recoil";
import TodoList from "./TodoList";
import Three from "./three/Three";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <RecoilRoot>
        <TodoList />
        <Three />
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
