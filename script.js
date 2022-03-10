$.ajax({
    type : 'GET',
    dataType : 'json',
    url: 'https://meg9meg.github.io/products/products.json',
    //url: '/products.json',
    success : function(data) {     
        $.each(data, function(index, obj){
            let status_arr = obj.prod_status.split(',');
            let cat = ``;
            let disc = ``;
            let price = ``;
            if(status_arr[0] != "") {
                for(let i = 0; i < status_arr.length; i++){
                    cat += `<div class="category">${status_arr[i]}</div>`;
                    if(status_arr[i] === 'promotion') {
                        console.log('promo');//disc += `<p class="discount">-10%</p>` //Math.round(obj.price * 0.9 * 100) / 100
                    }
                }
            }

            if (obj.prod_oldprice != null) {
                price += `<p class="price">${obj.prod_price}$</p>
                    <p class="prev-price">${obj.prod_oldprice}$</p>`;
                disc += `<p class="discount">${Math.round((obj.prod_oldprice-obj.prod_price)*100/obj.prod_oldprice)}%</p>`
            } else {
                price += `<p class="price">${obj.prod_price}$</p>`;
            }

            const item = document.createElement('div');
            item.className = "product";
            item.innerHTML = 
            `<div class="product-image">
                <img src="dress.jpg">
                <div class="categories">${cat}</div>
                <div class="discount-area">${disc}</div>
            </div>
            <div class="product-details">
                <p class="name">${obj.prod_name}</p>
                <hr>
                <div class="price">${price}</div>
            </div>`
            $('.products').append(item);
        });
    } 
});


$('#filters').change(function () { 
   console.log($(this).val());
   let select = $(this).val();

   $('.products').empty();
   $.ajax({
   type : 'GET',
   dataType : 'json',
   url: 'https://meg9meg.github.io/products/products.json',
   //url: '/products.json',
   success : function(data) { 
       $.each(data, function(index, obj){
        let status_arr = obj.prod_status.split(',');
           if (status_arr.includes(select) || select === "") {
            let cat = ``;
            let disc = ``;
            let price = ``;
            if(status_arr[0] != "") {
                for(let i = 0; i < status_arr.length; i++){
                    cat += `<div class="category">${status_arr[i]}</div>`;
                    if(status_arr[i] === 'promotion') {
                        console.log('promo');//disc += `<p class="discount">-10%</p>` //Math.round(obj.price * 0.9 * 100) / 100
                    }
                }
            }

            if (obj.prod_oldprice != null) {
                price += `<p class="price">${obj.prod_price}$</p>
                    <p class="prev-price">${obj.prod_oldprice}$</p>`;
                disc += `<p class="discount">${Math.round((obj.prod_oldprice-obj.prod_price)*100/obj.prod_oldprice)}%</p>`
            } else {
                price += `<p class="price">${obj.prod_price}$</p>`;
            }

            const item = document.createElement('div');
            item.className = "product";
            item.innerHTML = 
            `<div class="product-image">
                <img src="dress.jpg">
                <div class="categories">${cat}</div>
                <div class="discount-area">${disc}</div>
            </div>
            <div class="product-details">
                <p class="name">${obj.prod_name}</p>
                <hr>
                <div class="price">${price}</div>
            </div>`
            $('.products').append(item);
       }
       });
   } 
   });
});
