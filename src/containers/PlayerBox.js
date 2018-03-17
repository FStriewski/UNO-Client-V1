import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../style/PlayerBox.css'

class PlayerBox extends PureComponent {
  static propTypes = {
  }

  render() {
    const player = this.props
    return (
        <div className="PlayerBox currentTurn" id="">

          <div className="flex-container">
            <div className="photo-container">
              <img
                src="http://www.christies.com/media-library/images/features/articles/2016/01/11/david-bowie/Brian-Duffy-David-Bowie-as-Aladdin-Sane-1973.jpg"
                className="player-photo"
              />
            </div>

            <div className="info-container">
              <h2>Player 1{this.props.username}</h2>
              <p>Location: {this.props.location}</p>
              <p>Score: {this.props.score}</p>
              <p>Remaining cards: {this.props.remaining}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default PlayerBox
