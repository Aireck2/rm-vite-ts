import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  return (
    <div className="body">
      <div className="bg-container">
        {/* <div className="space"></div> */}
        <div className="wrapper">
          <div className="img-wrapper">
            <span>44</span>
          </div>
          <p>
            La página que intenta encontrar se ha <br /> movido a otra universo.
          </p>
          <Link to={"/"} replace>
            <button type="button" className="text-sm">
              Ir al Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
