import "../styles/settings.css";

export function Settings_Routines () {
    return (
        <form id="routines-form">
            <div className='settings-title'>
            <div className='settings-title-icon'></div>
                <label className='header'>Routines</label>
            </div>

            <div className='setting-line'>
                <label className='setting-name taskname-name'>Name</label>
                <input type='text' className='name-input' id="routine-name"></input>
            </div>

            <div className='setting-line'>
                <label className='setting-name taskstart-name timeset-name'>Start Time</label>
                <input type='time' className='time-input' id="start-time"></input>
            </div>

            <div className='setting-line'>
                <label className='setting-name taskend-name timeset-name'>End Time</label>
                <input type='time' className='time-input' id="end-time"></input>
            </div>
            <div>
                <button type="button" className='add-task-button' onClick={saveRoutine}>Add Routine</button>
            </div>
        </form>
    )
}

function saveRoutine() {
    var name = document.getElementById("routine-name").value;
    var startTimeRaw = document.getElementById("start-time").value.split(":");
    var endTimeRaw = document.getElementById("end-time").value.split(":");

    if (name=="" || startTimeRaw.length==1 || endTimeRaw.length==1) {
        document.getElementById("routines-form").reset();
        // TODO: Tell user that input is invalid
        return;
    }

    var startTime = parseInt(startTimeRaw[0])*60 + parseInt(startTimeRaw[1]);
    var endTime = parseInt(endTimeRaw[0])*60 + parseInt(endTimeRaw[1]);

    let routine = {
        name: name,
        startTime: startTime,
        endTime: endTime
    }

    var settings = JSON.parse(localStorage.getItem("settings"));
    settings.routines.push(routine);
    // settings.routines = [];
    localStorage.setItem('settings', JSON.stringify(settings));

    document.getElementById("routines-form").reset();
}