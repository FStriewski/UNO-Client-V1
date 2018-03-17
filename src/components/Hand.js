import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import '../style/Hand.css'


class Hand extends PureComponent {
  static propTypes = {
  }

  render() {
    // Map an array of player cards
    return (
        <div className="Hand" style={{display:"flex", flexDirection: 'row'}}>
            {this.props.cards
                .filter(card => card.location === "Hand")
                .map( (card, index) => <Card key={index} color={card.color} number={card.value} plus={card.plus} location={card.location}
                />)}
        </div>
    )
  }
}

const mapStateToProps = ({cards}) => ({cards})
export default connect(mapStateToProps, {  })(Hand)