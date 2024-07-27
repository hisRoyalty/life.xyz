import React from 'react';

const Staff = () => {
  const developers = [
    {
      name: 'Soumodeep Roy',
      role: 'Administrator, Chief Developer',
      profilePic: 'https://cdn.discordapp.com/attachments/744120656278454274/1266598150869749860/Screenshot_from_2024-07-27_11-27-52.png?ex=66a5baf3&is=66a46973&hm=49d67fb3360032a6c30dd0e79f5b42cac850de2c5acb5f7a9623ee5d38ed6644&',
    },
    {
      name: 'Vir Menon',
      role: 'Administrator, Chief of Hardware and Robotics',
      profilePic: 'https://cdn.discordapp.com/attachments/744120656278454274/1266598868246724659/image.png?ex=66a5bb9e&is=66a46a1e&hm=c6658f538361baa0a9e3ba689f4c4b956689575b9481c114e6747bfc0b3bd5f0&',
    
    },
  ];

  return (
    <div className="bg-green-200 flex flex-col mt-6">
      <h2 className="text-4xl font-bold text-center text-green-900">Life.XYZ - The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-green-200">
        {developers.map((developer, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-green-300 h-full mt-5 ml-4 mr-4">
            <div className="flex items-center justify-center">
              <img
                src={developer.profilePic}
                alt={`${developer.name}'s Profile`}
                className="w-24 h-26 rounded-full mb-4"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-blue-900">{developer.name}</h3>
            <p className="text-white mb-4">{developer.role}</p>
            <p className="text-white">{developer.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;