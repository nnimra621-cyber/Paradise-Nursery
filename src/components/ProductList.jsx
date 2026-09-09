import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    category: "Indoor Plants",
    name: "Snake Plant",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    category: "Indoor Plants",
    name: "Peace Lily",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    category: "Indoor Plants",
    name: "Monstera",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1614594576027-7c1b4b8a3c91?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    category: "Indoor Plants",
    name: "ZZ Plant",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1632207691144-60b2b0a0e3f2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    category: "Indoor Plants",
    name: "Spider Plant",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    category: "Indoor Plants",
    name: "Rubber Plant",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },

  // Succulents
  {
    id: 7,
    category: "Succulents",
    name: "Aloe Vera",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    category: "Succulents",
    name: "Echeveria",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    category: "Succulents",
    name: "Jade Plant",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    category: "Succulents",
    name: "Haworthia",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    category: "Succulents",
    name: "String of Pearls",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    category: "Succulents",
    name: "Zebra Haworthia",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80",
  },

  // Flowering Plants
  {
    id: 13,
    category: "Flowering Plants",
    name: "Orchid",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1566821054-43f9a5a6a0f4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    category: "Flowering Plants",
    name: "African Violet",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    category: "Flowering Plants",
    name: "Anthurium",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    category: "Flowering Plants",
    name: "Begonia",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    category: "Flowering Plants",
    name: "Geranium",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    category: "Flowering Plants",
    name: "Kalanchoe",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div className="product-page">

      <nav className="navbar product-navbar">
        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>

          <a href="/cart" className="cart-link">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      <div className="products-container" id="plants">

        <h1>Our Plants</h1>

        <p className="product-intro">
          Explore our beautiful collection of houseplants.
        </p>

        {categories.map((category) => (
          <section
            className="category-section"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">

              {plants
                .filter(
                  (plant) =>
                    plant.category === category
                )
                .map((plant) => {

                  const alreadyAdded =
                    cartItems.some(
                      (item) =>
                        item.id === plant.id
                    );

                  return (
                    <div
                      className="product-card"
                      key={plant.id}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p className="price">
                        ${plant.price}
                      </p>

                      <button
                        className="add-btn"
                        disabled={alreadyAdded}
                        onClick={() =>
                          dispatch(
                            addItem(plant)
                          )
                        }
                      >
                        {alreadyAdded
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}

            </div>
          </section>
        ))}

      </div>
    </div>
  );
}

export default ProductList;
