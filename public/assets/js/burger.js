$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: true
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
    });
    $("#submit-burger").on("click", function(event){
    console.log("clicked")
    event.preventDefault();
    var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
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
});