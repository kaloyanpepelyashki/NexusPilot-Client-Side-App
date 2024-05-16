import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../UI-Components/Global-Components/SideBar";
import InProjectTopBar from "../UI-Components/Global-Components/InProjectTopBar";
import TaskItem from "../UI-Components/Small-Components/TaskItem";
import ProjectsService from "../ServiceLayer/ProjectsService";
import { useContext, useEffect, useState } from "react";
import ProjectItem from "../Models/ProjectItem";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import TasksService from "../ServiceLayer/TaskService";
import Add from "@mui/icons-material/Add";

const InProjectPage: React.FC = () => {
  //Hooks
  const { projectId } = useParams();
  const accessState = useContext(AccessState);
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState<ProjectItem | null>(
    null
  );
  const [projectTasksList, setProjectTasksList] = useState<TaskItem[] | null>(
    null
  );

  //Object declarations
  const projectsService: ProjectsService = new ProjectsService();
  const tasksService: TasksService = new TasksService();

  const fetchProjectData = async () => {
    try {
      if (projectId && accessState?.currentUserState?.jwt) {
        setCurrentProject(
          await projectsService.getProjectData(
            projectId,
            accessState.currentUserState.jwt
          )
        );
      } else {
        window.alert("Error fetching projects");
        navigate("/dashboard");
      }
    } catch (e) {
      console.log("Error fetching project data: ", e);
      window.alert("Error fetching projects, please refresh the page");
    }
  };

  const fetchProjectTasks = async () => {
    try {
      if (projectId && accessState?.currentUserState?.jwt) {
        setProjectTasksList(
          await tasksService.getAllProjectTasks(
            projectId,
            accessState.currentUserState.jwt
          )
        );
      } else {
        window.alert("Error fetching tasks. Try refresing the page");
      }
    } catch (e) {
      console.log("Error fetching tasks for project: ", e);
      window.alert("Error fetching tasks. Try refresing the page");
    }
  };

  useEffect(() => {
    fetchProjectData();
    fetchProjectTasks();
  }, []);

  return (
    <main className="in-project-page-main-section w-full h-full flex flex-row ">
      <SideBar projectTitle={currentProject?.title} />
      <div className="in-project-content-wrapper w-full h-full flex flex-col">
        <InProjectTopBar />

        <section className="tasks-pool-section w-full heigh-full flex flex-col items-start">
          <div className="active tasks pool w-full h-1/2 flex flex-col items-start pl-10">
            <div className="active-pool-heading-holder flex flex-row items-center mt-10 ">
              <h2 className="text-heading text-2xl font-bold">Active Tasks</h2>
              <div className="ml-5 text-4xl">
                <Add fontSize="inherit" className="text-heading font-bold " />
              </div>
            </div>
            {projectTasksList?.length == 0 ? <TaskItem /> : " "}
          </div>
        </section>
      </div>
    </main>
  );
};

export default InProjectPage;
