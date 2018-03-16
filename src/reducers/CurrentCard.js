//import {  } from '../actions/types'

let initialState = [
    {id: 20,
     color: "green",
     value: 1,
     plus: 0,
     location: "Deck"
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