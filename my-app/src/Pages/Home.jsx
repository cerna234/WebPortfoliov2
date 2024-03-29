import React from 'react'

import styled from "styled-components";
import Splash from '../Components/Splash';
import About from '../Components/About';
import Skills from '../Components/Skills'
import Projects from '../Components/Projects';
import Icons from '../Components/Icons';
import Title from '../Components/Title';
import Button from '../Components/Button';







const Container = styled.div`
width: 100%;
height: 100%;
background-color: #242424;
margin-top: 0;
overflow-x:hidden;


`
const Home = () => {




    return (
       <Container>
       
       
        <Splash/>
        <Title title="ABOUT"/>
        <About/>
        <Title title="PROJECTS"/>
        <Projects start="0" end="4"/>
        <Button title="VIEW ALL"/>
        <Title title="SKILLS"/>
        <Skills/>
        
        
       
        
   
        
       </Container>
       
    )
}

export default Home
