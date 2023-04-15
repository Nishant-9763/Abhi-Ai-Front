import { useState } from "react"
import React  from 'react'
import "./Create.css"
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {successToast,errorToast} from '../alert'




const Create = () => {

  let navigate = useNavigate()
  
  const [prompt,setPrompt] = useState('')
  const [nishnat,setNishnat] = useState([])
  const [loading,setLoading] = useState(false)
  
  const token = localStorage.getItem("newKey")

  
  if(!token){
    navigate('/')
    errorToast("please login first")
  
  }
    const createKaro = function (event) {


      setLoading(true)
      event.preventDefault()
      
      axios.post(`https://ewwe.onrender.com/createImage`,{prompt}, {'headers': {'Authorization': 'Bearer ' + token}})
        .then((res) => {
          
            // console.log(res.data.data.imageUrl);
            successToast("Ai generate images")
          setNishnat(res.data.data.imageUrl)
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          errorToast(error.response.data.message + " Error")
        })
    }
   
    // const routeChange = () =>{ 
    //   let path = `/get`; 
    //   navigate(path);
    // }



  return (
    <div className='divn'>
       
       <form onSubmit={createKaro}  className="form">

            <p className="h1">Descibe Your Text</p>
            <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/><br/>

            {/* <input placeholder='enter size' /> <br/> */}
            {/* <button type="submit">Generate</button> */}

            {loading ? "":(<input className="battan" type="submit" placeholder="Generate" />)}
            {loading ? <div><Spinner className="spin" animation="border" variant="info" /> </div>: ""  }   <br />

        </form>
        <div id="createImg">
        
           {nishnat.map(item=>
                            <div className="column">
                      <div className="row">
                        <img id="im" src={item.url} alt="" />
                      </div>
                    </div> )}
       <br/><br/>
          
        
        </div>
        <br />
        {/* <Button className="get" onClick={routeChange}>Get All Images</Button> */}

    </div>
  )
            
}


export default Create



































































// import React, { useEffect, useState } from "react";
// // import "./homePage.css";
// // import Button from "react-bootstrap/Button";
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from "axios";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import Main from "../main/Main";


// const Create = () => {

//   const navigate = useNavigate()

//     const [userData,setUserData] = useState([])
//     const [prompt,setPrompt] = useState('')

//     const token = localStorage.getItem("group2project-5")

//     // if(!token){
//     //   alert("please login first")
    
//     //   navigate('/')
//     // }

//  const createUser = async function  (){ 
//     alert("joi")

// //    await  axios.post(`http://localhost:8080/createImage` , {prompt}, {'headers': {'Authorization': 'Bearer ' + token}} )
     
// //      .then((res)=>{
// //     //    if(res.data.data.length==0) return (<h1>  Images not created Yet</h1>)
// //     //    if(res.data.data.length == 0) {console.log("no data present");}
// //     console.log(res.data);
// //        setUserData(res.data.data)  
// //      }).catch((error)=>{
// //       alert( error.response.data.message + " Error")
// //       }) 

//     }



//     // useEffect(()=>{

//     // createUser()
      
//     // },[])
  
// // function deleteImage(id){
// //   alert(" Image deleted ")
// //   axios.delete(`http://localhost:3001/image/deleteImage/${userId}/${id}`, {'headers': {'Authorization': 'Bearer ' + token}})
// //   .then((res)=>{
// //     if(res.length===0)return (alert("No Images created , Please create Image by clicking ob button"))
// //     getUser()
// //   })
// // }

// // const routeChange = () =>{ 
// //   let path = `/image/generateImage/${userId}`; 
// //   navigate(path);
// // }

//   return (
//     <div >
//       <section onSubmit={createUser}>
//             <p className="h1">Descibe Your Text</p>
//             <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/>
//             <Button  type="submit" > Generate</Button>
//             </section>
//       {/* <Container>
//       <Row className="my-4">
//         <Col>
//         </Col>
//       </Row>
//       <Row className="my-4">
//         {userData.map(book => (
//           <Col md={4} key={book._id}>
            
//             <Card className="card">
//               <Card.Img variant="top" src={book.imageUrl} />
//             </Card>
//           </Col>
//         ))}
//       </Row> 
//     </Container> */}
  
     
//     </div>
//   );
// };

// export default Create;
