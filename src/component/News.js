import React from 'react';
import Header from './Header';
import Footer from './Footer';

const News = () => {
    
  // article data


  const articles = [
    {
      title: 'Seafood Is Getting Riskier to Eat Due to Climate Change, According to Science',
      description: 'As you may recall, in 2023, an outbreak of Vibrio hit the U.S., causing numerous illnesses and one death in Connecticut, New York, and North Carolina. The Centers for Disease Control and Prevention noted in the conclusion of its investigation, "A notable feature of these cases, beyond their severe clinical outcomes, is that they occurred in the wake of record-breaking U.S. heat waves. Although these cases reported during July to August cannot be solely attributed to the heat waves, the relationship between vibriosis incidence and environmental conditions favorable to Vibrio growth, namely elevated water surface temperatures and low salinity, is well-documented."',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkXGyPj990LuvQmI_KEzNe121VSpZjFhZhg&s',
      
    },
    {
      title: 'Monday breaks the record for the hottest day ever on Earth',
      description: 'Climate scientists say this could be the warmest it has been in 120,000 years because of human-caused climate change. While scientists cannot be certain that Monday was the very hottest day in that period, longer term average temperatures have not been this high since long before humans developed agriculture.',
      image: 'https://cdn.discordapp.com/attachments/744120656278454274/1266615009870610554/image.png?ex=66a5caa6&is=66a47926&hm=9ac361f38acec6b40fb6b632c2211c090d8cb167400b9fbeeb2dceb33e43e323&',
    },
    {
    title: 'High temperatures create a health hazard for olympians.',
    description: 'In Paris, forecasts for the upcoming weeks show temperatures around 70 to 80 degrees Fahrenheit, but experts fear that a heat wave blanketing parts of southern Europe could eventually creep into the City of Lights. Climate-fueled warming is pushing athletes to change their training conditions, while event organizers adopt new rules and update facilities to prevent heat-related illness. However, as the thermostat continues to inch up, some experts say we must rethink the Olympics altogether.',
    image: 'https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/mmdfgqbwukdh3hmvs5rn',

      },
      {
        title: 'Singapore Issues Environmental Crimes Money Laundering National Risk Assessment',
        description: 'Environmental crimes and the laundering of their proceeds endanger the environment and have a far-reaching impact. Each year, environmental crimes such as illegal wildlife trafficking and illegal logging are estimated to generate around US$110 billion to US$281 billion in criminal gains globally.Please refer to the Financial Action Task Force (FATF) report: FATF (2021), Money Laundering from Environmental Crimes, FATF, Paris, France. Singapore’s exposure to environmental crimes ML stems from its position as an international financial centre, and a trading and transit hub, with a highly externally-oriented economy.',
        image: 'https://www.mas.gov.sg/-/media/mas/news/media-releases/2024/mha-mas-mof-joint-logo.jpg?h=142&w=535&hash=C07BB76CC92C51C2D9048BE35AA01EEB'
      },
      {
        title: 'Life.xyz Launches Interactive Website to Educate Public and Ensure Safety During uncertain climate change',
        description: 'In the midst of Earth\'s unprecedented global warming and mental health crisis, Life Inc has taken an innovative step towards educating the public and promoting safety with the launch of an interactive website. Developed by a team of experts from Life.xyz, the website aims to provide crucial information, guidance, and resources to citizens around the globe, helping them stay informed and prepared during this time.The website offers a user-friendly interface, making it accessible to people of all ages and backgrounds. ',
        image: 'https://cdn.discordapp.com/attachments/744120656278454274/1266627872135843943/Screenshot_from_2024-07-27_13-23-10.png?ex=66a5d6a1&is=66a48521&hm=10312447ea424ca7bb0892b0fba2b0af3d991307036f32f61c026ba38a49ccfe&',

      }
  ];

  return (
      <div className="bg-green-200">
        <Header></Header>
        <h2 className="text-4xl text-center font-bold mb-4 mt-4">News</h2>
        <h1 className="text-center mb-8">Latest Life News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-8 mr-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gradient-to-r from-green-400 to-green-600 shadow-xl rounded-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="h-30 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                <p className="text-black mb-4">{article.description}</p>
                <div className="flex justify-between">
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </div>
  );
};

export default News;