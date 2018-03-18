import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import Card from './Card'
import { drawCards } from '../actions/draw'
import '../style/Deck.css'

class Deck extends PureComponent {
  static propTypes = {
  }

  handleClick = () => {
    this.props.drawCards(1) 
  }

  render() {

    return (
        // Uncomment to check status:
        // <div className="Deck" style={{display:"flex", flexDirection: 'row'}}>
        //     {this.props.cards   
        //         .map( (card, index) => <Card key={index} color={card.color} number={card.value} plus={card.plus} location={card.location} id={card.id} 
        //            />)}
        // </div>
        <div className="Deck" onClick = {this.handleClick} ></div>
    )
  }
}

const mapStateToProps = ({cards}) => ({cards: cards.filter(card => card.location === "Deck")})
export default connect(mapStateToProps, { drawCards })(Deck)

// Uncomment to check status:
// const mapStateToProps = ({cards}) => ({cards: cards.filter(card => card.location === "Deck")})
// export default connect(mapStateToProps, {  })(Deck)


// Click on deck:
// Update location of a random card with location deck to Hand