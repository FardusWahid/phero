'use client'
import Navbar from "@/components/nav";
import { FaHome } from "react-icons/fa";



import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const API_KEY = 'AIzaSyBRxPt8NOlqBUKrNvUtHeuCjs9Z3MWUzrs';
const playlistId = 'PLxRwi0lKBoQPFDXyJvd8GMi1q6xnsiYdE';
const videosPerPage = 9; 

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}&maxResults=150`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message || 'Failed to fetch data');
        }

        setVideos(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div>
     <Navbar/>
     <br /><br /><br /><br className="max-sm:hidden" />
     <p  className="left-5 w-[40px] mx-5 mt-1" ><a href="/profile"><FaHome color="black" size={20} /></a></p><h1 className='text-center font-bold font-sans text-lg text-blue-950 italic mt-1'>Module 2 </h1><br />
      

      {loading && <p className=" flex justify-center items-center text-black">Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="w-full h-full flex flex-wrap justify-center gap-5  ">
          {currentVideos.map(video => (
            <div key={video.id} className="card ring-1 ring-yellow-300  hover:ring-blue-700 md:w-[480px]">

              <section className='w-full flex justify-center '>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  controls={true}
                  width={isLargeScreen ? 475 : 350}
                  height={isLargeScreen ? 290 : 230}
                  lazy={true} 
                  light={true}
                 playing={true}
                 

                
                />

              </section>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center m-8 gap-4">
        {[...Array(Math.ceil(videos.length / videosPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 ring-1 ring-yellow-600 shadow-inner shadow-gray-600 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-sky-300 text-black'}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
