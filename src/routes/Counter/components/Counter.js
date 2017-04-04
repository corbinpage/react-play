import React from 'react'
import Accordion from '../../../components/Accordion'

export const Counter = (props) => (
  <div>
    <div style={{ margin: '0 auto' }} >
      <h2>Counter: {props.counter}</h2>
      <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
      {' '}
      <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    </div>
    <div>
      <Accordion />
    </div>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
