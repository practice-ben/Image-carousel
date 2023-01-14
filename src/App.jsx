import React from "react";

export default function App() {
  const [image, setImage] = React.useState("https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

  const imageArr = [
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13790095/pexels-photo-13790095.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/3030833/pexels-photo-3030833.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/442555/pexels-photo-442555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5095808/pexels-photo-5095808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3017093/pexels-photo-3017093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/281000/pexels-photo-281000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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