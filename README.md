
# AI Image Generation App


The application use OpenAI's GPT (Generative Pre-trained Transformer) technology to generate images based on user input. Users provide text descriptions and on that basis AI generate an image that matches the description.

This project is an example of how we can use AI to show our creativity and make beautiful images.

Currently we only taking text description from the user to generate image but in future we will take size and number of images to generate images as user want.Apart from this we will improve our login and register process also.





## Demo

https://aiimagegenarater.netlify.app


## Installation

To run project follow below commands :-



1]  Clone the github link

```bash
  git clone https://github.com/Nishant-9763/AI-front.git
```

2] Install dependencies

```bash
  npm install or npm i
```

3] Start the server

```bash
  npm run start
```


    
## API Reference

#### Register User

```http
  POST /register
```
This endpoint register a user with taking details like  - full name,mobile_number,email_id and password.

#### Login User
```http
  POST ./
```
 This endpoint login a user by taking correct email_id and password, and redirect them to create page.


#### Create Image
```http
  POST /create
```
 This endpoint create a post or Image base on user text description.

#### Get Images

```http
  GET /get
```

 This endpoint get all images or post that user created .

#### Delete Image
```http
  DELETE /deleteImage/${imageId}/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|`id`       | `string` | **Required**. Id of single image  |
| `imageId` | `string` | **Required**. Id of images file to delete |

 This endpoint delete a particular image based on imageId that we provided.


## Images that generate from AI App 

![Astronaut on dog](https://res.cloudinary.com/ddraawvgd/image/upload/v1681464814/1681464812334.png)

![Astronaut on road](https://res.cloudinary.com/ddraawvgd/image/upload/v1681465018/1681465016237.png)


## Tech Stack

**Client:** React, Bootstrap 4, React Bootstrap
 

## Other than that all we use some packages like 

`jsonwebtoken` - use to authenticate the user


`react-toastify` - use to show response message


`axios` - to make a protected Db call







## Documentation

[React](https://react.dev/)

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

[react-toastify](https://www.npmjs.com/package/react-toastify)

[axios](https://www.npmjs.com/package/axios)




## Authors

- [Nishant](https://github.com/Nishant-9763)


## Feedback

If you have any feedback, please reach out to us at nishantgupta9763@gmail.com

