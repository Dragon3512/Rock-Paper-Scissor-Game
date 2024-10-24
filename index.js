let user_score = 0;
let Comp_score = 0;



const userscore=document.getElementById('user-score')
const Compscore=document.getElementById('comp-score')

const choices = document.querySelectorAll(".choice");
const msg=document.getElementById('msg')
const get_comp = () => {
  let options = [Rock, Paper, Secssior];
  const rindx = Math.floor(Math.random() * 3);
  return options[rindx];
};

const drawgame = () => {
  console.log("game was a draw");
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const user_Choice = choice.getAttribute("id");
    Play_Game(user_Choice);
  });
});

const Play_Game = (user_Choice) => {
  console.log("user choice", user_Choice);
  const comp_Choice = get_comp();
  console.log("computer choice", comp_Choice.id);

  if (user_Choice == comp_Choice.id) {
    drawgame();
    msg.innerText="Game was a draw"
  } else if (
    (user_Choice == "Rock" && comp_Choice.id == "Secssior") ||
    (user_Choice == "Paper" && comp_Choice.id == "Rock") ||
    (user_Choice == "Secssior" && comp_Choice.id == "Paper")
  ) {
    msg.innerText="You win"
    user_score++;
    userscore.innerText=user_score;
    console.log("user win");
  } else if (
    (comp_Choice.id == "Rock" && user_Choice == "Secssior") ||
    (comp_Choice.id == "Paper" && user_Choice == "Rock") ||
    (comp_Choice.id == "Secssior" && user_Choice == "Paper")
  ) 
  {
    Comp_score++;
    Compscore.innerText=Comp_score;
    msg.innerText="Computer Win"
    console.log("comp win");
  }
};
