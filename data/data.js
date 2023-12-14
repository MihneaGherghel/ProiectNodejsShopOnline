const products=[
    {id:1,name:'Prod1',photo_path:'link',description:'descriere', price:50},
    {id:2,name:'Prod2',photo_path:'link',description:'descriere',price:50},
    {id:3,name:'Prod3',photo_path:'link',description:'descriere',price:50}
]

const users=[
    {id:1,username:'user',email:'email',password:'password',city:'oras',address:'adresa',postal_code:'cod', age:15},
    {id:2,username:'user',email:'email',password:'password',city:'oras',address:'adresa',postal_code:'cod', age:15},
    {id:3,username:'user',email:'email',password:'password',city:'oras',address:'adresa',postal_code:'cod', age:15}
]

const carts=[
    {id:1, id_user:1, total_price:100, status:'pandding'},
    {id:2, id_user:2, total_price:100, status:'pandding'},
    {id:3, id_user:3, total_price:100, status:'pandding'},
]

const comments=[
    {id:1, id_user:1, id_product:1, stars:1, comment:'com'},
    {id:2, id_user:2, id_product:2, stars:5, comment:'com'},
    {id:3, id_user:2, id_product:3, stars:3, comment:'com'},
]

const carts_products=[
    {id:1, id_cart:1,id_product:1,cantity:1},
    {id:2, id_cart:1,id_product:2,cantity:1},
    {id:3, id_cart:2,id_product:2,cantity:1},
    {id:4, id_cart:2,id_product:3,cantity:1},
    {id:5, id_cart:3,id_product:2,cantity:1},
    {id:6, id_cart:3,id_product:3,cantity:1},
]