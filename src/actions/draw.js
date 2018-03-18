import {DRAW} from './types'

export const drawCards = (x) => ({
    type: DRAW,
    payload:{
        numberOfCards: x
    }
})
 
