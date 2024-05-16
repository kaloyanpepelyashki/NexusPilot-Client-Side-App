import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
type ContinueButtonProps = {
  heading: string;
  action: () => void;
};
export const ContinueButton: React.FC<ContinueButtonProps> = ({
  action,
  heading,
}) => {
  return (
    <button onClick={action} className="w-1/5 rounded-md bg-active-el">
      {heading}
      <ArrowForwardIosIcon />
    </button>
  );
};
