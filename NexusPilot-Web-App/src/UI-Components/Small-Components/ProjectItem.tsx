import { useNavigate } from "react-router-dom";

type ProjectItemProps = {
  id: string;
  title: string;
  deadline: string;
  thumbnailUrl: string;
};

const ProjectItemComponent: React.FC<ProjectItemProps> = ({
  id,
  title,
  deadline,
  thumbnailUrl,
}) => {
  //Hooks
  const navigate = useNavigate();

  //Function declarations
  const hadnleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <a onClick={() => hadnleNavigation(`/project/${id}`)}>
      <div className="project-component-wrapper h-44 w-80 relative flex flex-col justify-between mr-12 pl-4 rounded-lg bg-white transition-all hover:scale-110">
        <div className="project-component-top-section w-full flex justify-start pt-3 backdrop-blur-sm z-10 pl-3">
          <h2 className="project-component-title text-2xl font-bold text-heading">
            {title}
          </h2>
        </div>
        <div className="project-component-bottom-section w-full flex justify-start pb-2 pl-2.5 backdrop-blur-sm z-10">
          <h4 className="project-component-deadline font-bold text-secondary">
            Deadline: {deadline}
          </h4>
        </div>
        <div
          className="back-ground-image w-full h-full  flex absolute rounded-lg bg-cover z-0"
          style={{
            backgroundImage: `url("${thumbnailUrl}")`,
          }}
        ></div>
      </div>
    </a>
  );
};

export default ProjectItemComponent;
