
var test:boolean = true;

var id:number = 2;

var decimal: number = 5.3;
var hex: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;

// ----------------------

var nome : string = "Guilherme";
var car : string = 'Camaro';
var text = `<p> Name: ${nome} </p>
            </br><p> Car: ${car} </p>
`;

document.body.innerHTML = text;

var fruits : string[] = ["Apple", "Watermelon", "Lemon"];
var fruits:Array<string> = ["Apple", "Watermelon", "Lemon"];
console.log(fruits);

// ---------------------


enum Color {Red = 1, Green, Blue};
console.log(Color.Red);
console.log(Color[2]);

//  ----------------------

var list:any = 23;
console.log(list);
list = "String ...";
console.log(list);

function printNumber(num:number):void {
    alert(num);
}

printNumber(2);