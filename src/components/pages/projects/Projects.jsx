import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div id='projects' className='flex  justify-center items-center flex-col my-3'>
            <h1 className="text-2xl lg:text-3xl text-center font-bold text-green-700 my-3">My Projects</h1>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
            <ProjectCard image={"https://i.ibb.co.com/JFk9hfSd/sajek.jpg"} link={"https://assignment-10-client-8547a.web.app"} title={'Travel Website'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/z8TLk04/photo-1512386233331-f023884a92e8.jpg"} link={"https://assignment-11-client-bb0e2.web.app"} title={'Blog Website'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/61fN5CC/lb.jpg"} link={"https://meek-kleicha-51fce0.netlify.app/"} title={'Book Vibe'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/S4HysRmX/bus-ticket.jpg"} link={"https://shafiul007.github.io/bus-ticket/index.html"} title={'Bus Ticket'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/yssG6Wx/img4.jpg"} link={"https://shafiul007.github.io/phone-hunter/index.html"} title={'Phone-hunter'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/h8L1qsQ/images.png"} link={"https://fa-assignment-6.netlify.app/"} title={'AsTro Forum'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/3y2h9GzQ/hockey.jpg"} link={"https://shafiul007.github.io/hockey/index.html"} title={'Hockey Website'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/dwbB4BVr/tea.webp"} link={"https://shafiul007.github.io/tea-house/index.html"} title={'Tea House'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/gR0PmVR/lemon-chicken-thumb.webp"} link={"https://lively-halva-827fa0.netlify.app/"} title={'Recipe Calories'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/vCvgvh8v/law1.jpg"} link={"https://shafiul007.github.io/legal-law/index.html"} title={'Legal Law'}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/w0rBx7h/Travel-Hacks-Cover.jpg"} link={"https://shafiul007.github.io/asad-travel/index.html"} title={'Travella '}></ProjectCard>
            <ProjectCard image={"https://i.ibb.co.com/SBK5rXG/hotel2.jpg"} link={"https://assignment-9-4cc8f.web.app/"} title={'HilTop Heaven'}></ProjectCard>
            </div>
            
        </div>
    );
};

export default Projects;