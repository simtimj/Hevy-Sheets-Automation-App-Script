function myFunction() {
  const exSheetAndTab = SpreadsheetApp.openById("1oBtPYDCDiiXms0cqbfiymrAQ-qqLeI5OI7Ojee8Z_IY").getSheetByName("V4: v3 + weeklies");
  
  // const exIdMap = {
  //   "military press":
  // }



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
  console.log(1, collectXMarked());

  
  const addExId = () => {
    
  }

  
  // iterate through b col to find x's


      // let newEx = {
    //   exName,
    //   exID,
    //   sets,
    //   reps
    // }

}


/*

exercise obj to send

{
  "routine": {
    "title": "murmurmur",
    "exercises": [
      {
        "Bench Press()"
      }
    ]

  }
}










  let exercises = [
    {
      exName = "bench_press",
      exID,
      lbs,
      sets,
      reps
    }
  ]


old api: 
5450018e-9183-4da9-a164-78ca08e0efc2



curl -H "Authorization: Bearer abc123XYZ" \
https://api.hevyapp.com/v1/exercise_templates?limit=100




*/

















