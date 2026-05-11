// collisionSystem.js

function collisionSystem() 
{
    // Loop through every entity
    for (let i = 0; i < world.length; i++) 
    {
        for (let j = i + 1; j < world.length; j++) 
        {
            let e1 = world[i];
            let e2 = world[j];

            // AABB Collision Math: Check if their boxes overlap
            let isColliding = (
                e1.x < e2.x + e2.width &&
                e1.x + e1.width > e2.x &&
                e1.y < e2.y + e2.height &&
                e1.y + e1.height > e2.y
            );

            if (isColliding) 
            {
                // SCENARIO 1: Both are evading (Billiard Balls)
                if (e1.isEvading === true && e2.isEvading === true) 
                {
                    // Push apart
                    e1.x -= e1.vx; e1.y -= e1.vy;
                    e2.x -= e2.vx; e2.y -= e2.vy;

                    // Swap velocities
                    let tempVx = e1.vx; let tempVy = e1.vy;
                    e1.vx = e2.vx; e1.vy = e2.vy;
                    e2.vx = tempVx; e2.vy = tempVy;
                }
                // SCENARIO 2: Drone 1 is hitting a stationary Drone 2 (Brick Wall)
                else if (e1.isEvading === true && e2.isEvading === false) 
                {
                    e1.x -= e1.vx; e1.y -= e1.vy; // Push Drone 1 back
                    e1.vx = e1.vx * -1;           // Bounce Drone 1 only
                    e1.vy = e1.vy * -1;
                }
                // SCENARIO 3: Drone 2 is hitting a stationary Drone 1 (Brick Wall)
                else if (e1.isEvading === false && e2.isEvading === true) 
                {
                    e2.x -= e2.vx; e2.y -= e2.vy; // Push Drone 2 back
                    e2.vx = e2.vx * -1;           // Bounce Drone 2 only
                    e2.vy = e2.vy * -1;
                }
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

