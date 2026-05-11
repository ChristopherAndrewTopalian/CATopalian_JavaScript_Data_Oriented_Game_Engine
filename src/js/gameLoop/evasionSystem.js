// evasionSystem.js

function evasionSystem() 
{
    for (let i = 0; i < world.length; i++) 
    {
        let drone = world[i];

        // THE DATA INTEGRITY CHECK (The Law)
        // If the drone lost the ability, forcefully power down its active state
        if (drone.evasion === false) 
        {
            drone.isEvading = false; // Turn off the active state
            
            // Optional but recommended: Kill its momentum so it stops instantly
            // rather than drifting forever
            drone.vx = 0;
            drone.vy = 0; 
        }

        // THE NORMAL MATH
        // Only do the math if the active switch is still true
        if (drone.isEvading === true) 
        {
            // Random chance to change direction
            if (Math.random() < 0.02) 
            {
                drone.vx = (Math.random() * 6) - 3; 
                drone.vy = (Math.random() * 6) - 3; 
            }

            // Actually move the data using the velocity
            drone.x += drone.vx;
            drone.y += drone.vy;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

