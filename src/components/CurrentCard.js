import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import '../style/CurrentCard.css'

class CurrentCard extends PureComponent {
  static propTypes = {
  }

  // Bug warning: this action should only be performed once, not again if this card remains to be CC
  // isPlusCard = (x) => {
  //   let card = this.props.cards[0]
  //   let deck =  this.props.deck
   
  //   let counter = card.plus
  //   //console.log("counter:  "+ counter)
  //   let arr = []  

  //   // Add random cards from the deck, but no id twice
  //   while (counter > 0){
  //     let x = Math.floor(Math.random() * deck.length)
  //     if(!x) return
  //     (!arr.includes(deck[x].id))? arr.push(deck[x].id) : null
  //    // if (!arr.includes(deck[x].id)){arr.push(deck[x].id)}
  //      this.props.drawCards(arr) 
  //      counter--
  //   }
  //   console.log(arr)
  // }


  render() {
    let card = this.props.cards[0]

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
export default connect(mapStateToProps, { })(CurrentCard)