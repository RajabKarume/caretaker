import React from "react";
import './Table.css'

function Table(){

    return(
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>color</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>23</td>
                        <td>69</td>
                        <td>black</td>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mary</td>
                        <td>39</td>
                        <td>50</td>
                        <td>white</td>
                        <td>2021</td>
                    </tr><tr>
                        <td>3</td>
                        <td>Hannah</td>
                        <td>34</td>
                        <td>60</td>
                        <td>brown</td>
                        <td>2019</td>
                    </tr><tr>
                        <td>4</td>
                        <td>James</td>
                        <td>27</td>
                        <td>70</td>
                        <td>blue</td>
                        <td>2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table