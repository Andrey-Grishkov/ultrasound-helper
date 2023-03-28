import "./Team.scss";
import {infoContact} from "../../redux/actions";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";

const Team = ({name, prof, photo, info, contacts}) => {

  const dispatch = useDispatch();

  const clickHandler = event => {
    event.preventDefault();
    dispatch(infoContact(name, photo, info, contacts));
  }

  return (
    <li className="team__item">
      <p className="team__link" onClick={clickHandler}>{name}</p>
      <span className="team__prof">{prof}</span>
    </li>
  );
};

const mapDispatchToProps = {
  infoContact
}

export default connect(null, mapDispatchToProps)(Team);
