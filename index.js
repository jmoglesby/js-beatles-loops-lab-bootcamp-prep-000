// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (let i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  var counter = facts.length;
  var lennonFacts = [];
  while (counter > 0) {
    var fact = facts[counter - 1];
    fact = `${fact}!!!`
    lennonFacts.push(fact);
    counter--;
  }
  return lennonFacts;
}