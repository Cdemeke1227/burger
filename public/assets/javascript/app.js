$(function () {

    $(".insert-form").on("submit", function (e) {
        e.preventDefault();
     

        var burgerInput = {
        name: $("#burgerInput").val().trim()
        }


        $.ajax("/burger", {
            type: "POST",
            data: burgerInput
        }).then(
            function () {
                console.log("Inserted new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devoured").on("click", function(e) {
        var id = $(this).data("id");
        console.log("devour");
        console.log(id);
        
        var newState = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/burger/" + id, {
          type: "PUT",
          data: newState
        }).then(
          function() {
            console.log("changed sleep to", newState);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });



});