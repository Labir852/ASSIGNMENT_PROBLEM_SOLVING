                                                        /* FUNCTION TO CONVERT LENGTH FEET TO MILE */ 
function feetToMile(feet)
{
    let mile = feet / 5280; // 1 mile = 5280 feet
    return mile;
}

                                    /* FUNCTION TO CALCULATE HOW MUCH CUBICFEET OF WOOD NEEDED TO MAKE YOUR DESIRED FURNITURE  */

function woodCalculator(chair,table,bed)
{
    let woodAmount = (chair*1) + (table*3) + (bed*5);
    return woodAmount;
}

                                    /* FUNCTION TO CALCULATE HOW MUCH BRICK NEEDED TO MAKE YOUR SKYSCRAPPER OR SMALL BUILDING */

function brickCalculator(floor)
{
    let brickAmount = 0;
    if (floor>=1 && floor <= 10)
    {
        let feet = floor*15;
         brickAmount = feet * 1000;
    }
    else if (floor>=11 && floor <=20)
    {
        let upperPartFeet = (floor-10) * 12;
        brickAmount = 150000 + (upperPartFeet * 1000);
    }
    else if(floor > 20)
    {
        let upperPartFeet = (floor - 20) * 10;
        brickAmount = 150000 + 120000 + (upperPartFeet * 1000);
    }
    return brickAmount;
}

                                                /* FUNCTION TO CALCULATE THE NAME OF YOUR FRIEND WHICH ONE'S SHORTEST */

function tinyFriend(array)
{
    let shortestName = array[0];
    for (let i=0;i<array.length;i++)
    {
        if(shortestName.length>array[i].length)
        {
            shortestName = array[i];
        }
    }
    return shortestName;
}

                                                                        /* IMPLEMENTATION OF FUNCTION */

let FEET = feetToMile(50000);
console.log(FEET);
 
let WOOD = woodCalculator(2,1,2);
console.log(WOOD);

let BRICK = brickCalculator(25);
console.log(BRICK);

let FRIEND = tinyFriend(["jhankar", "mahbub","tanvir","anjum","labir","rasel"]);
console.log(FRIEND);