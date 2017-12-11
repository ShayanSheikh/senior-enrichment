import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../store';

function Campuses(props) {
  const { campuses, removeCampus } = props;
  return (
    <div>
      <NavLink className="btn" to="/new-campus">
        <button>Add Campus</button>
      </NavLink>
      <ul style={{"list-style-type": "none"}}>
        {
          campuses.map( campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <img width='50px' src={campus.imageUrl} />
                  <span>{campus.name}</span>
                </NavLink>
                  <button onClick={() => removeCampus(campus.id)}>X</button>
                <NavLink to={`/campuses/${campus.id}/edit`}>
                  <button>Edit</button>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    removeCampus (campusId) {
      dispatch(removeCampus(campusId));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campuses));