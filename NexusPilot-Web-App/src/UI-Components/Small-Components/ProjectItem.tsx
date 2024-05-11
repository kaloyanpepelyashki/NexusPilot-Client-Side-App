type ProjectItemProps = {
  title: string;
  deadline: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ title, deadline }) => {
  return (
    <div className="project-component-wrapper h-44 w-80 relative flex flex-col justify-between mr-12 pl-4 rounded-lg bg-white">
      <div className="project-component-top-section w-full flex justify-start pt-3 backdrop-blur-sm z-10 pl-3">
        <h2 className="project-component-title text-2xl font-bold text-heading">
          {title}
        </h2>
      </div>
      <div className="project-component-bottom-section w-full flex justify-start pb-2 pl-2.5 backdrop-blur-sm z-10">
        <h4 className="project-component-deadline font-bold text-heading">
          Deadline: {deadline}
        </h4>
      </div>
      <div
        className="back-ground-image w-full h-full  flex absolute rounded-lg bg-cover z-0"
        style={{
          backgroundImage:
            "url(https://mixkit.imgix.net/art/401/401-original.png-1000h.png)",
        }}
      ></div>
    </div>
  );
};

export default ProjectItem;
