import { useState } from "react";

const SelectCheckbox = () => {
  const select = [
    { id: 1, label: "Dogs", checked: false },
    { id: 2, label: "cats", checked: false },
    { id: 3, label: "cows", checked: false },
    { id: 4, label: "Dears", checked: false },
  ];

  const [checked, setChecked] = useState(select);

  const handleselect = (id) => {
    if (id === "all") {
      const modifiedCheckboxes = checked.map((item) => {
        return { ...item, checked: true };
      });
      console.log(modifiedCheckboxes);
      setChecked(modifiedCheckboxes);
      return;
    }

    const modifiedCheckboxes = checked.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setChecked(modifiedCheckboxes);
  };
  return (
    <div className="text-center mt-20">
      {checked.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleselect(item.id)}
            checked={item.checked}
          />

          <label>{item.label}</label>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleselect("all")}
        className="border-2 bg-gray-600 text-white p-2 rounded-lg"
      >
        selectAll
      </button>
    </div>
  );
};

export default SelectCheckbox;
