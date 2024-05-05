import { useEffect, useState } from "react";
import styles from "./Thought.module.css";

function Thought({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.thought}>
          {" "}
          <h1>
            "Embrace the journey.
            <br /> Every step 👟👟 you take
            <br /> is a building block <br />
            towards your dreams ✌"{" "}
          </h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}

export default Thought;
