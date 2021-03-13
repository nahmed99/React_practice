import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

   // The following variables are 'reactove', i.e., they are on a watchlist for any changes.
   // If changes are detected, then the app will react to those changes (re-render the template where they exist)
   const [blogs, setBlogs] = useState([
      { title: "The State", body: "Control the population", author: "Me Oh My", id: 1},
      { title: "The Republic", body: "Exploit the population", author: "What You Too", id: 2},
      { title: "The Monarchy", body: "Rule the population", author: "Do Not Ask", id: 3},
      { title: "None Of The Above", body: "I Am", author: "Free!", id: 4}
   ]);

   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);

      setBlogs(newBlogs);
   }

   
   // useEffect (without parameters in an array at the end) will run everytime the page is rendered.
   useEffect(() => {
      console.log('useEffect ran');
      console.log(blogs);
   });


   return (
      <div className="home">
         <BlogList blogs={ blogs } 
                   title="All Blogs!" 
                   handleDelete={handleDelete} 
                   />
         {/* <BlogList blogs={ blogs.filter((blog) => blog.author==="Free!") } title="Free's Blogs!" /> */}
      </div>
   );
}

export default Home;