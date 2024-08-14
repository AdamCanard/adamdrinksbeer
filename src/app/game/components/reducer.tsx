import { Action, Istate } from "./gametypes";

//define reducer for game mechanics
export function reducer(state: Istate, action: Action) {
  switch (action.type) {
    //runs on each beer click
    //TODO change 1 to "SIP POWER variable"
    case "CLICK":
      return {
        sips: state.sips + state.sipPower,
        sipsTaken: state.sipsTaken + state.sipPower,
        totalSips: state.totalSips + state.sipPower,
        sps: state.sps,
        sipPower: state.sipPower,
        beer: state.beer,
      };
    case "BEER":
      return {
        sips: state.sips,
        sipsTaken: state.sipsTaken,
        totalSips: state.totalSips,
        sps: state.sps,
        sipPower: state.sipPower,
        beer: state.beer + 1,
      };

    case "POWER":
      if (action.power) {
        return {
          sips: state.sips,
          sipsTaken: state.sipsTaken,
          totalSips: state.totalSips,
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
          totalSips: state.totalSips,
          sps: state.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      }
    //run by useEffect connected to game loop, adds SPS to total sips and updates SPS counter
    case "LOOP":
      if (action.sps) {
        return {
          sips: state.sips + action.sps,
          sipsTaken: state.sipsTaken,
          totalSips: state.totalSips + action.sps,
          sps: action.sps,
          sipPower: state.sipPower,
          beer: state.beer,
        };
      }

    default:
      return state;
  }
}
