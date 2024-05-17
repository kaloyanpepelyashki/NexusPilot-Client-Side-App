import AvatarAndTitle from "../Small-Components/AvatarAndTitle";

const InProjectTopBar: React.FC = () => {
  const date: Date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const weekDay = date.getDay();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const getWeekDay = (weekDay: number): string => {
    switch (weekDay) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thr";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
        return "";
    }
  };

  return (
    <div className="in-project-top-bar-wrapper w-full h-32 flex flex-row justify-between pl-9 pr-9 pt-5 pb-3 bg-primary drop-shadow-xl ">
      <div className="in-project-top-bar-time flex flex-col items-start">
        <h4 className="text-3xl text-secondary">
          {getWeekDay(weekDay)}, {day.toString()}/{month.toString()}
        </h4>
        <h3 className="text-4xl text-secondary mt-2">
          {hour} : {minutes}
        </h3>
      </div>
      <AvatarAndTitle />
    </div>
  );
};

export default InProjectTopBar;
