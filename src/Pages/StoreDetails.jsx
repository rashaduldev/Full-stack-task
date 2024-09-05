import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams(); // Get the courseId from URL
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchCourses = async () => {
      try {
        const response = await fetch('/data.json'); // Ensure the file is in public folder
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Find course by id
  const course = courses.find((course) => course.id === parseInt(courseId));

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // If course not found
  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={course.img}
          alt={course.title}
          className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl text-green-600">${course.newprice}</p>
            <p className="line-through text-gray-500">${course.price}</p>
            <p className="text-red-600">{course.off_percent}% OFF</p>
          </div>
          <p className="text-gray-700 text-lg">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
