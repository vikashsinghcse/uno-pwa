export function newDeck() {
  const cards=[];
  const colors=['YELLOW', 'RED', 'GREEN', 'BLUE'];
  const specialColorCards=['TAKE2', 'SKIP', 'REVERSE'];
  const blackCards=['TAKE4', 'COLOURCHANGE'];
  colors.forEach(color => {
    for(let i=1; i<10; i++) {
      cards.push(...giveCopies({
        color,
        value: `${i}`,
      }, 2));
    }

    cards.push({
      color,
      value: `0`,
    });

    specialColorCards.forEach(value=>{
      cards.push(...giveCopies({
        color,
        value: `${value}`,
      }, 2));
    });
  });

  blackCards.forEach(value=> {
    cards.push(...giveCopies({
      color: 'BLACK',
      value: `${value}`,
    }, 4));
  });

  return cards;
}

export function getShuffledDeck(deck) {
  const newDeck = [];
  for(let i=0; i<108; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    newDeck.push(deck[randomIndex]);
    deck = [...deck.slice(0, randomIndex - 1), ...deck.slice(randomIndex, deck.length)];
  }
  return newDeck;
}

function giveCopies(card, copy){
  const cards=[];
  for( let i=0; i< copy; i++) {
    cards.push(Object.assign({}, card));
  }
  return cards;
}

function isValidMove(currentColor, currentValue, newCard, isBlackAllowed){
  if (currentColor === newCard.color || currentValue === newCard.value || (isBlackAllowed && newCard.color === 'BLACK')) {
    return true;
  } else {
    return false;
  }
}
