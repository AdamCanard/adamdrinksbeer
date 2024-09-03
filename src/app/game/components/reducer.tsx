import { Action, Istate } from "./gametypes";

//define reducer for game mechanics
export function reducer(state: Istate, action: Action) {
  switch (action.type) {
    //runs on each beer click
    //TODO change 1 to "SIP POWER variable"
    case "CLICK":
      let tipsoIncrease;
      if (state.tipsoLevel + 3 > 100) {
        tipsoIncrease = 100 - state.tipsoLevel;
      } else {
        tipsoIncrease = 3;
      }
      return {
        sips: state.sips + state.sipPower,
        sipsTaken: state.sipsTaken + state.sipPower,
        drunkness: state.drunkness,
        totalSips: state.totalSips + state.sipPower,
        tipsoLevel: state.tipsoLevel + tipsoIncrease,
        sps: state.sps,
        sipPower: state.sipPower,
        beer: state.beer,
      };
    case "BEER":
      return {
        sips: state.sips,
        sipsTaken: state.sipsTaken,
        drunkness: state.drunkness,
        totalSips: state.totalSips,
        tipsoLevel: state.tipsoLevel,
        sps: state.sps,
        sipPower: state.sipPower,
        beer: state.beer + 1,
      };

    case "POWER":
      if (action.power) {
        return {
          sips: state.sips,
          sipsTaken: state.sipsTaken,
          drunkness: state.drunkness,
          totalSips: state.totalSips,
          tipsoLevel: state.tipsoLevel,
          sps: state.sps,
          sipPower: state.sipPower * action.power,
          beer: state.beer,
        };
      }
    //runs on purchase of item, spends the sips
    case "BUY":
      if (action.buy) {
        return {
          sips: state.sips - action.buy,
          sipsTaken: state.sipsTaken,
          drunkness: state.drunkness,
          totalSips: state.totalSips,
          tipsoLevel: state.tipsoLevel,
          sps: state.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      }
    case "WAGER":
      if (action.wager) {
        return {
          sips: state.sips - action.wager,
          sipsTaken: state.sipsTaken,
          drunkness: state.drunkness,
          totalSips: state.totalSips,
          tipsoLevel: state.tipsoLevel,
          sps: state.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      }
    case "WIN":
      if (action.win) {
        return {
          sips: state.sips + action.win,
          sipsTaken: state.sipsTaken,
          drunkness: state.drunkness,
          totalSips: state.totalSips,
          tipsoLevel: state.tipsoLevel,
          sps: state.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      }
    //run by useEffect connected to game loop, adds SPS to total sips and updates SPS counter
    case "LOOP":
      let tipsoReduce;

      if (state.tipsoLevel - 3 < 0) {
        tipsoReduce = state.tipsoLevel;
      } else {
        tipsoReduce = 3;
      }
      if (action.sps) {
        return {
          sips: state.sips + action.sps,
          sipsTaken: state.sipsTaken,
          drunkness: state.drunkness,
          totalSips: state.totalSips + action.sps,
          tipsoLevel: state.tipsoLevel - tipsoReduce,
          sps: action.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      } else {
        return {
          sips: state.sips,
          sipsTaken: state.sipsTaken,
          drunkness: state.drunkness,
          totalSips: state.totalSips,
          tipsoLevel: state.tipsoLevel - tipsoReduce,
          sps: state.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      }

    default:
      return state;
  }
}
