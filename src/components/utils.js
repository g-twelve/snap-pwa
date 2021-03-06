import { taskMan } from "../scheduler/TaskManager";
import { scheduler } from "../scheduler/Scheduler";
import { routineManager } from "../scheduler/RoutineManager";

export function reload() {
    routineManager.init()
    
    taskMan.init();
    taskMan.initDays();
    taskMan.allotRoutines();

    // remove all schedules
    scheduler.schedules = []
    // create new schedules
    scheduler.createSchedule();
}

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = ["Jan", "Feb", "Mar", "Apr", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
