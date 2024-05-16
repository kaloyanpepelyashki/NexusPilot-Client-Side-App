import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";

type PriorityDropDownMenuProps = {
  setPriority: React.Dispatch<React.SetStateAction<string | undefined>>;
  priority: string | undefined;
};

const PriorityDropDownMenu: React.FC<PriorityDropDownMenuProps> = ({
  setPriority,
  priority,
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
  const handleSelectLow = (event: Event | React.SyntheticEvent) => {
    setPriority("low");
    handleClose(event);
  };

  const handleSelectMid = (event: Event | React.SyntheticEvent) => {
    setPriority("mid");
    handleClose(event);
  };

  const handleSelectHigh = (event: Event | React.SyntheticEvent) => {
    setPriority("high");
    handleClose(event);
  };

  return (
    <div className="signup-drop-down-wrapper w-6/12 h-2/4 flex flex-col items-start">
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {!priority || priority.length == 0 ? "Priority" : priority}
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
                  <MenuItem onClick={handleSelectLow}>Low</MenuItem>
                  <MenuItem onClick={handleSelectMid}>Mid</MenuItem>
                  <MenuItem onClick={handleSelectHigh}>High</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default PriorityDropDownMenu;
