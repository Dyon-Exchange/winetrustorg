import React from 'react'

const SearchProductAsset = () => {
  return (
    <div className="content">
      <div className="search-pane">
        <input type="search" placeholder="Enter Partial or whole Product Name" />
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
          <tr>
            <td>Chateau Lafite Rothschild 2010 (6x75cl)</td>
            <td>
              Chateau Lafite 2010 is one of the greatest ever wines from this Pauillac, Bordeaux
              First Growth estate. Made in a vintage which is universally acknowledged as one of the
              best in modern times, this wine will drink well until 2080. This is a core holding in
              any serious fine wine collection.
            </td>
            <td>123</td>
            <td>United Kingdom</td>
            <td>Jay</td>
          </tr>
          <tr>
            <td>Chateau Lafite Rothschild 2010 (6x75cl)</td>
            <td>
              Chateau Lafite 2010 is one of the greatest ever wines from this Pauillac, Bordeaux
              First Growth estate. Made in a vintage which is universally acknowledged as one of the
              best in modern times, this wine will drink well until 2080. This is a core holding in
              any serious fine wine collection.
            </td>
            <td>123</td>
            <td>United Kingdom</td>
            <td>Jay</td>
          </tr>
          <tr>
            <td>Chateau Lafite Rothschild 2010 (6x75cl)</td>
            <td>
              Chateau Lafite 2010 is one of the greatest ever wines from this Pauillac, Bordeaux
              First Growth estate. Made in a vintage which is universally acknowledged as one of the
              best in modern times, this wine will drink well until 2080. This is a core holding in
              any serious fine wine collection.
            </td>
            <td>123</td>
            <td>United Kingdom</td>
            <td>Jay</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default SearchProductAsset
