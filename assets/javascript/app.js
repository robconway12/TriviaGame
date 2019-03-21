// Declare the variables: countCorrect, countIncorrect

var countCorrect;
var countIncorrect;

// Title page with image, instructions, and start button.
// Player Clicks start button to begin.

// Game selects a question at random. The question must be not yet seen.
// Timer begins counting 1 minute

function timedCount() {
  const c = 0;
  const t;
  document.getElementById("timer").value = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

// If player does not respond before time runs out, the times up function must display the correct answer and display a times out message.
// After 5 seconds, the game will select a new question.

// If the player gets it right, the "Correct" function will display a congratulations.
// After 5 seconds, the game will select a new question.

// If the player gets it wrong, the "Incorrect" function will display the correct answer.
// After 5 seconds, the game will select a new question.

// Once all questions are shown, the score will tally up and display the result of right and wrong answers. It will also have a restart button.

// List question objects

function askQuestion(questionNo, question, options, answer) {
    this.questionNo = questionNo;
    this.question = question;
    this.options = options;
    this.answer = answer;
  };
  
  var question1 = new askQuestion('1', 'The first known ice cream recipe was handwritten in the recipe book of Lady Anne Fanshawe in 1665. What did she list as a possible ingredient?', ['orange flower water', 'mace', 'whale vomit', 'All of the above'], 'D');
  var question2 = new askQuestion('2', 'Which flavor was considered quite exotic and rare in the late 1700s, as it was difficult to acquire before the mid-19th century?', ['strawberry', 'vanilla', 'pistachio', 'chocolate'], 'B');
  var question3 = new askQuestion('3', 'All of the following flavors were considered popular in Colonial America, except for which one?', ['Tomato', 'Asparagus', 'Oyster', 'Parmesan'], 'A');
  var question4 = new askQuestion('4', 'The H&#228;agen-Dazs brand was established in which country?', ['Denmark', 'Canada', 'Germany', 'United States'], 'D');
  var question5 = new askQuestion('5', 'In 1991, Ben & Jerry\'s invented which flavor based on an anonymous suggestion placed on a board in their Vermont shop?', ['Chocolate Chip Cookie Dough', 'Mint Chocolate Chip', 'Cherry Garcia', 'Moose Tracks'], 'A');
  var question6 = new askQuestion('6', 'What do food photographers frequently use as a stand-in for actual ice cream in photos?', ['Colored Butter', 'Hardened Mousse', 'Modified Mashed Potatoes', 'Molding Clay'], 'C');
  var question7 = new askQuestion('7', 'Ben & Jerry\'s ice cream flavors are full of chunky mix-ins in part because co-founder Ben Cohen gets a lot of his pleasure in ice cream from its texture due to what?', ['No sense of taste', 'No sense of smell', 'Lactose intolerant', 'Poor eye sight'], 'B');
  var question8 = new askQuestion('8', 'Which popular drink was originally intended as an ice cream topping in its syrup form?', ['Cola', 'Tang', 'Hawaiian Punch', 'Root Beer'], 'C');
  var question9 = new askQuestion('9', 'Professional ice cream taste-testers use special spoons made of what, which allow the tester to taste the product with virtually no trace of flavor left over from what was last on the spoon.?', ['Gold', 'Bakelite', 'Silver', 'Glass'], 'A');
  var question10 = new askQuestion('10', 'In the West and Texas we are used to Dreyers brand ice cream, but what is it known as in the East and Midwest?', ['Edy\'s', 'Breyer\'s', 'Good Humor', 'Cornetto\'s'], 'A');