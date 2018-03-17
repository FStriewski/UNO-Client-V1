import {MOVE} from './types'


export const updateLocation = (id,location) => ({
         type: MOVE,
         payload:{
            id,
            location
            }
     })
 
