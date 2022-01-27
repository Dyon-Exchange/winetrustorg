function getProductByName() {
    const stringQuery = document.getElementById("productsearchbyname").value;
    fetch(`http://127.0.0.1:3030/public/assets/product/${stringQuery}`)
    .then(data => {
        //alert(JSON.stringify(data))
        console.log(data.json());
    })
    
}

function getAssetByTokenId() {
    const stringQuery = document.getElementById("assetsearchbyid").value;
    fetch(`http://127.0.0.1:3030/public/assets/token/${stringQuery}`)
    .then(data => {
        //alert(JSON.stringify(data))
        console.log(data.json());
    })
   
}

