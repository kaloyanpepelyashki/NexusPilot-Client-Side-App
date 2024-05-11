import { useParams } from "react-router-dom";
import SideBar from "../UI-Components/Global-Components/SideBar";
import InProjectTopBar from "../UI-Components/Global-Components/InProjectTopBar";
import TaskItem from "../UI-Components/Small-Components/TaskItem";

const InProjectPage: React.FC = () => {
  const { projectId } = useParams();

  console.log(projectId);

  return (
    <main className="in-project-page-main-section w-full h-full flex flex-row ">
      <SideBar />
      <div className="in-project-content-wrapper w-full h-full flex flex-col">
        <InProjectTopBar />
        <h2>in project page</h2>
        <div className="w-1/4 bg-primary">
          <TaskItem />
        </div>
      </div>
    </main>
  );
};

export default InProjectPage;
