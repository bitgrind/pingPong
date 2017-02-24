function listMultiples(userInput){
  var prefix = "";
  console.log('list some numbers');
  if(userInput < 0){
    prefix = "-";
    userInput = (userInput*-1);
  }
  for(i=1;i <= userInput; i++){
    var currentNumber = i;
    if ((currentNumber%15) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf3"><span>ping</li></span>';
    } else {
      currentNumber = '<li onclick="findMultiples('+prefix+i+')"><span>'+prefix+currentNumber+'</span></li>';
    }
    $("#output div ul").append(currentNumber);
  }
}
function findMultiples(userClick){
  //$("#output div h2").text(userInput);
  $("ul").html("");
  console.log("find click mults: " +userClick +", type: "+typeof(userClick));
  prefix='';
  if(userClick < 0){
    prefix='-';
    userClick = (userClick * -1);
  }
  console.log("click function input: "+userClick + ", clac:"+(userClick*-1));
  for(i=userClick;i <= userClick+103; i++){
    console.log('for loop running '+userClick);
    var currentNumber = i;
    //finding multiples of 3, 5 and 15
    if ((currentNumber%15) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf15"><span>ping-pong</li></span>';
    } else if ((currentNumber%5) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf5"><span>pong</li></span>';
    } else if((currentNumber%3) == 0){
      currentNumber = '<li onclick="findMultiples('+prefix+i+')" class="multipleOf3"><span>ping</li></span>';
    } else {
      currentNumber = '<li onclick="findMultiples('+prefix+i+')"><span>'+prefix+currentNumber+'</span></li>';
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

    //clear ul
    $("ul").html("");

    //triggering function filter that prompts if user inputs 0
    if(userInput === 0){
      var promptVal = prompt("Please enter a non-Zero number:");
      listMultiples(promptVal);
    } else {
      listMultiples(userInput);
    }
  });
});
