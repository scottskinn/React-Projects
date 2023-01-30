import { Link, Outlet } from "react-router-dom";

const HelloWorld = () => {
  return (
    <div>
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <nav>
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
