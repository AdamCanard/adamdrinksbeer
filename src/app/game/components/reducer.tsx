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
        sps: state.sps,
        sipPower: state.sipPower,
      };

    case "POWER":
      if (action.power)
        return {
          sips: state.sips,
          sipsTaken: state.sipsTaken,
          sps: state.sps,
          sipPower: state.sipPower * action.power,
        };
    //runs on purchase of item, spends the sips
    case "BUY":
      if (action.buy) {
        return {
          sips: state.sips - action.buy,
          sipsTaken: state.sipsTaken,
          sps: state.sps,
          sipPower: state.sipPower,
        };
      }
    //run by useEffect connected to game loop, adds SPS to total sips and updates SPS counter
    case "LOOP":
      if (action.sps) {
        return {
          sips: state.sips + action.sps,
          sipsTaken: state.sipsTaken,
          sps: action.sps,
          sipPower: state.sipPower,
        };
      }

    default:
      return state;
  }
}
