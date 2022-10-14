// #########################################################################################
// Code by Madu https://github.com/madu-de GNU Affero General Public License v3.0 license
// #########################################################################################
var HexToDez = 'BEEFFFFFFFFFFF'; // Hier eine Zahl, die von Hexadezimal zu Dezimal gerechnet werden soll.
var DezToHex = 666; // Hier eine Zahl, die von Dezimal zu Hexadezimal gerechnet werden soll.
var BinToDez = '00100100101100111'; // Hier eine Zahl, die von Binär zu Dezimal gerechnet werden soll.
var DezToBin = 900; // Hier eine Zahl, die von Dezimal zu Binär gerechnet werden soll.
var HexToBin = 'FFFFFFFFF'; // Hier eine Zahl, die von Hexadezimal zu Binär gerechnet werden soll.
var BinToHex = '00100100101100111'; // Hier eine Zahl, die von Binär zu Hexadezimal gerechnet werden soll.
var DezToOkt = 23542452457; // Hier eine Zahl, die von Denizmal zu Oktal gerechnet werden soll.
var HexToOkt = 'FF'; // Hier eine Zahl, die von hexadezimal zu Oktal gerechnet werden soll.
var BinToOkt = '111'; // Hier eine Zahl, die von Binär zu Oktal gerechnet werden soll.
var OktToDez = '16725371214124'; // Hier eine Zahl, die von Oktal in Dezimal gerechnet werden soll.
var OktToHex = '200'; // Hier eine Zahl, die von Oktal in Hexadezimal gerechnet werden soll.
var OktToBin = '200'; // Hier eine Zahl, die von Oktal in Binär gerechnet werden soll.
console.log('HexToDez says: ' + hexToDez(HexToDez));
console.log('DezToHex says: ' + dezToHex(DezToHex));
console.log('BinToDez says: ' + binToDez(BinToDez));
console.log('DezToBin says: ' + dezToBin(DezToBin));
console.log('HexToBin says: ' + hexToBin(HexToBin));
console.log('BinToHex says: ' + binToHex(BinToHex));
console.log('DezToOkt says: ' + dezToOkt(DezToOkt));
console.log('HexToOkt says: ' + hexToOkt(HexToOkt));
console.log('BinToOkt says: ' + binToOkt(BinToOkt));
console.log('OktToDez says: ' + oktToDez(OktToDez));
console.log('OktToHex says: ' + oktToHex(OktToHex));
console.log('OktToBin says: ' + oktToBin(OktToBin));
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
    if (output == '') {
        return 'Ein Fehler ist aufgetreten!';
    }
    return output;
}
function binToHex(input) {
    var output;
    var dezimal = binToDez(input);
    output = dezToHex(dezimal);
    if (output == '') {
        return 'Ein Fehler ist aufgetreten!';
    }
    return output;
}
function dezToOkt(input) {
    var output = 0;
    var rests = [];
    while (input > 0) {
        rests.push(input % 8);
        input = Math.floor(input / 8);
    }
    rests = rests.reverse();
    output = parseInt(rests.join(''));
    return output;
}
function hexToOkt(input) {
    var dez = hexToDez(input);
    var output = dezToOkt(dez);
    return output;
}
function binToOkt(input) {
    var dez = binToDez(input);
    var output = dezToOkt(dez);
    return output;
}
function oktToDez(input) {
    var output = 0;
    var count = 0;
    var zahl;
    for (var i = input.length; i > 0; i--) {
        var element = input.charAt(i - 1);
        zahl = parseInt(element);
        output += zahl * Math.pow(8, count);
        count++;
    }
    return output;
}
function oktToHex(input) {
    var dez = oktToDez(input);
    var hex = dezToHex(dez);
    return hex;
}
function oktToBin(input) {
    var dez = oktToDez(input);
    var bin = dezToBin(dez);
    return bin;
}
