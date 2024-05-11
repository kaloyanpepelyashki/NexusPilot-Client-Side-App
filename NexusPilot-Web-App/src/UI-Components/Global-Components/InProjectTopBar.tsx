import AvatarAndTitle from "../Small-Components/AvatarAndTitle";

const InProjectTopBar: React.FC = () => {
  return (
    <div className="in-project-top-bar-wrapper w-full h-32 flex flex-row justify-between pl-9 pr-9 pt-5 pb-3 bg-primary drop-shadow-lg">
      <div className="in-project-top-bar-time flex flex-col items-start">
        <h4 className="text-3xl text-secondary">MON, 07/06</h4>
        <h3 className="text-4xl text-secondary">13:52</h3>
      </div>
      <AvatarAndTitle />
    </div>
  );
};

export default InProjectTopBar;
