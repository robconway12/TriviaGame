$(document).ready(function() {

  // score totals
  var countCorrect = 0;
  var countIncorrect = 0;
  var time = 31; // timer at 31 secs
  var counter = 0; // question counter

  $("#startButton").click(function(){
    $("#startButton").hide();
    $("#instructions").hide();
    $("#timer").show();
    $("#choiceBox").show();
    $("#question").show();
    $("#questionNumber").show();
    nextQuestion();
  });

  // fill in the questions
  function populateQuestions() {
   
      $("#questionNumber").html("<p>Question " + getQuestion[counter].questionNumber + " out of 10</p>");
      $("#question").text(getQuestion[counter].question);
      $("#choiceBox").append("<button class=\"clickMe\">" + getQuestion[counter].options[0] + "</button>",
        "<button  class=\"clickMe\">" + getQuestion[counter].options[1] + "</button>");
      $("#choiceBox").append("<button  class=\"clickMe\">" + getQuestion[counter].options[2] + "</button>",
        "<button  class=\"clickMe\">" + getQuestion[counter].options[3] + "</button>")
    };

  // player guessed correctly
  function correctGuess() {
    $("#choiceBox").html("<p>Yayyy! That's the right answer!</p>");
    countCorrect++;
    var correctAnswer = getQuestion[counter].correctAnswer;
    $("#choiceBox").append("<p>The answer was <span class='answer'>" + correctAnswer + "</span></p>");
    setTimeout(nextQuestion, 4000);
    counter++;
  };

  // player guessed incorrectly
  function incorrectGuess() {
    $("#choiceBox").html("<p>Sorry! That's incorrect.</p>");
    countIncorrect++;
    var correctAnswer = getQuestion[counter].correctAnswer;
    $("#choiceBox").append("<p>The answer was <span>" + correctAnswer + "</span></p>");
      setTimeout(nextQuestion, 5000);
    counter++;
  };

  // player ran out of time
  function timesUp() {
    if (time === 0) {
      $("#choiceBox").html("<p>You ran out of time!  <br></p>");
      countIncorrect++;
      var correctAnswer = getQuestion[counter].correctAnswer;
      $("#choiceBox").append("<p> The correct answer is <span class='bright'>" + 
        correctAnswer + "</span></p>");
      setTimeout(nextQuestion, 5000);
      counter++;
    }
  };

  // Show result screen
  $("#choiceBox").html("<p>" + endMessage + "</p>" + "<p>You answered" + 
    countCorrect + "questions correctly!</p>" + 
    "<p>You answered" + countIncorrect + "questions incorrectly.</p>");
  $("#choiceBox").append("<h1 id='start'>Start Over?</h1>");
  gameReset();
  $("#start").click(nextQuestion);

  // game clock currently set to 31 seconds
  function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
      if (time === 0) {
        clearInterval(clock);
        timesUp();
      }
      if (time > 0) {
        time--;
      }
      $("#timer").text("Time remaining: 00:" + time);
    }
  };

  // moves question counter to next question
  function nextQuestion() {
    if (counter < getQuestion.length) {
      time = 31;
      $('#choiceBox').empty();
      populateQuestions();
      timer();
      timesUp();
    }
    else {
      resultsScreen();
    }
  };

  // reset score and counter parameters on restart
  function gameReset() {
    counter = 0;
    countCorrect = 0;
    countIncorrect = 0;
  };

	var getQuestion = [
		{
			questionNumber: '1',
			question:
				'The first known ice cream recipe was handwritten in the recipe book of Lady Anne Fanshawe in 1665. What did she list as a possible ingredient?',
			options: ['orange flower water', 'mace', 'whale vomit', 'All of the above'],
			correctAnswer: 'All of the above',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '2',
			question:
				'Which flavor was considered quite exotic and rare in the late 1700s, as it was difficult to acquire before the mid-19th century?',
			options: ['strawberry', 'vanilla', 'pistachio', 'chocolate'],
			correctAnswer: 'Vanilla',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '3',
			question: 'All of the following flavors were considered popular in Colonial America, except for which one?',
			options: ['Tomato', 'Asparagus', 'Oyster', 'Parmesan'],
			correctAnswer: 'Tomato',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '4',
			question: 'The H&#228;agen-Dazs brand was established in which country?',
			options: ['Denmark', 'Canada', 'Germany', 'United States'],
			correctAnswer: 'United States',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '5',
			question:
				"In 1991, Ben & Jerry's invented which flavor based on an anonymous suggestion placed on a board in their Vermont shop?",
			options: ['Chocolate Chip Cookie Dough', 'Mint Chocolate Chip', 'Cherry Garcia', 'Moose Tracks'],
			correctAnswer: 'Chocolate Chip Cookie Dough',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '6',
			question: 'What do food photographers frequently use as a stand-in for actual ice cream in photos?',
			options: ['Colored Butter', 'Hardened Mousse', 'Modified Mashed Potatoes', 'Molding Clay'],
			correctAnswer: 'Modified Mashed Potatoes',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '7',
			question:
				"Ben & Jerry's ice cream flavors are full of chunky mix-ins in part because co-founder Ben Cohen gets a lot of his pleasure in ice cream from its texture due to what?",
			options: ['No sense of taste', 'No sense of smell', 'Lactose intolerant', 'Poor eye sight'],
			correctAnswer: 'No sense of smell',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '8',
			question: 'Which popular drink was originally intended as an ice cream topping in its syrup form?',
			options: ['Cola', 'Tang', 'Hawaiian Punch', 'Root Beer'],
			correctAnswer: 'Hawaiian Punch',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '9',
			question:
				'Professional ice cream taste-testers use special spoons made of what, which allow the tester to taste the product with virtually no trace of flavor left over from what was last on the spoon?',
			options: ['Gold', 'Bakelite', 'Silver', 'Glass'],
			correctAnswer: 'Gold',
			playerChoice: '',
			correct: false,
			time: 0,
		},
		{
			questionNumber: '10',
			question:
				'In the West and Texas we are used to Dreyers brand ice cream, but what is it known as in the East and Midwest?',
			options: ["Edy's", "Breyer's", 'Good Humor', "Cornetto's"],
			correctAnswer: "Edy's",
			playerChoice: '',
			correct: false,
			time: 0,
		}
  ];
  
      // click function to trigger right or wrong screen
    $("#choiceBox").click(function() {
      var playerChoice = $(this).text();
      if (playerChoice === getQuestion[counter].correctAnswer) {
        clearInterval(clock);
        correctGuess();
      }
      else {
        clearInterval(clock);
        incorrectGuess();
      };
    });
});
