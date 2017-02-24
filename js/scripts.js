function listMultiples(userInput){
  for(i=1;i <= userInput; i++){
    var currentNumber = i;
    if ((currentNumber%15) == 0){
      currentNumber = '<li onclick="findMultiples('+i+')" class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      currentNumber = '<li onclick="findMultiples('+i+')" class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      currentNumber = '<li onclick="findMultiples('+i+')" class="multipleOf3"><span>ping</li></span>';
    } else {
      currentNumber = '<li onclick="findMultiples('+i+')"><span>'+currentNumber+'</span></li>';
    }
    $("#output div ul").append(currentNumber);
  }
}
function findMultiples(userClick){
  //$("#output div h2").text(userInput);
  $("ul").html("");
  console.log('multiples running: ' + userClick);
  for(i=userClick;i <= userClick+100; i++){
    console.log('for loop running');
    var currentNumber = i;
    //finding multiples of 3, 5 and 15
    if ((currentNumber%15) == 0){
      currentNumber = '<li onclick="findMultiples('+i+')" class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      currentNumber = '<li onclick="findMultiples('+i+')" class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      currentNumber = '<li onclick="findMultiples('+i+')" class="multipleOf3"><span>ping</li></span>';
    } else {
      currentNumber = '<li onclick="findMultiples('+i+')"><span>'+currentNumber+'</span></li>';
    }
    //checking output
    $("#output div ul").append(currentNumber);
  }
}

$(function(){
  $("#userNumber").submit(function(){
    event.preventDefault();
    //get user input
    var userInput = $("#input").val();

    //checking to make sure input is stored corretly
    console.log(userInput);

    //triggering function
    listMultiples(userInput);
  });
});
