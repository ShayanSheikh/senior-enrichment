import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleCampus(props) {
  const { campuses } = props;
  var campus = campuses.filter(c => c.id === +props.match.params.campusId)[0];
  if (campus) {
    return (
      <div>
        <img src={campus.imageUrl} width="42px"/>
        <p>{campus.name}</p>
        <p>{campus.description}</p>
        <ul>
        {
          campus.students.map(student => {
            return (
              <NavLink to={`/students/${student.id}`} key={student.id}>
                <li>{student.fullName}</li>
              </NavLink>
            )
          })
        }
        </ul>
      </div>
    );
  }
  else return (<div> </div>);
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(SingleCampus));