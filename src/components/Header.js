import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Header({ band }) {
  const formatDate = () => {
    const date = band.date;
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };
  return (
    <div className="mb-10 mt-10">
      <h1 className="text-3xl font-bold mb-2">{band.name}</h1>
      <div className="flex flex-row items-center space-x-2">
        <FaCalendarAlt aria-hidden="true" focusable="false" />
        <span className="mb-1">{formatDate()}</span>
      </div>

      <div className="flex flex-row items-center space-x-2">
        <FaMapMarkerAlt aria-hidden="true" focusable="false" />
        <span>{band.location}</span>
      </div>
    </div>
  );
}

export default Header;
