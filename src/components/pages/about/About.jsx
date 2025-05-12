import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
const About = () => {
    return (
        <div id='about' className='my-3 flex justify-center items-center p-2 md:p-10 lg:p-10'>
			<div className='flex flex-col-reverse md:flex-row justify-around items-center'>
				<div className='w-full flex flex-col justify-center items-center md:w-1/2'>
						<h1 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-none sm:text-6xl">Hello,
						<span className="dark:text-violet-600"><Typewriter
            		  words={['My Name is Asad', 'I am a Student']}
            		  loop={0} // Infinite loop (can be any number)
            		  typeSpeed={90}
            		  deleteSpeed={70}
            		  delaySpeed={1000}
            		/></span>
					</h1>
					<p className="mt-6 mb-8 text-xl sm:mb-12">Diploma in CST department in Feni Polytechnic Institute.
						<br  className="hidden md:inline lg:hidden" />
					</p>
					<a href="#footer"><button className='btn bg-green-700 border-0 text-white font-bold'>Contact With Me</button></a>
					
				</div>
				<div className='w-full md:w-1/2 flex justify-center items-center mb-3 md:ml-10'>
					<img src="./../../../../public/asad.png.png" alt="" className="object-contain  bg-blue-300  w-2/3 rounded-full" />
				</div>
			</div>
           {/* <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col-reverse justify-center p-4  sm:py-8 lg:py-10 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center md:p-6 text-center rounded-sm lg:max-w-full xl:max-w-lg lg:text-left">
			<h1 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-none sm:text-6xl">Hello,
				<span className="dark:text-violet-600"><Typewriter
              words={['My Name is Asad', 'I am a Student']}
              loop={0} // Infinite loop (can be any number)
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></span>
			</h1>
			<p className="mt-6 mb-8 text-xl sm:mb-12">Diploma in CST department in Feni Polytechnic Institute.
				<br  className="hidden md:inline lg:hidden" />
			</p>
			<button className='btn bg-green-700 border-0 text-white font-bold'>Contact With Me</button>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 ">
			<img src="./../../../../public/asad.png.png" alt="" className="object-contain  bg-blue-300  w-2/3 md:w-1/2 lg:w-full rounded-full xl:h-90 2xl:h-128" />
		</div>
	</div>
</section> */}
        </div>
    );
};

export default About;