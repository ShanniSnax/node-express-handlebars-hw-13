// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-smashed").on("click", function(event) {
    var id = $(this).data("id");
    var newSmashed = $(this).data("newsmashed");

    var newSmashedState = {
      sleepy: newSmashed
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newSmashedState
    }).then(
      function() {
        console.log("changed smashed to", newSmashed);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      smashed: $("[name=smashed]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
