import { useState } from 'react'
import NewProject from './components/NewProject'
import NoprojectSelected from './components/NoprojectSelected'
import ProjectSideBar from './components/ProjectSideBar'

function App() {

    const [projectState, setProjectState] = useState(
      {selectedProjectId : undefined,  projects : []})


      function handleStartAddProject(){
        setProjectState(prevState =>{
          return{
            ...prevState,
            selectedProjectId:null,
          }
        })
      }

function handleAddProject(projectData) {
  setProjectState(prevState =>{

    const newProjects = {
      ...projectData,
      id: Math.random()
    };

    return {
      ...prevState,
      projects : [...prevState.projects, newProjects]
    }
  })
}







let contnet;
if(projectState.selectedProjectId === null){
  contnet = <NewProject/>
  } else if(projectState.selectedProjectId === undefined){
    contnet=  <NoprojectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
  <main className='h-screen my-8 flex gap-8' >
  <ProjectSideBar onStartAddProject={handleStartAddProject}/>
{contnet}

  </main>
  )
}

export default App
