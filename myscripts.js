
fetch('https://ezir.fpts.com.vn/HomeDemo/GetStockCode') /* gọi api */
.then(res=>{
    return res.json()
})
.then (data=>{
  let myproduct ='';
  data.map(value => {
    return myproduct += `
    <div class="product"> 
     <img src="./Project- FE/Image/Fpt-logo_transparent.png">
     <a href="Search.html">
         
    <div class="infomation"> 
    
    <div class="astock_CODE">${value.astock_CODE}
    <div class="floor">${value.floor}</div></div>
    <div class="name">${value.name}</div>
    </div>  
    </a>
    </div>`
  })
  
  document.getElementById('products').innerHTML = myproduct;
  
})
/* lọc ra danh sách tìm kiếm*/
function productsearch()
{
    let valueSearch = document.getElementById('search-item').value
   
    fetch('https://ezir.fpts.com.vn/HomeDemo/GetStockCode')
.then(res=>{
    return res.json()
})
.then (data=>{
   let productTk = data.filter(value => {
    return value.astock_CODE.toLowerCase().includes(valueSearch.toLowerCase())
   })
   document.getElementById('products').innerHTML='';
   let myproduct ='';
 productTk.map(value => {

    return myproduct +=` 
    <div class="product"> 
     <img src="./Project- FE/Image/Fpt-logo_transparent.png">
      
     <a href="Search.html">
     <span class="highlight"> 
    <div class="infomation"> 
    
    <div class="astock_CODE">${value.astock_CODE}
    <div class="floor">${value.floor}</div>
    </div>
    <div class="name">${value.name}</div>

    </div> 
    </span>
    </a>
    </div>`
  })
  if (myproduct !== '') {
    document.getElementById('products').style.display = 'block';
  } else {
    document.getElementById('products').style.display = 'none';
  }

  document.getElementById('products').innerHTML = myproduct ;
    
  })
}
function handleInput() {
  // Ẩn trang sản phẩm khi bắt đầu gõ vào ô tìm kiếm
  document.getElementById('products').style.display = 'none';
}
