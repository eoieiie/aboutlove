import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarRows, setCalendarRows] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const imageList = [
    "/KakaoTalk_20240715_195604973.jpg",
    "/KakaoTalk_20240715_195643144.jpg",
    "/KakaoTalk_20240715_195739458.jpg",
    "/KakaoTalk_20250629_212947816_01.jpg",
    "/KakaoTalk_20250629_212947816_02.jpg",
    "/KakaoTalk_20250629_212947816_03.jpg",
    "/KakaoTalk_20250629_212947816_04.jpg",
    "/KakaoTalk_20250629_212947816_05.jpg",
    "/KakaoTalk_20250629_212947816_06.jpg",
    "/KakaoTalk_20250629_212947816_07.jpg",
    "/KakaoTalk_20250629_212947816_08.jpg",
    "/KakaoTalk_20250629_212947816_09.jpg",
    "/KakaoTalk_20250629_212947816_10.jpg",
    "/KakaoTalk_20250629_212947816_11.jpg",
    "/KakaoTalk_20250629_212947816_12.jpg",
    "/KakaoTalk_20250629_212947816_13.jpg",
    "/KakaoTalk_20250629_212947816_14.jpg",
    "/KakaoTalk_20250629_212947816_15.jpg",
    "/KakaoTalk_20250629_212947816_16.jpg",
    "/KakaoTalk_20250629_212947816_17.jpg",
    "/KakaoTalk_20250629_212947816_18.jpg",
    "/KakaoTalk_20250629_212947816_19.jpg",
    "/KakaoTalk_20250629_212947816_20.jpg",
    "/KakaoTalk_20250629_212947816_21.jpg",
    "/KakaoTalk_20250629_212947816_22.jpg",
    "/KakaoTalk_20250629_212947816_23.jpg",
    "/KakaoTalk_20250629_212947816_24.jpg",
    "/KakaoTalk_20250629_212947816_25.jpg",
    "/KakaoTalk_20250629_212947816_26.jpg",
    "/KakaoTalk_20250629_212947816_27.jpg",
    "/KakaoTalk_20250629_212947816_28.jpg",
    "/KakaoTalk_20250629_212947816_29.jpg",
    "/KakaoTalk_20250629_212947816.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageList]);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    const isToday = (day) =>
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= lastDate; day++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      const className = isToday(day) ? "today" : "";

      cells.push(
        <td
          key={day}
          className={className}
          onClick={() => navigate(`/photos/${dateKey}`)}
        >
          {day}
        </td>
      );

      if (cells.length % 7 === 0 || day === lastDate) {
        rows.push(<tr key={`row-${day}`}>{cells}</tr>);
        cells = [];
      }
    }

    setCalendarRows(rows);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="image-container" style={{ flex: "1" }}>
        <img
          src={imageList[currentImage]}
          alt="Slideshow"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
      <div className="calendar-container" style={{ flex: "1.5" }}>
        <div className="calendar-header">
          <h1>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>
        </div>
        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{calendarRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
