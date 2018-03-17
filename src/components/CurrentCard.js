import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import '../style/CurrentCard.css'

import { updateLocation } from '../actions/updateLocation'

class CurrentCard extends PureComponent {
  static propTypes = {
  }


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


const mapStateToProps = ({cards}) => ({cards: cards.filter(card => card.location === "CurrentCard")})
export default connect(mapStateToProps, {updateLocation  })(CurrentCard)