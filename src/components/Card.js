import React,{useState,useEffect} from "react";
import axios from "axios";

const Card=()=>{
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
           console.log(response.data)
          setUserData(response.data.results[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    return(
      <div className="container">
          {userData && (
          <div className="card">
            <div className="card-blue">
            <img src={userData.picture.large} alt="User" />
            <div className="det">
            <p>Name: { `${userData.name.first} ${userData.name.last}`}</p>
            <p>Gender: {`${userData.gender}`}</p>
            <p>Phone No.: {`${userData.phone}`}</p>
            </div>
           </div>
          </div>
          )}
      </div>
    ) 
}
export default Card;