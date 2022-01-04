import styled from "styled-components";
import {Desktop} from '../responsive'
import Title from "./Title";
import {Project,skills2} from '../Data'
import {FaGithub,FaCode} from "react-icons/fa"
import { VscInspect} from "react-icons/vsc";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #242424;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    

`


const ProjectContainer = styled.div`

        display: grid;
        grid-template-columns:  auto;
        ${Desktop({gridTemplateColumns:"auto auto"})}
        padding: 10px;
        padding-top: 10vh;
        width: 100%;
        height: 100%;
        position: relative;
      


        .GridItem{
            position: relative;
            width: 100%;
            height: 60vh;
           font-size: 30px;
           text-align: center;
           display: flex;
           flex-direction: column;
           justify-content: space-evenly;
           text-align: center;

           p{
               color: #c5c4c4;
               padding-top: 20px;
               padding-bottom: 20px;
               font-size: 15px;
               width: 50%;
               left: 25%;
               position: relative;
               text-shadow: 5px 5px 5px #222;
           }
          
           .ProjectName{
               font-size: 18px;
               font-weight: bold;
               color: white;
           }

           
        }

       

        .projectImage{
            width: 80%;
            position: relative;
            left: 10%;
            height: 200px;
            box-shadow: 5px 4px 7px #131313d8;
            background-size: cover;
            background-position: center;
        }
        
`

const Links = styled.div`
    width: 100%;
    height: 20vh;
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    position: relative;
    left: 20%;

    a{
        color: #a0a0a0;
        font-size: 20px;
    }

    a:hover{
        color: #E27357;
        transform: scale(1.1);
        transition: ease-in-out 0.2s;
    }
`

const ViewALL = styled.div`
width: 100%;
height: 10vh;
background-color: red;
text-align: center;
`


const Projects = (props) =>{

    return(
       
        <Container>
           
       
        
           <ProjectContainer>

           
        {Project.slice(props.start,props.end).map((d, idx) =>{
     return (

     <div   key={idx}>
         
        <div className="GridItem">

       
         <p className="ProjectName">{d.ProjectName}</p>
         <div className="projectImage" style={{backgroundImage: "url(" + d.ProjectUrl + ")"}}></div>
         <p>{d.ProjectDescription}</p>

         <Links>
            <a target="_blank" href={d.ProjectLiveUrl}><VscInspect/></a>
            <a target="_blank" href={d.ProjectGithubLink}><FaGithub/></a>
         </Links>


         </div>
         
      
     
     </div>
    
     )
   })}
   </ProjectContainer>

  
  
    </Container>

    )

    
   
} 


export default Projects
