type AssigneeAvatarProps = {
  imageUrl: string;
};
const AssigneeAvatart: React.FC<AssigneeAvatarProps> = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      className="rounded-full w-5 drop-shadow-md"
      alt="assignee avatar"
    />
  );
};

export default AssigneeAvatart;
