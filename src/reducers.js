import { INITIALIZE_DOCTORS, INITIALIZE_SCHEDULE } from "./actions";

const initialState = {
  doctorsList: [],
  schedule: [],
  initialized: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_DOCTORS:
      return {
        ...state,
        doctorsList: action.doctors,
        initialized: true,
      };
    case INITIALIZE_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule,
        initialized: true,
      };
    default:
      return state;
  }
};
