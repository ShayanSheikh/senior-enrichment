import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleCampus(props) {
  const { campuses } = props;
  var campus = campuses.filter(c => c.id === +props.match.params.campusId)[0];
  if (campus) {
    if(!campus.students) campus.students = [];
    return (
      <div>
        <img src={campus.imageUrl} width="42px"/>
        <p>Name: {campus.name}</p>
        <p>Description: {campus.description}</p>
        <ul>
        {
          campus.students.map(student => {
            return (
              <li key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  {student.fullName}
                </NavLink>
              </li>
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