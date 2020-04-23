function processRawSentence(rawSentence){
  var words = rawSentence.split(" ").map(x => x.trim());
  console.log(words)
  var uniqueWords = words.reduce(function(accumulator,currentValue){
    if (accumulator.map(x => Object.keys(x)[0]).includes(currentValue)){
      return accumulator;
    }
    var count = words.filter(x => x === currentValue).length;
    
    var newAccumulator = accumulator.concat([{currentValue:count}]);
    return newAccumulator;
  },[]);
  var orderedUniqueWords = uniqueWords.reduce(function(accumulator,currentValue){
    var highest = Math.max(...[uniqueWords.map(x => x[Object.keys(x)[0]])]);
    var highestNumbers = uniqueWords.filter(x =>  x[Object.keys(x)[0]] === highest);
    return accumulator.concat(highestNumbers);
  },[]);
  console.log(orderedUniqueWords)
  return orderedUniqueWords;
}


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    
    var rawSentence = $("textarea").val();
    
    var uniqueWords = processRawSentence(rawSentence);
    Object.keys(uniqueWords).forEach(function(word){
      $("ul").append("<li>"+ Object.keys(word)[0] + " : " + word[Object.keys(word)[0]]  +"</li>")
    })
  });
});