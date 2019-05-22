// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}