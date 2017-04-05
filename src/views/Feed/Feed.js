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
          <div className="col-sm-offset-3 col-sm-8 col-md-offset-3 col-md-6">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-check"></i>Card with icon
              </div>
              <div className="card-block">
                <div>
                  <Button
                          color="primary"
                          onClick={ this.toggle }
                          style={ { marginBottom: '1rem' } }>
                    Toggle
                  </Button>
                  <h5>Current state: { this.state.status }</h5>
                  <Collapse
                            isOpen={ this.state.collapse }
                            onOpened={ this.onOpened }
                            onClosed={ this.onClosed }>
                    <Card>
                      <CardBlock>
                        TxHash: 0x536b3359078d2b7f8822e49f1ebaed127d13ff17d0b6cb47887b676773b079e9 Block Height: 3483618 (4 block confirmations) TimeStamp : 44 secs ago (Apr-05-2017 09:45:14
                        PM +UTC) From: 0xea674fdde714fd979de3edf0f56aa9716b898ec8 (Ethermine) To: 0x41efca8bd56d0ef67359e1e14f603f677d4337ee Value: 0.0959955822790381
                        Ether ($4.33) Gas Limit: 90000 Gas Price: 0.00000002 Ether Gas Used By Transaction: 21000 Actual Tx Cost/Fee: 0.00042 Ether ($0.02) Cumulative
                        Gas Used: 670034 Nonce: 1546655 Input Data:
                      </CardBlock>
                    </Card>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-offset-3 col-sm-8 col-md-offset-3 col-md-6">
          </div>
          <Timeline />
        </div>
      </div>
    )
  }
}

export default Feed;
