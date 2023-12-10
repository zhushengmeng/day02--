export function sum(...arr: number[]): number {
    return arr.reduce((a,b) => {
            return a+b
        },0)
}

const SUM = sum(1,2,3,4,5,6,7,9)

console.log(SUM);

function max(...arr: string[]): string {
    return arr.reduce((a,b) => {
        return a.length > b.length ? a : b
    })
}

const Max = max('asjhkjhdk','ashjkdh','agjdgjhg')
const Max2 = max('qwertyuio','asdfg','zxcvbnm')
const Max3 = max('zxcvbnm','asdfghjkl','qwertyuio')
console.log(Max);
console.log(Max2);
console.log(Max3);