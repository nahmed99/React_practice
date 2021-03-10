const Navbar = () => {

   return (
      <nav className="navbar">
         <h1>My Blog</h1>
         <div>
            <a href="/">Home</a>
            <a href="/create" 
            // style={ { 
            //    // The CSS will be in key-value pairs, the key in camelCase and the value in quotes.
            //    color: "white", 
            //    backgroundColor: "#92c7f3",
            //    borderRadius: "7px"
            //  } }
             >New Blog</a>
         </div>
      </nav>
   );
}

export default Navbar;