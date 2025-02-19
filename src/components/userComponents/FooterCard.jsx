import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const FooterCard = ({
  header,
  link1,
  link2,
  link3,
  link4,
  href1,
  href2,
  href3,
  href4,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="uppercase text-lg font-semibold">{header}</h3>
      <div className="flex flex-col gap-2 text-lg">
        <Link to={href1} className="hover:text-red-600">
          {link1}
        </Link>
        <Link to={href2} className="hover:text-red-600">
          {link2}
        </Link>
        <Link to={href3} className="hover:text-red-600">
          {link3}
        </Link>
        <Link to={href4} className="hover:text-red-600">
          {link4}
        </Link>
      </div>
    </div>
  );
};

export default FooterCard;

FooterCard.propTypes = {
  header: Proptypes.string.isRequired,
  link1: Proptypes.string.isRequired,
  link2: Proptypes.string.isRequired,
  link3: Proptypes.string.isRequired,
  link4: Proptypes.string.isRequired,
  href1: Proptypes.string.isRequired,
  href2: Proptypes.string.isRequired,
  href3: Proptypes.string.isRequired,
  href4: Proptypes.string.isRequired,
};
