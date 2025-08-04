import React from 'react';

const DocumentCard = ({ image, title }) => {
  return (
    <div className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48">
      <div className="rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-28 sm:h-32 object-cover" />
      </div>
      <p className="text-center text-sm sm:text-base font-medium mt-2">{title}</p>
    </div>
  );
};

export default DocumentCard;
