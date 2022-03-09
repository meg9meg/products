$.ajax({
    type : 'GET',
    dataType : 'json',
    url: '/plant_database.json',
    success : function(data) {      
        $.each(data, function(index, obj){
            let cat = ``;
            let disc = ``;
            let price = ``;
            for(let i = 0; i < obj.status.length; i++){
                cat += `<div class="category">${obj.status[i]}</div>`;
                if(obj.status[i] === 'promotion') {
                    disc += `<p class="discount">-10%</p>`
                }
            }

            if (obj.status.includes("promotion")) {
                price += `<p class="price">${Math.round(obj.price * 0.9 * 100) / 100}$</p>
                    <p class="prev-price">${obj.price}$</p>`;
            } else {
                price += `<p class="price">${obj.price}$</p>`;
            }

            const item = document.createElement('div');
            item.className = "product";
            item.innerHTML = 
            `<div class="product-image">
                <img src="plant.png">
                <div class="categories">${cat}</div>
                <div class="discount-area">${disc}</div>
            </div>
            <div class="product-details">
                <p class="name">${obj.name}</p>
                <hr>
                <div class="price">${price}</div>
            </div>`
            $('.products').append(item);
        });
    } 
});

$(".recomended").click(function(){
    
}); 


$('#filters').change(function () { 
   console.log($(this).val());
   let select = $(this).val();

   $('.products').empty();
   $.ajax({
   type : 'GET',
   dataType : 'json',
   url: '/plant_database.json',
   success : function(data) { 
       $.each(data, function(index, obj){
           if (obj.status.includes(select) || select === "") {
           let cat = ``;
           let disc = ``;
           let price = ``;
           for(let i = 0; i < obj.status.length; i++){
               cat += `<div class="category">${obj.status[i]}</div>`;
               if(obj.status[i] === 'promotion') {
                   disc += `<p class="discount">-10%</p>`
               }
           }

           if (obj.status.includes("promotion")) {
               price += `<p class="price">${Math.round(obj.price * 0.9 * 100) / 100}$</p>
                   <p class="prev-price">${obj.price}$</p>`;
           } else {
               price += `<p class="price">${obj.price}$</p>`;
           }

           const item = document.createElement('div');
           item.className = "product";
           item.innerHTML = 
           `<div class="product-image">
               <img src="plant.png">
               <div class="categories">${cat}</div>
               <div class="discount-area">${disc}</div>
           </div>
           <div class="product-details">
               <p class="name">${obj.name}</p>
               <hr>
               <div class="price">${price}</div>
           </div>`
           $('.products').append(item);
       }
       });
   } 
   });
});