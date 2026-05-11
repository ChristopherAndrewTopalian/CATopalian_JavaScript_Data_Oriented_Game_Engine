// loadGame.js

function loadGame(event) 
{
    let file = event.target.files[0];

    if (!file) return;

    let reader = new FileReader();
    
    reader.onload = function(e) 
    {
        // Overwrite the current game world with the loaded data
        world = JSON.parse(e.target.result);

        // Wipe the old screen and build the new HTML elements
        initWorld(); 

        // Reset selection since the old element was overwritten
        selectedEntity = null;

        updateInterface();
    };

    reader.readAsText(file);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

