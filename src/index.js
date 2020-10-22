module.exports = function check(str, bracketsConfig) {

    let brackets = [];
    for(let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            brackets.push(bracketsConfig[i][j]);
        }
    }
    let bracketsString = brackets.join('');

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let bracketIndex = bracketsString.indexOf(str[i]);
        if((bracketsString[0] === bracketsString[1] || bracketsString[2] === bracketsString[3]
        || bracketsString[4] === bracketsString[5] || bracketsString[6] === bracketsString[7]
        || bracketsString[8] === bracketsString[9]) && str.indexOf(str[i]) < i) {
            let counter = 0;
            for(let j = 0; j < i; j++) {
                if(str[j] === str[i]) {
                    counter++;
                }
            }
            if(counter % 2 === 1) {
                bracketIndex = bracketsString.lastIndexOf(str[i]);
            }
        }

        if(bracketIndex % 2 === 0) {
            stack.push(+bracketIndex + 1);
        } else {
            if(stack.pop() !== bracketIndex) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
