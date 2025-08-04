import React from 'react';
import DocumentCard from '../components/DocumentCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const documents = [
    { title: 'Power of Attorney', image: '/images/poa.jpg' },
    { title: 'Letter of Intent', image: '/images/loi.jpg' },
    { title: 'Contract', image: '/images/contract.jpg' },
    { title: 'Power of Attorney', image: '/images/poa.jpg' },
    { title: 'Letter of Intent', image: '/images/loi.jpg' },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar/>

      {/* Hero Section */}
      <div className="px-4 mt-4">
        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/court.jpg"
            alt="Courtroom"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="absolute mt-[-3.5rem] text-white font-semibold text-center w-full">
            <p>Buy legal documents, connect with lawyers,</p>
            <p>and get everything delivered – fast, easy, and verified</p>
          </div>
        </div>
      </div>

      {/* Property Section */}
      <section className="px-4 mt-8">
        <h2 className="text-lg sm:text-xl font-bold text-[#2c1000] mb-4">Property</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {documents.map((doc, idx) => (
            <DocumentCard key={idx} title={doc.title} image={doc.image} />
          ))}
        </div>
      </section>

      {/* Bottom Nav */}
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex bg-[#2c1000] text-white rounded-full overflow-hidden text-sm sm:text-base">
          {['Home', 'Talk to Lawyers', 'Cart', 'Blogs', 'Profile'].map((item) => (
            <button key={item} className="px-4 py-2 hover:bg-[#452300]">
              {item}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Home;
