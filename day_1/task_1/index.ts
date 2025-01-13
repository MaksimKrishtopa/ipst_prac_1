function identicalLetters(str1: string, str2: string): string {
    let str3 = ''; 
    
    for (const char1 of str1) {
        for (const char2 of str2) {
            if (char1 === char2) {
                str3 += char1
            }
        }
    }

    return str3; 
}


console.log(identicalLetters('abcd','qwertyad'))