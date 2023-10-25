function addToSchedule() {
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const activity = document.getElementById("activity").value;
    const place = document.getElementById("place").value;
    const type = document.getElementById("type").value;
    const notes = document.getElementById("notes").value;
    const flag = document.getElementById("flag").value;
    const freeBusy = document.getElementById("freeBusy").checked ? "Busy" : "Free";

    const table = document.getElementById("scheduleTable");
    const newRow = table.insertRow(-1);

    const cellDate = newRow.insertCell(0);
    const cellStartTime = newRow.insertCell(1);
    const cellEndTime = newRow.insertCell(2);
    const cellActivity = newRow.insertCell(3);
    const cellPlace = newRow.insertCell(4);
    const cellType = newRow.insertCell(5);
    const cellNotes = newRow.insertCell(6);
    const cellFlag = newRow.insertCell(7);
    const cellFreeBusy = newRow.insertCell(8);

    cellDate.innerHTML = date;
    cellStartTime.innerHTML = startTime;
    cellEndTime.innerHTML = endTime;
    cellActivity.innerHTML = activity;
    cellPlace.innerHTML = place;
    cellType.innerHTML = type;
    cellNotes.innerHTML = notes;
    cellFlag.innerHTML = `<span style="background-color:${flag}; color:white;">${flag}</span>`;
    cellFreeBusy.innerHTML = freeBusy;

    document.getElementById("scheduleForm").reset();
}
