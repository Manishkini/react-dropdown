import React, { useState } from 'react';

function App() {
  const [buttonValue, setButtonValue] = useState('Select');
  const [showDropDown, setShowDropDown] = useState(false);

  const handleMouseOver = () => {
    setShowDropDown(true);
  };

  const handleMouseOut = () => {
    setShowDropDown(false);
  };

  const handleClick = (value) => {
    setButtonValue(value);
    setShowDropDown(false);
  };
  return (
    <div className="w-full h-screen bg-cyan-200">
      <div className="w-1/4 m-auto pt-32">
        <div className="flex flex-col border border-black">
          <span className="">Should you use dropdown?</span>
          <button
            className="bg-gray-300"
            value={buttonValue}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {buttonValue}
          </button>
          {showDropDown ? (
            <div
              className="flex flex-col items-center bg-gray-100"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <span
                className="cursor-pointer w-full text-center"
                onClick={() => handleClick('Yes')}
              >
                Yes
              </span>
              <span
                className="cursor-pointer w-full text-center"
                onClick={() => handleClick('Probably Not')}
              >
                Probably Not
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
