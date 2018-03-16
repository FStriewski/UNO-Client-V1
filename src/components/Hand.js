import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import '../style/Hand.css'


let initialState = [
    {id: 20,
     color: "green",
     value: 1,
     plus: 0,
     location: "Board"
    } , 

    {id: 0,
     color: "red",
     value: 1,
     plus: 0,
     location: "Deck"
    },

    {id: 1,
     color: "blue",
     value: null,
     plus: 2,
     location: "Deck"
    },

    {id: 5,
     color: "blue",
     value: 3,
     plus: null,
     location: "Deck"
    }
]

class Hand extends PureComponent {
  static propTypes = {
  }

  render() {
    // Map an array of player cards
    return (
        <div className="Hand" style={{display:"flex", flexDirection: 'row'}}>
            
  
            {initialState.map( (card, index) => <Card key={index} color={card.color}    />)}
            {/* <Card/>
            <Card/>
            <Card/> */}
        </div>
    )
  }
}

export default Hand