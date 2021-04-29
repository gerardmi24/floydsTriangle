import React from 'react'

export default function Floyd() {

    function triangle() {
        let count = 1
        let rows = 8

        for(let i = 1; i <= rows; i++) {
            for(let j = 1; j <= i; j++, count++)
                document.write(count + " ");
                document.write("<br/ > \n");
        }
    }

    return (
        <div>
            {triangle()}
        </div>
    )
}
