import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, writeCampus, writeCampusName, writeCampusImg, writeCampusDesc, 
  updateCampus } from '../store';

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dirty: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.campus && !this.state.dirty) {
      this.setState({dirty: true});
      nextProps.populateForm(nextProps.campus);
    }
  }

  componentDidMount() {
    if (this.props.campus && !this.state.dirty) {
      this.setState({ dirty: true });
      this.props.populateForm(this.props.campus);
    }
  }

  render() {
    const add = (this.props.match.path === '/new-campus');
    const { currCampus, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={(evt) => handleSubmit(evt, currCampus)}>
        <div>
          {
            (add) ? (<label>Add Campus</label>) : (<label>Edit Campus</label>)
          }
          <br></br>
          <input
            onChange={handleChange}
            type="text"
            name="campusName"
            value={currCampus.name}
            placeholder="Enter Campus Name"
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
          {
            (add) ? (<button type="submit">Create Campus</button>) : (<button type="submit">Edit</button>)
          }
        </div>
      </form>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  let campus = (state.campuses.find(c => c.id === +ownProps.match.params.campusId));
  return {
    campus: campus,
    currCampus: state.currCampus
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  const add = (ownProps.match.path === '/new-campus');
  return {
    handleChange(evt) {
      switch (evt.target.name) {
        case "campusName":
          dispatch(writeCampusName(evt.target.value));
          break;
        case "imageUrl":
          dispatch(writeCampusImg(evt.target.value));
          break;
        case "description":
          dispatch(writeCampusDesc(evt.target.value));
          break;
      }
    },
    handleSubmit(evt, campus) {
      evt.preventDefault();
      (add) ? dispatch(addCampus(campus)) : dispatch(updateCampus(campus, ownProps.history));
      dispatch(writeCampus({ name: '', imageUrl: 'goo.gl/2DDCXq', description: '' }));
    },
    populateForm(campus) {
      dispatch(writeCampus(campus));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampus)); 