import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import PlayerBox from './PlayerBox'
import CurrentCard from '../components/CurrentCard'
import Deck from '../components/Deck'
import Hand from '../components/Hand'
import Status from './Status'
import CreatePlayerForm from '../components/CreatePlayerForm'
import '../style/Board.css'

class Board extends PureComponent {
  static propTypes = {
  }

  render() {
    const players = this.props
    return (
        <div className="Board">
            board
            <div style={{display:"flex", flexDirection: 'row'}}>
              <PlayerBox
                username={this.props.players[0].username}
                image={this.props.players[0].image}
                location={this.props.players[0].location}
                score={this.props.players[0].score}
              />

              <PlayerBox
                username={this.props.players[1].username}
                image={this.props.players[1].image}
                location={this.props.players[1].location}
                score={this.props.players[1].score}
              />
            </div>

            <div style={{display:"flex", flexDirection: 'row'}}>
                <CurrentCard/>
                <Deck/>
            </div>
            <div style={{display:"flex", flexDirection: 'column'}}>
                <Hand/>
                <Status/>
            </div>
            <CreatePlayerForm />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(Board)
