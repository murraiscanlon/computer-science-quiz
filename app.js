window.onload = getApiCategories()

let testhome = 'hello from testhome';
console.log(testhome);

//1.
//An asynchronous function to fetch CATEGORY data from the API for the dropdown list on the landing screen
async function getApiCategories(){
    let response = await fetch(`https://opentdb.com/api_category.php`);
    // console.log(response)

    let data = await response.json()
    // console.log(data)

    length = data.trivia_categories.length;
    let categories = document.getElementById("categories");

    let testCrossOver = [];
    for (let i = 0; i < length; i++){
        let option = document.createElement("OPTION"),
            txt = document.createTextNode(`${data.trivia_categories[i].id - 8}. ${data.trivia_categories[i].name}`);
            testCrossOver.push(data.trivia_categories[i].id);
        option.appendChild(txt);
        categories.insertBefore(option, categories.lastChild);
    }

    let demoreturn = crossover(testCrossOver);
    console.log("demoreturn: " + demoreturn);

}

