import rect, { useState } from "react";
import classes from "./UserInput.module.css";

const intialUserInput = {
  "current-savings": 100000,
  "yearly-contribution": 150000,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(intialUserInput);
  const submitHandler = (event) => {
    event.preventDefault(); // not reload the page
    console.log("SUBMIT");

    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    console.log("RESET");
    setUserInput(intialUserInput);
  };
  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value }; //convert the string value to a number
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            //two way binding
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes["actions"]}>
        <button
          type="reset"
          onClick={resetHandler}
          className={classes["buttonAlt"]}
          aria-label="button"
        >
          Reset
        </button>
        <button type="submit" className={classes["submit"]} aria-label="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
