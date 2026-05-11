// distanceSystem.js

function distanceSystem() 
{
    let distBox = ge('distanceBox');

    if (!distBox) return;

    // THE GUARD CLAUSE (The Bouncer)
    // If nothing is selected, OR the selected drone's scanner is turned off:
    if (selectedEntity === null || selectedEntity.distance === false) 
    {
        distBox.textContent = "Scanner Offline: Enable distance ability.";
        return; // This completely stops the function right here. No math runs.
    }

    // THE MATH
    // If it passed the bouncer, it means distance === true, so we do the math
    if (world.length >= 2) 
    {
        let e1 = world[0];
        let e2 = world[1];

        let dx = e2.x - e1.x;
        let dy = e2.y - e1.y;
        let distance = Math.sqrt((dx * dx) + (dy * dy));

        distBox.textContent = `Distance: ${Math.round(distance)}px`;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

