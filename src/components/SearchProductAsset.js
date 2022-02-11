import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
import { Button } from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { extendTheme } from '@chakra-ui/react';
import axios from 'axios';

const SearchProductAsset = () => {

    let [srchstrg, setsrchstrg] = useState();
    let [rowdata, setrowdata] = useState([]);


    function searchProduct() {
        let queryStr = `https://dev.winetrust.org/db/public/assets/product/${srchstrg}`;
        axios.get(queryStr)
        .then(result => {
            result.data.forEach(prod => {
                console.log(`${prod.product.longName} ${prod.product.description}`);
                setrowdata(
                        rowdata => [...rowdata, prod.product]
                )
            })
            
        })
    }
    
    function getSrchStr(event) {
        setsrchstrg(event.target.value);
    }

    return(
        
        <div className="content">
            <div className="search-pane">
                <input type="search" onChange={getSrchStr} placeholder="Enter Partial or whole Product Name" />
                <Button onClick={searchProduct}>Search</Button> 
            </div>
            <div className="search-result-pane">
                    <table>
                    <tr>
                        <th>Asset Name</th>
                        <th>Description</th>
                        <th>NFT Token ID</th>
                        <th>Location</th>
                        <th>Owner</th>
                    </tr>
                    {
                        rowdata    
                    }
                   </table>
            </div>
        </div>
        
    );

}

export default SearchProductAsset;