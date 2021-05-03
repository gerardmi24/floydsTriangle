import React from 'react'

export default function Pascal() {

//     [1]
//    [1 1]
//   [1 2 1]
//  [1 3 3 1]
// [1 4 6 4 1]

    function pascalsTri() {
      
        let totalRows = 6
        let pascalsTriangle = new Array(totalRows)

        for (let i = 0; i < totalRows; i++) {
            let row = new Array(i + 1);
            row[0] = 1;
            row[row.length - 1] = 1;

            for(let j = 1; j < row.length - 1; j++) {
                let prevRow = pascalsTriangle[i - 1];
                row[j] = prevRow[j] + prevRow[j - 1];
            }
            pascalsTriangle[i] = row;
        }
        return pascalsTriangle
    }

    return (
        <div>
            {pascalsTri()}
        </div>
    )
}
