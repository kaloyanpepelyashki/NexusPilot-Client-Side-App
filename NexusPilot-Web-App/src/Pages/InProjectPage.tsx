import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../UI-Components/Global-Components/SideBar";
import InProjectTopBar from "../UI-Components/Global-Components/InProjectTopBar";
import ProjectsService from "../ServiceLayer/ProjectsService";
import { useContext, useEffect, useState } from "react";
import ProjectItem from "../Models/ProjectItem";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import TasksService from "../ServiceLayer/TaskService";
import Add from "@mui/icons-material/Add";
import CreateTaskOverlay from "../UI-Components/Global-Components/CreateTaskOverlay";
import TaskItem from "../Models/TskItem";
import TaskItemComponent from "../UI-Components/Small-Components/TaskItem";

const InProjectPage: React.FC = () => {
  /** Hooks */
  const { projectId } = useParams();
  const accessState = useContext(AccessState);
  const jwt = accessState?.currentUserState?.jwt;
  const userId = accessState?.currentUserState?.userId;

  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState<ProjectItem | null>(
    null
  );
  const [projectTasksList, setProjectTasksList] = useState<TaskItem[] | null>(
    null
  );
  //Controls when the page reloads
  const [shouldReload, setShouldReload] = useState<boolean>(false);
  //Controls the state of the create task overlay
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //Object declarations
  const projectsService: ProjectsService = new ProjectsService();
  const tasksService: TasksService = new TasksService();

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

  useEffect(() => {
    //On reload, just the project tasks need to be fetched
    if (shouldReload) {
      fetchProjectTasks();
    }
  }, []);

  return (
    <>
      <main className="in-project-page-main-section w-full h-full flex">
        <SideBar projectTitle={currentProject?.title} />
        <div className="in-project-content-wrapper w-full h-full flex flex-col">
          <InProjectTopBar />

          <section
            style={{
              background: `url(${currentProject?.backGroundImageUrl})`,
            }}
            className="tasks-pool-section w-full h-full flex flex-col items-start bg-cover  flex-row"
          >
            <div className="background-cover w-full h-5/6 absolute bg-secondary opacity-20 overflow-y-hidden"></div>
            <div className="active tasks pool w-full h-1/2 flex flex-col items-start pl-10  z-20">
              <div className="active-pool-heading-holder w-full flex flex-row items-center mt-10 mb-4 p-5 ">
                <h2 className="text-secondary text-2xl font-extrabold">
                  Active Tasks
                </h2>
                <div
                  onClick={() => setOpenOverlay(true)}
                  className="ml-5 text-4xl hover:cursor-pointer hover:scale-110"
                >
                  <Add
                    fontSize="inherit"
                    className="text-secondary font-bold"
                  />
                </div>
              </div>
              <div className="w-full flex flex-row flex-nowrap">
                {projectTasksList && projectTasksList?.length > 0
                  ? projectTasksList.map((task) => {
                      if (task.done == false) {
                        console.log(task);
                        return (
                          <TaskItemComponent
                            id={task.id}
                            summary={task.summary}
                            endDate={task.endDate}
                            priority={task.pirority}
                            shouldReload={setShouldReload}
                          />
                        );
                      }
                    })
                  : " "}
              </div>
            </div>
            <div className="active tasks pool w-full h-1/2 flex flex-col items-start pl-10  z-20">
              <div className="active-pool-heading-holder w-full flex flex-row items-center mt-10 mb-4 p-5 ">
                <h2 className="text-secondary text-2xl font-extrabold">
                  Closed Tasks
                </h2>
              </div>
              <div className="w-full flex flex-row flex-nowrap">
                {projectTasksList && projectTasksList?.length > 0
                  ? projectTasksList.map((task) => {
                      if (task.done) {
                        console.log(task);
                        return (
                          <TaskItemComponent
                            id={task.id}
                            summary={task.summary}
                            endDate={task.endDate}
                            priority={task.pirority}
                            shouldReload={setShouldReload}
                          />
                        );
                      }
                    })
                  : " "}
              </div>
            </div>
          </section>
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
