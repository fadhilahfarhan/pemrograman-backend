// import
const { index, store, update, destroy } = require("./fruitController");

const main = () => {
    console.log("Method Index - Menampilkan Buah");
    index();
    console.log("Method Store - Menambahkan buah pisang");
    store("Pisang");
    console.log("Method update - Update Data 0 Menjadi Kelapa");
    update(0, "Kelapa");
    console.log("Method Destroy - Menghapus Data 0");
    destroy(0);
}

main();