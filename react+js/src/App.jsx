import { Typography,Box} from "@mui/material";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

const App = () => {

  const numbers = [1, 2, 3, 4, 5];
  const [count,setCount] = useState(1);
  
  console.log(count);  // 0
// setCount(count + 1); // Request a re-render with 1
// console.log(count);  // Still 0!

  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
   const handleClick = () => {
  // setCount((prev) => prev +1)
  // console.log("COUNT-----",count)

  setPerson(prev => ({
  ...prev,
  name: "Updated Name"
}));
 }
  return (
    <>
      {/* Hello World */}
      {/* Default Exports */}
      {/* <Pink /> */}
      <Header />
      <MainContent />
      <Footer />
      {numbers.map((num) => {
        return (<Box key={num}>
          <Typography variant="h2">{num}</Typography>
        </Box>)
      })}
      <Profile />
      <button onClick={handleClick}>Click me {count}</button>
      {person.name}
    </>
  )
}

export default App;
