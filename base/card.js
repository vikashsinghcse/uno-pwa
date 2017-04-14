class Card {
  constructor({color, number, type}) {
      this.type = type || Card.TYPE.NUMBER;
      this.number = number || '';
      this.color = color || Card.COLOR.BLACK;
  }
}

Card.TYPE = {
  'ACTION': 'ACTION',
  'NUMBER': 'NUMBER'
};

Card.COLOR = {
  'RED': 'RED',
  'YELLOW': 'YELLOW',
  'GREEN': 'GREEN',
  'BLUE': 'BLUE',
  'BLACK': 'BLACK'
}

export default Card;
