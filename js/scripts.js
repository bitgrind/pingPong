$(function(){

  function listMultiples(userInput){
    //$("#output div h2").text(userInput);
    for(i=1;i <= userInput; i++){
      var currentNumber = i;
      //finding multiples of 3, 5 and 15
      if ((currentNumber%15) == 0){
        console.log('mul of 15');
        currentNumber = ' class="multipleOf15">ping-pong';
      } else if ((currentNumber%5) == 0){
        console.log('mul of 5');
        currentNumber = ' class="multipleOf5">pong';
      } else if((currentNumber%3) == 0){
        console.log('mul of 3');
        currentNumber = ' class="multipleOf3">ping';
      }
      console.log('just a num: '+currentNumber);
      $("#output div ul").append("<li><span"+currentNumber+"</span></li>");
    }
  }

  $("#userNumber").submit(function(){
    event.preventDefault();
    var userInput = $("#input").val();

    //checking to make sure input is stored corretly
    console.log(userInput);

    //triggering function
    listMultiples(userInput);
  });
});
