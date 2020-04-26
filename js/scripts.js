function processRawSentence(rawSentence){
  var words = rawSentence.split(".").join(" ").split(" ").map(x => x.trim());
  
  var uniqueWords = words.reduce(function(accumulator,currentValue){
    if (accumulator.map(x => Object.keys(x)[0]).includes(currentValue)){
      return accumulator;
    }
    var count = words.filter(x => x === currentValue).length;
    
    var newAccumulator = accumulator.concat([{[currentValue]:count}]);
    return newAccumulator;
  },[]);
  
  var orderedUniqueWords = uniqueWords.reduce(function(accumulator,currentValue){
    var numberArray = uniqueWords.map(x => x[Object.keys(x)[0]]);
    var filteredNumberArray = numberArray.filter(function(number){
      return !accumulator.map(x => x[Object.keys(x)[0]]).includes(number);
    });
    var highest = Math.max(...filteredNumberArray);
    
    var highestNumbers = uniqueWords.filter(x =>  x[Object.keys(x)[0]] === highest);
    var newAccumulator = accumulator.concat(highestNumbers);
    return newAccumulator;
  },[]);
 
  return orderedUniqueWords;
}


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    clear();
    var rawSentence = $("textarea").val();
    
    var uniqueWords = processRawSentence(rawSentence);
    uniqueWords.forEach(function(word){
      $("ul").append("<li>"+ Object.keys(word)[0] + " : " + word[Object.keys(word)[0]]  +"</li>")
    });
    function clear(){
      $("li").remove();
    }
  });
});