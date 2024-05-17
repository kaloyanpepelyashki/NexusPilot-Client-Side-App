import ProjectItemComponent from "../Small-Components/ProjectItem";
import ProjectItem from "../../Models/ProjectItem";
import { useEffect, useState } from "react";
import Add from "@mui/icons-material/Add";

type ProjectItemsHolderProps = {
  projectsList: ProjectItem[];
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectItemsHolder: React.FC<ProjectItemsHolderProps> = ({
  projectsList,
  setShouldReload,
  setOpenOverlay,
}) => {
  const [activeProjects, setActiveProjects] = useState<ProjectItem[]>([]);
  const [closedProjects, setClosedProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const sortProjects = () => {
      const activeProjectsTemp: ProjectItem[] = [];
      const closedProjectsTemp: ProjectItem[] = [];

      projectsList.forEach((projectItem) => {
        if (projectItem.closed) {
          closedProjectsTemp.push(projectItem);
        } else {
          activeProjectsTemp.push(projectItem);
        }
      });

      setActiveProjects(activeProjectsTemp);
      setClosedProjects(closedProjectsTemp);
    };
    sortProjects();
  }, []);

  return (
    <div className="w-full h-full project-items-holder-section flex flex-col items-start pl-10 mt-10">
      <div className="active-projects-section w-full h-1/2 flex flex-col items-start">
        <div className="flex flex-row items-center mt-10 mb-5">
          <h1 className="text-3xl text-heading font-bold ">Active Projects</h1>
          <div
            onClick={() => setOpenOverlay(true)}
            className="ml-5 text-4xl hover:cursor-pointer hover:scale-110"
          >
            <Add fontSize="inherit" className="text-heading font-bold" />
          </div>
        </div>
        <div className="projects-slider-section w-full h-full flex flex-row flex-nowrap overflow-x-scroll mt-10">
          {activeProjects.map((projectItem) => {
            return (
              <ProjectItemComponent
                key={projectItem.id}
                id={projectItem.id}
                title={projectItem.title}
                deadline={projectItem.endDate}
                thumbnailUrl={projectItem.tumbnailImageUrl}
                closed={projectItem.closed}
                setShouldReload={setShouldReload}
              />
            );
          })}
        </div>
      </div>
      {closedProjects.length > 0 && (
        <div className="closed-projects-section w-full h-full flex flex-col items-start">
          <h1 className="text-3xl text-heading font-bold mb-3">
            Closed Projects
          </h1>
          <div className="projects-slider-section w-full flex flex-row flex-nowrap overflow-x-scroll">
            {closedProjects.map((projectItem) => {
              return (
                <ProjectItemComponent
                  key={projectItem.id}
                  id={projectItem.id}
                  title={projectItem.title}
                  deadline={projectItem.endDate}
                  thumbnailUrl={projectItem.tumbnailImageUrl}
                  closed={projectItem.closed}
                  setShouldReload={setShouldReload}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItemsHolder;
