import React from 'react'
import "./index.css"

const Cats = ({star}) => {
  return (
    <div className='catDiv'>
        <h2>My Cats names are Doming and Churro!</h2>
        <div className='photo_and_text'><img className='catPic' src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="cat" />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum similique excepturi vel. Incidunt dolorum nihil quasi, pariatur sapiente voluptatem ab laudantium in possimus ipsam veniam molestiae eius neque fugiat!</h2>
        </div>
        
      
    </div>
  )
}

export default Cats
