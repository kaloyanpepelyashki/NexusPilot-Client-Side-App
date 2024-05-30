import { useEffect, useState } from "react";

const DateTimeComponent: React.FC = () => {
  const [time, setTime] = useState<string>(" ");
  const [weekDay, setWeekDay] = useState<string>(" ");
  const [date, setDate] = useState<string>(" ");

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

  const updateTime = () => {
    const date: Date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const weekDay = date.getDay();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    setTime(`${hour} : ${minutes < 10 ? `0${minutes}` : minutes}`);
    setWeekDay(getWeekDay(weekDay));
    setDate(`${day}/${month}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time-wrapper flex flex-col items-start">
      <h4 className="text-3xl text-secondary">
        {weekDay}, {date}
      </h4>
      <h3 className="text-4xl text-secondary mt-2">{time}</h3>
    </div>
  );
};

export default DateTimeComponent;
