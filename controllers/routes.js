var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        var data = {burgers: burger_data};
        res.render("index", data);
    })
    
})
router.post("/burgers/create", function(req, res){
    console.log("burger name: " +req.body.burger_name);
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");

    })
})
router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log(result)
    })
})

module.exports = router;