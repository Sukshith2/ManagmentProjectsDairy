import { useState } from 'react'
import NewProject from './components/NewProject'
import NoprojectSelected from './components/NoprojectSelected'
import ProjectSideBar from './components/ProjectSideBar'
import SelectedProject from './components/selectedProject';

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

      function handleCancelSlected() {
           setProjectState(prevState =>{
          return{
            ...prevState,
            selectedProjectId:undefined,
          }
        })

      }


      function handleSlectProject(id) {
           setProjectState(prevState =>{
          return{
            ...prevState,
            selectedProjectId:id,
          }
        })

      }

      function handleDeleteProjectSelected(id){
          setProjectState(prevState =>{
          return{
            ...prevState,
            selectedProjectId:undefined,
            projects: prevState.projects.filter(
              (project) => project.id !== prevState.selectedProjectId
            ),
          }
        })

      }

function handleAddProject(projectData) {
  setProjectState(prevState =>{
      const projectId = Math.random();
    const newProjects = {
      ...projectData,
      id: projectId,
    };
console.log(newProjects);
    return {
      ...prevState,
      projects : [...prevState.projects, newProjects]   
     
    };
  });
}
const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

let contnet = <SelectedProject project={ selectedProject } onDelete = {handleDeleteProjectSelected} />;
if(projectState.selectedProjectId === null){
  contnet = <NewProject  onAdd={handleAddProject} handleCancel= {handleCancelSlected}/>
  } else if(projectState.selectedProjectId === undefined){
    contnet=  <NoprojectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
  <main className='h-screen my-8 flex gap-8' >
  <ProjectSideBar onStartAddProject={handleStartAddProject} onSelectProject={handleSlectProject}  projects = {projectState.projects}/>
{contnet}

  </main>
  )
}

export default App
