export default function GallerySection({
  title = "GALLERY",
  blocks = [
    { image: "logo1.jpeg", caption: "ON-FIELD CLIPS" },
    { image: "logo2.jpeg", caption: "PICTURES" },
  ],
  bgColor = "bg-blue-50",
  borderColor = "border-gray-800",
  textColor = "text-gray-800",
}) {
  return (
    <div className={`py-10 ${bgColor}`}>
      {/* Gallery Header */}
      <div className="flex flex-col items-center mb-8">
        <h2 className={`text-3xl font-bold tracking-wide ${textColor}`}>
          {title}
        </h2>
        <div className="h-1 w-24 bg-blue-600 mt-2"></div>
      </div>

      {/* Gallery Blocks */}
      <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
        {blocks.map((block, index) => (
          <div key={index} className="transition-all duration-300 hover:scale-105">
            <div className="w-64 h-80">
              <div className={`bg-white border-2 ${borderColor} rounded-lg shadow-lg p-6 h-full`}>
                <img
                  src={block.image}
                  alt={`Gallery Block ${index + 1}`}
                  className="w-full h-64 object-cover rounded"
                />
                <p className="text-center mt-2 text-lg font-semibold">
                  {block.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}