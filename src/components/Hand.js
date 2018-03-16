import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import '../style/Hand.css'

class Hand extends PureComponent {
  static propTypes = {
  }

  render() {
    // Map an array of player cards
    return (
        <div className="Hand" style={{display:"flex", flexDirection: 'row'}}>
            Hand
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
  }
}

export default Hand