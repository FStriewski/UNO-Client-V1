import {DRAWSINGLE, DRAWCARDS} from './types'

export const drawSingleCard = (id) => ({
    type: DRAWSINGLE,
    payload:{
        id
    }
})

export const drawCards = (id) => ({
    type: DRAWCARDS,
    payload:{
        id
    }
})
 
