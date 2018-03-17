import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import '../style/CurrentCard.css'

import { updateLocation } from '../actions/updateLocation'

class CurrentCard extends PureComponent {
  static propTypes = {
  }

   handleClick = () => {
    //cards[0]
    //let loc = this.props.cards.initialState.filter(card => card.location === "CurrentCard")
      console.log(this.props.cards.location) // String
    // this.props.updateLocation(loc[0].location)
   }

  render() {
    let card = this.props.cards[0]

    return (
        <div className="CurrentCard" onClick={this.handleClick}>
                <Card color={card.color} number={card.value} plus={card.plus} location={card.location} 
                />
        </div>
    )
  }
}


// const mapStateToProps = ({cards}) => ({cards})
// export default connect(mapStateToProps, {updateLocation  })(CurrentCard)


const mapStateToProps = ({cards}) => ({cards: cards.initialState.filter(card => card.location === "CurrentCard")})
export default connect(mapStateToProps, {updateLocation  })(CurrentCard)