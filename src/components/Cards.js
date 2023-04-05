import React from 'react'
import Card from './Card';
const Cards = (props) => {
    // console.log(props.courses);
    let courses=props.courses;

    function getCourses(){
        let allCourses=[];
        Object.values(courses).forEach(array =>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    //returns all courses in an array
    //send each course content to the card component to render individual cards.
  return (
    <div>
        {getCourses().map( course => <Card key={courses.id}/>)}
    </div>
  )
}

export default Cards;