var catalog=require("./products.json");

 
var getProducts= function(){
    var products=catalog;
    products[1].title="transflower";
   
    return products;
};


var flowers=getProducts();
for(i=0;i<flowers.length;i++){
    console.log(flowers[i]);
}
