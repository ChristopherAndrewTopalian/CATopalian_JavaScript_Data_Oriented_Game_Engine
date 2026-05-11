// updateInterface.js

function updateComponentsButtons()
{
    let btnKeyboardToggle = ge('btnKeyboardToggle');

    let btnLocationToggle = ge('btnLocationToggle');

    let btnLEDToggle = ge('btnLEDToggle');

    let btnDistanceToggle = ge('btnDistanceToggle');

    let btnEvasionToggle = ge('btnEvasionToggle');

    let hasLocation = selectedEntity.location !== false;

    let hasLED= selectedEntity.led !== false;

    let hasDistance = selectedEntity.distance !== false;

    let hasEvasion = selectedEntity.evasion !== false;

    let hasKeyboard = selectedEntity.keyboard !== false

    if (hasKeyboard)
    {
        btnKeyboardToggle.textContent = 'Keyboard On';

        btnKeyboardToggle.style.backgroundColor = 'aqua';
        btnKeyboardToggle.style.color = 'white';
    }
    else
    {
        btnKeyboardToggle.textContent = 'Keyboard Off';

        btnKeyboardToggle.style.backgroundColor = 'black';
        btnKeyboardToggle.style.color = 'gray';
    }

    if (hasLocation)
    {
        btnLocationToggle.textContent = 'Location On';

        btnLocationToggle.style.backgroundColor = 'aqua';
        btnLocationToggle.style.color = 'white';
    }
    else
    {
        btnLocationToggle.textContent = 'Location Off';

        btnLocationToggle.style.backgroundColor = 'black';
        btnLocationToggle.style.color = 'gray';
    }

    //-//

    if (hasLED)
    {
        btnLEDToggle.textContent = 'LED On';

        btnLEDToggle.style.backgroundColor = 'aqua';
        btnLEDToggle.style.color = 'white';
    }
    else
    {
        btnLEDToggle.textContent = 'LED Off';

        btnLEDToggle.style.backgroundColor = 'black';
        btnLEDToggle.style.color = 'gray';
    }

    //-//

    if (hasDistance)
    {
        btnDistanceToggle.textContent = 'Distance On';
    
        btnDistanceToggle.style.backgroundColor = 'aqua';
        btnDistanceToggle.style.color = 'white';
    }
    else
    {
        btnDistanceToggle.textContent = 'Distance Off';
    
        btnDistanceToggle.style.backgroundColor = 'black';
        btnDistanceToggle.style.color = 'gray';
    }

    //-//

    if (hasEvasion)
    {
        btnEvasionToggle.textContent = 'Evasion On';
    
        btnEvasionToggle.style.backgroundColor = 'aqua';
        btnEvasionToggle.style.color = 'white';
    }
    else
    {
        btnEvasionToggle.textContent = 'Evasion Off';

        btnEvasionToggle.style.backgroundColor = 'black';
        btnEvasionToggle.style.color = 'gray';
    }
}

function updateActionsButtons()
{
    let btnFlyLeft = ge('btnFlyLeft');
    let btnFlyRight = ge('btnFlyRight');
    let btnEvade = ge('btnEvade');
    let btnHaltEvaion = ge('btnHaltEvaion');
    let btnLED = ge('btnLED');

    //-//

    let hasLocation = selectedEntity.location !== false;

    let hasLED = selectedEntity.led !== false;

    let hasEvasion = selectedEntity.evasion !== false;

    if (hasLocation)
    {
        //btnFlyLeft.disabled = false; // clickable

        //btnFlyRight.disabled = false; // clickable

        btnFlyLeft.style.backgroundColor = 'rgb(0, 217, 255)';
        btnFlyLeft.style.color = 'rgb(255, 255, 255)';

        btnFlyRight.style.backgroundColor = 'rgb(0, 217, 255)';
        btnFlyRight.style.color = 'rgb(255, 255, 255)';
    }
    else
    {
        //btnFlyLeft.disabled = true; // not clickable

        //btnFlyRight.disabled = true; // not clickable

        btnFlyLeft.style.backgroundColor = 'rgb(0, 0, 0)';
        btnFlyLeft.style.color = 'rgb(100, 100, 100)';

        btnFlyRight.style.backgroundColor = 'rgb(0, 0, 0)';
        btnFlyRight.style.color = 'rgb(100, 100, 100)';
    }

    //----//

    if (hasLED)
    {
        //btnLED.disabled = false; // make clickable

        btnLED.style.backgroundColor = 'rgb(0, 217, 255)';
        btnLED.style.color = 'rgb(255, 255, 255)';
    }
    else
    {
        //btnLED.disabled = true; // make NOT clickable

        btnLED.style.backgroundColor = 'rgb(0, 0, 0)';
        btnLED.style.color = 'rgb(100, 100, 100)';
    }

    //----//

    if (hasEvasion)
    {
        btnEvade.style.backgroundColor = 'rgb(0, 217, 255)';
        btnEvade.style.color = 'rgb(255, 255, 255)';

        btnHaltEvasion.style.backgroundColor = 'rgb(0, 217, 255)';
        btnHaltEvasion.style.color = 'rgb(255, 255, 255)';
    }
    else
    {
        btnEvade.style.backgroundColor = 'rgb(0, 0, 0)';
        btnEvade.style.color = 'rgb(100, 100, 100)';

        btnHaltEvasion.style.backgroundColor = 'rgb(0, 0, 0)';
        btnHaltEvasion.style.color = 'rgb(100, 100, 100)';
    }
}

function updateInterface()
{
    updateComponentsButtons();
    updateActionsButtons();
}


//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting