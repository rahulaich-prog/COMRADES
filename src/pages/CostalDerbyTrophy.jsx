export default function CoastalDerbyTrophy({
  title = "COASTAL DERBY TROPHY",
  logoImage = "coastal_img.jpg",
  blocks = [
    { image: "img1.jpeg", caption: "TEAMS" },
    { image: "IMG2.jpeg", caption: "FIXTURES" },
    { image: "img3good.jpeg", caption: "AUCTION ROOM" },
  ],
  bgColor = "bg-blue-50",
  borderColor = "border-gray-800",
  textColor = "text-gray-800",
  
}) {
  return (
    <div className={`   ${bgColor} rounded-lg shadow-lg  ${borderColor}`}>
      {/* Header Section */}
      {/* Header Section */}
        <div className="mb-10 flex flex-col items-center">
        <div className="flex items-center gap-4 justify-center">
          {/* Round Logo Image with Blue Ring */}
          <div className="relative flex items-center justify-center w-24 h-24"> {/* Increased size */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
            <img
              src={"costal_img.jpeg"}
              alt="Logo"
              className="w-20 h-20 rounded-full object-cover" /* Increased size */
            />
          </div>
          <h2 className={`text-3xl font-bold tracking-wide text-gray-800 ${textColor}`}>
            {title}
          </h2>
        </div>
        <div className="h-1 w-32 bg-blue-600 mt-2"></div>
        </div>


      {/* Trophy Blocks Container - Horizontal Layout */}
      <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
        {blocks.map((block, index) => (
          <div 
            key={index}
            className="relative transition-all duration-300 hover:scale-105"
          >
            {/* Trophy Block */}
            <div className="w-64 h-80">
              {/* Block without 3D effects */}
              <div className={`bg-white border-2 ${borderColor} rounded-lg shadow-lg p-6 h-full`}>
                {/* Image */}
                <>
                <img
                  src={block.image}
                  alt={`Block ${index + 1}`}
                  className="w-full h-64 object-cover rounded"
                />
                <p className="text-center mt-2 text-lg font-semibold">
                  {block.caption}
                </p>
              </>

              </div>
            </div>
          </div>
        ))}
      </div>
     

      
    </div>
  );
}