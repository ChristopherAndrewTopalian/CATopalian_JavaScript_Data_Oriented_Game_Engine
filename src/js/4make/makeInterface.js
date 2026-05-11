// makeInterface.js

function makeInterface()
{
    let gameBoard = ce('div');
    gameBoard.id = 'gameBoard';
    //gameBoard.style.width = '100%';
    //gameBoard.style.height = '100%';
    ba(gameBoard);

    //-//

    let title = ce('a');
    title.className = 'theTitle';
    title.textContent = "CATopalian JavaScript Data Oriented Game Engine";
    title.style.textDecoration = 'none';
    title.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Data_Oriented_Game_Engine';
    title.style.position = 'absolute';
    title.style.left = '0px';
    title.style.top = '0px';
    title.style.margin = '4px';
    ba(title);

    //-//

    let abilitiesContainer = ce('div');
    abilitiesContainer.id = 'abilitiesContainer';
    abilitiesContainer.style.display = 'flex';
    abilitiesContainer.style.flexDirection = 'column';
    abilitiesContainer.style.position = 'absolute';
    abilitiesContainer.style.left = '0px';
    abilitiesContainer.style.top = '30px';
    abilitiesContainer.style.width = '130px';
    ba(abilitiesContainer);

    //-//

    let btnKeyboardToggle = ce('button');
    btnKeyboardToggle.id = 'btnKeyboardToggle';
    btnKeyboardToggle.textContent = 'Keyboard';

    btnKeyboardToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.keyboard === true) 
        {
            selectedEntity.keyboard = false;
        } 
        else 
        {
            selectedEntity.keyboard = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnKeyboardToggle);

    //-//

    let btnLocationToggle = ce('button');
    btnLocationToggle.id = 'btnLocationToggle';
    btnLocationToggle.textContent = 'Location';

    btnLocationToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.location === true) 
        {
            selectedEntity.location = false;
        } 
        else 
        {
            selectedEntity.location = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnLocationToggle);

    //-//

    let btnLEDToggle = ce('button');
    btnLEDToggle.id = 'btnLEDToggle';
    btnLEDToggle.textContent = 'LED';

    btnLEDToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.led === true) 
        {
            selectedEntity.led = false;
        } 
        else 
        {
            selectedEntity.led = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnLEDToggle);

    //-//

    let btnDistanceToggle = ce('button');
    btnDistanceToggle.id = 'btnDistanceToggle';
    btnDistanceToggle.textContent = 'Distance';

    btnDistanceToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.distance === true) 
        {
            selectedEntity.distance = false;
        } 
        else 
        {
            selectedEntity.distance = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnDistanceToggle);

    //-//

    let btnEvasionToggle = ce('button');
    btnEvasionToggle.id = 'btnEvasionToggle';
    btnDistanceToggle.textContent = 'Evasion';

    btnEvasionToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.evasion === true) 
        {
            selectedEntity.evasion = false;
        } 
        else 
        {
            selectedEntity.evasion = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnEvasionToggle);

    //----//

    let infoBox = ce('div');
    infoBox.id = 'infoBox';
    infoBox.textContent = selectedEntity.name;
    infoBox.style.width = '100px';
    infoBox.style.height = '75px';
    infoBox.style.border = 'solid 1px white';
    infoBox.style.overflow = 'scroll';
    infoBox.style.padding = '2px 4px';
    abilitiesContainer.append(infoBox);

    //-//

    let distanceBox = ce('div');
    distanceBox.id = 'distanceBox';
    distanceBox.style.width = '100px';
    distanceBox.style.height = '90px';
    distanceBox.style.border = 'solid 1px white';
    distanceBox.style.overflow = 'scroll';
    distanceBox.style.padding = '2px 4px';
    abilitiesContainer.append(distanceBox);

    //----//

    let actionsContainer = ce('div');
    actionsContainer.id = 'actionsContainer';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.flexDirection = 'column';
    actionsContainer.style.position = 'absolute';
    actionsContainer.style.right = '0px';
    actionsContainer.style.top = '0px';
    actionsContainer.style.width = '130px';
    ba(actionsContainer);

    //-//

    let btnFlyLeft = ce('button');
    btnFlyLeft.id = 'btnFlyLeft';
    btnFlyLeft.textContent = 'Fly Left';
    btnFlyLeft.onclick = function()
    {
        if(selectedEntity.location == true)
        {
            flyLeft(selectedEntity);
        }
        else
        {
            cl('no location enabled');
        }
    };
    actionsContainer.append(btnFlyLeft);

    //-//

    let btnFlyRight = ce('button');
    btnFlyRight.id = 'btnFlyRight';
    btnFlyRight.textContent = 'Fly Right';
    btnFlyRight.onclick = function()
    {
        if(selectedEntity.location == true)
        {
            flyRight(selectedEntity);
        }
        else
        {
            cl('no location enabled');
        }
    };
    actionsContainer.append(btnFlyRight);

    //-//

    let btnLED = ce('button');
    btnLED.id = 'btnLED';
    btnLED.textContent = 'LED';
    btnLED.onclick = function()
    {
        if (selectedEntity.led == true)
        {
            ge(selectedEntity.id).backgroundColor = randomColor(selectedEntity.id);
        }
        else
        {
            alert('LED not installed yet');
        }
    };
    actionsContainer.append(btnLED);

    //-//

    let btnEvade = ce('button');
    btnEvade.id = 'btnEvade';
    btnEvade.textContent = 'Evade';
    btnEvade.onclick = function()
    {
        if (selectedEntity.evasion == true)
        {
            selectedEntity.isEvading = true;
        }
        else
        {
            alert('Evasion not installed yet');
        }
    };
    actionsContainer.append(btnEvade);

    //-//

    let btnHaltEvasion = ce('button');
    btnHaltEvasion.id = 'btnHaltEvasion';
    btnHaltEvasion.textContent = 'Halt Evasion';
    btnHaltEvasion.onclick = function()
    {
        if (selectedEntity.evasion == true)
        {
            selectedEntity.isEvading = false;
        }
        else
        {
            alert('Evasion not installed yet');
        }
    };
    actionsContainer.append(btnHaltEvasion);

    //-//

    let saveLoadContainer = ce('div');
    saveLoadContainer.style.display = 'flex';
    saveLoadContainer.style.flexDirection = 'column';
    actionsContainer.append(saveLoadContainer);

    //-//

    let saveButton = ce('button');
    saveButton.id = 'saveButton';
    saveButton.textContent = 'Save';
    saveButton.onclick = function()
    {
        saveGame();
    };
    saveLoadContainer.append(saveButton);

    //-//

    let loadButton = ce('input');
    loadButton.id = 'loadButton';
    loadButton.textContent = 'Load';
    loadButton.type = 'file';
    loadButton.accept = '.json';
    loadButton.style.display = 'none';
    loadButton.onchange = function(event)
    {
        loadGame(event);
    };
    saveLoadContainer.append(loadButton);

    //-//

    let loadButtonClick = ce('button');
    loadButtonClick.textContent = 'LOAD';
    loadButtonClick.onclick = function()
    {
        loadButton.click();
    };
    saveLoadContainer.append(loadButtonClick);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

