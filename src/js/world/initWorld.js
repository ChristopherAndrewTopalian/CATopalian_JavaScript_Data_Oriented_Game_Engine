// initWorld.js

function initWorld() 
{
    ge('gameBoard').innerHTML = '';

    for (let i = 0; i < world.length; i++) 
    {
        let currentData = world[i];

        let element = ce('div');
        element.id = currentData.id;
        element.style.position = 'absolute';
        element.style.width = currentData.width + 'px';
        element.style.height = currentData.height + 'px';

        // THE TEXTURE UPGRADE
        // If the data has a texture, use it. Otherwise, fall back to the solid color.
        if (currentData.texture) 
        {
            element.style.backgroundImage = `url('${currentData.texture}')`;
            element.style.backgroundSize = 'contain';
            element.style.backgroundRepeat = 'no-repeat'; // so it doesn't tile
            element.style.backgroundPosition = 'center';
            // Optional: Hide the border if you want the image to look completely seamless
            // element.style.border = 'none'; 
        } 
        else 
        {
            element.style.backgroundColor = currentData.bodyColor;
            element.style.border = `solid 1px ${currentData.borderColor}`;
        }

        // The Click to Select
        element.onclick = function() 
        {
            clickSound();

            selectedEntity = currentData;

            // This infoBox update is a fantastic addition.
            ge('infoBox').textContent = selectedEntity.name;

            updateInterface();
        };

        ge('gameBoard').append(element);
    }
}

/*
function initWorld() 
{
    ge('gameBoard').innerHTML = '';

    for (let i = 0; i < world.length; i++) 
    {
        let currentData = world[i];

        let element = ce('div');
        element.id = currentData.id;
        element.style.position = 'absolute';
        element.style.width = currentData.width + 'px';
        element.style.height = currentData.height + 'px';

        // Setup initial colors
        element.style.backgroundColor = currentData.bodyColor;
        element.style.border = `solid 1px ${currentData.borderColor}`;

        // The Click to Select
        element.onclick = function() 
        {
            selectedEntity = currentData;

            ge('infoBox').textContent = selectedEntity.name;

            updateInterface();
        };

        ge('gameBoard').append(element);
    }
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

