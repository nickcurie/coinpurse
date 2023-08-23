import React, { useEffect, useState } from "react";
import Button from "./Button";
import Fader from "./Fader";

//TODO: temp health

const HealthTracker = ({ loadCurrentHealth, loadMaxHealth }) => {

  const colors = {
    healthy: { color: 'green' },
    caution: { color: 'orange' },
    danger: { color: 'red' }
  };

  const [hasHealth, setHasHealth] = useState(loadMaxHealth ? true : null); // There might be a cleaner way for this
  const [maxHealth, setMaxHealth] = useState(loadMaxHealth);
  const [currentHealth, setCurrentHealth] = useState(loadCurrentHealth);
  const [healthDelta, setHealthDelta] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
  });
  const [fadeProp2, setFadeProp2] = useState({
    fade: "fade-out",
  });
  const [healthStatus, setHealthStatus] = useState(colors.healthy);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      }
      if (fadeProp2.fade === "fade-in") {
        setFadeProp2({
          fade: "fade-out",
        });
      }
    }, 2000);
    const timeout2 = setInterval(() => {
      setHealthDelta(0);
    }, 2100);
    return () => {
      clearInterval(timeout);
      clearInterval(timeout2);
    };
  }, [fadeProp, fadeProp2]);

  useEffect(() => {
    let healthRatio = currentHealth / maxHealth;
    if (healthRatio >= 0.75) {
      setHealthStatus(colors.healthy);
    } else if (healthRatio < 0.75 && healthRatio >= 0.25) {
      setHealthStatus(colors.caution);
    } else {
      setHealthStatus(colors.danger);
    }
  }, [currentHealth, maxHealth]);

  const onClickSetMaxHealth = () => {
    if (!maxHealth) {
      alert("Enter max health");
      return;
    }

    setMaxHealth(maxHealth);
    setCurrentHealth(maxHealth);
    setHasHealth(true);
    return false;
  };

  const constrainHealth = (type) => {
    if (type === "add") {
      if (currentHealth + 1 <= maxHealth) {
        setCurrentHealth(currentHealth + 1);
        setHealthDelta(healthDelta + 1);
        setFadeProp({ fade: "fade-in" });
      }
    } else {
      if (currentHealth - 1 >= 0) {
        setCurrentHealth(currentHealth - 1);
        setHealthDelta(healthDelta - 1);
        setFadeProp2({ fade: "fade-in" });
      }
    }
  };

  return (
    <>
      {!hasHealth ? (
        <div className="add-form">
          <div className="form-control">
            <input
              type="number"
              onBlur={(e) => setMaxHealth(e.target.value)}
              placeholder="Max Health"
            />
          </div>
          <div align="center">
            <Button text="Submit" onClick={() => onClickSetMaxHealth()} />
          </div>
        </div>
      ) : (
        <div className='health-content'>
          <h1 id='health'>
            <span id='current-health' style={healthStatus}>{currentHealth}</span> /{" "}
            <span id='max-health' className='clickable' onClick={() => setHasHealth(false)}>
              {maxHealth}
            </span>
          </h1>
          <Fader
            text={healthDelta.toString()}
            textColor="red"
            fadeProp={fadeProp2}
            propId="health-change-neg"
          ></Fader>
          <Fader
            text={"+" + healthDelta}
            textColor="green"
            fadeProp={fadeProp}
            propId="health-change-pos"
          ></Fader>
          <Button
            text={"+"}
            onClick={() => constrainHealth("add")}
            propId="health-plus"
          ></Button>
          <Button
            text={"-"}
            onClick={() => constrainHealth("sub")}
            propId="health-minus"
          ></Button>
          {/* <Button text={'Change Max HP'} onClick={() => setHasHealth(false)} propId={'change-max-health'}></Button> */}
        </div>
      )}
    </>
  );
};

export default HealthTracker;
