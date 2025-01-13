function runLengthEncoding(str: string): string {
    let encoded = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            encoded += str[i - 1] + count;
            count = 1;
        }
    }

    return encoded;
}

console.log(runLengthEncoding("aabbbcdff"));



function runLengthDecoding(str: string): string {
    let decoded = ""; 

    for (let i = 0; i < str.length; i++) {
        const char = str[i]; 
        let count = ""; 

       
        for (let j = i + 1; j < str.length; j++) {
            if (!isNaN(Number(str[j]))) {
                count += str[j];
                i = j; 
            } else {
                break; 
            }
        }

        decoded += char.repeat(Number(count));
    }

    return decoded;
}


console.log(runLengthDecoding("a2b3c1d1f2"));