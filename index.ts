// #########################################################################################
// Code by Madu https://github.com/madu-de GNU Affero General Public License v3.0 license
// #########################################################################################

const HexToDez: string = 'beef'; // Hier eine Zahl, die von Hexadezimal zu Dezimal gerechnet werden soll.
const DezToHex: number = 234; // Hier eine Zahl, die von Dezimal zu Hexadezimal gerechnet werden soll.
const BinToDez: string = '01010101001010101001010101010101010101010101010'; // Hier eine Zahl, die von Binär zu Dezimal gerechnet werden soll.
const DezToBin: number = 234; // Hier eine Zahl, die von Dezimal zu Binär gerechnet werden soll.
const HexToBin: string = '19856398756Fe'; // Hier eine Zahl, die von Hexadezimal zu Binär gerechnet werden soll.
const BinToHex: string = '1001'; // Hier eine Zahl, die von Binär zu Hexadezimal gerechnet werden soll.

console.log('HexToDez says: ' + hexToDez(HexToDez));
console.log('DezToHex says: ' + dezToHex(DezToHex));
console.log('BinToDez says: ' + binToDez(BinToDez));
console.log('DezToBin says: ' + dezToBin(DezToBin));
console.log('HexToBin says: ' + hexToBin(HexToBin));
console.log('BinToHex says: ' + binToHex(BinToHex));

function hexToDez(input: string): any {

    let output: number = 0;
    let count: number = 0;
    let zahl: number;

    for (let i = input.length; i > 0; i--) {
        let element: string = input.charAt(i - 1);
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

function dezToHex(input: string | number): string {
    if (typeof input == 'string') {
        input = parseInt(input);
    }

    let output: string = '';
    let rests: number[] = [];

    while (input > 0) {
        rests.push(input % 16);
        input = Math.floor(input / 16);
    }

    for (let i = 0; i < rests.length; i++) {
        let element: any = rests[i];
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

function binToDez(input: string): number {

    let output: number = 0;
    let count: number = 0;

    for (let i = input.length; i > 0; i--) {
        let element: number = parseInt(input.charAt(i - 1));

        output += element * Math.pow(2, count);
        count++;
    }

    return output;

}

function dezToBin(input: number): string {

    let output: string = '';
    let rests: number[] = [];

    while (input > 0) {
        rests.push(input % 2);
        input = Math.floor(input / 2);
    }

    for (let i = 0; i < rests.length; i++) {
        let element: any = rests[i];
        output = element + output;
    }

    return output;
}

function hexToBin(input: string): string {

    let output: string;

    let dezimal = hexToDez(input);

    output = dezToBin(parseInt(dezimal));

    if (output == '') {
        return 'Ein Fehler ist aufgetreten!';
    }

    return output;
}

function binToHex(input: string): string {
    let output: string;

    let dezimal = binToDez(input);

    output = dezToHex(dezimal);

    if (output == '') {
        return 'Ein Fehler ist aufgetreten!';
    }

    return output;
}