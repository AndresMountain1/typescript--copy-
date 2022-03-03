"use strict";
function hello(compiler) {
    return "Hello from ".concat(compiler);
}
console.log(hello("tototototo"));
var age1;
var name1 = null;
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Brown"] = 2] = "Brown";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Orange"] = 4] = "Orange";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
    Color[Color["Purple"] = 8] = "Purple";
    Color[Color["Grey"] = 9] = "Grey";
})(Color || (Color = {}));
var colBackground = Color.Blue;
var PropKind;
(function (PropKind) {
    PropKind[PropKind["Read"] = 1] = "Read";
    PropKind[PropKind["Write"] = 4] = "Write";
    PropKind["Indexed"] = "indexed";
})(PropKind || (PropKind = {}));
var kind = PropKind.Read;
console.log(kind, PropKind[PropKind.Read]); // 1 Read
console.log(PropKind.Write, PropKind[PropKind.Write]); // 4 Write
console.log(PropKind.Indexed); // indexed
var key = Symbol();
var key2 = Symbol();
//console.log(key == key2) // erreur
var KEY = "key";
var e1 = KEY;
