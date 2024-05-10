import { DashBoardTopBar } from "../UI-Components/Global-Components/DashBoardTopBar";
import ProjectItemsHolder from "../UI-Components/Global-Components/ProjectItemsHolder";
import CreateProjectBigCTA from "../UI-Components/Small-Components/CreateProjectBigCTA";

export const DashBoard = () => {
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
