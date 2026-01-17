import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Ana Səhifə</h1>
      <p>Xəstəxana sisteminə xoş gəlmisiniz</p>

      <Link to="/doctors">Həkimlərə bax</Link>
    </div>
  );
};

export default Home;
