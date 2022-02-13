import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
import { Button } from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { extendTheme } from '@chakra-ui/react';
import axios from 'axios';
import env from 'react-dotenv';

const SearchProductAsset = () => {

    let [srchstrg, setsrchstrg] = useState();
    let [srchqry,setsrchqry] = useState();
    let [rowdata, setrowdata] = useState([]);

    const columns = [
        {field: 'id',headerName: 'ID', width: 5 },
        {field: 'assetname',headerName: 'Asset', width: 100, length: 100 },
        {field: 'description',headerName: 'Description', width: 100, length: 100 },
        {field: 'tokenid',headerName: 'Token', width: 100, length: 100 },
        {field: 'location',headerName: 'Location', width: 100, length: 100 },
        {field: 'owner',headerName: 'Owner', width: 100, length: 100 }
    ];


    function searchProduct() {
        let rowCounter = 1;
        let queryStr = `${env.PRODUCT_SEARCH_ENDPOINT}${srchqry}/${srchstrg}`;
        setrowdata([]);
        axios.get(queryStr)
        .then(result => {
            result.data.forEach(prod => {
                //console.log(`${prod.product.longName} ${prod.product.description}`);
                setrowdata(
                        rowdata => [...rowdata, {id: rowCounter++, assetname:prod.product.longName, description:prod.product.description, tokenid: 123, location:"United States", owner: "Jayper Sanchez"}]
                )
            })
            
        })
    }
    
    function getSrchStr(event) {
        setsrchstrg(event.target.value);
    }

    function getSrchqry(event) {
        console.log(event.target.value)
        setsrchqry(event.target.value);
    }

    return(
        
        <div className="content">
            <div className="search-pane">
                <input type="search" onChange={getSrchStr} placeholder="Enter Partial or whole Product Name" />
                <select name="srchQry" id="srchQry" onChange={getSrchqry}>
                    <option value="product">Product</option>
                    <option value="token">Token</option>
                </select>
                <Button onClick={searchProduct}>Search</Button> 
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rowdata}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
        
    );

}

export default SearchProductAsset;