import AddIcon from "@mui/icons-material/Add";
import React from "react";

type CreateProjectBigCTA = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateProjectBigCTA: React.FC<CreateProjectBigCTA> = ({ setState }) => {
  return (
    <a
      onClick={() => setState(true)}
      className="create-project-big-CTA-wrapper flex flex-col items-center text-active-el hover:cursor-pointer"
    >
      <span className="text-8xl">
        <AddIcon fontSize="inherit" />
      </span>
      <h2 className="create-project-big-CTA-text text-4xl">New Project</h2>
    </a>
  );
};
export default CreateProjectBigCTA;
