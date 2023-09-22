function makeLine(size, character) {
    let line = '';
    for (let i=0; i < size; i++) {
        line += character;
    }
    return line;
}

function makeSquare(size) {
    let square = '';
    for (let i=0; i < size; i++){
        square += (makeRectangle(size, size));
    }
    return square.slice(0, ((size * size)+ size - 1));
}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
function makeDownwardStairs(height) {
    let downwardStairs = '';
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i + 1) + '\n');
    }
    return downwardStairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars) {
    let line = makeLine(numChars);
    let blankSpace = ''
    for (i = 0; i < numSpaces; i++){
        blankSpace += (' ');
    }
    let spaceLine = blankSpace + line + blankSpace
    return spaceLine;
}

function makeIsoscelesTriangle(height) {
    let IsoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
        IsoscelesTriangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return IsoscelesTriangle.slice(0, -1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}


function makeDiamond(height) {
    let topDiamond = '';
    for (let i = 0; i < height; i++) {
        topDiamond += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return topDiamond.slice(0, -1) + reverse(topDiamond);
}

console.log(makeLine(5, '/'))



