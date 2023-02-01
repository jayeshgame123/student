import React from 'react'

const Home1 = ({students}) => {
    // console.log(students)
  return (
    <>
    <div>
        {
            students.length ? (
                <>{
                    students.map((student)=>(
                        <main key={student.id}>
                        <h3>{student.name}</h3>
                        <p>{student.address}</p>
                        <p>{student.mobile}</p>
                        <p>{student.gender}</p>
                        </main>
                    ))}
                </>
            ):(
                <p>nothing</p>
            )

        }
    </div>
    </>
  )
}

export default Home1