import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const FooterCard = ({ header, link1, link2, link3, link4, href }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="uppercase text-lg font-semibold">{header}</h3>
      <div className="flex flex-col gap-2">
        <Link to={href} className="hover:text-red-600">
          {link1}
        </Link>
        <Link className="hover:text-red-600">{link2}</Link>
        <Link className="hover:text-red-600">{link3}</Link>
        <Link className="hover:text-red-600">{link4}</Link>
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
  href: Proptypes.string.isRequired,
};
