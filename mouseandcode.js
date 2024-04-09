//April 9 of 2024
//Mario Acosta Automation process 

const puppeteer = require('puppeteer');
require('dotenv').config();

const { launchBrowserAndNavigateToDocument } = require('./components/launchBrowserAndNavigate.js');
const { performTest } = require('./components/newSketch.js');
const { clickButtonByIndex } = require('./components/clickButtonByIndex.js');
const copySketchFunction = require('./components/copySketchFunction.js');
const pasteIntoSketchFunction = require('./components/pasteIntoSketchFunction.js');
const editIntoSketchFunction = require('./components/editIntoSketchFunction.js');
const renameIntoSketchFunction = require('./components/renameIntoSketchFunction.js');

const { performRightClickOptionByTitle } = require('./components/performRightClickOptionByTitle.js');


(async () => {
    try {

        //LAUNCH BROWSER AND LOGIN
        const newPage = await launchBrowserAndNavigateToDocument(); // This line should return a newPage object


        // NEW SKETCH
        // await performTest(newPage);


        // //ALL THE CODE TOGETHER
        // const desiredIndex = 5; // Or any other desired index
        // await clickButtonByIndex(newPage, desiredIndex);
        // //Right click option
        // const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        // const title = 'First Sketch'; // Replace with the desired title
        // const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
        // console.log(editOptions3);
        // // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        // copySketchFunction(editOptions3, newPage);



        // //SELECT SKETCH RIGHT CLICK OPTIONS TO UNCLICK
        // console.log('Waiting 10 seconds.');
        // console.log('SELECTING ITEM 5 ON THE LIST.');

        // await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds


        // await newPage.evaluate(() => {
        //     const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
        //     thirdButton.click();
        //     if (thirdButton) {
        //         thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        //     } else {
        //         console.error('Third button not found.');
        //     }
        // });



        // // RIGHT CLICK 
        // //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        // console.log('Waiting 10 seconds.');
        // console.log('SELECTING ITEM 5 ON THE LIST.');
        // await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        // const desiredIndex1 = 6; // Or any other desired index
        // await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 10 seconds
        // console.log('Waiting 5 seconds.');
        // await clickButtonByIndex(newPage, desiredIndex1);
        // //Right click option
        // const selector1 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        // const title1 = 'Second Sketch'; // Replace with the desired title
        // const editOptions1 = await performRightClickOptionByTitle(newPage, selector1, title1);
        // console.log(editOptions1);
        // //Paste into sketch function
        // //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        // await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        // console.log('Waited for 10 seconds.');
        // console.log('BEFORE THE CODE RUNS.');
        // pasteIntoSketchFunction(editOptions1, newPage);
        // await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        // console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        // ////











        //EDIT
        console.log('START clickButtonByIndex');
        console.log('WE START THE 10TH PHASE');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex3 = 8; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex3);
        //Right click option
        //EDIT
        console.log('END clickButtonByIndex');
        console.log('WE START THE 10TH PHASE');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        const title3 = 'Third Sketch'; // Replace with the desired title
        const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        console.log(editOptions4);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        editIntoSketchFunction(editOptions4, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');



        // //RENAME
        // console.log('Waited for 5 seconds.');
        // console.log('WE START THE RENAME PHASE');
        // await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5
        // //ALL THE CODE TOGETHERx
        // const desiredIndex3 = 7; // Or any other desired index
        // await clickButtonByIndex(newPage, desiredIndex3);
        // //Right click option 
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const title3 = 'Sketch 1'; // Replace with the desired title
        // const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        // console.log(editOptions4);
        // //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        // renameIntoSketchFunction(editOptions4, newPage);
        // await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        // console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');




        //WE ARE CHECKING ENDING OF EDIT OPTIONS
        console.log('Waited for 10 seconds.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        console.log('Typing "Third Sketch"...');
        await newPage.keyboard.type('Third Sketch');
        await new Promise(resolve => setTimeout(resolve, 5000));



        //COMMAND FOR SEARCHING TRANSFORM AND THEN CLICKING ON IT 
        console.log('//COMMAND FOR SEARCHING TRANSFORM AND THEN CLICKING ON IT ');
        await newPage.click('button.command-search-trigger');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('Waited for 3 seconds.');

        await newPage.type('.os-search-box-input', 'transform');
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log('Typed "transform" into the search input field.');

        await newPage.keyboard.press('Enter');
        await newPage.mouse.move(290, 311);
        await newPage.mouse.down({ button: 'left' });
        console.log('Mouse clicked and held at X:290, Y:311');
        await new Promise(resolve => setTimeout(resolve, 3000));

        const readline = require('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        console.log('Please press the Enter key to continue...');
        const enterPromise = new Promise(resolve => rl.once('line', resolve));
        await enterPromise;
        console.log('User pressed Enter to continue.');

        await newPage.evaluate(() => {
            document.addEventListener('mousemove', (event) => {
                console.log(`Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`);
            });
        });

        console.log('Move the mouse over the page to see the coordinates...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Script completed successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
