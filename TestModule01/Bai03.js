// Check if string 1 is in sting 2
function evaluateString(str1, str2) {
    let flag = false;
    let len1 = str1.length;
    let len2 = str2.length;
    for (let i = 0; i < len2 - len1 + 1; i++) {
        let str3 = str2.slice(i, i + len1);
        if (str1 == str3) {
            flag = true;
            break;
        } else flag = false;
    }
    return flag;
}
// Test Case
let str3 = "APPLE";
let str4 = "constAPPLEntine";
console.log(evaluateString(str3, str4));