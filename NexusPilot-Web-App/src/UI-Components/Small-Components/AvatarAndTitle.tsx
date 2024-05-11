const AvatarAndTitle: React.FC = () => {
  return (
    <div className="avatar-and-title-wrapper h-full w-32 flex flex-col">
      <img
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
        className="avatart-image h-4/5 rounded-full drop-shadow-md"
      />
      <h5 className="text-lg">Developer</h5>
    </div>
  );
};

export default AvatarAndTitle;
