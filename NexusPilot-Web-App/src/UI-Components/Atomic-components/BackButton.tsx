import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";

export const BackButton: React.FC = () => {
  return (
    <a className="felx flex-col jusitfy-between items-center">
      <ArrowBackIosNew />
      Back
    </a>
  );
};
