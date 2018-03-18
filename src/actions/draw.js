import {DRAWSINGLE, DRAWCARDS} from './types'

export const drawSingleCard = (id) => ({
    type: DRAWSINGLE,
    payload:{
        id
    }
})

export const drawCards = (arr) => ({
    type: DRAWCARDS,
    payload:
        arr
    
})
 
