import { Menu, MenuItem } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsService from "../../ServiceLayer/ProjectsService";
import { AccessState } from "../../ContextProviders/AccessStateProvider";

type ProjectItemProps = {
  id: string;
  title: string;
  deadline: string;
  thumbnailUrl: string;
  closed: boolean;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectItemComponent: React.FC<ProjectItemProps> = ({
  id,
  title,
  deadline,
  thumbnailUrl,
  closed,
  setShouldReload,
}) => {
  /** Hooks */
  const accessState = useContext(AccessState);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const jwt: string = accessState?.currentUserState?.jwt
    ? accessState?.currentUserState?.jwt
    : " ";

  //Menu coponent function declarations
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Function declarations
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const closeProject = async () => {
    try {
      const projectsService = new ProjectsService();
      const result = await projectsService.closeProject(id, jwt);
      if (result) {
        window.alert("Project closed");
        setShouldReload(true);
        return;
      }

      return window.alert("Error closing project. Try again");
    } catch (e) {
      window.alert("Error closing project.Try again");
      console.log(`Error deleteing project: ${e}`);
    }
  };
  return (
    <div className=" transition-all hover:scale-110 hover:cursor-pointer rounded-lg">
      <div className="project-component-wrapper h-44 w-80 relative flex flex-col justify-between mr-12 bg-white ">
        <div className="project-component-top-section w-full flex justify-between backdrop-blur-sm z-20 px-3  py-3">
          <h2
            onClick={() => handleNavigation(`/project/${id}`)}
            className="project-component-title text-xl font-bold text-heading drop-shadow-lg shadow-white"
          >
            {title}
          </h2>
          <a onClick={handleClick} className="hover:scale-110 z-40">
            <MoreHoriz />
          </a>
        </div>
        <div className="project-component-bottom-section w-full flex justify-start pb-2 pl-2.5 backdrop-blur-sm z-30">
          {closed == true ? (
            " "
          ) : (
            <h4 className="project-component-deadline font-bold text-secondary z-30">
              Deadline: {deadline}
            </h4>
          )}
        </div>
        <div className="back-ground-image-blur w-full h-full flex absolute rounded-lg z-10 bg-secondary opacity-15"></div>
        <div
          className="back-ground-image w-full h-full  flex absolute rounded-lg bg-cover z-0"
          style={{
            backgroundImage: `url("${thumbnailUrl}")`,
          }}
        ></div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleNavigation(`/project/${id}`)}>
          Expand
        </MenuItem>
        <MenuItem onClick={closeProject}>Close Project</MenuItem>
      </Menu>
    </div>
  );
};

export default ProjectItemComponent;
