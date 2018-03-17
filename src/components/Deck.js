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
        <div className="Deck">
            {this.props.deck.initialState
                .filter(card => card.location === "Deck")
                .map( (card, index) => <Card key={index} color={card.color} number={card.value}
                   />)}
        </div>
    )
  }
}


const mapStateToProps = ({deck}) => ({deck})
export default connect(mapStateToProps, {  })(Deck)