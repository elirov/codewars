export function isIsogram(str: string) : boolean {
    if (str == '') {
        return true;
    }
    str = str.toLowerCase();
    let uniqueLetters = new Set();
    for (let i = 0; i < str.length;i++) {
        if (uniqueLetters.has(str[i])) {
            return false;
        }
        uniqueLetters.add(str[i]);
    }
    return true;
}