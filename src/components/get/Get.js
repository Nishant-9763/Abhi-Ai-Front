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

      axios.get(`https://ewwe.onrender.com/getImages`, {
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
      .delete(`https://ewwe.onrender.com/deleteImage/${imageId}/${id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      
      .then((res) => {
        getUser();
      });
  }
  
  // const routeChange = () => {
  //   let path = `/create`;
  //   navigate(path);
  // };

  return (
    <div  className="ret">
                       {userData.map(item => ( 
                        <div class='container'  > {/**cad */}
                    <div class="row" id={styles.contain}>
                    {item.imageUrl.map(image => (
                      <div class="col-sm">
                        <img key={image.id} src={image.url} id={styles.im} alt={item.prompt} />
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


// <Container>
// <Row className="my-4">
//   <Col>

//   </Col>
// </Row>
// <Row className="my-4">

//
//   {userData.map(book => (
//     <Col md={4} key={Math.random()}>

//       <Card className="card">
//         <Card.Img variant="top" src={book.imageUrl[0]} />
//         <Card.Img variant="top" src={book.imageUrl[1]} />

//         <Card.Body>
//           <Card.Title>{book.prompt}</Card.Title>

//           <button variant="primary" className="delete"  onClick={()=>deleteImage(book.imageId)}>Delete</button>

//         </Card.Body>
//       </Card>
//     </Col>
//   ))

//   }
// </Row>
// {/* <button variant='secondary' className="create" onClick={routeChange} > Create Image</button> */}

// </Container>



//---------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// {/* <Container>
//     <Row className="my-4">
//       <Col>

//       </Col>
//       </Row>
//         <Row className="my-4">


//       {userData.map(item => (
//         <Col md={4} key={item.imageId}>
          
//         {item.imageUrl.map(image => (
//           <Card className="card">
//             <>
//             <Card.Img variant="top" src={image.url} />
//             {/* <img variant="top" src={image.url} /> */}
//             <button variant="primary"  onClick={() => deleteImage(image.id,item.imageId)}>Delete</button>
//             </>
            
//           </Card>
//                 ))}
//         </Col>
//       ))}
//     </Row> */}
    // {/* <button variant='secondary' className="create" onClick={routeChange} > Create Image</button> */}
  //  {/* </Container> */}to 