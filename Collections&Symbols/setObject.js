//Set

const postTags = new Set()

function addTag(newTag) {
    if(!postTags.has(newTag)){
        postTags.add(newTag)
    }
    
}

addTag('history')
addTag('romans')
addTag('sociology')
addTag('history')
addTag('history')



postTags.forEach((tag) => console.log(tag))


/*
Mainly to remove duplicates or compare if a value is contained(already 
or before adding it).
Is like an Array which stores values as individual items(not key/value), 
each value is unique(no duplicates).
Return an object that looks as an array but it's not.
!! Has a lot of methonds!
*/