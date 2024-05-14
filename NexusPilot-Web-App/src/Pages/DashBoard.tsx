import { useContext, useEffect, useState } from "react";
import { DashBoardTopBar } from "../UI-Components/Global-Components/DashBoardTopBar";
import ProjectItemsHolder from "../UI-Components/Global-Components/ProjectItemsHolder";
import CreateProjectBigCTA from "../UI-Components/Small-Components/CreateProjectBigCTA";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import ProjectsService from "../ServiceLayer/ProjectsService";
import ProjectItem from "../Models/ProjectItem";
import { useNavigate } from "react-router-dom";

export const DashBoard = () => {
  const accessState = useContext(AccessState);
  const navigate = useNavigate();

  const userId: string | undefined = accessState?.currentUserState?.userId;
  const accessToken: string | undefined = accessState?.currentUserState?.jwt;

  const projectsService: ProjectsService = new ProjectsService();

  const [projectsList, setProjectsList] = useState<ProjectItem[] | null>([]);

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
    getProjects();
  }, []);

  return (
    <div className="h-full">
      <DashBoardTopBar />
      <main className="dashboard-page-main-container h-5/6 flex flex-col justify-center items-center">
        {projectsList != null ? (
          projectsList?.length < 0 ? (
            <CreateProjectBigCTA />
          ) : (
            <ProjectItemsHolder projectsList={projectsList} />
          )
        ) : (
          <CreateProjectBigCTA />
        )}
      </main>
    </div>
  );
};
