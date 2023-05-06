import React, { useEffect, useState ,useCallback} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './Get.module.css'
import {successToast,errorToast} from '../alert'


const Get = () => {
  const navigate = useNavigate();
 
  const [userData, setUserData] = useState([]);

  const token = localStorage.getItem("newKey");
  if(!token){
    navigate('/')
    errorToast("please login first")

  }

  const  getUser =useCallback( () => {

      axios.get(process.env.REACT_APP_GET_API, {
          headers: { Authorization: "Bearer " + token },
        })
  
        .then((res) => {
          if (res.data.data.length === 0) {
            successToast("No images to show Please create first");
          }
          // console.log(res.data.data);
          
          setUserData(res.data.data)
        })
        .catch((error) => {
          errorToast(error.response.data.message + " Error");
        });
    },[token])

  useEffect(() => {

    getUser();
    
  }, [getUser]);


  function deleteImage(id,imageId) {
    successToast(" Image deleted ");
    axios
      .delete(`${process.env.REACT_APP_DELETE_API}/${imageId}/${id}`, { 
        headers: { Authorization: "Bearer " + token }, 
      })
      
      .then((res) => {
        getUser();
      });
  }
  
 
  return (
    <div  className="ret">
                       {userData.map((item)=> ( 
                        <div   > {/**cad */}
                    <div className="row" id={styles.contain} >
                    {item.imageUrl.map((image) => (
                      <div className="col-lg-4" >
                        <img key={image.id} src={image.url} className={styles.image} alt={item.prompt} />
            <button variant="primary"  className={styles.batu} onClick={() => deleteImage(image.id,item.imageId)}>Delete</button>

                      </div>
                       ))}
                    </div>
                  </div>
                   ))}
                   <br/> <br/><br/>
                    <div></div>
  </div>
  );
};

export default Get;


 