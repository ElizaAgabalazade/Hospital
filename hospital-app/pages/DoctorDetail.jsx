import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";

const DoctorDetail = () => {
  const { id } = useParams();

  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) return <p>Həkim tapılmadı</p>;

  return (
    <div>
      <h2>{doctor.name}</h2>
      <p>İxtisas: {doctor.specialty}</p>
      <p>Təcrübə: {doctor.experience} il</p>
    </div>
  );
};

export default DoctorDetail;
