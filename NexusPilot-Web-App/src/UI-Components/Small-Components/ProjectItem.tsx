const ProjectItem: React.FC = () => {
  return (
    <div className="project-component-wrapper h-44 w-80 bg-white flex flex-col justify-between mr-12 pl-4">
      <div className="project-component-top-section flex justify-start pt-3">
        <h2 className="project-component-title text-2xl text-black">
          Project title
        </h2>
      </div>
      <div className="project-component-bottom-section flex justify-start pb-2">
        <h4 className="project-component-deadline text-black">
          Deadline: 20.07
        </h4>
      </div>
    </div>
  );
};

export default ProjectItem;
