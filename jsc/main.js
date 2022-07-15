if(localStorage.getItem('basket') === null){
    localStorage.setItem('basket',JSON.stringify([]))
}

let button = document.querySelectorAll('.seid')

for(let btn of button){
    btn.addEventListener('click',function(e){
        e.preventDefault()
        let basket = JSON.parse(localStorage.getItem('basket'))
        let id = e.target.parentElement.parentElement.parentElement.id;
        let img = e.target.parentElement.previousElementSibling.src;
        let prod_name = e.target.previousElementSibling.previousElementSibling.innerText;
        let prod_price = e.target.previousElementSibling.innerText;

        let exitprod  = basket.find(x => x.id == id)
        if(exitprod == undefined){
            basket.push({
                id:id,
                img:img,
                prod_name:prod_name,
                prod_price:prod_price,
                count:1
            })
        }
        else{
            exitprod.count++
        }
        localStorage.setItem('basket',JSON.stringify(basket))
        showcount()
    })
}
function showcount(){
    let count = document.getElementById('count')
    let basket = JSON.parse(localStorage.getItem('basket'))
    count.innerHTML = basket.length
}
showcount()