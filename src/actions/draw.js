import {DRAW} from './types'

export const drawCards = (id) => ({
    type: DRAW,
    payload:{
        id
    }
})
 
