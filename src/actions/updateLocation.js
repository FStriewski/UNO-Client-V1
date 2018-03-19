import {MOVE} from './types'

export const playCardFromHand = (id,location) => ({
         type: MOVE,
         payload:{
            id,
            location
            }
     })
 
