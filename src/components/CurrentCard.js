import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { drawCards } from '../actions/draw'
import Card from './Card'
import '../style/CurrentCard.css'

class CurrentCard extends PureComponent {
  static propTypes = {
  }

  isPlusCard = (x) => {
    let deck =  this.props.deck
    console.log(deck)
   

  }


  render() {
    let card = this.props.cards[0]
    if (card.plus) this.isPlusCard(card.plus)

    return (
        <div className="CurrentCard">
                <Card color={card.color} number={card.value} plus={card.plus} location={card.location} id={card.id} 
                />
        </div>
    )
  }
}


// const mapStateToProps = ({cards}) => ({cards})
// export default connect(mapStateToProps, {updateLocation  })(CurrentCard)


const mapStateToProps = ({cards}) => ({cards: cards.filter(card => card.location === "CurrentCard"), deck: cards.filter(card => card.location === "Deck")})
export default connect(mapStateToProps, { drawCards })(CurrentCard)