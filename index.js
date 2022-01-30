var HexToDez = '6DF'; // Hier eine Zahl, die von Hexadezimal zu Dezimal gerechnet werden soll.
var DezToHex = 96; // Hier eine Zahl, die von Dezimal zu Hexadezimal gerechnet werden soll.
var BinToDez = '0000000001000101'; // Hier eine Zahl, die von Binär zu Dezimal gerechnet werden soll.
var DezToBin = 103; // Hier eine Zahl, die von Dezimal zu Binär gerechnet werden soll.
var HexToBin = 'c000013a'; // Hier eine Zahl, die von Hexadezimal zu Binär gerechnet werden soll.
var BinToHex = '0000000000110000'; // Hier eine Zahl, die von Binär zu Hexadezimal gerechnet werden soll.

console.log('HexToDez says: ' + hexToDez(HexToDez));
console.log('DezToHex says: ' + dezToHex(DezToHex));
console.log('BinToDez says: ' + binToDez(BinToDez));
console.log('DezToBin says: ' + dezToBin(DezToBin));
console.log('HexToBin says: ' + hexToBin(HexToBin));
console.log('BinToHex says: ' + binToHex(BinToHex));
function hexToDez(input) {
    var output = 0;
    var count = 0;
    var zahl;
    for (var i = input.length; i > 0; i--) {
        var element = input.charAt(i - 1);
        element = element.toLowerCase();
        switch (element) {
            case 'a':
                zahl = 10;
                break;
            case 'b':
                zahl = 11;
                break;
            case 'c':
                zahl = 12;
                break;
            case 'd':
                zahl = 13;
                break;
            case 'e':
                zahl = 14;
                break;
            case 'f':
                zahl = 15;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                zahl = parseInt(element);
                break;
            default:
                return 'Ein Fehler ist aufgetreten!';
                break;
        }
        output += zahl * Math.pow(16, count);
        count++;
    }
    return output;
}
function dezToHex(input) {
    if (typeof input == 'string') {
        input = parseInt(input);
    }
    var output = '';
    var rests = [];
    while (input > 0) {
        rests.push(input % 16);
        input = Math.floor(input / 16);
    }
    for (var i = 0; i < rests.length; i++) {
        var element = rests[i];
        switch (element) {
            case 10:
                element = 'A';
                break;
            case 11:
                element = 'B';
                break;
            case 12:
                element = 'C';
                break;
            case 13:
                element = 'D';
                break;
            case 14:
                element = 'E';
                break;
            case 15:
                element = 'F';
                break;
        }
        output = element + output;
    }
    return output;
}
function binToDez(input) {
    var output = 0;
    var count = 0;
    for (var i = input.length; i > 0; i--) {
        var element = parseInt(input.charAt(i - 1));
        output += element * Math.pow(2, count);
        count++;
    }
    return output;
}
function dezToBin(input) {
    var output = '';
    var rests = [];
    while (input > 0) {
        rests.push(input % 2);
        input = Math.floor(input / 2);
    }
    for (var i = 0; i < rests.length; i++) {
        var element = rests[i];
        output = element + output;
    }
    return output;
}
function hexToBin(input) {
    var output;
    var dezimal = hexToDez(input);
    output = dezToBin(parseInt(dezimal));
    return output;
}
function binToHex(input) {
    var output;
    var dezimal = binToDez(input);
    output = dezToHex(dezimal);
    return output;
}
