// gameLoop.js

function gameLoop() 
{
    // Process all Data (The Brain)
    evasionSystem();
    
    boundarySystem(); // Check for wall collisions right after they move

    collisionSystem();

    distanceSystem();

    // Draw the updated Data (The Shadow)
    renderSystem();

    // Ask the browser to run this loop again on the next frame
    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

