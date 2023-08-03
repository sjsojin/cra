import { useEffect, useState } from "react";

function Use() {
  const [cnt, setCnt] = useState(0);
  const Hi = () => {
    console.log("Hi");
  };
  function Hi2(bye) {
    console.log("Hi2");
  }
  useEffect(() => {
    console.log("카운팅");
  }, [cnt]); 
  return (
    <div>
      <p>{cnt}</p>
      <button onClick={() => setCnt(cnt + 1)}>+1</button>
      <button onClick={() => setCnt(cnt - 1)}>-1</button>
      <button onClick={() => setCnt(0)}>0</button>
      <hr />
      <button onClick={Hi}>화살표 함수</button>
      <button onClick={() => Hi2("바이")}>일반function 함수</button>
    </div>
  );
}
export default Use;
