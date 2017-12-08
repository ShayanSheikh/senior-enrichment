import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campuses(props) {
  const { campuses } = props;
  return (
    <div>
      <NavLink className="btn" to="/new-campus">
        <button>Add Campus</button>
      </NavLink>
      <ul>
        {
          campuses.map( campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <span>{campus.name}</span>
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
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(Campuses));