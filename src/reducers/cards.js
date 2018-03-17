//import {  } from '../actions/types'
import {MOVE} from '../actions/types'

let initialState = [
       {id: 20,
        color: "green",
        value: 2,
        plus: 0,
        location: "CurrentCard"
       } , 

       {id: 0,
        color: "red",
        value: 3,
        plus: 0,
        location: "Deck"
       },
   
       {id: 1,
        color: "blue",
        value: null,
        plus: 2,
        location: "Deck"
       },
   
       {id: 2,
        color: "green",
        value: 6,
        plus: 0,
        location: "Deck"
       },
   
       {id: 3,
        color: "black",
        value: null,
        plus: 0,
        location: "Deck"
       },

       {id: 10,
        color: "blue",
        value: 7,
        plus: 0,
        location: "Hand"
       },
   
       {id: 11,
        color: "green",
        value: null,
        plus: 2,
        location: "Hand"
       },
   
       {id: 12,
        color: "yellow",
        value: 6,
        plus: 0,
        location: "Hand"
       },
   
       {id: 13,
        color: "black",
        value: null,
        plus: 0,
        location: "Hand"
       }
   
]

export default function(state = initialState, action = {}) {

    switch (action.type) {
      case MOVE :
      return state.map((x) => { 
        if(x.id != action.payload.id){
          return x
        } 
          switch (action.payload.location) {
            case "CurrentCard": 
              return {...x, location: "Deck"}
            case "Hand": 
              return {...x, location: "Deck"}
            default:
              return {...x}
            }

          })
      
      default:
        return state
      }
    }