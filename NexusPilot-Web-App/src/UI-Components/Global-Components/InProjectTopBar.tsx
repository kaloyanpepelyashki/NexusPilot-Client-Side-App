import AvatarAndTitle from "../Small-Components/AvatarAndTitle";
import DateTimeComponent from "../Atomic-components/DateTimeComponent";

const InProjectTopBar: React.FC = () => {
  return (
    <div className="in-project-top-bar-wrapper w-full h-32 flex flex-row justify-between pl-9 pr-9 pt-5 pb-3 bg-primary drop-shadow-xl ">
      <DateTimeComponent />
      <AvatarAndTitle />
    </div>
  );
};

export default InProjectTopBar;
