import styled from "styled-components";
import Home from './Pages/Home'
import Projects from "./Components/Projects";
import { Project } from "./Data";





const Container = styled.div`
width: 100%;
height: 100%;
padding: 0;
margin-top: 0;
box-sizing: 0;
`

const App = () => {
  return (
    <Container>
       
        <Home/>
        
       
       
          
       
    </Container>
  );
};

export default App;
