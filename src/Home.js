import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

   // The following variables are 'reactove', i.e., they are on a watchlist for any changes.
   // If changes are detected, then the app will react to those changes (re-render the template where they exist)
   const [blogs, setBlogs] = useState([
      { title: "The State", body: "Control the population", author: "Me Oh My", id: 1},
      { title: "The Republic", body: "Exploit the population", author: "What You Too", id: 2},
      { title: "The Monarchy", body: "Rule the population", author: "Do Not Ask", id: 3}
   ]);

   

   return (
      <div className="home">
         <BlogList blogs={ blogs } title="All Blogs!" />
      </div>
   );
}

export default Home;