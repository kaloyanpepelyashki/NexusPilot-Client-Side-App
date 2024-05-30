import Add from "@mui/icons-material/Add";
import ProjectItem from "../../Models/ProjectItem";
import ProjectItemComponent from "../Small-Components/ProjectItemComponent";

type ProjectSliderProps = {
  sliderHeading: string;
  hasCreateAction: boolean;
  projectsList: ProjectItem[];
  setOpenOverlay?: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectsSlider: React.FC<ProjectSliderProps> = ({
  sliderHeading,
  hasCreateAction,
  projectsList,
  setOpenOverlay,
  setShouldReload,
}) => {
  return (
    <div className="projects-slider-wrapper w-full h-1/2 flex flex-col items-start ml-4">
      <div className="flex flex-row items-center mt-10 pl-5">
        <h1 className="text-3xl text-heading font-bold ">
          {sliderHeading} Projects
        </h1>
        {hasCreateAction ? (
          <div
            onClick={setOpenOverlay ? () => setOpenOverlay(true) : () => null}
            className="ml-5 text-4xl hover:cursor-pointer hover:scale-110"
          >
            <Add fontSize="inherit" className="text-heading font-bold" />
          </div>
        ) : (
          " "
        )}
      </div>
      <div className="projects-slider-section w-full h-full flex flex-row flex-nowrap items-center overflow-x-scroll pl-5">
        {projectsList.map((projectItem) => {
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
  );
};

export default ProjectsSlider;
