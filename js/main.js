const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const mobileMenu = document.querySelector('.mobile-menu');
// Cuando demos click aquí (sig L.9)...
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
// Este aparecera o desaparecera con la función en -> (sig L.25)
const aside = document.querySelector('.myOrder');
const productDetailContainer = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
// cardContainer.addEventListener('click', openProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive'); 
  // aside es cerrado
  // si aside esta abierto
  if(!isAsideClosed) {
    // cierra aside
    aside.classList.add('inactive');
  }
  closeProductDetailAside();
  // Despues abre mobile.
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); // aside es cerrado

    // si aside esta abierto
    if(!isAsideClosed) {
        // cierra aside
        aside.classList.add('inactive');
    }
    closeProductDetailAside();
    // Despues abre mobile.
    mobileMenu.classList.toggle('inactive');
}
// Hace que aparezca con dar click en el carrito.
function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed) { // Si menu mobile esta abierto
        mobileMenu.classList.add('inactive');

    } else if(!isDesktopMenuClosed) { // Si menu desktop tambien lo esta...
        desktopMenu.classList.add('inactive');

    } else if(!isProductDetailClosed) { // si product detail tambien...
        productDetailContainer.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // brir Aside.
}
// Esta funcion mantiene de principio los menus inactivos.
window.onresize = function () {
    // Cuando la pantalla en menor o igual a 640.
    document.documentElement.scrollWidth <= 640 && desktopMenu.classList.add('inactive');
    // Cuando la pantalla en mayor o igual a 641.
    document.documentElement.scrollWidth >= 641 && mobileMenu.classList.add('inactive');
    // Siempre lo mantendra inactive a no ser que le des click.
    document.documentElement.scrollWidth && aside.classList.add('inactive');
  };
  onresize();


  // Array de productos
  const productList = [

    {
      name: 'Bike',
      price: 120,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },

    {
      name: 'Smath TV',
      price: 220,
      image: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",},

    {
      name: 'Urban T-shirt',
      price: 30,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",},

    {
      name: 'Runners shoes',
      price: 25,
      image: "https://images.pexels.com/photos/12714890/pexels-photo-12714890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",},

    {
      name: 'Smarthphone',
      price: 80,
      image: "https://i.pinimg.com/564x/f6/ee/ec/f6eeece1e2493e867a76ad705ea8939d.jpg",},

    {
      name: 'PC Gamer',
      price: 5,
      image: "https://i.pinimg.com/564x/4d/66/ce/4d66ce27cee973c3c3b416a5d7e1eae1.jpg",},

    {
      name: 'Headset',
      price: 50,
      image: "https://i.pinimg.com/236x/ca/d6/5c/cad65c0cf8c512ffcd5ec647d4359cd0.jpg",},

    { 
      name: 'Pants',
      price: 8,
      image: "https://i.pinimg.com/736x/e9/54/6e/e9546eebf085de7959b9a8e833a8e049.jpg",},

    {
      name: 'Fan',
      price: 20,
      image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",},

    {
      name: 'Fan',
      price: 20,
      image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",},

    {
      name: 'Fan',
      price: 20,
      image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",},

    {
      name: 'Fan',
      price: 20,
      image: "https://i.pinimg.com/236x/09/dc/30/09dc30c97eac8602185e29b82243fe79.jpg",},

  ];
  


function renderProducts(arr) {
  let count = 0;
  for(product of arr) {
    const div = document.createRange().createContextualFragment(
      /* HTML */
      `
      <div class="product-card">
        <img class="card-img" src=" ${product.image} " alt="">
        <div class="product-info">
          <div>
            <p> ${product.price} </p>
            <p> ${product.name} </p>
          </div>
          <figure>
            <img class="addToCart" id="${count}" src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      `
    );
   const cardsContainer = document.querySelector('.cards-container');
   cardsContainer.append(div);
   count++;
  }
}
renderProducts(productList);

function openProductDetailAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isDesktopMenuClosed) { // Si menu desktop esta abierto...
    desktopMenu.classList.add('inactive');
  } else if(!isAsideClosed) {
    // cierra aside
    aside.classList.add('inactive');
  }
  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
// cardsContainer.childNodes...

const myOrderList = [];

function addProductToCart () {
  cardsContainer.addEventListener('click',(e) => {
    if(e.target && e.target.classList.contains('addToCart')){
      // console.log(String(e.target.getAttribute('id')));
      let orderId = parseInt(e.target.getAttribute('id'));
      myOrderList.push(
        {
          name: String(productList[orderId].name),
          price: String(productList[orderId].price),
          image: String(productList[orderId].image)
        }
      );
      // console.log(myOrderList);
      renderMyCar(myOrderList);
    }
  });
}

function renderMyCar(arr) {
  // Borrar lo que ya esta renderizado y renderizar otra vez.
  const myOrderContent = document.querySelector('.my-order-content');
  myOrderContent.innerHTML = "";
  for(product of arr) {
    const div = document.createRange().createContextualFragment(
      /* HTML */
      `
      <div class="shopping-cart">
        <figure>
          <img src=" ${product.image} " alt="">
        </figure>
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>
      `
    );
    myOrderContent.append(div);
  }
  return;
}

addProductToCart();