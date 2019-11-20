import React from "react";

const OutputList = ({ inputData = null }) => {
  console.log(data);
  const data = Array.from(inputData);

  const CATEGORIES = [
    "Usługi",
    "Rękodzieło",
    "pyszności",
    "Wstępy - koncerty, wstępy, wejścia",
    "Dla dziecka",
    "Dla niej",
    "Dla niego",
    "Dla dwojga",
    "Dla domu",
    "Rozrywka",
    "Zdrowie i sport",
    "Dla zwierzaków",
    "STAR WARS",
    "wiara religia",
    "drobne upominki"
  ];

  const groups = {};

  CATEGORIES.forEach(category => {
    groups[category] = [];

    data.forEach(item => {
      if (item.category === category) {
        item.isSeen = true;
        groups[category].push(item);
      }
    });
  });

  groups["__NO_CATEGORY"] = data.filter(item => !item.isSeen);

  const Category = ({ items, title }) => {
    if (items.length === 0) {
      return null;
    }

    return (
      <>
        <h3>{title}</h3>
        <ul>
          {items.map(item => (
            <li>{item.title}</li>
          ))}
        </ul>
      </>
    );
  };

  console.log(Object.getOwnPropertyNames(groups));

  return (
    <div className="OutputList">
      {Object.getOwnPropertyNames(groups).map(category => (
        <Category items={groups[category]} key={category} title={category} />
      ))}
    </div>
  );
};

export default OutputList;
