import { useContext, useEffect, useState } from "react";
import { DashBoardTopBar } from "../UI-Components/Global-Components/DashBoardTopBar";
import ProjectItemsHolder from "../UI-Components/Global-Components/ProjectItemsHolder";
import CreateProjectBigCTA from "../UI-Components/Small-Components/CreateProjectBigCTA";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import ProjectsService from "../ServiceLayer/ProjectsService";
import ProjectItem from "../Models/ProjectItem";
import { useNavigate } from "react-router-dom";
import CreateProjectOverlay from "../UI-Components/Global-Components/CreateProjectOverlay";
import Loader from "../UI-Components/Atomic-components/Loader";

export const DashBoard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const accessState = useContext(AccessState);
  const navigate = useNavigate();

  const [shouldReload, setShouldReloald] = useState<boolean>(false);

  const [projectsList, setProjectsList] = useState<ProjectItem[] | null>([]);

  const userId: string = accessState?.currentUserState?.userId
    ? accessState?.currentUserState?.userId
    : "";
  const accessToken: string = accessState?.currentUserState?.jwt
    ? accessState?.currentUserState?.jwt
    : " ";

  const projectsService: ProjectsService = new ProjectsService();

  async function getProjects() {
    try {
      if (userId && accessToken) {
        setProjectsList(
          await projectsService.getAllProjectsForUser(userId, accessToken)
        );

        return;
      }

      navigate("/");
    } catch (error) {
      console.log("Error fetching projects:  ", error);
      window.alert("Error fetching projects, please refresh the page");
    }
  }

  useEffect(() => {
    if (shouldReload) {
      setIsLoading(true);
      getProjects().finally(() => {
        setIsLoading(false);
      });
    }
  }, [shouldReload]);

  useEffect(() => {
    getProjects().finally(() => {
      setIsLoading(false);
    });
  }, []);

  const [openCreateProjectOverlay, setOpenCreateProjectOverlay] =
    useState<boolean>(false);

  if (userId.length > 0 || accessToken.length > 0) {
    return (
      <div className="h-full">
        <DashBoardTopBar />
        {isLoading ? (
          <Loader />
        ) : (
          <main className="dashboard-page-main-container h-full flex flex-col justify-center items-center pb-20">
            {projectsList != null ? (
              projectsList?.length < 0 ? (
                <CreateProjectBigCTA setState={setOpenCreateProjectOverlay} />
              ) : (
                <ProjectItemsHolder
                  setOpenOverlay={setOpenCreateProjectOverlay}
                  setShouldReload={setShouldReloald}
                  projectsList={projectsList}
                />
              )
            ) : (
              <CreateProjectBigCTA setState={setOpenCreateProjectOverlay} />
            )}
          </main>
        )}
        {openCreateProjectOverlay ? (
          <CreateProjectOverlay
            userId={userId}
            jwt={accessToken}
            setCloseState={setOpenCreateProjectOverlay}
            setShouldReload={setShouldReloald}
          />
        ) : (
          " "
        )}
      </div>
    );
  } else {
    navigate("/");
  }
};
