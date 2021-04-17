import { initialState} from '../store.js'
import {INITIALIZE_DOCTORS, INITIALIZE_SCHEDULE } from '../actions'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_DOCTORS:
      return {
        ...state,
        doctorsList: action.doctors
        }
    case INITIALIZE_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule
        }
    default:
      return state
  }
};