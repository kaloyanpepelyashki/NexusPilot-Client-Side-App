import { HighlightOff } from "@mui/icons-material";
import React from "react";
type CloseButtonProps = {
  setCloseState: React.Dispatch<React.SetStateAction<boolean>>;
};
const CloseButton: React.FC<CloseButtonProps> = ({ setCloseState }) => {
  return (
    <a
      className="close-button text-heading hover:cursor-pointer"
      onClick={() => setCloseState(false)}
    >
      <HighlightOff />
    </a>
  );
};
export default CloseButton;
