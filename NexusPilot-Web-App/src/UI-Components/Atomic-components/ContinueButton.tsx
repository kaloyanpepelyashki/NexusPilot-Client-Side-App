import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
type ContinueButtonProps = {
  to: string;
};
export const ContinueButton: React.FC<ContinueButtonProps> = (to: string) => {
  const navigate = useNavigate();

  const navigateNext = () => {
    navigate(to);
  };
  return (
    <button onClick={navigateNext} className="w-1/5 rounded-md bg-active-el">
      Continue
      <ArrowForwardIosIcon />
    </button>
  );
};
