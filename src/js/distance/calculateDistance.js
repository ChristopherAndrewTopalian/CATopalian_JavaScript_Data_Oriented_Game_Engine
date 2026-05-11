// calculateDistance.js

function calculateDistance() 
{
    // Safety check: Make sure we actually have 2 entities to measure
    if (world.length < 2) return; 

    // Look directly at the data array
    let d1 = world[0];
    let d2 = world[1];

    // Standard math to find the difference between two points
    let dx = d2.x - d1.x;
    let dy = d2.y - d1.y;
    let distance = Math.sqrt((dx * dx) + (dy * dy));

    ge('infoBox').textContent = `Distance: ${Math.round(distance)}px`;

    return `Distance: ${Math.round(distance)}px`;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

