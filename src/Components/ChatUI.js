// import React from "react";

// const ChatUI = ({user,selectedUser}) => {
 
//   return (
//     <div className="flex flex-col h-full w-full">
//       {/* Chat header */}
//       <div className="flex items-center justify-between h-16 px-4 bg-gray-100 sm:bg-white">
//         <div className="text-lg font-medium text-gray-700">Chat {user}</div>
//         <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
//           <svg
//             className="h-6 w-6 text-gray-700"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Chat messages */}
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="flex flex-col">
//           <div className="flex flex-col items-start mb-4">
//             <div className="flex items-center">
//               <div className="rounded-full h-8 w-8 bg-gray-300"></div>
//               <div className="ml-2 text-gray-700 font-medium">{user}</div>
//             </div>
//             <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
//               <div className="text-gray-700">Hello World</div>
//             </div>
//           </div>
//           <div className="flex flex-col items-end mb-4">
//             <div className="flex items-center">
//               <div className="rounded-full h-8 w-8 bg-gray-300"></div>
//               <div className="ml-2 text-gray-700 font-medium">User 2</div>
//             </div>
//             <div className="bg-blue-500 p-2 rounded-lg max-w-xs">
//               <div className="text-white">Hi there!</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chat input */}
//       <div className="h-16 flex items-center bg-gray-100 sm:bg-white px-4">
//         <input
//           className="flex-1 bg-gray-200 p-2 rounded-lg mr-4"
//           type="text"
//           placeholder="Type a message"
//         />
//         <button className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none">
//           <svg
//             className="h-6 w-6 text-white"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M12 4v16m8-8H4"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatUI;
