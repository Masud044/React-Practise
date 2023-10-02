import { useState } from "react";

const TwoRadios = () => {
  const game = ["cricket", "game", "football", "volibol"];
  const days = ["weekend", "weekdays"];

  const [game1, setGame1] = useState("cricket");
  const [day, setday] = useState("weekend");
  return (
    <div>
      <div className="text-center mt-20">
        {game.map((item) => (
          <div key={item}>
            <input
              onChange={(e) => setGame1(e.target.value)}
              type="radio"
              name="option"
              value={item}
            />
            <label htmlFor="">{item}</label> <br />
          </div>
        ))}
        <h1 className="font-medium">This is holiday below</h1>
        {days.map((item) => (
          <div key={item}>
            <input
              onChange={(e) => setday(e.target.value)}
              type="radio"
              name="options"
              value={item}
            />
            <label htmlFor="">{item}</label> <br />
          </div>
        ))}

        <p>
          game:{game1} days:{day}
        </p>
      </div>
    </div>
  );
};

export default TwoRadios;
