import { useContext, useState, useEffect } from "react";
import "./ProjectsList.css";

//ASSETS
import LikeOutline from "../../assets/like.svg";
import LikeFilled from "../../assets/likeFilled.svg";

//UTILS
import { getApiData } from "../../services/apiServices";
import { AppContext } from "../../contexts/AppContext";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [favProjects, setFavProject] = useState([])
  const appContext = useContext(AppContext)

  const handleSavedProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if(prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
        sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
        return prevFavProjects.filter((projectId) => projectId !== id)
      } else {
        sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
        return [...prevFavProjects, id]
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
    if(savedFavProjects) {
      setFavProject(savedFavProjects)
    }
  }, [])

  return (
    <div className="projects-section">
      <div className="projects-hero txt-center">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>
      <div className="projects-grid">
        {
          projects ?
          projects.map((project) => (
            <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
              <div className="thumb tertiary-background" style={{ backgroundImage: `url(${project.thumb})`}}></div> 
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <img onClick={() => handleSavedProjects(project.id)} src={favProjects.includes(project.id) ? LikeFilled : LikeOutline} height="30px"/>
            </div>
          )) : null
        }
      </div>
    </div>
  );
}

export default ProjectsList;
