const Header = ({ course }) => {
	return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
	const { parts } = course;
	return (
		<div>
			{parts.map(part => (
				<Part key={part.id} part={part.name} exercise={part.exercises} />
			))}
		</div>
	);
};

const Part = ({ part, exercise }) => (
	<p>
		{part}: {exercise}
	</p>
);

const Total = ({ course }) => {
	const { parts } = course;

	const sum = parts.reduce((total, item) => total + item.exercises, 0);

	return <h4>total of {sum} exercises</h4>;
};
const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	);
};

export default Course;
