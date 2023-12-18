import React from 'react'
import '../../App.css'
import Cards from '../Cards'
function HealthAdvices() {

    const [blogs,setBlogs] = [
        {
          "id": 1,
          "title": "Sample Blog Post 1",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VLU1omVIB1yMTmS37F2e76ptFbI6O2P9mIpbbojq3oWZjsnePYrFZ3Ul-US-UwCFo2w&usqp=CAU",
          "description": "This is a sample blog post about a specific topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          "id": 2,
          "title": "Sample Blog Post 2",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VLU1omVIB1yMTmS37F2e76ptFbI6O2P9mIpbbojq3oWZjsnePYrFZ3Ul-US-UwCFo2w&usqp=CAUg",
          "description": "Another sample blog post covering different subjects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          "id": 3,
          "title": "Sample Blog Post 3",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VLU1omVIB1yMTmS37F2e76ptFbI6O2P9mIpbbojq3oWZjsnePYrFZ3Ul-US-UwCFo2w&usqp=CAU",
          "description": "A third sample blog post exploring various themes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
      
  return (
    <h1 className='blog'>
     Blog
    </h1>
  )
}

export default HealthAdvices;