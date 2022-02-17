import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import env from 'react-dotenv'

const SearchProductAsset = (props: any) => {
  let [srchstrg, setsrchstrg] = useState()
  let [rowdata, setrowdata] = useState([])
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 5 },
    { field: 'assetname', headerName: 'Asset', width: 100, length: 100 },
    { field: 'description', headerName: 'Description', width: 100, length: 100 },
    { field: 'tokenid', headerName: 'Token', width: 100, length: 100 },
    { field: 'location', headerName: 'Location', width: 100, length: 100 },
    { field: 'owner', headerName: 'Owner', width: 100, length: 100 }
  ]

  useEffect(() => {
    setsrchstrg(props.value);
  },[props.value])

  function searchProduct() {
    let rowCounter = 1
    let queryStr = `${env.PRODUCT_SEARCH_ENDPOINT}${srchstrg}`
    axios.get(queryStr).then((result: any) => {
      const rowData: any = []
      result.data.forEach((prod: any) => {
        let ownerName = prod.preAdvice.owner.firstName + " " + prod.preAdvice.owner.lastName;
        rowData.push({
          id: rowCounter++,
          assetname: prod.product.longName,
          description: prod.product.description,
          tokenid: 123,
          location: prod.warehouseLocationNo,
          owner: ownerName
        })
      })
      setrowdata(rowData)
    })
  }

  function getSrchStr(event: any) {
    setsrchstrg(event.target.value)
  }

  return (
    <div className="content">
      <div className="search-pane">
        <input
          type="search"
          onChange={getSrchStr}
          placeholder="Enter Partial or whole Product Name"
        />
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
  )
}

export default SearchProductAsset
