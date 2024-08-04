import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import B from "../Assests/B.jpg";
import "../Product/Benefits.css";

const Card = ({ title, description }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 text-center">
      <img
        src={B}
        className="card-img-top mx-auto my-2"
        alt={title}
        style={{ width: "50%", borderRadius: "50%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const App = () => {
  const cardsData = [
    {
      title: "HAIR GROWTH OIL",
      description:
        "Hair growth oil is nutrients rich oil that enriched with 28 herbs which aids in reducing hair loss and induce hair regrowth.",
    },
    {
      title: "PREVENT FROM HAIR DAMAGE",
      description:
        "Hair regrowth oil helps to prevents the hair damage from heat and UV rays.",
    },
    {
      title: "DHT BLOCKERS",
      description:
        "It helps to block DHT Production in the scalp. DHT production is main reason for baldness.",
    },
    {
      title: "PROTEIN AND BIOTIN",
      description:
        "Hair growth oil contain cow milk and coconut milk which is rich in protein, biotin and vitamin A helps to strengthen hair and keep hair soft and shiny.",
    },
    {
      title: "ANTIFUNGAL PROPERTIES",
      description:
        "It is rich in vitamin c, antioxidants and has anti-fungal properties as well. It helps strengthens hair from the root, prevents hair loss and premature hair grey also eliminates dandruff which often causes hairfall.",
    },
    {
      title: "TARGETS BALD PATCHES",
      description:
        "28 herbs oil helps to target bald patches and initiate new hair regrowth.",
    },
  ];

  return (
    <div className="container">
      <div className="Concer_tabs">
        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="nav-benefits-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-benefits"
              type="button"
              role="tab"
              aria-controls="nav-benefits"
              aria-selected="true"
            >
              Benefits
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-usage-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-usage"
              type="button"
              role="tab"
              aria-controls="nav-usage"
              aria-selected="false"
            >
              How to Use
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-ingredients-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ingredients"
              type="button"
              role="tab"
              aria-controls="nav-ingredients"
              aria-selected="false"
            >
              Key Ingredients
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-suitable-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-suitable"
              type="button"
              role="tab"
              aria-controls="nav-suitable"
              aria-selected="false"
            >
              Suitable For
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-benefits"
          role="tabpanel"
          aria-labelledby="nav-benefits-tab"
          tabIndex="0"
        >
         
          <div className="row mt-4 mx-5">
          
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
         
          </div>
        
        </div>
        {/* Add content for other tabs here */}
        <div
          className="tab-pane fade"
          id="nav-usage"
          role="tabpanel"
          aria-labelledby="nav-usage-tab"
          tabIndex="0"
        >
          {/* Content for How to Use */}
        </div>
        <div
          className="tab-pane fade"
          id="nav-ingredients"
          role="tabpanel"
          aria-labelledby="nav-ingredients-tab"
          tabIndex="0"
        >
          {/* Content for Key Ingredients */}
        </div>
        <div
          className="tab-pane fade"
          id="nav-suitable"
          role="tabpanel"
          aria-labelledby="nav-suitable-tab"
          tabIndex="0"
        >
          {/* Content for Suitable For */}
        </div>
      </div>
    </div>
  );
};

export default App;
