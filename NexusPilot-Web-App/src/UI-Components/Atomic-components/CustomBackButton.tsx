import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

type BackButtonProps = {
  action: () => void;
};

/**
 * The text color prop is either "text-heading" or "text-secondary"
 */
const CustomBackButton: React.FC<BackButtonProps> = ({ action }) => {
  return (
    <a
      onClick={action}
      className="felx flex-col jusitfy-between items-center text-heading hover:cursor-pointer"
    >
      <ArrowBackIosNew />
      Back
    </a>
  );
};

export default CustomBackButton;
