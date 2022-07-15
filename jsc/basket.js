function showbasket(){
    let basket = JSON.parse(localStorage.getItem('basket'))
    basket.forEach(x => {
        let div = ''

        div += `
        <tr>
        <td>${x.id}</td>
        <td>
            <img src="${x.img}" alt="">
        </td>
        <td>
            ${x.prod_name}
        </td>
        <td>
            ${x.count}
        </td>
        <td>
            ${x.prod_price}
        </td>
        <td>
        <i id = 'remove' class="fa-solid fa-trash"></i>
        </td>

     </tr>
        `
        document.getElementById('seid').innerHTML += div
    });
}

showbasket()
let remove = document.getElementById('remove')
remove.addEventListener('click',function(){
    let items = JSON.parse(localStorage.getItem('basket'));
    let filtered = items.filter(item => item.id !== items.id);
    localStorage.setItem('basket', JSON.stringify(filtered));
})

