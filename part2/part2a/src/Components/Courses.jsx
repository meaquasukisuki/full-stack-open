import React from 'react';
import Course from "./Course";

const Courses = ({courses}) => {
	return (
		<div>
			<h1>Web development curriculum</h1>
			{
				courses.map((course) => {
					return <Course course={course} key={course.id}/>
				})
			}
		</div>
	);
};

export default Courses;