export const DashBoardTopBar: React.FC = () => {
  return (
    <div className="dashboard-top-bar-wrapper w-full h-20 flex flex-row justify-between pl-9 pr-9 pt-5 pb-3">
      <h2 className="text-5xl">Nexus</h2>
      <img
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
        className="rounded-full h-full"
        alt="profile-picture"
      />
    </div>
  );
};
