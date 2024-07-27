import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


//Gallery of species
const SpeciesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  //array of images
  const images = [
    {
      id: 1,
      title: 'Tapanuli Orangutan',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pongo_tapanuliensis.jpg/1280px-Pongo_tapanuliensis.jpg',
    },
    {
      id: 2,
      title: 'Vaquita',
      url: 'https://earth.org/wp-content/uploads/2022/04/Untitled-design-2022-04-12T161151.368.jpg'
    },
    {
      id: 3,
      title: 'Amur Leopard',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Panthera_pardus_orientalis_Colchester_Zoo_%281%29.jpg',
    },
    {
      id: 4,
      title: 'Saola',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pseudoryx_nghetinhensis%2C_b.PNG',
    },
    {
      id: 5,
      title: 'Dhole',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dhole_in_its_habitat_%28cropped%29.jpg/1920px-Dhole_in_its_habitat_%28cropped%29.jpg',
    },
    {
      id: 6,
      title: 'Golden Lion Tamarin',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Golden_Lion_Tamarin_Leontopithecus_rosalia.jpg',
    },
    {
      id: 7,
      title: 'Siamese cat.',
      url: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Wankee_side_view.jpg',
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-700 to-green-500 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-white mb-6 underline ml-2">Endangered Species</h2>
        <h2 className="text-2xl font text-white mb-6 underline ml-2">The Different Endangered Species of the World</h2>
        <p className='font-bold text-white mb-6 ml-2'>These species are all beautiful, however, all of them are either rare or CRITICALLY endangered. They WILL be extinct without active conservation action.</p>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="max-w-3xl mx-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-full rounded-lg"
              />
              <p className="text-white text-lg font-semibold text-center mt-4">
                {selectedImage.title}
              </p>
              <button
                className="text-white text-lg font-semibold bg-gray-800 px-4 py-2 rounded mt-4"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SpeciesGallery;