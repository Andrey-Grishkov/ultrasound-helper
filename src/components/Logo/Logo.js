import "./Logo.scss";
import LogoImg from "../../images/logo__image.svg";

const Logo = () => {

  return (
    <div className='logo'>
      <img className='logo__image' src={LogoImg} alt="logo"/>
    </div>
  );
};

export default Logo;
