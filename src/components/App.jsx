import { useCallback, useEffect, useState } from "react";
import Usercard from "./Usercard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedMap,setSelectedMap] = useState({});
 
  //GET user data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/users?limit=9")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log("Error", error);
        setUsers(null);
      });
    console.log("Fetch User data");
  }, []);

  //Handle Button click for child component
  const onButtonClick = useCallback((userId) => {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    //   setUsers((prevState) => {
    //     const newUsers = prevState.map((user) => {
    //       if (user.id === userId) return { ...user, color: color };
    //       return user;
    //     });
    //     return newUsers;
    //   });
      setSelectedMap((prevState)=>({...prevState,[userId]:color}))
      
    },
    []
  );

  console.log(selectedMap);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-4 text-purple-800"> Color Changer</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {users.map((user) => {
            return <Usercard key={user.id} {...user} color={selectedMap[user.id]} onClick={onButtonClick} id={user.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
