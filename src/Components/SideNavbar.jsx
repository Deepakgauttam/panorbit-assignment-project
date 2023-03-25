// Import necessary modules from React and react-router-dom
import { Link, useLocation } from "react-router-dom";
import React from "react";
// Import the icon for the arrow symbol
import { RiArrowDropRightLine } from "react-icons/ri";

// Define a functional component called SideNavbar
const SideNavbar = () => {
  // Use the useLocation hook to get the current active link
  const activeLink = useLocation();
  // Retrieve the user data from local storage and parse it into an array
  const dataArr = JSON.parse(localStorage.getItem("userData"));

  // Define a helper function to generate the indicator element for the active link
  const getIndicator = (path, color, marginTop) => {
    // If the current path matches the given path, render the indicator
    return activeLink.pathname === path && (
      <div style={{ marginTop }} className="indicator">
        {/* Set the background color of the before and after pseudo-elements to the given color */}
        <style>
          {`
            .indicator::before {
              background-color: ${color};
            }
            .indicator::after {
              background-color: ${color};
            }
          `}
        </style>
        {/* Render the arrow symbol inside the indicator */}
        <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
      </div>
    );
  };

  // Render the side navigation bar with the appropriate links and indicators
  return (
    <nav className="p-8">
      <div className="bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[45rem] rounded-3xl">
        <div className="text-left py-44 leading-[4rem] font-semibold">
          <ul>
            {/* Render the profile link with the appropriate text color */}
            <li>
              <Link
                to={`/profile/${dataArr.id}`}
                className={`${activeLink.pathname === `/profile/${dataArr.id}`
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Profile
              </Link>
            </li>
            <hr />
            {/* Render the posts link with the appropriate text color */}
            <li>
              <Link
                to="/profile/posts"
                className={`${activeLink.pathname === "/profile/posts"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Posts
              </Link>
            </li>
            <hr />
            {/* Render the gallery link with the appropriate text color */}
            <li>
              <Link
                to="/profile/gallery"
                className={`${activeLink.pathname === "/profile/gallery"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Gallery
              </Link>
            </li>
            <hr />
            {/* Render the to-do link with the appropriate text color */}
            <li>
              <Link
                to="/profile/todo"
                className={`${activeLink.pathname === "/profile/todo"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                ToDo
              </Link>
              <hr />
            </li>
            {/* Render the indicators for the posts, to-do, profile, and gallery links */}
            {getIndicator("/profile/posts", "#664bd5", "-11rem")}
            {getIndicator("/profile/todo", "#6740c9", "-3rem")}
            {getIndicator(`/profile/${dataArr.id}`, "#6652db", "-15rem")}
            {getIndicator("/profile/gallery", "#6646cf", "-7rem")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;


// // import React, { Component } from "react";
// // import { Link } from "react-router-dom";

// // export default class Sidebar extends Component {
// //   state = {
// //     menuItems: [
// //       { id: 0, name: "Profile", route: "profile" },
// //       { id: 1, name: "Posts", route: "posts" },
// //       { id: 2, name: "Gallery", route: "gallery" },
// //       { id: 3, name: "ToDo", route: "todo" },
// //     ],
// //   };

// //   componentDidMount() {}

// //   render() {
// //     const pageR = window.location.href.split("/").pop();
// //     return (
// //       <div className="sidebar-cont bg-gradient-to-b from-purple-700 to-blue-600 absolute rounded-xl p-8 flex flex-col justify-center">
// //         {this.state.menuItems.map((item) => (
// //           <Link
// //             to={this.props.matchUrl + "/" + item.route}
// //             className={
// //               "sidebar-item text-gray-300 py-3 flex justify-between items-center relative cursor-pointer text-base hover:text-gray-100 no-underline " +
// //               (pageR === item.route ? "active font-semibold" : "")
// //             }
// //             key={item.id}
// //           >
// //             <span className="item-title flex-1">{item.name}</span>
// //             {pageR === item.route ? (
// //               <span className="active-icon bg-gray-100 text-gray-600 rounded-l-full px-3 py-1 text-lg absolute right-0">
// //                 {" "}
// //                 *
// //               </span>
// //             ) : null}
// //           </Link>
// //         ))}
// //       </div>
// //     );
// //   }
// // }

// // Import necessary modules from React and react-router-dom
// import { Link, useLocation } from "react-router-dom";
// import React from "react";
// // Import the icon for the arrow symbol
// import { RiArrowDropRightLine } from "react-icons/ri";

// // Define a functional component called SideNavbar
// const SideNavbar = () => {
//   // Use the useLocation hook to get the current active link
//   const activeLink = useLocation();
//   // Retrieve the user data from local storage and parse it into an array
//   const dataArr = JSON.parse(localStorage.getItem("userData"));

//   // Define a helper function to generate the indicator element for the active link
//   const getIndicator = (path, color, marginTop) => {
//     // If the current path matches the given path, render the indicator
//     return activeLink.pathname === path && (
//       <div style={{ marginTop }} className="indicator">
//         {/* Set the background color of the before and after pseudo-elements to the given color */}
//         <style>
//           {`
//             .indicator::before {
//               background-color: ${color};
//             }
//             .indicator::after {
//               background-color: ${color};
//             }
//           `}
//         </style>
//         {/* Render the arrow symbol inside the indicator */}
//         <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
//       </div>
//     );
//   };

//   // Render the side navigation bar with the appropriate links and indicators
//   return (
//     <nav className="p-8 ">
//       <div className="bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[52rem] rounded-3xl">
//         <div className="text-left py-44 leading-[4rem] font-semibold">
//           <div className="">
//           <ul>
//             {/* Render the profile link with the appropriate text color */}
//             <li>
//               <Link
//                 to={`/profile/${dataArr.id}`}
//                 className={`${activeLink.pathname === `/profile/${dataArr.id}`
//                   ? "text-white"
//                   : "text-gray-400"
//                   }`}
//               >
//                 Profile
//               </Link>
//             </li>
//             <hr />
//             {/* Render the posts link with the appropriate text color */}
//             <li>
//               <Link
//                 to="/profile/posts"
//                 className={`${activeLink.pathname === "/profile/posts"
//                   ? "text-white"
//                   : "text-gray-400"
//                   }`}
//               >
//                 Posts
//               </Link>
//             </li>
//             <hr />
//             {/* Render the gallery link with the appropriate text color */}
//             <li>
//               <Link
//                 to="/profile/gallery"
//                 className={`${activeLink.pathname === "/profile/gallery"
//                   ? "text-white"
//                   : "text-gray-400"
//                   }`}
//               >
//                 Gallery
//               </Link>
//             </li>
//             <hr />
//             {/* Render the to-do link with the appropriate text color */}
//             <li>
//               <Link
//                 to="/profile/todo"
//                 className={`${activeLink.pathname === "/profile/todo"
//                   ? "text-white"
//                   : "text-gray-400"
//                   }`}
//               >
//                 ToDo
//               </Link>
//               <hr />
//             </li>
//             </ul>
//             </div>
//             <div>
//             {/* Render the indicators for the posts, to-do, profile, and gallery links */}
//             {getIndicator("/profile/posts", "#664bd5", "-11rem")}
//             {getIndicator("/profile/todo", "#6740c9", "-3rem")}
//             {getIndicator(`/profile/${dataArr.id}`, "#6652db", "-15rem")}
//             {getIndicator("/profile/gallery", "#6646cf", "-7rem")}
//             </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default SideNavbar;
