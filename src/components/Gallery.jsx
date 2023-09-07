import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
   
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);


  return (
    <div>
  <div
    className="h-screen bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
    style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp3463443.jpg)' }}
  >
    <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-up">
      Welcome to the Gallery
    </h1>
    
  </div>

  <div  className="container mx-auto mt-20">
    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
      Art Gallery
    </h1>
    <div className="grid grid-cols-3 gap-3 ">
      <div className="relative" data-aos="zoom-in">
        <img src="https://wallpapercave.com/wp/wp3463443.jpg" alt="1" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center  text-xl text-gray-800">Sleepy Nest</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://img.freepik.com/free-photo/abstract-eye-portrait-young-women-elegance-generated-by-ai_188544-9712.jpg" alt="2" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center  text-xl text-gray-800">Wonder Eye </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Seasonal Rhym</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://img.freepik.com/premium-photo/generative-ai-illustration-lonely-umbrella-beach-with-table-sand-two-chairs_58460-15186.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Beach Go...</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Art of Man</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://e0.pxfuel.com/wallpapers/532/741/desktop-wallpaper-colorful-parrots-couple-laptop-full-background-and-parrot.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-gray-800">Love Nature</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className="relative" data-aos="zoom-in">
        <img src="https://w0.peakpx.com/wallpaper/186/15/HD-wallpaper-colorful-flowers-rings-art-bird-creative.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Magical Nature</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mnu8PiJPgC-d9nlXwR1e0tFW3qyXnG0N2A&usqp=CAU" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Fly High</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://wallpaperaccess.com/full/352114.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Brand!!! Logo</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://wallpaperaccess.com/full/338079.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Art Coo</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://wallpapers.com/images/hd/blue-tree-abstract-art-8evjk77kx5o15d9d.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Tree Sighs</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://i.pinimg.com/originals/01/c7/b4/01c7b40f534ae4a42114cdd09a2ca82e.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Rolex Melicious</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://steamuserimages-a.akamaihd.net/ugc/2017094601730975453/623984F67AC24B674DBAAF1D7DE86135EACED413/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex  flex-col space-x-7 items-center'>
            <p className="text-center text-gray-800">Scuba High</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://cdn2.pitchfork.com/longform/379/mastering-0-header-smaller.gif" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">The Enternal</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
      <div className=" relative" data-aos="zoom-in">
        <img src="https://img.etimg.com/thumb/msid-94844748,width-1015,height-761,imgsize-1180520,resizemode-8/prime/consumer/brahmastra-lacks-fire-still-can-this-astraverse-create-its-own-marvel-like-universe.jpg" alt="3" className="w-full h-full object-cover rounded-xl" />
        <div className="bg-white bg-opacity-75 absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className='flex flex-col space-x-7 items-center'>
            <p className="text-center text-xl text-gray-800">Great Ramayan</p>
            <button className="bg-blue-500 text-white  px-4 py-2 rounded mt-4">Like</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex">
    <div className="w-1/2 m-5" data-aos="fade-left">
      <img src="https://wallpaperaccess.com/full/206340.jpg" alt="4" className="w-full h-full object-cover rounded-xl" />
      <div className="bg-white bg-opacity-75 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className='f;ex flex-col'> 
          <p className="text-center text-xl text-gray-800">Geart Art</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Like</button>
        </div>
      </div>
    </div>
    <div className="w-1/2 m-5" data-aos="fade-right">
      <img src="https://wallpapercave.com/wp/wp3463443.jpg" alt="5" className="w-full" />
      <div className="bg-white bg-opacity-75 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className='flex flex-col'>
          <p className="text-center text-xl text-gray-800">Mind At Ease</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Like</button>
        </div>
      </div>
    </div>
  </div>  
    </div>
  )
}

export default Home