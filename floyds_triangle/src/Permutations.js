import React from 'react'

export default function Permutations({godWord}) {
// RECURSION
    
    function perms() {
        let arr = []
        console.log("arr", arr)

        if (godWord.length === 0) {
            return "";
        }
        if (godWord.length === 1 ) {
            return godWord;
        }
        else {
            for (let i = 0; i < godWord.length; i++) {
                let firstLetter = godWord[i]

                // if (godWord.indexOf(firstLetter) != i) {
                //     continue;
                // }

                let restOfWord = godWord.slice(0, i) + godWord.slice(i + 1, godWord.length)
                // let newString = perms(restOfWord)
                    // for (let permutes of Permutations(restOfWord)) {
                    //     arr.push(firstLetter + permutes)
                    // }
                    for (let j = 0; j < restOfWord.length; j++) {
                        arr.push(firstLetter + restOfWord + " ")
                    }
            }
            return arr;
        }
    }

    return (
        <div>
            {perms(godWord)}
        </div>
    )
}
