

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Thiha's Pizza</h1>
      </header>

      <main className="menu">
        <h2>Our Menu</h2>
        <div className="pizzas">
        <Pizza
          image="/spinaci.jpg"
          name="Spinach Pizza"
          ingredients="Tomato, mozzarella, spinach"
        />
        <Pizza
          image="/margherita.jpg"
          name="Margherita Pizza"
          ingredients="Tomato, mozzarella, basil"
        />
        <Pizza
          image="/prosciutto.jpg"
          name="Prosciutto Pizza"
          ingredients="Tomato, mozzarella, prosciutto"
        />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Pizza(props) {
  const [ordered, setOrdered] = useState(false);

  return (
    <div className="pizza">
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>

        <Button
          className="btn"
          onClick={() => setOrdered((order) => !order)}
        >
          {ordered ? "Ordered ✓" : "Order"}
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer
      className="footer"
      style={{ color: "white", backgroundColor: "black", padding: "1rem 2rem", borderRadius: "1rem" }}
    >
      {isOpen ? "We're currently open" : "Sorry, we're closed"}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
