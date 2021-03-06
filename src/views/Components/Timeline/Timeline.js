import React, { Component } from 'react';
import styles from './timeline.css';
import TimelineCard from '../TimelineCard';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.renderTimelineCards = this.renderTimelineCards.bind(this);
    this.state = {
      collapse: false,
      status: 'Closed',
      timelineCards: [
        {
          block: "1"
        },
        {
          block: "2"
        },
        {
          block: "3"
        }
      ]
    };
  }

  renderTimelineCards() {
    let children = this.state.timelineCards.map((card) => {
      console.log(card);
      return (
        <TimelineCard data={ card } />
      )
    })

    console.log(children);

    return children;
  }



  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 id="timeline">Timeline</h1>
        </div>
        <ul className="timeline">
          <TimelineCard />
          { this.renderTimelineCards() }
          <li>
            <div className="timeline-badge">
              <i className="glyphicon glyphicon-check"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                <p>
                  <small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small>
                </p>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge warning">
              <i className="glyphicon glyphicon-credit-card"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge danger">
              <i className="glyphicon glyphicon-credit-card"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge info">
              <i className="glyphicon glyphicon-floppy-disk"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
                <hr />
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge success">
              <i className="glyphicon glyphicon-thumbs-up"></i>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Timeline;
