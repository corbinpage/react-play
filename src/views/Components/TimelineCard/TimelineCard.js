import React, { Component } from 'react';
import { Collapse, Form, FormGroup, Label, Input } from 'reactstrap';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      block: props.block,
      collapse: true,
      inverted: true,
      title: props.title || 'Transaction sent',
      txHash: props.txHash || '0x536b3359078d2b7f8822e49f1ebaed127d13ff17d0b6cb47887b676773b079e9',
      blockHeight: '3483618 (4 block confirmations)',
      timeStamp: '44 secs ago (Apr-05-2017 09:45:14 PM +UTC)',
      from: '0xea674fdde714fd979de3edf0f56aa9716b898ec8',
      to: '0x41efca8bd56d0ef67359e1e14f603f677d4337ee',
      value: '0.0959955822790381',
      valueUSD: '$4.33',
      gasLimit: '90000 ',
      gasPrice: '0.00000002 Ether',
      gasUsed: '21000',
      gasActualCost: '0.00042 Ether ($0.02)',
      gasCumulative: '0.00042 Ether ($0.02)',
      nonce: '1546655',
      inputData: `
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
              <div className="form-group row">
                <label className="col-2 col-form-label"> <strong>From:</strong> </label>
                <div className="col-10">
                  <p className="form-control-static">
                    { this.state.from } </p>
                </div>
                <label className="col-2 col-form-label"> <strong>To:</strong> </label>
                <div className="col-10">
                  <p className="form-control-static">
                    { this.state.to } </p>
                </div>
                <label className="col-2 col-form-label"> <strong>Value:</strong> </label>
                <div className="col-10">
                  <p className="form-control-static">
                    { this.state.valueUSD } </p>
                </div>
              </div>
              <p> <small className="text-muted"><i className="glyphicon glyphicon-time"></i> { this.state.timeStamp }</small> </p>
            </div>
            <Collapse isOpen={ !this.state.collapse }>
              <div className="timeline-body">
                <div className="form-group row">
                  <label className="col-2 col-form-label"> <strong>Fee:</strong> </label>
                  <div className="col-10">
                    <p className="form-control-static">
                      { this.state.gasCumulative } </p>
                  </div>
                  <label className="col-2 col-form-label"> <strong>Data:</strong> </label>
                  <div className="col-10">
                    <p className="form-control-static">
                      { this.state.inputData } </p>
                  </div>
                </div>
              </div>
            </Collapse>
          </a>
        </div>
      </li>
    )
  }
}

export default Timeline;
