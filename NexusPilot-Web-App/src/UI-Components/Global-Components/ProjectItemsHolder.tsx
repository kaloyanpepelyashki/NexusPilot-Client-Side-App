import ProjectItemComponent from "../Small-Components/ProjectItem";
import ProjectItem from "../../Models/ProjectItem";
import { useEffect, useState } from "react";

type ProjectItemsHolderProps = {
  projectsList: ProjectItem[];
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectItemsHolder: React.FC<ProjectItemsHolderProps> = ({
  projectsList,
  setShouldReload,
}) => {
  const [activeProjects, setActiveProjects] = useState<ProjectItem[]>([]);
  const [closedProjects, setClosedProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const sortProjects = () => {
      const activeProjectsTemp: ProjectItem[] = [];
      const closedProjectsTemp: ProjectItem[] = [];

      console.log(activeProjects);

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
    console.log(closedProjects);
  }, []);

  return (
    <div className="w-full h-full project-items-holder-section flex flex-col items-start pl-10 mt-10">
      <div className="active-projects-section w-full flex flex-col items-start">
        <h1 className="text-3xl text-heading font-bold mb-3">
          Active Projects
        </h1>
        <div className="projects-slider-section w-full flex flex-row flex-nowrap overflow-x-scroll">
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
        <div className="active-projects-section w-full flex flex-col items-start">
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
