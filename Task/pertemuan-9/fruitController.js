// import dari fruits.js
const fruits = require("./fruits");

// membuat fungsi index
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

//membuat fungsi store
const store = (name) => {
    fruits.push(name);
    index();
}
//membuat fungsi update
const update = (position, name) => {
    fruits[position] = name;
    index();
}

//membuat fungsi destroy
const destroy = (position) => {
    fruits.splice(position, 1);
    index();
}

module.exports = { index, store, update, destroy };