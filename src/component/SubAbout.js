import React from 'react';
import paper2 from '../images/wallpaper/paper2.jpg';
import login from '../images/login.jpg';

function SubAbout() {
  return (
    <div>
      <div className='flex flex-row flex-wrap-reverse justify-around m-5'>
        <div className='container-1 border rounded-lg lg:w-width1 lg:h-height1 mb-5'>
            <div className='flex flex-row items-center justify-around m-1'>
                <div className='w-40 border border-white rounded-full'>
                    <h1 className='text-Ared text-center font-Kenio font-bold text-size'>Net-Clone</h1>
                </div>
                <div className='m-2'>
                    <img src={login}
                    alt='paper2.jpg'
                    className='w-20 h-20 rounded-full object-cover'
                    />
                    <p className='text-white font-Croissant'>Admin:<span className='text-Ared font-Kenio'> Jay_Jay</span></p>
                </div>
            </div>
            <h2 className='text-center text-2xl text-white font-Kenio m-3'>Net-Clone Admin Over_view</h2>
            <div className='some-text'>
                <p className='text-white text-1xl m-3'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed vestibulum lorem sit amet justo interdum, at venenatis ipsum vestibulum. Nulla facilisi. 
                 Fusce eget tristique quam. Nullam non justo nec augue tincidunt auctor. Fusce quis vehicula velit. 
                 Suspendisse potenti. Proin consectetur volutpat purus, nec ultricies arcu luctus sed. 
                 Vivamus quis sem eu lectus volutpat vulputate. Pellentesque suscipit nunc eget purus aliquet, 
                 vel efficitur ex blandit. Aenean eget est vitae augue laoreet rhoncus. 
                 Nam bibendum justo sit amet orci cursus, a feugiat orci fringilla.

                Praesent non tincidunt justo, vel suscipit nulla. Curabitur et bibendum ligula. 
                </p>
            </div>
        </div>


        <div className='conatiner-2 w-width1 h-height1 relative mb-5'>
            <img src={ paper2 }
            alt='paper1'
            className='w-full h-full object-fill rounded-lg'
            />
            <div className='absolute z-10 top-36  bg-main opacity-70'>
            <h1 className='text-Ared text-center text-5xl font-Kenio font-bold mb-3'>Net-Clone</h1>
            <h1 className='text-white text-3xl font-Kenio text-center'>Welcome to Net-Clone: Your Gateway to Cinematic Adventure</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubAbout;
