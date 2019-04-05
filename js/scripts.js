$().ready(function() {
  $("#trackQuestions").submit(function() {
    event.preventDefault();

    var answer1 = $('input:radio[name="question1"]:checked').val()
    var answer2 = $('input:radio[name="question2"]:checked').val()
    var answer3 = $('input:radio[name="question3"]:checked').val()
    var answer4 = $('input:radio[name="question4"]:checked').val()
    var answer5 = $('input:radio[name="question5"]:checked').val()
    var csharp = 0;
    var java = 0;
    var ruby = 0;
    var php = 0;
    var result;

    if (answer2 === "A") {
      ++java;
      ++csharp;
    } else if (answer2 === "B") {
      ++php;
    } else if (answer2 === "C") {
      ++ruby;
    }

    if (answer3 === "A") {
      ++csharp;
    } else if (answer3 === "B") {
      ++java;
    } else if (answer3 === "C") {
      ++php;
    } else if (answer3 === "D") {
      ++ruby;
    }

    if (answer4 === "A") {
      ++ruby;
    } else if (answer4 === "B") {
      ++php;
    } else if (answer4 === "C") {
      ++csharp;
      ++java;
    }

    if (answer5 === "A") {
      ++java;
    } else if (answer5 === "B") {
      ++php;
      ++csharp;
    } else if (answer5 === "C") {
      ++ruby;
    }

    if (answer1 === undefined || answer2 === undefined || answer3 === undefined || answer4 === undefined || answer5 === undefined) {
    alert("Please complete all fields");
    } else if (answer1 === "A") {
      result = "CSS and Design";
      logo = "#cssLogo";
    } else if (csharp > ruby && csharp > java && csharp > php) {
      result = "C# and .NET";
      logo = "#csharpLogo";
    } else if (ruby > java && ruby > php) {
      result = "Ruby and Rails";
      logo = "#rubyLogo";
    } else if (java > php) {
      result = "Java and Android"
      logo = "#javaLogo";
    } else {
      result = "PHP/Drupal";
      logo = "#phpLogo";
    }

    $("#language").empty().append(result);
    $(logo).show();
  });
});
