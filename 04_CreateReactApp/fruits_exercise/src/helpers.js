//Choice takes an array of items, we pick an index between 0 and the last index
//in the array. We use a Math.random that we multiply by the length of the array
//and we have to floor it because we can't find index 5.2 or 6.2: we can only find index 5 or 6.
function choice(items){
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

//Looping through the items until we find it. Variable i is used to figure out where
//to remove. 
//Once we find the item to remove, we return a new array that 2 slices of the first array
// from the begining up and til the thing we're removing and then from one after the thing 
//we're removing. And then we combine them into one array. We slice them and return in one array
function remove (items, item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            return [ ...items.slice(0, i), ...items.slice(i + 1) ];
        }
    }
}

export{choice, remove}