import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import '../style/Deck.css'

class Deck extends PureComponent {
  static propTypes = {
  }

  render() {

    return (
        <div className="Deck" style={{display:"flex", flexDirection: 'row'}}>
            {this.props.cards.initialState
                .filter(card => card.location === "Deck")
                .map( (card, index) => <Card key={index} color={card.color} number={card.value} plus={card.plus} location={card.location}
                   />)}
        </div>
    )
  }
}


const mapStateToProps = ({cards}) => ({cards})
export default connect(mapStateToProps, {  })(Deck)