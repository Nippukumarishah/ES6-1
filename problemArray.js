const input = ["MA", "SA", "I", "SCH", "OOL"]
let lowerCaseFnt = (char) => char.toLowerCase();

let convertWord = (word) =>{
    return word.split().map((latter) => lowerCaseFnt(latter)).join("");

}
let convertArray = (input) => {
    return input.map(convertWord);
}
console.log(convertArray(input));