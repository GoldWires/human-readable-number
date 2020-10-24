module.exports = function toReadable (number) {
  var line = number.toString().length;
  let text = '';
  if(line == 3){
    if (number.toString()[0] == 1) {
        text = text + 'one hundred';
    }
    if (number.toString()[0]== 2) {
        text = text.toString() + 'two hundred';
    }
    if (number.toString()[0]== 3) {
        text = text.toString() + 'three hundred';
    }
    if (number.toString()[0]== 4) {
        text = text.toString() + 'four hundred';
    }
    if (number.toString()[0]== 5) {
        text = text.toString() + 'five hundred';
    }
    if (number.toString()[0]== 6) {
        text = text.toString() + 'six hundred';
    }
    if (number.toString()[0]== 7) {
        text = text.toString() + 'seven hundred';
    }
    if (number.toString()[0]== 8) {
        text = text.toString() + 'eight hundred';
    }
    if (number.toString()[0]== 9) {
        text = text.toString() + 'nine hundred';
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 0) {
      text = text.toString() + ' ten';
      return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 1) {
        text = text.toString() + ' eleven';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 2) {
        text = text.toString() + ' twelve';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 3) {
        text = text.toString() + ' thirteen';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 4) {
        text = text.toString() + ' fourteen';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 5) {
        text = text.toString() + ' fifteen';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 6) {
        text = text.toString() + ' sixteen';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 7) {
        text = text.toString() + ' seventeen';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 8) {
        text = text.toString() + ' eighteen';
        return text;
    }
    if (number.toString()[1] == 1 && number.toString()[2] == 9) {
        text = text.toString() + ' nineteen';
        return text;
    }


    if (number.toString()[1]== 2) {
        text = text.toString() + ' twenty';
    }
    if (number.toString()[1]== 3) {
        text = text.toString() + ' thirty';
    }
    if (number.toString()[1]== 4) {
        text = text.toString() + ' forty';
    }
    if (number.toString()[1]== 5) {
        text = text.toString() + ' fifty';
    }
    if (number.toString()[1]== 6) {
        text = text.toString() + ' sixty';
    }
    if (number.toString()[1]== 7) {
        text = text.toString() + ' seventy';
    }
    if (number.toString()[1]== 8) {
        text = text.toString() + ' eighty';
    }
    if (number.toString()[1]== 9) {
        text = text.toString() + ' ninety';
    }

    if (number.toString()[2]== 1) {
        text = text.toString() + ' one';
    }
    if (number.toString()[2]== 2) {
        text = text.toString() + ' two';
    }
    if (number.toString()[2]== 3) {
        text = text.toString() + ' three';
    }
    if (number.toString()[2]== 4) {
        text = text.toString() + ' four';
    }
    if (number.toString()[2]== 5) {
        text = text.toString() + ' five';
    }
    if (number.toString()[2]== 6) {
        text = text.toString() + ' six';
    }
    if (number.toString()[2]== 7) {
        text = text.toString() + ' seven';
    }
    if (number.toString()[2]== 8) {
        text = text.toString() + ' eight';
    }
    if (number.toString()[2]== 9) {
        text = text.toString() + ' nine';
    }
  }
  if(line == 2){
        if (number.toString()[0] == 1 && number.toString()[1] == 0) {
        text = text.toString() + 'ten';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 1) {
        text = text.toString() + 'eleven';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 2) {
        text = text.toString() + 'twelve';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 3) {
        text = text.toString() + 'thirteen';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 4) {
        text = text.toString() + 'fourteen';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 5) {
        text = text.toString() + 'fifteen';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 6) {
        text = text.toString() + 'sixteen';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 7) {
        text = text.toString() + 'seventeen';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 8) {
        text = text.toString() + 'eighteen';
        return text;
    }
    if (number.toString()[0] == 1 && number.toString()[1] == 9) {
        text = text.toString() + 'nineteen';
        return text;
    }


    if (number.toString()[0]== 2) {
        text = text.toString() + 'twenty';
    }
    if (number.toString()[0]== 3) {
        text = text.toString() + 'thirty';
    }
    if (number.toString()[0]== 4) {
        text = text.toString() + 'forty';
    }
    if (number.toString()[0]== 5) {
        text = text.toString() + 'fifty';
    }
    if (number.toString()[0]== 6) {
        text = text.toString() + 'sixty';
    }
    if (number.toString()[0]== 7) {
        text = text.toString() + 'seventy';
    }
    if (number.toString()[0]== 8) {
        text = text.toString() + 'eighty';
    }
    if (number.toString()[0]== 9) {
        text = text.toString() + 'ninety';
    }

    if (number.toString()[1]== 1) {
        text = text.toString() + ' one';
    }
    if (number.toString()[1]== 2) {
        text = text.toString() + ' two';
    }
    if (number.toString()[1]== 3) {
        text = text.toString() + ' three';
    }
    if (number.toString()[1]== 4) {
        text = text.toString() + ' four';
    }
    if (number.toString()[1]== 5) {
        text = text.toString() + ' five';
    }
    if (number.toString()[1]== 6) {
        text = text.toString() + ' six';
    }
    if (number.toString()[1]== 7) {
        text = text.toString() + ' seven';
    }
    if (number.toString()[1]== 8) {
        text = text.toString() + ' eight';
    }
    if (number.toString()[1]== 9) {
        text = text.toString() + ' nine';
    }
  }
  if(line == 1){
    if (number.toString()[0]== 0) {
        text = text.toString() + 'zero';
    }
    if (number.toString()[0]== 1) {
        text = text.toString() + 'one';
    }
    if (number.toString()[0]== 2) {
        text = text.toString() + 'two';
    }
    if (number.toString()[0]== 3) {
        text = text.toString() + 'three';
    }
    if (number.toString()[0]== 4) {
        text = text.toString() + 'four';
    }
    if (number.toString()[0]== 5) {
        text = text.toString() + 'five';
    }
    if (number.toString()[0]== 6) {
        text = text.toString() + 'six';
    }
    if (number.toString()[0]== 7) {
        text = text.toString() + 'seven';
    }
    if (number.toString()[0]== 8) {
        text = text.toString() + 'eight';
    }
    if (number.toString()[0]== 9) {
        text = text.toString() + 'nine';
    }
  }
  return text;
}
