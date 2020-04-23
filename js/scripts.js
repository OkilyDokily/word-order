function processRawSentence(rawSentence){
  var words = rawSentence.split(" ").map(x => x.trim());
  
  return uniqueWords = words.reduce(function(accumulator,currentValue){
    if (Object.keys(accumulator).includes(currentValue)){
      return accumulator;
    }
    var count = words.filter(x => x === currentValue).length;
    return (accumulator[currentValue] = count);
  },{});
  
}


$(document).ready(function(){
  $("form").submit(function(e){
    var rawSentence = $("textarea").val();
    var uniqueWords = processRawSentence(rawSentence);
    Object.keys(uniqueWords).forEach(function(word){
      $("ul").append("<li>"+ word + " : " + word.count +"</li>")
    })
  });
});