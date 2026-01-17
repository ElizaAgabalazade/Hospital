import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <section>
      <h2>Həkimlər</h2>

      <Link to="/doctors/1">Dr. Aysel</Link>
      <br />
      <Link to="/doctors/2">Dr. Elvin</Link>
    </section>
  );
};

export default Doctors;