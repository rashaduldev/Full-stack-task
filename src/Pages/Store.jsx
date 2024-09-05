import { useEffect, useState } from 'react';
import Navber from '../components/Navber';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Store = () => {
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [coursesPerPage] = useState(6); // Number of cards per page
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchCourses = async () => {
            try {
                const response = await fetch('data.json'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchCourses();
    }, []);

    // Pagination logic
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    // Page navigation handlers
    const handleNextPage = () => {
        if (currentPage < Math.ceil(courses.length / coursesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div>
            <Navber />
            </div>
            <div className='px-[200px] flex mt-16'>
                <div className='w-[30%]'>
                    <div className='flex flex-col gap-5 h-screen pr-16 border-r-2 border-gray-100'>
                        <p className='btn bg-[#0E0E0E] text-white hover:bg-[#0E0E0E] hover:text-white'>Rocking chair</p>
                        <p className='btn hover:bg-[#0E0E0E] hover:text-white'>Side chair</p>
                        <p className='btn hover:bg-[#0E0E0E] hover:text-white'>Lounge chair</p>
                    </div> 
                </div>
                <div className='w-[70%] pl-16'>
                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            currentCourses.map((course) => (
                                <Link to={`/courses/${course.id}`} key={course.id}>
                                    <div
                                    className="rounded-[8px] bg-base-100 shadow my-10 cursor-pointer">
                                    <figure>
                                        <img src={course.img} alt={course.title} className="h-48 w-full object-cover rounded-t-[8px]" />
                                    </figure>
                                    <div className="card-body">
                                      {course.title}
                                      <div className='flex justify-between'>
                                        <p>${course.newprice}</p>
                                        <p>${course.price}</p>
                                        <p><span className='text-red-600'>{course.off_percent}% OFF</span></p>
                                      </div>
                                      <p>{course.description}</p>
                                    </div>
                                </div>
                                </Link>
                            ))
                        }
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-6 space-x-4">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="btn btn-outline"
                        >
                            1
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(courses.length / coursesPerPage)}
                            className="btn btn-outline"
                        >
                            2
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
            <Footer/>
            </div>
        </div>
    );
};

export default Store;