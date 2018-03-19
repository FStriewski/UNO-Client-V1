import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import PlayerBox from './PlayerBox'
import CurrentCard from '../components/CurrentCard'
import Deck from '../components/Deck'
import Hand from '../components/Hand'
import Status from './Status'
import '../style/Board.css'

class Board extends PureComponent {
  static propTypes = {
  }

  render() {
    return (
        <div className="Board">
            board
            <div style={{display:"flex", flexDirection: 'row'}}>
                <PlayerBox/>
                <PlayerBox/>
                </div>
            <div style={{display:"flex", flexDirection: 'row'}}>
                <CurrentCard/>
                <Deck/>
            </div>
            <div >
                <Hand/>
                <Status/>
            </div>
        </div>
    )
  }
}

export default Board