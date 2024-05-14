import ProjectItemComponent from "../Small-Components/ProjectItem";
import ProjectItem from "../../Models/ProjectItem";

type ProjectItemsHolderProps = {
  projectsList: ProjectItem[];
};

const ProjectItemsHolder: React.FC<ProjectItemsHolderProps> = ({
  projectsList,
}) => {
  return (
    <div className="w-full project-items-holder-section flex flex-row flex-nowrap pl-3">
      {projectsList.map((projectItem) => {
        return (
          <ProjectItemComponent
            key={projectItem.id}
            id={projectItem.id}
            title={projectItem.title}
            deadline={projectItem.endDate}
            thumbnailUrl={projectItem.tumbnailImageUrl}
          />
        );
      })}
    </div>
  );
};

export default ProjectItemsHolder;
