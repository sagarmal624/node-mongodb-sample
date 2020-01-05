module.exports = (app) => {
    const Book = require("../controller/BookController");
    app.get("/", (req, res) => {
        res.send({"message": "welcome in my cls"});
    });
    app.get("/book/:id", Book.Find);
    app.post("/book/save", Book.Save);
    app.delete("/book/delete/:id", Book.Delete);
};