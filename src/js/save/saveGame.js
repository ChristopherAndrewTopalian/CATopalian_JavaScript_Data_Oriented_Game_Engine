// saveGame.js

function saveGame() 
{
    // Squish the world array into text
    let saveData = JSON.stringify(world);

    // Create a virtual text file in the browser's memory
    let blob = new Blob([saveData], { type: "application/json" });

    // Create an invisible download link and click it
    let a = ce('a');
    a.href = URL.createObjectURL(blob);
    a.download = "game_save_file.json"; // Name of the downloaded file
    a.click(); 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

