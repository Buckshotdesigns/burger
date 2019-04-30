$("#submit-burger").on("submit", function(event){
    console.log("clicked")
    event.preventDefault();
    var newBurger = {
        burger_name: burger,
        devoured: false
    };
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("burger added");
            location.reload();
        }
    );
});