import React, { useState } from "react";

const weapons = ["scissor", "paper", "rock"];

const styles = {
  machineWeaponBlock: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    visibility: "",
    textAlign: "center",
    borderRadius: "50%",
    marginLeft: "30%",
  },
};

function Playground() {
  const [weapon, setWeapon] = useState("");
  const [machineWeapon, setMachineWeapon] = useState("");

  const [userCount, setUserCount] = useState(0);
  const [machineCount, setMachineCount] = useState(0);

  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setLoader(true);
    setWeapon(e.target.value);
    setTimeout(() => {
      randomWeapon();
      generateResult();
      setLoader(false);
    }, 3000);
  };

  const randomWeapon = () => {
    const random = weapons[Math.floor(Math.random() * weapons.length)];
    setMachineWeapon(random);
  };

  console.log("weapons", weapon);

  const generateResult = () => {
    console.log("userweapon>>", weapon);
    console.log("machineweapon>>", machineWeapon);

    if (
      (weapon === "scissor" && machineWeapon === "paper") ||
      (weapon === "paper" && machineWeapon === "rock") ||
      (weapon === "rock" && machineWeapon === "scissor")
    ) {
      setUserCount((prevCount) => prevCount + 1);
    } else {
      setMachineCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <h3>Playground Area</h3>
      <div className="playground">
        <div className="user">
          <div>
            <label htmlFor="weapons">
              <span>USER GROUND 🦸</span>
            </label>
            <br />
            <br />
            <input
              type="radio"
              id="weapons"
              name="weapons"
              value="scissor"
              onChange={handleChange}
            />
            &nbsp; Scissor ✂️
            <br />
            <br />
            <input
              type="radio"
              id="weapons"
              name="weapons"
              value="rock"
              onChange={handleChange}
            />{" "}
            &nbsp; Rock 🗻
            <br />
            <br />
            <input
              type="radio"
              id="weapons"
              name="weapons"
              value="paper"
              onChange={handleChange}
            />{" "}
            &nbsp; Paper 🧻
            <br />
            <br />
          </div>
        </div>
        <div className="machine">
          <div>
            <span>MACHINE GROUND 🎰</span>
            <br />
            <br />
            <div style={{ marginTop: 20 }}>
              {weapon.length ? (
                loader ? (
                  <h3>Loading...</h3>
                ) : (
                  <h3>{machineWeapon}</h3>
                )
              ) : (
                <div style={styles.machineWeaponBlock}></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <h3>{loader ? "Loading..." : "Choose your weapon ?"}</h3>
      <br />
      <div>
        <span>User Count 🦸 : {userCount}</span>
      </div>
      <div>
        <span>Machine Count 🎰: {machineCount}</span>
      </div>
    </>
  );
}

export default Playground;
