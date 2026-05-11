// renderSystem.js

function renderSystem() 
{
    // Do NOT wipe the HTML. Just update the CSS coordinates.
    for (let i = 0; i < world.length; i++) 
    {
        let currentData = world[i];

        let droneDiv = ge(currentData.id);

        // Force the physical div to match the pure data
        droneDiv.style.left = currentData.x + 'px';
        droneDiv.style.top = currentData.y + 'px';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

