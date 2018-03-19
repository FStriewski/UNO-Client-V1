import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { playCardFromHand } from '../actions/updateLocation'
import { drawCards } from '../actions/draw'
import '../style/Card.css'


 class Card extends PureComponent {

    handleClick = () => {
        let currentCard = this.props.currentCard[0]

        // Allow to play a card from hand if color or value match or if card is black
        if(this.props.color === currentCard.color || this.props.number === currentCard.value || this.props.color === "black"){
            this.props.playCardFromHand(this.props.id, this.props.location)

            if(this.props.plus > 0) this.isPlusCard(this.props.plus)
        }
      }

    isPlusCard = (plusVal) => {

        // Assigns x random cards from deck or less if deck has less cards.
        let deck =  this.props.deck
        let deckIds = deck.map( x => x.id)
        let drawIds = []
        let el;

        let rand = (x) => {
            while (drawIds.length < x && drawIds.length < deckIds.length){
                el =  deckIds[Math.floor(Math.random() * deckIds.length)]
                if(!drawIds.includes(el)){drawIds.push(el)}
            }
            return drawIds
        }
        this.props.drawCards(rand(plusVal))
    }

    classNames() {
        const { color} = this.props
        let classnames = ['Card']
        classnames.push(`fill-${color}`)
        return classnames.join(' ')
    }

    cardNumber(){
            const { number, plus } = this.props
            if (number) return this.props.number
            if (plus) return `+${plus}`
    }

    render() {
        return (
            <div className={this.classNames()} id={this.props.id} onClick={this.handleClick}  >
                <p style={{fontSize: "20px"}}>{this.cardNumber()} </p>
            </div>
        )
    }
}

 const mapStateToProps = ({cards}) => (
   {
     currentCard: cards.filter(card => card.location === "CurrentCard"),
     deck: cards.filter(card => card.location === "Deck")
   })
   
 export default connect(mapStateToProps, { playCardFromHand, drawCards })(Card)
