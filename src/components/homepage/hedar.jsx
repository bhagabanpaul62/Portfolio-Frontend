import localImage from "../../assets/image.jpg";

export const Header = () => {
  return (
    <>
      <header className="pt-5 fixed top-0 left-0 right-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  justify-between items-center h-16">
           
              <div className="flex-shrink-0 flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src={localImage}
                  alt="Logo"
                />
                <h1 className="text-lg font-bold">Bhagaban Paul</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex text-white ">
                <a
                  href="#"
                  className="text-gray-900 text-white hover:text-[#0015FF] px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-900 text-white hover:text-[#0015FF] px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-900 text-white hover:text-[#0015FF] px-3 py-2 rounded-md text-lg font-medium"
                >
                  Project
                </a>
                <a
                  href="#"
                  className="text-gray-900 text-white hover:text-[#0015FF] px-3 py-2 rounded-md text-lg font-medium"
                >
                    Services
                </a>
                <a
                  href="#"
                  className="text-gray-900 text-white hover:text-[#0015FF] px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </a>
              </div>
           
            <div>
                <button className="text-white bg-[#0015FF] hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                    Book a Call
                </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
