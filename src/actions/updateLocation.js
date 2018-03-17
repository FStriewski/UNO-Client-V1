import {MOVE} from './types'


export const updateLocation = (x) => {
    console.log(x)
    return {
        type: MOVE,
        payload: x
    }
 }
