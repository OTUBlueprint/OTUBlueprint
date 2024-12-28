import React from 'react'
import Image from 'next/image'

// TODO: add image
function Card() {
  return (
    <div className="max-w-sm m-2 overflow-hidden rounded shadow-lg">
    <img
        className="w-full bg-cover random-unsplash-image"
        width="400"
        height="200"
        alt=""
    />
    <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Card title</div>
        <p className="text-base text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
            dolores?
        </p>
    </div>
    </div>
  )
}

export default Card