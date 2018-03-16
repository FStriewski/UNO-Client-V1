import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import '../style/Hand.css'


let initialState = [
    {id: 20,
     color: "green",
     value: 6,
     plus: 0,
     location: "Hand"
    } , 

    {id: 0,
     color: "red",
     value: 8,
     plus: 0,
     location: "Hand"
    },

    {id: 1,
     color: "blue",
     value: null,
     plus: 2,
     location: "Hand"
    },

    {id: 5,
     color: "blue",
     value: 3,
     plus: null,
     location: "Hand"
    },

    {id: 25,
     color: "green",
     value: 5,
     plus: null,
     location: "Deck"
    },

    {id: 5,
     color: "yellow",
     value: 8,
     plus: null,
     location: "CurrentCard"
    }
]

class Hand extends PureComponent {
  static propTypes = {
  }

  render() {
    // Map an array of player cards
    return (
        <div className="Hand" style={{display:"flex", flexDirection: 'row'}}>
            {initialState
                .filter(card => card.location === "Hand")
                .map( (card, index) => <Card key={index} color={card.color} number={card.value}   />)}
        </div>
    )
  }
}

export default Hand