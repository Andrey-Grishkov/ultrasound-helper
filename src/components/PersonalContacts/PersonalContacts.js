import "./PersonalContacts.scss";
import {connect} from "react-redux";
import {useEffect} from "react";

const PersonalContacts = ({personal}) => {

  useEffect(()=>{
    },
    [personal]);

  return (
    <section className="personal">
      <div className="personal__content">
        <img className="personal__image" src={personal.photo}/>
        <div className="personal__text">
          <h3 className="personal__title">{personal.name}</h3>
          <p className="personal__description">{personal.info}</p>
        </div>
      </div>
      {
        personal.contacts.map((cont, index)=>(
            <p key={index} className="personal__name-link">{cont.nameCont} <a className="personal__link" href={`${cont.pref}${cont.value}`}>
              {cont.value}</a></p>
          )
        )
      }
    </section>
  );
};

const mapStateToProps = state => {
  return {
    personal: state.info
  }
}

export default connect(mapStateToProps, null)(PersonalContacts);
