import { useContext, useEffect, useState } from "react";
import { DashBoardTopBar } from "../UI-Components/Global-Components/DashBoardTopBar";
import ProjectItemsHolder from "../UI-Components/Global-Components/ProjectItemsHolder";
import CreateProjectBigCTA from "../UI-Components/Small-Components/CreateProjectBigCTA";
import { AccessState } from "../ContextProviders/AccessStateProvider";
import ProjectsService from "../ServiceLayer/ProjectsService";
import ProjectItem from "../Models/ProjectItem";

export const DashBoard = () => {
  const accessState = useContext(AccessState);

  const userId: string = accessState?.currentUserState?.userId;
  const accessToken: string = accessState?.currentUserState?.jwt;

  const projectsService: ProjectsService = new ProjectsService();

  const [projectsList, setProjectsList] = useState<ProjectItem[]>();

  async function getProjects() {
    setProjectsList(
      await projectsService.getAllProjectsForUser(userId, accessToken)
    );
  }

  useEffect(() => {
    getProjects();
  });
  return (
    <div className="h-full">
      <DashBoardTopBar />
      <main className="dashboard-page-main-container h-5/6 flex flex-col justify-center items-center">
        <CreateProjectBigCTA />
        <ProjectItemsHolder />
      </main>
    </div>
  );
};
