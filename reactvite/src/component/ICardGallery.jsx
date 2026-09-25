import React from 'react'
import ICard from './ICard'
import cat from '../images/cat.png'

function ICardGallery() {

  const students = [
    {
      name: 'Ayam',
      roll: '2400321530054',
      branch: 'AIML',
      pic: cat
    },
    {
      name: 'Ram',
      roll: '2400321530051',
      branch: 'CSE',
      pic: cat
    },
    {
      name: 'Shyam',
      roll: '2400321530052',
      branch: 'IT',
      pic: cat
    },
    {
      name: 'Rahul',
      roll: '2400321530053',
      branch: 'ECE',
      pic: cat
    }
  ]

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}
    >

      {students.map((student) => (
        <ICard data={student} />
      ))}

    </div>
  )
}

export default ICardGallery