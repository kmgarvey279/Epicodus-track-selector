$().ready(function() {
  $("input[type='button']").click(function() {
    var csharp = 0;
    var java = 0;
    var php = 0;
    var ruby = 0;
    var result = "test here";
    if (($("input:radio[name=question1]:checked").val()) === "A") {
        end = "front";
    } else {
      if (($("input:radio[name=question2]:checked").val()) === "A") {
        ++csharp;
        ++java;
      } else if ($("input:radio[name=question2]:checked").val()) === "B") {
        ++php;
      } else if ($("input:radio[name=question2]:checked").val()) === "C") {
        ++ruby;
      }
      if (($("input:radio[name=question3]:checked").val()) === "A") {
        ++csharp;
      } else if ($("input:radio[name=question3]:checked").val()) === "B") {
        ++java;
      } else if ($("input:radio[name=question3]:checked").val()) === "C") {
        ++php;
      } else if ($("input:radio[name=question3]:checked").val()) === "D") {
        ++ruby;
      }
      if (($("input:radio[name=question4]:checked").val()) === "A") {
        ++ruby;
      } else if ($("input:radio[name=question4]:checked").val()) === "B") {
        ++php;
      } else if ($("input:radio[name=question4]:checked").val()) === "C") {
        ++csharp;
        ++java;
      } else if ($("input:radio[name=question4]:checked").val()) === "D") {
        ++ruby;
      }
      if (($("input:radio[name=question5]:checked").val()) === "A") {
        ++java;
      } else if ($("input:radio[name=question5]:checked").val()) === "B") {
        ++php;
        ++csharp;
      } else if ($("input:radio[name=question5]:checked").val()) === "C") {
        ++ruby;
      }
    }
    if end === "front" {
      result = "CSS and Design"
    } else if (csharp > ruby && csharp > java && csharp > php) {
      result = "C#";
    } else if (ruby > java && ruby > php) {
      result = "Ruby";
    } else if (java > php) {
      Result = "Java"
    } else {
      result = "PHP";
    }
    $("#language").empty().append(result);
    event.preventDefault();
  }};
}};
