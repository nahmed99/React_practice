import { useState } from "react";

const Home = () => {

   // The following variables are 'reactove', i.e., they are on a watchlist for any changes.
   // If changes are detected, then the app will react to those changes (re-render the template where they exist)
   const [name, setName] = useState("Yaar");

   const handleClick = () => {
      setName("Oi!");
   }

   return (
      <div className="home">
         <h2>Homepage</h2>
         <p> { name } </p>
         <button onClick={handleClick} >Click Me!</button>
      </div>
   );
}

export default Home;