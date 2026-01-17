import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>

      <Link to={`/doctors/${doctor.id}`}>Ətraflı bax</Link>
    </div>
  );
};

export default DoctorCard;
