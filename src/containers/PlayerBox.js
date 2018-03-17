import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../style/PlayerBox.css'

class PlayerBox extends PureComponent {
  static propTypes = {
  }

  render() {
    return (
        <div className="PlayerBox currentTurn" id="">

          <div className="flex-container">
            <div className="photo-container">
              <img
                src={this.props.image}
                className="player-photo"
              />
            </div>

            <div className="info-container">
              <h2>{this.props.username}</h2>
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
