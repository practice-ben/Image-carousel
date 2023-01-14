import React from "react";

export default function App() {
  const [image, setImage] = React.useState("https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

  const imageArr = [

  ]

  return(
    <div className="container">
      <h1>Image Carousel</h1>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="button">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="button">
        <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}