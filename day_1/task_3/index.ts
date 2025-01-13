function indexOf(str: string, substring: string): number {
    let index = 0;

    for (const char of str) {
       
        if (char === substring[0]) {
            let match = true;

            
            for (let j = 0; j < substring.length; j++) {
                if (str[index + j] !== substring[j]) {
                    match = false;
                    break;
                }
            }

            
            if (match) {
                return index;
            }
        }

        index++;
    }

    
    return -1;
}


console.log(indexOf('hello ts', 'ts'))
