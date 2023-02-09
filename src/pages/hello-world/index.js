import { Link, Outlet } from "react-router-dom";
import './styles.css'

const HelloWorld = () => {
  return (
    <div className="home">
      <h1>
        <Link className="title" to="/">React Projects</Link>
      </h1>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/image-carousel">Image Carousel</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelloWorld;
