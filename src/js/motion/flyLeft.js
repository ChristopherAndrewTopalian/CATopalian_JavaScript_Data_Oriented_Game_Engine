// flyLeft.js

function flyLeft()
{
    // Safety check
    if (selectedEntity === null) return;

    if (selectedEntity.location === false) return;

    // CHANGE THE DATA (The Brain)

    selectedEntity.x -= 10; 

    // UPDATE THE SCREEN (The Shadow)
    // Find the physical div, and force it to match the new data
    let droneDiv = ge(selectedEntity.id);
    droneDiv.style.left = selectedEntity.x + "px";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

