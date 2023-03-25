import { useState, useContext } from "react";
import { userContext } from "../Context/UserProvider";
import { BsChatRight, BsChevronDown } from "react-icons/bs";
import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react";
// import ChatUI from "./ChatUI.js";


const ChatPage = () => {
  const { users } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null); 
  // Adding a state variable to keep track of the selected user

  const handleOpenChats = (user) => {
    setSelectedUser(user); // Setting the selected user when a user is clicked
    setOpen(true); // Setting "open" to true to show the ChatUI component
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Flex justify="flex-end" pr="2rem">

      <Box
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        w="21%"
        rounded="10px"
      >
        <Flex
          className="text-xl text-white bg-sky-400 p-4 flex items-end justify-between gap-[2rem] rounded-t-[11px] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Icon as={BsChatRight} className="-mr-[8rem]" />
          <Text>Chats</Text>
          <Icon as={BsChevronDown} />
        </Flex>
        {open ? (
          <Box className="p-4 h-[16rem] overflow-y-auto scrollbar-thin">
            {users?.map((user) => (
              <Box key={user.id} onClick={() => handleOpenChats(user)}> {/* Adding a click event to each user item to set the selected user */}
                <Flex gap="4" pb="[5px]">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={user.profilepicture}
                    alt={user.username}
                  />
                  <Text>{user.name}</Text>
                </Flex>
              </Box>
            ))}
          </Box>
        ) : (
          ""
        )}
        {/* {selectedUser && <ChatUI user={selectedUser} />} */}
         {/* Rendering the ChatUI component only if a user is selected */}
      </Box>
    </Flex>
  );
};

export default ChatPage;


// import { useState, useContext } from "react";
// import { userContext } from "../Context/UserProvider"; // Importing userContext from UserProvider
// import { BsChatRight, BsChevronDown } from "react-icons/bs"; // Importing chat and chevron icons from react-icons
// import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react"; // Importing various Chakra UI components
// import ChatUI from "./ChatUI";

// const ChatPage = () => {
//   const { users } = useContext(userContext); // Getting users from userContext using useContext hook
//   const [open, setOpen] = useState(false); // Setting up a state variable called "open", initialized to false

//   const handleOpenChats = () => {
//     setOpen(!open); // Toggling the value of "open" when the chat box is clicked
//   };

//   return (
//     <Flex justify="flex-end" pr="2rem">
//       {" "}
//       {/* Rendering a flex container to position the chat box to the right */}
//       <box>
//         <ChatUI  />
//       </box>
//       <Box
//         boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" // Adding a drop shadow to the chat box
//         w="21%" // Setting the width of the chat box
//         rounded="10px" // Rounding the corners of the chat box
//       >
//         <Flex
//           className="text-xl text-white bg-sky-400 p-4 flex items-end justify-between gap-[2rem] rounded-t-[11px] cursor-pointer" // Styling the chat header
//           onClick={handleOpenChats} // Adding a click event to toggle the visibility of the user list
//         >
//           <Icon as={BsChatRight} className="-mr-[8rem]" />{" "}
//           {/* Rendering the chat icon */}
//           <Text>Chats</Text> {/* Rendering the text "Chats" */}
//           <Icon as={BsChevronDown} /> {/* Rendering the chevron icon */}
//         </Flex>
//         {open ? ( // If "open" is true, render the user list
//           <Box className="p-4 h-[16rem] overflow-y-auto scrollbar-thin">
//             {users?.map(
//               (
//                 user // Loop through users array and render user details
//               ) => (
//                 <Box key={user.id}>
//                   <Flex gap="4" pb="[5px]">
//                     <Image
//                       className="w-8 h-8 rounded-full"
//                       src={user.profilepicture}
//                       alt={user.username}
//                     />
//                     <Text>{user.name}</Text>
//                   </Flex>
//                 </Box>
//               )
//             )}
//           </Box>
//         ) : (
//           "" // If "open" is false, render an empty string
//         )}
//       </Box>
//     </Flex>
//   );
// };

// export default ChatPage;
