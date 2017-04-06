import React, { Component } from 'react';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';
import Timeline from '../Components/Timeline'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      status: 'Closed'
    };
  }

  onOpened() {
    this.setState({
      status: 'Opened'
    });
  }

  onClosed() {
    this.setState({
      status: 'Closed'
    });
  }

  toggle() {
    const status = !this.state.collapse ? 'Opening...' : 'Closing...';
    this.setState({
      collapse: !this.state.collapse,
      status
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">
            <Timeline />
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;
