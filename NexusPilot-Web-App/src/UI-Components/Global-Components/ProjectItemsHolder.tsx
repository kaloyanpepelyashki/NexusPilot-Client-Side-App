import ProjectItem from "../Small-Components/ProjectItem";

const ProjectItemsHolder: React.FC = () => {
  return (
    <div className="w-full project-items-holder-section flex flex-row flex-nowrap">
      <ProjectItem title="project one" deadline="27.08" />
      <ProjectItem title="pwa-web app" deadline="17.05" />
    </div>
  );
};

export default ProjectItemsHolder;
