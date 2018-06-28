module.exports = Words;

var words;
var wordList;
var qtyList;

function Words(text){
    words = text.split(' ');
    wordList = [];
    qtyList = [];
};

Words.prototype.mostUsedWords = function () {

  populateLists();

  var mostRepeated = [wordList[0]];
  var qty = qtyList[0];
  for (var i = 1; i < wordList.length;i++){
    if (qtyList[i] == qty){
      mostRepeated.push(wordList[i]);
    } else if (qtyList[i] > qty){
      mostRepeated = [wordList[i]];
      qty = qtyList[i];
    }
  }
  return mostRepeated;
};

function populateLists(){
  for (var i = 0; i < words.length; i++){
    var index = wordList.indexOf(words[i]);
    if (index == -1){
      wordList.push(words[i]);
      qtyList.push(1);
    } else {
      qtyList[index]++;
    }
  }
}
