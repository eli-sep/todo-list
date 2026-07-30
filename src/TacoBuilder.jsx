import { useState } from "react";

function TacoABuilder() {
  const [tacoOptions, setTacoOptions] = useState(['corn tortilla']);

  function addOption(option) {
    //spread operator expands tacoOptions into a new array
    setTacoOptions([...tacoOptions, option]);
  }

  function showSelections() {
    return tacoOptions.reduce((accumulator, currentValue, currentIndex, tacoOptions) => {
      if (currentIndex === tacoOptions.length - 1) {
        return `${accumulator}, and ${currentValue}`;
      }
      return `${accumulator}, ${currentValue}`;
    });
  }

  return (
    <>
      <div className="mains">
        <button type="button" onClick={() => addOption('chicken')}>
          Chicken
        </button>
        <button type="button" onClick={() => addOption('beef')}>
          Beef
        </button>
        <button type="button" onClick={() => addOption('vegetarian')}>
          Vegetarian
        </button>
      </div>
      <div className="cheeses">
        <button type="button" onClick={() => addOption('cheddar')}>
          Add Cheddar
        </button>
        <button type="button" onClick={() => addOption('queso fresco')}>
          Add Queso Fresco
        </button>
      </div>
      <div className="extras">
        <button type="button" onClick={() => addOption('sour cream')}>
          Add Sour Cream
        </button>
        <button type="button" onClick={() => addOption('salsa')}>
          Add Salsa
        </button>
      </div>
      <div>
        <p>Your taco includes: {showSelections()}</p>
      </div>
    </>
  );
}

export default TacoBuilder