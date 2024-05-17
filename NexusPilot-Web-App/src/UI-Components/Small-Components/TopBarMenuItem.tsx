import MenuIcon from "@mui/icons-material/Menu";

import { Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccessState } from "../../ContextProviders/AccessStateProvider";

const TopBarMenu: React.FC = () => {
  /** Hooks */
  const accessState = useContext(AccessState);

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
        <MenuItem onClick={signUserOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
};

export default TopBarMenu;
