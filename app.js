var score = 0;
var myChoice;

var readable = {
  '0': 'Grass',
  '1': 'Fire',
  '2': 'Water'
};

var ramyaChoice = {
  init: function() {
    this.store = Math.floor(Math.random() * 3);
    this.text = readable[this.store];
  },
  store: '',
  text: '',
};

var order = [0, 1, 2, 0];

var chooseWinner = function (player, cpu) {
  if (order[player]== order[cpu]) {
    return 'You tied. Battle again?';
  }
  if (order[player] == order[cpu+1] ) {

    score++;
    return 'You won!';
  } else {
    score--;
    return 'You lost!';
  }
}
var paragraph = document.querySelector('p');

var assignClick = function(tag, pos) {
  tag.addEventListener('click', function() {
    myChoice = pos;
    ramyaChoice.init();
    paragraph.innerText = 'Your opponent chose: ' + ramyaChoice.text;
    paragraph.innerText +='\n' + chooseWinner(myChoice, ramyaChoice.store);
    paragraph.innerText += '\n' + 'SCORE: ' + score;
  })

}

var images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(var step = 0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}
images.init();