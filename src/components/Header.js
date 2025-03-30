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
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">{band.name}</h1>
      <p>{formatDate()}</p>
      <p>{band.location}</p>
    </div>
  );
}

export default Header;
