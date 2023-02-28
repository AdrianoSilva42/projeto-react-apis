import bug from '../typesPokemon/bug.png'
import dark from '../typesPokemon/dark.png'
import eletric from '../typesPokemon/eletric.png'
import fairy from '../typesPokemon/fairy.png'
import fighting from '../typesPokemon/fighting.png'
import fire from '../typesPokemon/fire.png'
import flying from '../typesPokemon/flying.png'
import ghost from '../typesPokemon/ghost.png'
import grass from '../typesPokemon/grass.png'
import ground from '../typesPokemon/ground.png'
import ice from '../typesPokemon/ice.png'
import normal from '../typesPokemon/normal.png'
import poison from '../typesPokemon/poison.png'
import psychic from '../typesPokemon/psychic.png'
import rock from '../typesPokemon/rock.png'
import steel from '../typesPokemon/steel.png'
import water from '../typesPokemon/water.png'
import dragon from '../typesPokemon/dragon.png'

export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return eletric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return normal;
    }
  };