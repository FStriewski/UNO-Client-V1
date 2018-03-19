const initialPlayers = [
  {
    username: "Player 1",
    location: "Amsterdam",
    image: "http://www.christies.com/media-library/images/features/articles/2016/01/11/david-bowie/Brian-Duffy-David-Bowie-as-Aladdin-Sane-1973.jpg",
    turnStatus: false,
    score: 0
  },
  {
    username: "Player 2",
    location: "London",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSWRiWaVaVQ-CeOxHaxZAARKR-Iy-n7amLfKS1Cl5G91nQAehNQ",
    turnStatus: true,
    score: 1
  }
]



export default function(state = initialPlayers, action = {}) {

    switch (action.type) {
      case 'SOMETHING':
        return {
          state
        }
      default:
        return state
      }
    }
