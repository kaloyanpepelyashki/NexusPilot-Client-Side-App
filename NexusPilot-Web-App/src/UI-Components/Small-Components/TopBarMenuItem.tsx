import MenuIcon from "@mui/icons-material/Menu";

import { Menu, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccessState } from "../../ContextProviders/AccessStateProvider";
import { ExitToApp, PermIdentity } from "@mui/icons-material";

const TopBarMenu: React.FC = () => {
  /** Hooks */
  const accessState = useContext(AccessState);
  const userNickName = accessState?.userObject?.nickName;
  const userRole = accessState?.userObject?.role;

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //Menu coponent function declarations
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   Function declarations
  const signUserOut = () => {
    if (accessState?.currentUserState?.jwt != undefined) {
      accessState.currentUserState.jwt = "";
    }
    if (accessState?.currentUserState?.userEmail != undefined) {
      accessState.currentUserState.userEmail = "";
    }
    if (accessState?.currentUserState?.userId != undefined) {
      accessState.currentUserState.userId = "";
    }
    return navigate("/");
  };

  return (
    <>
      <a
        onClick={handleClick}
        className="menu-item text-5xl text-secondary hover:cursor-pointer"
      >
        <MenuIcon fontSize="inherit" />
      </a>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="w-full flex flex-col items-start px-20 py-26">
          <h3 className="text-lg font-bold">{userNickName}</h3>
          <h4 className="text-sm">{userRole}</h4>
        </div>
        <Divider />
        <MenuItem>
          <div className="w-full flex flex-row justify-between">
            Account &nbsp; <PermIdentity />
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={signUserOut}>
          <div className="w-full flex flex-row justify-between">
            Sign out &nbsp; <ExitToApp />
          </div>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopBarMenu;
