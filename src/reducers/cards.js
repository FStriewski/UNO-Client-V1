//import {  } from '../actions/types'
import {MOVE, DRAW} from '../actions/types'

let initialState = [
       {id: 20,
        color: "green",
        value: 2,
        plus: 0,
        location: "CurrentCard"
       } , 

       {id: 0,
        color: "red",
        value: 2,
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
        plus: 4,
        location: "Deck"
       },

       {id: 4,
        color: "red",
        value: 6,
        plus: 4,
        location: "Deck"
       },

       {id: 5,
        color: "red",
        value: 2,
        plus: null,
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

          switch (action.payload.location) {

            case "CurrentCard":       // Current Card should not be replaced by hand
              return x

            // case "Deck":              // Uncomment to test deck. Now handled by draw
            //   if(x.id !== action.payload.id ){
            //     return x
            //   } 
            //   return {...x, location: "Hand"}

            // Add more game logic here
            case "Hand":              // Move to current card and move last current card to deck
              if(x.id !== action.payload.id && x.location !== "CurrentCard" ){
                return x
              }
              if( x.id !== action.payload.id && x.location === "CurrentCard" ){
                return {...x, location: "Deck"}
              }
              return {...x, location: "CurrentCard"}


              case "Player2Hand":              // Blueprint for PlayerXHand
              if(x.id !== action.payload.id && x.location !== "CurrentCard" ){
                return x
              }
              if( x.id !== action.payload.id && x.location === "CurrentCard" ){
                return {...x, location: "Deck"}
              }
              return {...x, location: "CurrentCard"}

              default:
              return {...x}
            }
          })

      case DRAW :
        return state.map((x) => {
          if(x.id !== action.payload.id ){
                return x
              }
          // Moves ALL Deck cards to hand:
             return {...x, location: "Hand"}



       })
      
      default:
        return state
      }
    }