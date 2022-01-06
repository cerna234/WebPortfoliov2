import styled from "styled-components";
import Home from './Pages/Home'
import AllProjects from "./Pages/AllProjects";
import NavBar from "./Components/NavBar";





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
      
        <NavBar/>
        <Home/>
        
     
       
          
       
    </Container>
  );
};

export default App;
