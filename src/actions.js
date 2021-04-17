export const INITIALIZE_DOCTORS = "INITIALIZE_DOCTORS";
export const INITIALIZE_SCHEDULE = "INITIALIZE_SCHEDULE";

export function initializeDoctorsList(doctors) {
  return { type: INITIALIZE_DOCTORS, doctors: doctors };
}

export function initializeSchedule(schedule) {
    return { type: INITIALIZE_SCHEDULE, schedule: schedule };
  }
