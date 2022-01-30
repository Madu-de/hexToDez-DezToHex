const INPUT: string = '3f'; // Hier eine Zahl, die von Hexadezimal zu Dezimal gerechnet werden soll.
const INPUT2: number = 0; // Hier eine Zahl, die von Dezimal zu Hexadezimal gerechnet werden soll.
const INPUT3: string = '0101001100011'; // Hier eine Zahl, die von Binär zu Dezimal gerechnet werden soll.
const INPUT4: number = 24575696094004087578465574578786489577457846894; // Hier eine Zahl, die von Dezimal zu Binär gerechnet werden soll.

console.log('HexToDez says: ' + hexToDez(INPUT));
console.log('DezToHex says: ' + dezToHex(INPUT2));
console.log('BinToDez says: ' + binToDez(INPUT3));
console.log('DezToBin says: ' + dezToBin(INPUT4));

function hexToDez(input: string): string | number {

    let output: number = 0;
    let count: number = 0;
    let zahl: number;

    for (let i = input.length; i > 0; i--) {
        let element: string = input.charAt(i - 1);
        switch (element) {
            case 'A':
            case 'a':
                zahl = 10;
                break;
            case 'B':
            case 'b':
                zahl = 11;
                break;
            case 'C':
            case 'c':
                zahl = 12;
                break;
            case 'D':
            case 'd':
                zahl = 13;
                break;
            case 'E':
            case 'e':
                zahl = 14;
                break;
            case 'F':
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
