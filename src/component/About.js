import React from 'react';



const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-4xl mx-auto text-center">
        <img src="https://www.dtbrownseeds.co.uk/cdn/shop/articles/DTB_Pricking_Out_Your_Seedlings.jpg?v=1696934491&width=2048" alt="logo" className="h-30 block ml-auto mr-auto w-1/2 rounded-full mb-5 mt-14" />
          <h1 className="text-4xl font-bold text-lime-950 mb-8">Life</h1>
          <p className="text-lg text-black m-12">
          Life is the most important thing that sustains this planet. However, us humans have made life tougher for all living beings. This website aims to help humans understand themselves and the life forms around them better and more effectively.
          </p>
          <div className="flex items-center justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;