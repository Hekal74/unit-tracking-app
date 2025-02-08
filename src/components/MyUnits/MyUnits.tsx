import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

interface Unit {
  status: string;
  image: string;
  title: string;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  price: string;
  dateAdded: string;
  actionText: string;
}

const MyUnits: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([
    {
      status: "Approved",
      image: "/public/assets/house-1.png",
      title: "Grand House Real Estate",
      location: "New Cairo, Egypt",
      rooms: 6,
      bathrooms: 3,
      area: 250,
      price: "13,500,000",
      dateAdded: "3/8/2022",
      actionText: "Assign a Broker",
    },
    {
      status: "Pending",
      image: "/public/assets/house-2.png",
      title: "Grand House Real Estate",
      location: "New Cairo, Egypt",
      rooms: 6,
      bathrooms: 3,
      area: 250,
      price: "13,500,000",
      dateAdded: "3/8/2022",
      actionText: "Edit",
    },
    {
      status: "Reserved",
      image: "/public/assets/house-3.png",
      title: "Grand House Real Estate",
      location: "New Cairo, Egypt",
      rooms: 6,
      bathrooms: 3,
      area: 250,
      price: "13,500,000",
      dateAdded: "3/8/2022",
      actionText: "Edit",
    },
    {
      status: "Rejected",
      image: "/public/assets/house-4.png",
      title: "Grand House Real Estate",
      location: "New Cairo, Egypt",
      rooms: 6,
      bathrooms: 3,
      area: 250,
      price: "13,500,000",
      dateAdded: "3/8/2022",
      actionText: "Edit",
    },
  ]);

  const handleDelete = (index: number) => {
    setUnits(units.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* تغيير اتجاه Flex لتكون عمودية على الشاشات الصغيرة وأفقية (row) على الشاشات المتوسطة والكبيرة */}
      <div className="container mx-auto flex flex-col md:flex-row">
        <SideBar />
        <div className="p-4 ml-0 md:ml-8 scrollbar-hide flex-1">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 style={{ color: "#494949" }} className="text-2xl font-bold">
              My Units
            </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 md:mt-0">
              Add Unit
            </button>
          </div>
          {units.map((unit, index) => (
            <UnitCard key={index} {...unit} onDelete={() => handleDelete(index)} />
          ))}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <span style={{ color: "#A2A7AF" }}>Showing {units.length} Units</span>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button className="px-3 py-1 bg-gray-300 rounded">1</button>
              <button className="px-3 py-1 bg-gray-300 rounded">2</button>
              <button className="px-3 py-1 bg-gray-300 rounded">3</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface UnitCardProps extends Unit {
  onDelete: () => void;
}

const UnitCard: React.FC<UnitCardProps> = ({
  status,
  image,
  title,
  location,
  rooms,
  bathrooms,
  area,
  price,
  dateAdded,
  actionText,
  onDelete
}) => {
  return (
    <div className="relative flex bg-white shadow-md rounded-lg overflow-hidden mb-4">
      {/* صورة الوحدة */}
      <img src={image} alt={title} className="w-1/3 rounded-lg object-cover" />

      {/* تفاصيل الوحدة */}
      <div className="flex flex-col justify-between p-4 w-2/3">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{location}</p>
          <div className="flex items-center gap-2 mt-2 text-gray-700">
            <span>🛏 {rooms} Rooms</span>
            <span>🛁 {bathrooms} Bathrooms</span>
            <span>📏 {area} m²</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className={`px-2 py-1 rounded text-white ${status === 'Approved' ? 'bg-green-500' : status === 'Pending' ? 'bg-yellow-500' : status === 'Reserved' ? 'bg-blue-500' : 'bg-red-500'}`}>
            {status}
          </span>
          <span style={{color:"#f27a7a"}} className=" text-xl font-bold mr-10">{price} EGP</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">Added {dateAdded}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-10">{actionText}</button>
        </div>
      </div>

      {/* زر الحذف يمتد بطول الكارد */}
      <button
        onClick={onDelete}
        className="absolute top-0 right-0 h-full bg-red-500 text-white w-12 flex items-center justify-center hover:bg-red-600 transition"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
}; export default MyUnits;
