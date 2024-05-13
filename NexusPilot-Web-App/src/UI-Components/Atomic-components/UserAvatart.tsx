import { useContext } from "react";
import { AccessState } from "../../ContextProviders/AccessStateProvider";

const UserAvatar: React.FC = () => {
  const accessState = useContext(AccessState);
  const avtartUrl = accessState?.userObject?.avatartImageUrl;

  return (
    <img
      src={avtartUrl}
      className="rounded-full h-full drop-shadow-md"
      alt="profile-picture"
    />
  );
};

export default UserAvatar;
