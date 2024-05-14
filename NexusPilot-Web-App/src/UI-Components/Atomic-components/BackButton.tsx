import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import { NavigateFunction, useNavigate } from "react-router-dom";

type BackButtonProps = {
  textColor: string;
};

/**
 * The text color prop is either "text-heading" or "text-secondary"
 */
export const BackButton: React.FC<BackButtonProps> = ({ textColor }) => {
  const navigate: NavigateFunction = useNavigate();

  const styling: string = `felx flex-col jusitfy-between items-center ${textColor} hover:cursor-pointer`;
  return (
    <a onClick={() => navigate(-1)} className={styling}>
      <ArrowBackIosNew />
      Back
    </a>
  );
};
