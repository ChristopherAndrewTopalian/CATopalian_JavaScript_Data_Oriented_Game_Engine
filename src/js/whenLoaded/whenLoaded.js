// whenLoaded.js

function whenLoaded()
{
    world = [drone001, drone002];

    selectedEntity = drone001;

    makeInterface();

    addBtnSounds();

    //drawWorld();
    initWorld();

    updateInterface();

    //-//

    titleAll();

    //-//

    // controls
    window.addEventListener('keydown', function(event) 
    {
        // Safety Check: Do we have a drone, and is its keyboard switch turned ON?
        if (selectedEntity === null || selectedEntity.keyboard === false) return;

        let speed = 25;

        // Change the Data
        if (event.key === 'w' || event.key === 'W')
        {
            selectedEntity.y -= speed;
        }

        if (event.key === 's' || event.key === 'S')
        {
            selectedEntity.y += speed;
        }

        if (event.key === 'a' || event.key === 'A')
        {
            selectedEntity.x -= speed;
        }

        if (event.key === 'd' || event.key === 'D')
        {
            selectedEntity.x += speed;
        }
    });

    // start the engine
    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

