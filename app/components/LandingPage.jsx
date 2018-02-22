import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BlockHeader from './BlockHeader';
import ComingUpCarousel from './ComingUpCarousel';

class LandingPage extends Component {
  render() {
    return (
      <div className="container" >
        <h3 className="text-center" style={{ fontWeight: 'bold' }}>Coming up</h3>
        <ComingUpCarousel />
        <BlockHeader text="Mind these:" />
        <div className="row">
          <div className="col-sm-6 col-xs-12" style={{ padding: '10px' }}>
            <button type="button" className=" btn btn-lg btn-red col-xs-12">View Timetable</button>
          </div>
          <div className="col-sm-6 col-xs-12" style={{ padding: '10px' }}>
            <button type="button" className="btn btn-lg btn-red col-xs-12">Edit Your Availabilities</button>
          </div>
          <div className="col-sm-6 col-xs-12" style={{ padding: '10px' }}>
            <button type="button" className="btn btn-lg btn-red col-xs-12">View Feedbacks</button>
          </div>
        </div>
        <BlockHeader text="Problems?" />
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6 col-xs-12" style={{ padding: '10px' }}>
            <button type="button" className="btn btn-lg btn-darkgray col-xs-12">
              Email an admin
            </button>
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
