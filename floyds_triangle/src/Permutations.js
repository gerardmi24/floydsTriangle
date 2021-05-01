import React from 'react'

export default function Permutations() {
// RECURSION
    
    function perms(string) {
        let arr = []
        if (string.length === 0) {
            return "";
        }
        if (string.length === 1 ) {
            return string;
        }
    
        else {
            for (let i = 0; i < string.length; i++) {
                let firstLetter = string[i]
                
                let restOfWord = string.slice(0, i) + string.slice(i + 1, string.length)

                    for (let permutes of perms(restOfWord)) {
                        arr.push(firstLetter + permutes + " ")
                    }
            }
            return arr;
        }
    }

    return (
        <div>
            {perms('GOOD')}
        </div>
    )
}
