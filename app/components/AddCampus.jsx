import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, writeCampus } from '../store';

function AddCampus (props) {
  const { currCampus, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add a Campus</label>
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="campusName"
          value={currCampus.name}
          placeholder="Enter Campus name"
        />
        <br></br>
        <input
          onChange={handleChange}
          type="text"
          name="imageUrl"
          value={currCampus.imageUrl}
          placeholder="Enter Campus Image Url"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChange}
          name="description"
          value={currCampus.description}
          placeholder="Enter Campus description"
        />
      </div>
      <div>
        <button type="submit">Create Campus</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state) {
  return {
    currCampus: state.currCampus
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange(evt) {
      dispatch(writeCampus(evt.target.value));
    },
    handleSubmit(evt) {
      evt.preventDefault();
      const name = evt.target.campusName.value;
      const imageUrl = evt.target.imageUrl.value;
      const description = evt.target.description.value;
      dispatch(addCampus({ name, imageUrl, description }, ownProps.history));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampus)); 