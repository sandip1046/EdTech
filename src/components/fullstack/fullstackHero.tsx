// Fullstack hero component which contains the details and resourses of the course

export const FullstackCourse = () =>{
    return <div>
        <div className={"flex justify-center items-center font-extrabold font-serif m-5 text-4xl"}>Full Stack Boot-camp </div>
        <div className={"flex flex-col justify-center items-center rounded-md bg-slate-300 p-10 mx-14 "}>
            <div className={"flex justify-center items-center font-bold  mb-5 text-2xl" }>MERN stack</div>
            <div className={"flex justify-center items-center m-2 text-lg"}>The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node.js, with each component playing a role in the development process. MongoDB serves as a document-oriented database that can efficiently store data in JSON format. Express is a web application framework that provides a set of features to streamline the assembly of web applications. React is a front-end JavaScript library that offers a large toolkit for crafting user interfaces. Node.js is the runtime environment for execution of JavaScript code on the server side, coordinating communication between front-end and back-end components.</div>
            <div className={"flex justify-center items-center font-semibold mt-5 text-xl" }>Lectures</div>
            <div className={"flex justify-center items-center font-semibold mt-5 text-xl" }>Projects</div>
        </div>
    </div>
}

export default FullstackCourse;