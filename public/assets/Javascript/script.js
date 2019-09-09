$(document).ready(function() {
    $(".devour-button").on("submit", function(event){
        console.log("devour button click")
        event.preventDefault();
        var burger_id = $(this).children(".burger_id").val();
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id,
        }).then(function(data){
            console.log(data)
            location.reload();
        })
    })
    
})


// $(".devour-button").on("submit", function(event){ 
//     event.preventDefault();
//     var burger_id = $(this).children(".burger_id").val();
//     $.ajax({
//         method: "PUT",
//         url: "/burgers/" +burger_id
//     }).then(function(data){
//         location.reload();
//     })
// })