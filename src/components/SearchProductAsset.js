import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
import { Button } from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { extendTheme } from '@chakra-ui/react';
import axios from 'axios';

const SearchProductAsset = () => {

    let [srchstrg, setsrchstrg] = useState();
    let [rowdata, setrowdata] = useState([]);

    const columns = [
        {field: 'id',headerName: 'ID', width: 5 },
        {field: 'assetname',headerName: 'Asset Name', width: 20 },
        {field: 'description',headerName: 'Product Description', width: 20 },
        {field: 'tokenid',headerName: 'Token ID', width: 20 },
        {field: 'location',headerName: 'Location', width: 20 },
        {field: 'owner',headerName: 'Owner', width: 20 }
    ];


    function searchProduct() {
        let rowCounter = 1;
        let queryStr = `https://dev.winetrust.org/db/public/assets/product/${srchstrg}`;
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

    return(
        
        <div className="content">
            <div className="search-pane">
                <input type="search" onChange={getSrchStr} placeholder="Enter Partial or whole Product Name" />
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