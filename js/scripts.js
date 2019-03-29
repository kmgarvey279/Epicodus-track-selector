$().ready(function() {
  $("#trackQuestions").submit(function() {
    event.preventDefault();
    var csharp = 0;
    var java = 0;
    var php = 0;
    var ruby = 0;
    var result;
    if ($('input:radio[name="question1"]:checked').val() === "A") {
      result = "CSS and Design";
    } else {
      if ($('input:radio[name="question2"]:checked').val() === "A") {
        ++csharp;
        ++java;
      } else if ($('input:radio[name="question2"]:radio').val() === "B") {
        ++php;
      } else if ($('input:radio[type="question2"]:radio').val() === "C") {
        ++ruby;
      }

      if ($('input:radio[type="question3"]:radio').val() === "A") {
        ++csharp;
      } else if ($('input:radio[type="question3"]:radio').val() === "B") {
        ++java;
      } else if ($('input:radio[type="question3"]:radio').val() === "C") {
        ++php;
      } else if ($('input:radio[type="question3"]:radio').val() === "D") {
        ++ruby;
      }

      if ($('input:radio[type="question4"]:radio').val() === "A") {
        ++ruby;
      } else if ($('input:radio[type="question4"]:radio').val() === "B") {
        ++php;
      } else if ($('input:radio[type="question4"]:radio').val() === "C") {
        ++csharp;
        ++java;
      } else if ($('input:radio[type="question4"]:radio').val() === "D") {
        ++ruby;
      }

      if ($('input:radio[type="question5"]:radio').val() === "A") {
        ++java;
      } else if ($('input:radio[type="question5"]:radio').val() === "B") {
        ++php;
        ++csharp;
      } else if ($('input:radio[type="question5"]:radio').val() === "C") {
        ++ruby;
      }
      }
      if (csharp > ruby && csharp > java && csharp > php) {
        result = "C#";
      } else if (ruby > java && ruby > php) {
        result = "Ruby";
      } else if (java > php) {
        Result = "Java"
      } else {
        result = "PHP";
      }
  
      $("#language").empty().append(result);
  });
});
