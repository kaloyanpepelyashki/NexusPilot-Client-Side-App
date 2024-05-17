import { BackButton } from "../Atomic-components/BackButton";

type SideBarProps = {
  projectTitle?: string;
};

const SideBar: React.FC<SideBarProps> = ({ projectTitle }) => {
  return (
    <aside className="w-44 h-full flex flex-col items-center pt-4 px-2 bg-primary z-10 drop-shadow-lg">
      <div className="side-bar-back-button-holder w-full flex flex-col items-start">
        <BackButton textColor="text-secondary" />
      </div>
      <div className="side-bar-title-section mt-9">
        <h2 className="text-xl text-secondary font-bold">
          {projectTitle ? projectTitle : "Project title"}
        </h2>
        <div className="side-bar-line w-1/2 border-top border-solid border-white "></div>
      </div>
    </aside>
  );
};

export default SideBar;
