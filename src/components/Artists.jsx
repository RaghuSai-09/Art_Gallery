import React from 'react';

const ArtistsGallery = () => {
  const artists = [
    {
      name: ' Jenny Jonhson',
      genre: 'Art, Nature',
      dob: 'January 15, 1980',
      image: 'https://static.javatpoint.com/top10-technologies/images/top-10-singers-in-the-world7.png',
    },
    {
      name: 'Artist 2',
      genre: 'Realism',
      dob: 'February 2, 1990',
      image: 'https://farm9.staticflickr.com/8798/17797202391_2c01e1a265_b.jpg',
    },
    {
      name: 'Artist 2',
      genre: 'Realism',
      dob: 'February 2, 1990',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aVCTZbp1UoulH7HA2azTYWq3vgEEie-Mrg&usqp=CAU',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image: 'https://w0.peakpx.com/wallpaper/847/528/HD-wallpaper-shawn-mendes-canadian-singer-portrait-hoot-popular-singers-canadian-celebrity-shawn-peter-raul-mendes.jpg',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bpg8SLnJx_5HK9tTQk_8-03vx10f-7Fbok2BH6wWcEaMv8VZi2l-tCnX72ybOQClOow&usqp=CAU',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image:'https://labuwiki.com/wp-content/uploads/2021/08/30-4.jpg',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image: 'https://pepperdine-graphic.com/wp-content/uploads/2023/03/Modernpopstar-22.jpg',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image:'https://coolmenshair.com/wp-content/uploads/15.jpg',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Roy-Lichtenstein1.jpg',
    },
    {
        name: 'Artist 1',
        genre: 'Abstract',
        dob: 'January 1, 1980',
        image:'https://i.pinimg.com/236x/80/6a/4e/806a4e0bd871a36704187a0b71b30802--ariana-grande-photoshoot-ariana-grande-sexy.jpg',
    }


  ];

  return (
    <div className=' min-h-screen mb-5 mx-8'>
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Artists Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">{artist.name}</h3>
                <p className="text-sm text-white">{artist.genre}</p>
                <p className="text-sm text-white">{artist.dob}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
    </div>
  );
};

export default ArtistsGallery;
