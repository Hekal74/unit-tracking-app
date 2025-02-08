const SideBar = () => {
  return (
    <div className="w-full md:w-60 h-auto md:h-screen ml-0 md:ml-20 flex flex-col p-6 space-y-3">
      <button className="w-full bg-gray-100 text-blue-600 font-medium px-4 py-2 text-left rounded-xl border border-transparent hover:border-blue-600">
        My Account
      </button>

      <button className="w-full bg-gray-100 text-blue-600 font-medium px-4 py-2 text-left rounded-xl border border-transparent hover:border-blue-600">
        ● My Units
      </button>

      <button className="w-full bg-gray-100 text-blue-600 font-medium px-4 py-2 text-left rounded-xl border border-transparent hover:border-blue-600">
        My Reservations
      </button>
    </div>
  );
};

export default SideBar;
