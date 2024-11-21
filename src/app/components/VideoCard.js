import { FileVideo } from "lucide-react";

// Array of pastel background colors
const pastelColors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#D7BAFF",
  "#FFDFD3",
  "#F7B7A3",
  "#B3E5FF",
  "#B3FFE1",
];

// Function to determine color based on Video name
const getColorFromName = (name) => {
  const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return pastelColors[hash % pastelColors.length];
};

function VideoCard({ vid, openVid }) {
  const bgColor = getColorFromName(vid.name);

  return (
    <div
      onClick={() => openVid(vid)}
      className="inline-flex flex-col items-center gap-1 cursor-pointer group"
    >
      <div
        className="relative w-36 h-64 rounded-lg overflow-hidden" // Adjusted for 9:16 aspect ratio
        style={{
          backgroundImage: `url(${vid.thumbnail}), linear-gradient(${bgColor}, ${bgColor})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Background overlay with hover effect for darker hue */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition group-hover:bg-opacity-50"></div>

        {/* Video Duration */}
        <div className="absolute top-2 right-2 text-white text-xs">
          {vid.duration}
        </div>

        {/* Video name inside the card with background highlight */}
        <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium bg-black bg-opacity-60 px-2 py-1 rounded group-hover:underline group-hover:text-blue-300">
          {vid.name}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
