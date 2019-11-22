import React from "react";

const OutputList = ({ inputData = null, showWinners }) => {
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

  const Author = ({ name }) => (name !== "-" ? `${name}` : null);

  const Category = ({ items, title }) => {
    const isWinner = item => item.winner && item.winner.length > 2;

    if (items.filter(item => showWinners ? isWinner(item) : !isWinner(item)).length === 0) {
      return null;
    }

    return (
      <>
        <h3>{title}</h3>
        <ul>
          {items
            .filter(item =>
              showWinners ? isWinner(item) : !isWinner(item)
            )
            .map(item => (
              <li>
                {item.title} od <Author name={item.author} />
                &nbsp;
                {showWinners ? (
                  <span>
                    wygrał(a) <Author name={item.winner} /> ({item.price})
                  </span>
                ) : (
                    <a href={item.url}>{item.url}</a>
                  )}
              </li>
            ))}
        </ul>
      </>
    );
  };

  console.log(Object.getOwnPropertyNames(groups));

  return (
    <div className="output-list">
      {showWinners && <h4>Zwycięzcy aukcji</h4>}{" "}
      {Object.getOwnPropertyNames(groups).map(category => (
        <Category items={groups[category]} key={category} title={category} />
      ))}
    </div>
  );
};

export default OutputList;
