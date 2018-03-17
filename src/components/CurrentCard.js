import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
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
            {this.props.cards.initialState
                .filter(card => card.location === "CurrentCard")
                .map( (card, index) => <Card key={index} color={card.color} number={card.value}   />)}
        </div>
    )
  }
}


const mapStateToProps = ({cards}) => ({cards})
export default connect(mapStateToProps, {  })(CurrentCard)