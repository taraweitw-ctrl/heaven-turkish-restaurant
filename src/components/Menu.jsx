import React from "react";
import "./Menu.css";

const menuData = [
  {
    id: "soups-salads",
    category: "Soups & Salads",
    items: [
      {
        name: "Lentil soup",
        price: "$9.99",
        desc: "Red lentils, onions, carrots.",
      },
      {
        name: "Green Salad",
        price: "$10.99",
        desc: "Lettuce, feta cheese tomato, cucumber, black olives, olive oil and dressing.",
      },
      {
        name: "Shepard Salad",
        price: "$11.99",
        desc: "Tomato, Cucumber, Parsley, Onion, Lemon, Olive Oil and dressing",
      },
      { name: "Chicken Salad", price: "$17.99", desc: "" },
    ],
  },
  {
    id: "appetizers",
    category: "Appetizers",
    items: [
      {
        name: "Humus",
        price: "$9.99",
        desc: "Mashed chickpeas & tahini seasoned with garlic",
      },
      {
        name: "Babaganush",
        price: "$9.99",
        desc: "Char-grilled smoked eggplant puree flavored with garlic, olive oil, mayonnaise, yogurt & lemon.",
      },
      {
        name: "Cacik",
        price: "$9.99",
        desc: "Finely chopped cucumbers blend with garlic yogurt & mint.",
      },
      {
        name: "Acili Ezme",
        price: "$9.99",
        desc: "Spicy mashed tomatoes & peppers mixed with tomato paste, paprika",
      },
      {
        name: "Sote Eggplant",
        price: "$9.99",
        desc: "Fried eggplant in tomato sauce green peppers, onion and garlic.",
      },
      { name: "Mix appetizer", price: "$17.99", desc: "" },
      {
        name: "Falafel",
        price: "$9.99",
        desc: "Chickpeas, Tahini, Garlic, Parsley.",
      },
      {
        name: "Cigar Roll",
        price: "$10.99",
        desc: "Spring roll with cheese & Parsley",
      },
      {
        name: "Fried Calamari",
        price: "$17.99",
        desc: "Calamari, Garlic Sauce, Hot Sauce & Salad.",
      },
    ],
  },
  {
    id: "pide",
    category: "Pide",
    items: [
      {
        name: "Lahmacun",
        price: "$17.99",
        desc: "Ground beef blended with onions, garlic, peppers, tomatoes, parsley, and herbs on a thin crust dough",
      },
      {
        name: "Sucuklu Pide",
        price: "$18.99",
        desc: "A thin crust topped with Turkish Sucuklu and mozzarella cheese.",
      },
      {
        name: "Ground Beef Pide",
        price: "$17.99",
        desc: "Topped with ground beef, tomatoes, onion, parsley, garlic, black pepper, paprika & mozzarella Cheese.",
      },
      {
        name: "Kusbasi Pide",
        price: "$19.99",
        desc: "Topped with diced beef, green peppers, Red Pepper, garlic, tomatoes & mozzarella cheese",
      },
      {
        name: "Spinach Pide",
        price: "$18.99",
        desc: "Topped with Spinach, green peppers, Red Pepper, tomatoes, garlic & mozzarella cheese.",
      },
      {
        name: "Cheese Pide",
        price: "$17.99",
        desc: "Topped with mozzarella cheese.",
      },
      {
        name: "Mix Pide",
        price: "$21.99",
        desc: "Beef Shawarma, Chicken Shawarma, Sucuk, ground beef and mozzarella cheese",
      },
      {
        name: "Beef Döner Pide",
        price: "$18.99",
        desc: "Topped with beef shawarma and mozzarella cheese.",
      },
      {
        name: "Chicken Döner Pide",
        price: "$17.99",
        desc: "Topped with chicken shawarma and mozzarella cheese.",
      },
    ],
  },
  {
    id: "mains",
    category: "Main Courses",
    items: [
      {
        name: "Mix Doner",
        price: "$20.99",
        desc: "Beef and Chicken Shawarma, rice, salad, served with BBQ tomatoes and peppers.",
      },
      {
        name: "Beef Döner",
        price: "$20.99",
        desc: "Beef Shawarma, rice, salad, served with BBQ tomatoes and peppers.",
      },
      {
        name: "Chicken Döner",
        price: "$19.99",
        desc: "Chicken Shawarma, rice, salad, served with BBQ tomatoes and peppers.",
      },
      {
        name: "Adana Kebab",
        price: "$20.99",
        desc: "2 Sk Adana Kebab (Beef), rice, salad, BBQ tomatoes, peppers.",
      },
      {
        name: "Beef Shish",
        price: "$29.99",
        desc: "2 Skewers Beef Shish, rice, salad, BBQ tomatoes, peppers.",
      },
      {
        name: "Köfte",
        price: "$20.99",
        desc: "4 Pieces Ground Beef seasoned with garlic",
      },
      {
        name: "Chicken Shish",
        price: "$20.99",
        desc: "2 Skewers of chicken Shish Kebab, rice, salad, BBQ tomatoes and peppers.",
      },
      {
        name: "Chicken Wings",
        price: "$19.99",
        desc: "2 Skewers of Wings BBQ, rice, salad, BBQ tomatoes and peppers.",
      },
      {
        name: "Falafel Dinner",
        price: "$18.99",
        desc: "Chickpeas, Tahini, Garlic, Parsley, Salt & Seasonings, served with rice and salad.",
      },
      {
        name: "Lamb Chops",
        price: "$32.99",
        desc: "4 Piece Grilled lamb chops, rice, salad, served with BBQ tomatoes and peppers.",
      },
      {
        name: "Iskender",
        price: "$27.99",
        desc: "Doner kebab served over pan sautéed bread topped with fresh tomato sauce, Butter, Yogurt, BBQ tomatoes and peppers.",
      },
      {
        name: "Beyti",
        price: "$24.99",
        desc: "2 skewers of Adana Kebab, wrapped in lavash, garlic yogurt, topped with tomato sauce and butter, spicy Ezme, Cacik served with rice.",
      },
      {
        name: "Chefs Special",
        price: "$20.99",
        desc: "1 sk of Chicken shish and 1 sk of Adana served with rice and salad.",
      },
      {
        name: "Sac Tava",
        price: "$27.99",
        desc: "Tender meat, vegetables, spices, served hot and sizzling.",
      },
      {
        name: "Chicken Adana",
        price: "$19.99",
        desc: "2 Sk ground Chicken Kebab, salad, BBQ tomatoes, peppers, served with rice and salad.",
      },
      {
        name: "Heaven Special",
        price: "$28.99",
        desc: "1 sk Adana, 1 Lamb Chops, 1 Sk Chicken Wings & Mix Döner, 1 sk of Chicken Adana Served with rice and salad",
      },
      {
        name: "Kuru Fasulye Combo",
        price: "$18.99",
        desc: "Cacik, Tursu, Rice and Kuru Fasulye",
      },
    ],
  },
  {
    id: "combos-wraps",
    category: "Combos & Wraps",
    items: [
      {
        name: "Combo for 2",
        price: "$68.99",
        desc: "1 sk Adana, 1 sk Chicken Shish, Mix Doner, 1 sk Beef Shish, 1 S Chicken Wings 1 sk Chicken Adana served with rice and salad",
      },
      {
        name: "Combo for 4",
        price: "$135.99",
        desc: "2 sk Adana, 2 sk Chicken Shish, Mix Doner, 2 sk Beef Shish, 2 Sk Chicken Wings 2 sk Chicken Adana, served with rice and salad",
      },
      { name: "Beef Doner Wrap", price: "$12.99", desc: "" },
      { name: "Chicken Doner Wrap", price: "$12.99", desc: "" },
      { name: "Mix Doner Wrap", price: "$12.99", desc: "" },
      { name: "Adana Wrap", price: "$12.99", desc: "" },
      { name: "Chicken Shish Wrap", price: "$12.99", desc: "" },
      { name: "Beef Shish Wrap", price: "$12.99", desc: "" },
      { name: "Falafel Wrap", price: "$11.99", desc: "" },
    ],
  },
  {
    id: "seafood",
    category: "Seafood",
    items: [
      {
        name: "Sea Bass",
        price: "$29.99",
        desc: "Whole grilled Sea Bass, served with salad and rice.",
      },
      {
        name: "Dorado",
        price: "$29.99",
        desc: "Whole grilled Mediterranean Dorado, served with salad and rice.",
      },
      {
        name: "Salmon",
        price: "$28.99",
        desc: "Steak cut salmon grilled, served with salad and rice.",
      },
    ],
  },
  {
    id: "desserts-drinks",
    category: "Desserts & Drinks",
    items: [
      { name: "Baklava (4pcs)", price: "$9.99", desc: "" },
      { name: "Künefe", price: "$10.99", desc: "" },
      { name: "Cold Baklava", price: "$10.99", desc: "" },
      { name: "Rice Puding (Sütlaç)", price: "$8.99", desc: "" },
      { name: "Milk Custard (Kazandibi)", price: "$8.99", desc: "" },
      { name: "Trileche", price: "$9.99", desc: "" },
      { name: "Turkish Tea", price: "$2.00", desc: "" },
      { name: "Turkish Coffee", price: "$4.00", desc: "" },
      { name: "Bottle of water", price: "$1.00", desc: "" },
      { name: "Turkish Juice", price: "$3.00", desc: "" },
      { name: "Ayran", price: "$3.00", desc: "" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      {/* LEFT SIDEBAR NAVIGATION */}
      <nav className="menu-sidebar">
        <h2 className="sidebar-title">Menu</h2>
        <ul className="sidebar-links">
          {menuData.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.category}</a>
            </li>
          ))}
        </ul>

        {/* ORDER NOW BUTTON */}
        <div className="order-now-wrapper">
          <a
            href="https://gosnappy.io/owa/r/heaven-turkish-cuisine/4402/menu_955/?skipBeforeEnter=true"
            target="_blank"
            rel="noopener noreferrer"
            className="order-now-btn"
          >
            ORDER NOW
          </a>
        </div>
      </nav>

      {/* RIGHT CONTENT AREA */}
      <div className="menu-content">
        {menuData.map((section) => (
          <div key={section.id} id={section.id} className="menu-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="menu-items-grid">
              {section.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="menu-item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-dots"></div>
                    <span className="item-price">{item.price}</span>
                  </div>
                  {item.desc && <p className="item-desc">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
