import React from "react";
import './Table.css'

function Table({data = null, columns=null}){

    return(
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        {
                        columns.map((header) => (<th>{header.key}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {data&&
                    data.map((row)=>
                    <tr>
                        {columns.map((col)=> <td>{row[col.field]}</td>)}
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table