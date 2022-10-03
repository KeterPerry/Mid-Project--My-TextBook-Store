// import React from "react";

// export default function search() {
//   const [input, setInput] = useState("");
//   const[data, setData] = useState([])
//   const handleChange = (e) => {
//     setInput(e.target.value);
//     setTimeout(fetchData(), 3000)

//     }

//   };

//   useEffect(()=>{
//       // const fetchData = (e) => {
//         // const data={}
//         // setData(data)

//   }, [data])

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search"
//         onChange={handleChange}
//         value={input}
//       ></input>
//       <button  onClick={handleClick}>search</button>
//       <div className="data">
//         {data.map((e)=>{
//             <button onClick={handleElement}>{e}</button>
//         })}
//       </div>
//     </div>
//   );
// }
