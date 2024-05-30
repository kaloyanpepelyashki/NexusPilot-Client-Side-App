import ProjectItem from "../../Models/ProjectItem";
import { useEffect, useState } from "react";
import ProjectsSlider from "./ProjectsSlider";

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
    <div className="w-full h-full project-items-holder-section flex flex-col items-start pl-10 pb-10 mt-10">
      <ProjectsSlider
        sliderHeading="Active"
        hasCreateAction={true}
        projectsList={activeProjects}
        setOpenOverlay={setOpenOverlay}
        setShouldReload={setShouldReload}
      />
      {closedProjects.length > 0 && (
        <ProjectsSlider
          sliderHeading="Closed"
          hasCreateAction={false}
          projectsList={closedProjects}
          setOpenOverlay={setOpenOverlay}
          setShouldReload={setShouldReload}
        />
      )}
    </div>
  );
};

export default ProjectItemsHolder;
