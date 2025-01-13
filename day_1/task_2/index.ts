function longestWord(str1: string): string {
    let longword = ''; 

    const words = str1.split(' ');

    for (const word of words) {
        if (word.length > longword.length) {
            longword = word
        }
    }
    


    return longword
}


console.log(longestWord('search here the longest wordddd'))