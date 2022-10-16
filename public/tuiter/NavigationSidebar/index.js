


const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            
       
         <a class="list-group-item list-group-item-action" href="../HomeScreen/index.html">
                <i class="fas fa-house-user  list-group-item border-0 pe-0 ps-0 pt-0 pb-0 bg-transparent"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">Home</span>
         </a>
      

      

            <a class="list-group-item list-group-item-action  " href="../ExploreScreen/index.html">
                <i class="fas fa-hashtag  border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">Explore</span>
            </a>
        

       

            <a class="list-group-item list-group-item-action " href="#Notifications">
                <i class="fas fa-bell  border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">Notifications</span>
            </a>
   

     

            <a class="list-group-item list-group-item-action  " href="#Messages">
                <i class="fas fa-envelope border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">Messages</span>
            </a>
      

   

            <a class="list-group-item list-group-item-action  " href="#Bookmarks">
                <i class="fas fa-bookmark border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">Bookmarks</span>
            </a>
    

            <a class="list-group-item list-group-item-action  " href="#Lists">
                <i class="fas fa-list border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">Lists</span>
            </a>
       

      

            <a class="list-group-item list-group-item-action  " href="#Profile">
                <i class="fas fa-user border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">
                  Profile
                </span>
            </a>
        

     

            <a class="list-group-item list-group-item-action  " href="#More">
                <i class="fas  fa-ellipsis-h border-0 pe-0 ps-0"></i>
                <span class="hidden-xs hidden-sm hidden-md hidden-lg">More</span>

            </a>
   
            
      
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;