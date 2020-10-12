// ==========================
// ELEMENT SELECTORS
// ==========================
const menuList = document.querySelector('.menu-list');
const filterAllBtn = document.querySelector('#filter-all');
const filterBreakfastBtn = document.querySelector('#filter-breakfast');
const filterLunchBtn = document.querySelector('#filter-lunch');
const filterDinnerBtn = document.querySelector('#filter-dinner');
const filterDessertBtn = document.querySelector('#filter-dessert');

// ==========================
// EVENT LISTENERS FOR FILTER BUTTONS
// ==========================
filterAllBtn.addEventListener('click', renderAllMenu);
filterBreakfastBtn.addEventListener('click', renderBreakfastMenu);
filterLunchBtn.addEventListener('click', renderLunchMenu);
filterDinnerBtn.addEventListener('click', renderDinnerMenu);
filterDessertBtn.addEventListener('click', renderDessertMenu);

// ==========================
// CREATE MENU ITEMS ARRAY
// ==========================
let allMenu = [];
let breakfastMenu = [];
let lunchMenu = [];
let dinnerMenu = [];
let dessertMenu = [];

// ==========================
// CREATE MENU ITEMS CONSTRUCTOR
// ==========================
class MenuItem {
  constructor (id, name, type, price, picture, description) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.picture = picture;
    this.description = description;
  }
};

// ==========================
// CREATE MENU ITEMS
// ==========================
const item0 = new MenuItem(0,"Avocado Toast","breakfast","$7.99","./images/avocado toast.jpg",
"A super delician piece of whole grain toast with a perfectly ripe avocado and egg made just the way you want it!" );
allMenu.push(item0);
const item1 = new MenuItem(1,"Chunky-Chunk Brownies","dessert","$3.00","./images/brownies.jpg",
"If you like Chunks of chocolatey goodness, than we think you might like one of these - maybe even two.");
allMenu.push(item1);
const item2 = new MenuItem(2,"BLT","lunch","$8.00","./images/blt.jpg",
"Bacon, Lettuce, Tomatos, oh my! tasty break and our homemade spicey mayo ads additional flavor!");
allMenu.push(item2);
const item3 = new MenuItem(3,"Sirloin Steak Tip","dinner","$12.00","./images/steak.jpg",
"Just a mouthful, above the flank! This beautiful cut will make your mouth water.");
allMenu.push(item3);
const item4 = new MenuItem(4,"Cheese Burger","dinner","$10.00","./images/cheese burger.jpg",
"It is nice, it is tasty, it is juicy! Comes with fries!");
allMenu.push(item4);
const item5 = new MenuItem(5,"Chocolate Shake","dessert","$4.99","./images/chocolate shake.jpg",
"this is our house favorite! so much chocolate that you'll be sick afterwords");
allMenu.push(item5);
const item6 = new MenuItem(6,"Fruit Smoothie","dessert","$3.99","./images/fruit smoothie.jpg",
"Get your daily dose of fruit! so much fruit packed into this baby that you wont need another blueberry for the rest of the day");
allMenu.push(item6);
const item7 = new MenuItem(7,"Mac & Cheese","lunch","$5.99","./images/mac and cheese.jpg",
"Mac & cheese... with a grilled cheese sandwish?! Yes please!");
allMenu.push(item7);
const item8 = new MenuItem(8,"Oatmeal Bowl","breakfast","$3.99","./images/oatmeal.jpg",
"Just a nice little breakfast snack. Light on the stomach. Your choice of oatmeal flavors");
allMenu.push(item8);
const item9 = new MenuItem(9,"Pile o' Pancakes","breakfast","$6.99","./images/pancakes.jpg",
"Just a good ol' fashion stack of pancakes, covered in powdered sugar, butter, and syrup.");
allMenu.push(item9);
const item10 = new MenuItem(10,"Pasta Alfredo","dinner","$9.99","./images/pasta alfredo.jpg",
"classic pasta alfredo with chicken, peppers, and as much parmesean cheese as you want!");
allMenu.push(item10);
const item11 = new MenuItem(11,"Tomato Soup","lunch","$4.99","./images/tomato soup.jpg",
"Looking for a small and healthy lunch snack? This is for you!");
allMenu.push(item11);
const item12 = new MenuItem(12,"Strawberry Shake","dessert","$4.99","./images/strawberry shake.jpg",
"A very tall and pink shake... filled with delicious, sugary strawberries");
allMenu.push(item12);
const item13 = new MenuItem(13,"Classic Meat Sub","lunch","$10.99","./images/sub.jpg",
"Just a simble sub, made exactly how you like it, with what you like.");
allMenu.push(item13);
const item14 = new MenuItem(14,"Waffle Stack","breakfast","$9.99","./images/waffles.jpg",
"A stack of waffles covered in chocolate and cherries! Yummy!");
allMenu.push(item14);

// ==========================
// FILL THE FILTERED MENU LISTS
// ==========================
for (var i = 0; i < allMenu.length; i++) {
  switch(allMenu[i].type) {
    case 'breakfast':
      breakfastMenu.push(allMenu[i]);
      break;
    case 'lunch':
      lunchMenu.push(allMenu[i]);
      break;
    case 'dinner':
      dinnerMenu.push(allMenu[i]);
      break;
    case 'dessert':
      dessertMenu.push(allMenu[i]);
      break;
  }
}

// ==========================
// RENDER MENU ITEMS
// ==========================
function renderList(filteredList) {
  for (var i = 0; i < filteredList.length; i++) {
    let menuItemMarkup = `
    <div class="menu-item">
        <div class="item-picture">
          <img src="${filteredList[i].picture}" alt="">
        </div>
        <div class="item-info">
          <div class="item-heading">
            <div class="item-name">${filteredList[i].name}</div>
            <div class="item-price">${filteredList[i].price}</div>
          </div>
          <div class="info-divider"></div>
          <div class="item-description">
            <p>${filteredList[i].description}</p>
          </div>
        </div>
      </div>
    `;
    menuList.insertAdjacentHTML('beforeend', menuItemMarkup);
  };
};


function clearMenu() {
  menuList.innerHTML = "";
}

function renderAllMenu() {
  clearMenu();
  renderList(allMenu);
}

function renderBreakfastMenu() {
  clearMenu();
  renderList(breakfastMenu);
}

function renderLunchMenu() {
  clearMenu();
  renderList(lunchMenu);
}

function renderDinnerMenu() {
  clearMenu();
  renderList(dinnerMenu);
}

function renderDessertMenu() {
  clearMenu();
  renderList(dessertMenu);
}

// IN WINDOW LOAD
document.addEventListener('DOMContentLoaded', renderAllMenu);