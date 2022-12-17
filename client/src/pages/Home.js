import React from "react";
import News from "../pages/News";
import "./Home.css";

// function Home() {
//   return (
//     <div className="home-container">
//       <div className="home-glass">
//         <h1
//           style={{
//             color: "white",
//             fontFamily: "Shablagoo ",
//             textShadow: "2px 2px steelblue",
//           }}
//         >
//           {" "}
//           WELCOME TO SNEAKERWORLD
//         </h1>
//         <News />
//       </div>
//     </div>
//   );
// }

// export default Home;

const Home = (props) => {
  return (
    <div className="home">
      <h1 className="title">Welcome {props.user.username}</h1>
      <News />
    </div>
  );
};

export default Home;
