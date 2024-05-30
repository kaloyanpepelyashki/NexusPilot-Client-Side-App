import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../UI-Components/Global-Components/SideBar";
import InProjectTopBar from "../UI-Components/Global-Components/InProjectTopBar";
import ProjectsService from "../ServiceLayer/ProjectsService";
import { useContext, useEffect, useState } from "react";
import ProjectItem from "../Models/ProjectItem";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import TasksService from "../ServiceLayer/TaskService";
import CreateTaskOverlay from "../UI-Components/Global-Components/CreateTaskOverlay";
import TaskItem from "../Models/TskItem";
import Loader from "../UI-Components/Atomic-components/Loader";
import TasksSlider from "../UI-Components/Global-Components/TasksSlider";

const InProjectPage: React.FC = () => {
  /** Hooks */
  const { projectId } = useParams();
  const accessState = useContext(AccessState);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentProject, setCurrentProject] = useState<ProjectItem | null>(
    null
  );
  // const [projectTasksList, setProjectTasksList] = useState<TaskItem[] | null>(
  //   null
  // );
  const [projectActiveTasks, setProjectActiveTasks] = useState<TaskItem[]>();
  const [projectClosedTasks, setProjectClosedTasks] = useState<TaskItem[]>();

  //Controls when the page reloads
  const [shouldReload, setShouldReload] = useState<boolean>(false);
  //Controls the state of the create task overlay
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //Object declarations
  const projectsService: ProjectsService = new ProjectsService();
  const tasksService: TasksService = new TasksService();

  //Variables
  const jwt = accessState?.currentUserState?.jwt;
  const userId = accessState?.currentUserState?.userId;

  const fetchProjectData = async () => {
    try {
      if (projectId && jwt) {
        setCurrentProject(await projectsService.getProjectData(projectId, jwt));
      } else {
        window.alert("Error fetching project data");
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
        // setProjectTasksList(
        //   await tasksService.getAllProjectTasks(
        //     projectId,
        //     accessState.currentUserState.jwt
        //   )
        // );
        const activeTasks: TaskItem[] = [];
        const closedTasks: TaskItem[] = [];

        const projectTasks = await tasksService.getAllProjectTasks(
          projectId,
          accessState.currentUserState.jwt
        );

        projectTasks?.forEach((taskItem: TaskItem) => {
          if (taskItem.done) {
            closedTasks.push(taskItem);
          } else {
            activeTasks.push(taskItem);
          }
        });

        setProjectActiveTasks(activeTasks);
        setProjectClosedTasks(closedTasks);
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
    fetchProjectTasks().finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    //On reload, just the project tasks need to be fetched
    if (shouldReload) {
      fetchProjectTasks();
    }
  }, [shouldReload]);

  return (
    <>
      <main className="in-project-page-main-section w-full h-full flex ">
        <SideBar projectTitle={currentProject?.title} />
        <div className="in-project-content-wrapper w-full h-full flex flex-col overflow-y-hidden">
          <InProjectTopBar />
          {isLoading ? (
            <Loader />
          ) : (
            <section
              style={{
                background: `url(${currentProject?.backGroundImageUrl})`,
              }}
              className="tasks-pool-section w-full h-full relative flex flex-col items-start bg-cover flex-row overflow-y-hidden"
            >
              <div className="background-blur-layer w-full h-full absolute bg-secondary inset-0 opacity-30 "></div>
              <TasksSlider
                sliderHeading={currentProject?.closed ? "Incomplete" : "Active"}
                hasCreateAction={currentProject?.closed ? false : true}
                tasksList={projectActiveTasks ? projectActiveTasks : []}
                setOpenOverlay={setOpenOverlay}
                setShouldReload={setShouldReload}
              />
              <TasksSlider
                sliderHeading={"Closed"}
                hasCreateAction={false}
                tasksList={projectClosedTasks ? projectClosedTasks : []}
                setOpenOverlay={setOpenOverlay}
                setShouldReload={setShouldReload}
              />
            </section>
          )}
        </div>
      </main>
      {openOverlay ? (
        <CreateTaskOverlay
          jwt={jwt ? jwt : " "}
          userId={userId ? userId : " "}
          projectId={projectId ? projectId : " "}
          setShouldReload={setShouldReload}
          setCloseState={setOpenOverlay}
        />
      ) : (
        " "
      )}
    </>
  );
};

export default InProjectPage;
