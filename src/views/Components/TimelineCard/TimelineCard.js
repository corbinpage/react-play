import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      block: props.block,
      collapse: true,
      inverted: true,
      title: 'Mussum ipsum cacilds',
      time: '11 hours ago',
      description: `
                  TxHash: 0x536b3359078d2b7f8822e49f1ebaed127d13ff17d0b6cb47887b676773b079e9 
                  Block Height: 3483618 (4 block confirmations) 
                  TimeStamp : 44 secs ago (Apr-05-2017 09:45:14 PM +UTC) 
                  From: 0xea674fdde714fd979de3edf0f56aa9716b898ec8 (Ethermine) 
                  To: 0x41efca8bd56d0ef67359e1e14f603f677d4337ee 
                  Value: 0.0959955822790381
                  Ether ($4.33) 
                  Gas Limit: 90000 
                  Gas Price: 0.00000002 Ether 
                  Gas Used By Transaction: 21000 
                  Actual Tx Cost/Fee: 0.00042 Ether ($0.02)
                  Cumulative Gas Used:
                  670034
                  Nonce: 1546655
                  Input Data:`
    };
  }

  toggle() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <li
          key={ this.state.block }
          className={ this.state.inverted ? 'timeline-inverted' : '' }>
        <div className="timeline-badge warning">
          <i className="fa fa-bolt fa-md"></i>
        </div>
        <div className="timeline-panel">
          <a onClick={ this.toggle }>
            <div className="timeline-heading">
              <h4 className="timeline-title">{ this.state.title }</h4>
              <p> <small className="text-muted"><i className="glyphicon glyphicon-time"></i> { this.state.time }</small> </p>
            </div>
            <Collapse isOpen={ !this.state.collapse }>
              <div className="timeline-body">
                <p>
                  { this.state.description } </p>
              </div>
            </Collapse>
          </a>
        </div>
      </li>
    )
  }
}

export default Timeline;
