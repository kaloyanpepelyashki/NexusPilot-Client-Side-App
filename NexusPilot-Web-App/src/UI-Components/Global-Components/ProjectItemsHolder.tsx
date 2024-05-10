import ProjectItem from "../Small-Components/ProjectItem";

const ProjectItemsHolder: React.FC = () => {
  return (
    <div className="w-full project-items-holder-section flex flex-row flex-nowrap">
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default ProjectItemsHolder;
