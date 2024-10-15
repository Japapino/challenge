
import { useEffect, useState, useMemo } from "react";

const Typewriter = ({text, speed = 500}) => {
  const [index, setIndex] = useState(0);
  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  useEffect(() => {
    if (index >= text.length)
      return;

    const timeoutId = setTimeout(() => {
      setIndex(i => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  return (
    <>
    <ul className="flag typing"> 
      {displayText.map( (c,i) => {
        return(
        <li className="char" id={`char ${i}`} key={i}>
          {c}
        </li>
        );
      })}
    </ul>
    </>
  );
};

export default Typewriter;