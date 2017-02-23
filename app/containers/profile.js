import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Profile extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
