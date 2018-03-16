import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../style/CurrentCard.css'

class CurrentCard extends PureComponent {
  static propTypes = {
  }

  handleClick = () => {
      // if Board to PlayerHand
      // if PlayerHand: to Deck
  }

  render() {

    return (
        <div className="CurrentCard" onClick={this.handleClick}>
            CurrentCard
        </div>
    )
  }
}

export default CurrentCard