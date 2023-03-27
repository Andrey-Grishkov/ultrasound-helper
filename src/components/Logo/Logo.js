import "./Logo.scss";
import LogoImg from "../../images/logo__image.svg";
import {Link} from "react-router-dom";

const Logo = () => {

  return (
    <Link className='logo' to="/">
      <img className='logo__image' src={LogoImg} alt="logo"/>
    </Link>
  );
};

export default Logo;
