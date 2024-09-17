document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-item');
  const productsContainer = document.getElementById('products');

 
  fetch('https://ezir.fpts.com.vn/HomeDemo/GetStockCode')
      .then(res => res.json())
      .then(data => {
          searchInput.addEventListener('input', () => {
              const valueSearch = searchInput.value.toLowerCase();
              if (valueSearch === '') {
                  productsContainer.style.display = 'none';
                  return;
              }

              
              const filteredProducts = data.filter(value =>
                  value.astock_CODE.toLowerCase().includes(valueSearch)
              );

            
              if (filteredProducts.length > 0) {
                  let myproduct = filteredProducts.map(value => `
                      <div class="product"> 
                          <img src="./img/Fpt-logo_transparent.png">
                         <a href="Search.html"><span class="highlight"> 
                              <div class="infomation"> 
                                  <div class="astock_CODE">${value.astock_CODE}
                                      <div class="floor">${value.floor}</div>
                                  </div>
                                  <div class="name">${value.name}</div>
                              </div>
                         </span> </a>
                      </div>`).join('');

                  productsContainer.innerHTML = myproduct;
                  productsContainer.style.display = 'block';
              } else {
                  productsContainer.style.display = 'none';
              }
          });

        
          document.addEventListener('click', (e) => {
              if (!searchInput.contains(e.target) && !productsContainer.contains(e.target)) {
                  productsContainer.style.display = 'none';
              }
          });

     
          searchInput.addEventListener('focus', () => {
              if (searchInput.value !== '') {
                  productsContainer.style.display = 'block';
              }
          });
      });
});
function handleInput() {
    const searchItem = document.getElementById('search-item');
    if (searchItem.value.length > 0) {
        searchItem.classList.add('has-content'); 
    } else {
        searchItem.classList.remove('has-content'); 
}

function shrinkInput() {
    const searchItem = document.getElementById('search-item');
  
    searchItem.classList.remove('has-content');
}

function expandInput() {
  
}}

function hideProducts() {
    const searchItem = document.getElementById('search-item');
    const productsDiv = document.getElementById('products');
    if (searchItem.value === '') {
        productsDiv.style.display = 'none';
    }
}


/*-------------------*/
