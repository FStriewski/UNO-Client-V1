//import {  } from '../actions/types'

let initialState = [
    {id: 10,
     color: "blue",
     value: 1,
     plus: 0,
     location: "Player1"
    },

    {id: 11,
     color: "green",
     value: null,
     plus: 2,
     location: "Player1"
    },

    {id: 12,
     color: "yellow",
     value: 6,
     plus: 0,
     location: "Player1"
    },

    {id: 13,
     color: "black",
     value: null,
     plus: 0,
     location: "Player1"
    }
   
]




export default function(state = {}, action = {}) {

    switch (action.type) {
      case 'SOMETHING':
        return {
          state
        }
      default:
        return state
      }
    }