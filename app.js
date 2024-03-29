﻿(function(){

    const buttons = document.querySelectorAll('.btn');
    const storeImg = document.querySelectorAll('.store-item');

    buttons.forEach(button=>{
        button.addEventListener('click', (e)=>{
            //console.log(e.target); => all btn
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeImg.forEach((item)=>{
                if(filter === 'all'){
                    item.style.display = 'block'
                }else if(item.classList.contains(filter)){
                    item.style.display = 'block'

                }else{
                    item.style.display = 'none';

                }
            })

        })
    })

})();