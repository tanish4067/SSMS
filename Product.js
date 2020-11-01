class FoodItem {
  constructor(name, path, category, price) {
    this.name = name;
    this.location = path;
    this.category = category;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.location}" alt="${this.product.name}">
        <div>
            <h3>${this.product.name}</h3>
            <h4>${this.product.price}</h4>
            <h5>${this.product.category}</h5>
        </div>
        <button>Add to cart</button>
     </div>
      `;
    // const addToCartButton = prodEl.querySelector("button");
    // addToCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  food = [
    new FoodItem("Macroni", "Food/Italian/macroni.jpg", "Italian", 200),

    {
      name: "Pizza",
      location: "Food/Italian/Pizza.png",
      category: "Italian",
      price: 170,
    },
    {
      name: "Pav Bhaji",
      location: "Food/Indian/PavBhaji.png",
      category: "Indian",
      price: 230,
    },
    {
      name: "Indian Thali",
      location: "Food/Indian/Thali.jpg",
      category: "Indian",
      price: 300,
    },
    {
      name: "Burger",
      location: "Food/Fastfood/Food/Burger.png",
      category: "Fastfood",
      price: 90,
    },
    {
      name: "French Fries",
      location: "Food/Fastfood/Food/Fries.png",
      category: "Fastfood",
      price: 180,
    },
    {
      name: "Chowmein",
      location: "Food/Chinese/chowmein.jpg",
      category: "Chinese",
      price: 130,
    },
    {
      name: "Momos",
      location: "Food/Chinese/Momos.png",
      category: "Chinese",
      price: 110,
    },
  ];
  constructor() {}
  render() {
    const renderHook1 = document.getElementById("productList");
    const renderHook2 = document.getElementById("cartList");
    const prodList = document.createElement("ul");
    for (const item of this.food) {
      const productItem = new ProductItem(item);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook1.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
