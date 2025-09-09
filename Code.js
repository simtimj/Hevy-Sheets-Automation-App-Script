function myFunction() {
  const exSheetAndTab = SpreadsheetApp.openById("1oBtPYDCDiiXms0cqbfiymrAQ-qqLeI5OI7Ojee8Z_IY").getSheetByName("V4: v3 + weeklies");

  /******************************************************************/
  
  // coo coo coo
  const exIdMap = {
    "Overhead Press (Barbell)": "79D0BB3A",
    "Shoulder Press (db) seated": "878CD1D0",
    "Front Raise (db)": "BD86EFD5",
    "Lateral Raise (db)": "422B08F1",
    "Reverse Fly (db)": "E5988A0A",
    "Pull Ups": "1B2B1E7C",
    "Bent Over Row (Barbell)": "55E6546F",
    "Bent Over Row (Dumbbell)": "23E92538",
    "Deadlift (bar)": "C6272009",
    "Shrug (db)": "ABEC557F",
    "Bench Press (barbell)": "79D0BB3A",
    "Incline Bench Press (Barbell)": "50DFDFAB",
    "Decline Bench Press (Barbell)": "DA0F0470",
    "Chest Fly (db)": "12017185",
    "Push up": "392887AA",
    "Bicep Curl (Barbell)": "A5AC6449",
    "Hammer Curl (Dumbbell)": "7E3BC8B6",
    "Concentration Curl": "724CDE60",
    "Preacher Curl (Barbell)": "4F942934",
    "Reverse Curl (Barbell)": "112FC6B7",
    "Bench Press - Close Grip (Barbell)": "35B51B87",
    "Triceps Kickback (Dumbbell)": "6127A3AD",
    "Triceps Extension": "2F8D3067",
    "Skullcrusher (Barbell)": "875F585F",
    "Ab Wheel": "99D5F10E",
    "Lying Leg Raise": "09C9F635",
    "Hanging Knee Raise": "08590920",
    "Bicycle Crunch": "A41C7261",
    "Decline Crunch": "BC10A922",
    "Plank": "C6C9B8A0",
    "Russian Twist": "2982AA23",
    "Banded Rotation Twist": "80edc7b9-04fb-408b-b1e2-6fa2ef39b721",
    "Side Bend (Dumbbell)": "026FD047",
    "Farmers Walk": "50C613D0",
    "Side Plank": "E3EDA509",
    "Squat (Barbell)": "D04AC939",
    "Lunge (Dumbbell)": "6E6EE645",
    "Straight Leg Deadlift": "2A48E443",
    "Standing Calf Raise (Dumbbell)": "E53CCBE5",
    "Standing Calf Raise": "06745E58",
    "Squat (Bodyweight)": "9694DA61",
    "Narrow Squat": "86bfe6bb-1f68-491c-9131-add186f8df6a",
    "Step Up": "128A2381",
    "Clamshell": "CC016611",
    "Reverse Clamshell": "44021571-3f4e-4855-bcc3-7e52347c472d",
    "Banded Side Step": "7e6a6e63-5941-451e-bd5c-a26e319e3711",
    "High Knees (banded)": "150E076B",
  }

  /******************************************************************/

  // nice nice nice
  const collectXMarked = () => {
    let bRow = exSheetAndTab.getRange(1, 2, exSheetAndTab.getLastRow()).getValues();
    let exercises = []

    // iterate to find x and corresponding ex title
    for (let i = 0; i < bRow.length; i++) {
      let bCell = bRow[i];

      let rowNum = i + 1;
      let bCellPosition = exSheetAndTab.getRange("B" + rowNum);
      let exName = bCellPosition.offset(0, 1).getValue();
      
      if (bCell == "x") {
        exercises.push(exName);
      }
    }
    return exercises;
  }

  let createExercise = (exName) => {
    let exerciseFormattedArr = [];
    let exList = collectXMarked();

    let exerciseTemplate = {
      "exerciseTemplateId": "12345",
      "sets": [
        { "type": "normal", "reps": 10},
        { "type": "normal", "reps": 10}
      ]
    }

    // let exerciseTemplate = {
    //   "superset_id": null,
    //   "rest_seconds": 60,
    //   "sets": [
    //     {
    //       "type": "normal",
    //       "weight_kg": 100,
    //       "reps": 10,
    //       "distance_meters": null,
    //       "duration_seconds": null,
    //       "custom_metric": null,
    //       "rep_range": {
    //         "start": 8,
    //         "end": 12
    //       }
    //     }
    //   ]
    // }

  }

  /******************************************************************/

  // this is where you put the arr of exercises
  let createRoutine = (exList) => {

    // put together
    let exercises = [];

    for (let i = 0; i < exList.length; i++) {
      let exName = exList[i];
      // console.log("ID:", exName, exIdMap[exName])
      
      let fixedEx = {
           "exercise_template_id": exIdMap[exName],
           "sets": [
             { "type": "normal", "reps": 10 },
             { "type": "normal", "reps": 10 },
             { "type": "normal", "reps": 10 },
           ]
      }
      exercises.push(fixedEx);
    }

    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let exRoutineName = `${month}/${day}`;

    let routine = {
      "title": exRoutineName,
      "folder_id": null,       
      exercises
    }

    return routine;
  }
  

  /**********************************************************/
  const sendRoutine = () => {
    let url = "https://api.hevyapp.com/v1/routines";

    let payload = {
      routine : createRoutine(collectXMarked())
    }

    let options = {
      method: "post",
      headers: {
        "accept": "application/json",
        "api-key": "5450018e-9183-4da9-a164-78ca08e0efc2",
        "Content-Type": "application/json"
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    }

     const response = UrlFetchApp.fetch(url, options);

    // Log result
    Logger.log("Status: " + response.getResponseCode());
    Logger.log("Response: " + response.getContentText());

  }
  sendRoutine();
}

















