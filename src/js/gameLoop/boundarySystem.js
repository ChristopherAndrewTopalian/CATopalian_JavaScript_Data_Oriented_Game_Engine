// boundarySystem.js

function boundarySystem() 
{
    // Find out how big our game board currently is!
    // (If we are using a specific div, you can use ge('gameBoard').clientWidth)
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    for (let i = 0; i < world.length; i++) 
    {
        let element = world[i];

        // We only care about drones that are actively moving
        if (element.isEvading === true) 
        {
            // LEFT WALL CHECK
            if (element.x < 0) 
            {
                element.x = 0; // Push back inside
                element.vx = element.vx * -1; // Bounce
            }
            // RIGHT WALL CHECK
            else if (element.x + element.width > screenWidth) 
            {
                element.x = screenWidth - element.width; 
                element.vx = element.vx * -1; // Bounce
            }

            // TOP WALL CHECK
            if (element.y < 0) 
            {
                element.y = 0;
                element.vy = element.vy * -1;
            }
            // BOTTOM WALL CHECK
            else if (element.y + element.height > screenHeight) 
            {
                element.y = screenHeight - element.height;
                element.vy = element.vy * -1;
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

