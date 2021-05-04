window.onload = getApiCategories()


//An asynchronous function to fetch CATEGORY data from the API for the dropdown list on the landing screen
async function getApiCategories(){
    let response = await fetch(`https://opentdb.com/api_category.php`);
    // console.log(response)

    let data = await response.json()
    // console.log(data)

    length = data.trivia_categories.length;
    let categories = document.getElementById("categories");

    for (let i = 0; i < length; i++){
        let option = document.createElement("OPTION"),
            //category ids start at 8, so subtract 8 to get the display starting at #1
            txt = document.createTextNode(`${data.trivia_categories[i].id - 8}. ${data.trivia_categories[i].name}`);
        option.appendChild(txt);
        categories.insertBefore(option, categories.lastChild);
    }

}

