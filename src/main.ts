function hello(compiler: string) {
    return `Hello from ${compiler}`
}
console.log(hello("tototototo"))

let age1: number | undefined
let name1: string | null = null

enum Color {
	White, Black, Brown, Red, Orange, Yellow, Green, Blue, Purple, Grey
}
let colBackground: Color = Color.Blue

enum PropKind {
	Read = 1,
	Write = 4,
	Indexed = "indexed",
}
let kind: PropKind = PropKind.Read

console.log(kind, PropKind[PropKind.Read]) // 1 Read
console.log(PropKind.Write, PropKind[PropKind.Write]) // 4 Write
console.log(PropKind.Indexed) // indexed

const key = Symbol()
const key2 = Symbol()
//console.log(key == key2) // erreur
const KEY = "key"
//let e1: "key" = KEY


//type key_t = "key"
//type click_t = "click" event_t = click_t | key_t
//let e1: event_t = KEY

let jean = {
    name : "Jean NEIGE",
    age: 24,
    printName : function() {
        console.log("hello " + this.name)
    }
}
jean.printName()

function hello2(name: string): void {
    console.log("hello " + name)
}
// const str: string = hello2(jean.name) // erreur Type 'void' is not assignable to type 'string'.