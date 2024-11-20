import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projects, setProjects] = useState({
    selectedProj: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjects((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProj,
        id: taskId
      };

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks]
      }
    })
  }

  function handleRemoveTask(id) {
    setProjects((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id)
      }
    });
  }

  function handleRemoveProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProj: undefined,
        projects: prev.projects.filter((proj) => proj.id !== prev.selectedProj)
      }
    });
  }

  function handleSelectProject(id) {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProj: id
      }
    });
  }

  function handleStartAddProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProj: null
      }
    });
  }

  function handleCancel() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProj: undefined
      }
    });
  }

  function handleAddProject(project) {
    setProjects((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId
      }

      return {
        ...prev,
        selectedProj: undefined,
        projects: [...prev.projects, newProject]
      }
    })
  }

  const selectedProject = projects.projects.find(proj => proj.id === projects.selectedProj);
  let content = <SelectedProject project={selectedProject} onRemove={handleRemoveProject} onAddTask={handleAddTask} onRemoveTask={handleRemoveTask} tasks={projects.tasks} />;

  if (projects.selectedProj === null)
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  else if (projects.selectedProj === undefined)
    content = <NoProject onStartAdd={handleStartAddProject} />

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onSelectProject={handleSelectProject} onStartAdd={handleStartAddProject} projects={projects.projects} selectProjectId={projects.selectedProj} />
      {content}
    </main>
  );
}

export default App;
