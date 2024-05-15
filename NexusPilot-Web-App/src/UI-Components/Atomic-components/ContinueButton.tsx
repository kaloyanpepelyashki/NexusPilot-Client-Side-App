import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
type ContinueButtonProps = {
  action: () => void;
};
export const ContinueButton: React.FC<ContinueButtonProps> = ({ action }) => {
  return (
    <button onClick={action} className="w-1/5 rounded-md bg-active-el">
      Continue
      <ArrowForwardIosIcon />
    </button>
  );
};
