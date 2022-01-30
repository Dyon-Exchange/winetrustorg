function getProductByName() {
    let stringQuery = document.getElementById("productsearchbyname").value;
    fetch(`http://127.0.0.1:3030/public/assets/product/${stringQuery}`)
    .then(data => {
        return data.json()
    })
    .then((results) => { 
        //console.log(JSON.stringify(results))
        //const obj = JSON.parse(results)
        for(var k in results) {
            if(results[k] instanceof Object) {
                let q = results[k].product.longName
                var v = new RegExp(stringQuery,"g")
                if( q.match(v) ) {
                    console.log(results[k].product.longName);
                }
            }

        }
        
    })
    
}

function getAssetByTokenId() {
    let stringQuery = document.getElementById("assetsearchbyid").value;
    fetch(`http://127.0.0.1:3030/public/assets/token/${stringQuery}`)
    .then(data => {
        return data.json()
    })
    .then((results) => { 
        //console.log(JSON.stringify(results))
        //const obj = JSON.parse(results)
        for(var k in results) {
            if(results[k] instanceof Object) {
                let q = results[k].tokenId
                var v = new RegExp(stringQuery,"g")
                if( stringQuery === q ) {
                    console.log(`${results[k].tokenId} :: ${results[k].product.longName}` );
                }
            }

        }
        
    })
   
}

