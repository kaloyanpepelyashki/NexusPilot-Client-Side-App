import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useEffect, useRef, useState } from "react";
type SignUpDropDownMenuProps = {
  purpose: string;
  setPurpose:
    | React.Dispatch<React.SetStateAction<string | undefined>>
    | undefined;
};

const SignUpDropDownMenu: React.FC<SignUpDropDownMenuProps> = ({
  purpose,
  setPurpose,
}) => {
  /** Hooks */
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  //DropDown functions declarations
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  //Logic functions declarations
  const handleSelectWork = (event: Event | React.SyntheticEvent) => {
    if (setPurpose) {
      setPurpose("work");
    }

    handleClose(event);
  };

  const handleSelectStudies = (event: Event | React.SyntheticEvent) => {
    if (setPurpose) {
      setPurpose("studies");
    }

    handleClose(event);
  };

  const handleSelectPersonal = (event: Event | React.SyntheticEvent) => {
    if (setPurpose) {
      setPurpose("personal");
    }

    handleClose(event);
  };

  return (
    <div className="signup-drop-down-wrapper w-6/12 h-2/4 flex flex-col items-start">
      <label className="mb-2 text-xl font-semibold text-heading">
        What will you use the app for
      </label>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {!purpose || purpose.length == 0 ? "Select" : purpose}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleSelectWork}>Work</MenuItem>
                  <MenuItem onClick={handleSelectStudies}>Studies</MenuItem>
                  <MenuItem onClick={handleSelectPersonal}>Personal</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default SignUpDropDownMenu;
