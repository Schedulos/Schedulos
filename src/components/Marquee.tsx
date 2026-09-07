export function Marquee() {
  const items = [
    "Websites", "AI", "Automation", "Booking", "E-commerce", "Software", "Dashboards",
    "Websites", "AI", "Automation", "Booking", "E-commerce", "Software", "Dashboards"
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, idx) => (
          <div key={idx} className="marquee-item">{item}</div>
        ))}
      </div>
    </div>
  );
}
