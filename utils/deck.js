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

function giveCopies(card, copy){
  const cards=[];
  for( let i=0; i< copy; i++) {
    cards.push(Object.assign({}, card));
  }
  return cards;
}