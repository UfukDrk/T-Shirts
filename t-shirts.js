const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1,
  },
  {
    title: "Green T-Shirt",
    image: "green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Grey T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1,
  },
  {
    title: "Light Green T-Shirt",
    image: "light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Purple T-Shirt",
    image: "purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Red T-Shirt",
    image: "red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1,
  },
  {
    title: "Teal T-Shirt",
    image: "teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1,
  },
];
function App() {
  const [shirts, setShirts] = React.useState(tshirts);
  const quantities = [1, 2, 3, 4, 5];
  function quantityHandler(e, index) {
    const newShirts = shirts.map((tshirt, i) => {
      if (i === index) {
        return { ...tshirt, quantity: e.target.value };
      }

      return tshirt;
    });

    setShirts(newShirts);
  }
  function buyHandler(index) {
    const newShirts = shirts.map((tshirt, i) => {
      if (i === index) {
        return {
          ...tshirt,
          stock: tshirt.stock - tshirt.quantity,
          quantity: 1,
        };
      }

      return tshirt;
    });

    setShirts(newShirts);
  }
  return (
    <div>
      <h1>T-Shirts</h1>

      {shirts.map((tshirt, index) => {
        return (
          <div key={tshirt.title}>
            <h2>{tshirt.title}</h2>

            <img src={`images/${tshirt.image}`} alt={tshirt.title} />
            <p>${tshirt.price}</p>
            {tshirt.stock === 0 ? (
              <p>Out of Stock</p>
            ) : (
              <p>Stock: {tshirt.stock}</p>
            )}
            {tshirt.stock > 0 ? (
              <div>
                <select
                  value={tshirt.quantity}
                  onChange={(e) => quantityHandler(e, index)}
                >
                  {quantities
                    .filter((quantity) => quantity <= tshirt.stock)
                    .map((quantity) => {
                      return (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      );
                    })}
                </select>

                <button onClick={() => buyHandler(index)}>Buy</button>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
