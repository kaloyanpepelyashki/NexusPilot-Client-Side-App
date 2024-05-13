import UserAvatar from "../Atomic-components/UserAvatart";

export const DashBoardTopBar: React.FC = () => {
  return (
    <div className="dashboard-top-bar-wrapper w-full h-20 flex flex-row justify-between pl-9 pr-9 pt-5 pb-3 bg-primary drop-shadow-l">
      <h2 className="text-5xl">Nexus</h2>
      <UserAvatar />
    </div>
  );
};
