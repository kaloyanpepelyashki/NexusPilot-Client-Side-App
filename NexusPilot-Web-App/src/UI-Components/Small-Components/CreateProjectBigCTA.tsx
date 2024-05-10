import AddIcon from "@mui/icons-material/Add";

const CreateProjectBigCTA: React.FC = () => {
  return (
    <div className="create-project-big-CTA-wrapper flex flex-col items-center">
      <span className="text-8xl">
        <AddIcon fontSize="inherit" />
      </span>
      <h2 className="create-project-big-CTA-text text-4xl">New Project</h2>
    </div>
  );
};
export default CreateProjectBigCTA;
