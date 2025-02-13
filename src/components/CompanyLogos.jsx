 

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} py-10`}>
      {/* Tagline */}
      <h5 className="text-center text-lg text-gray-400 font-semibold mb-6">
        Work Experience
      </h5>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Roadzen Pvt Ltd */}
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 p-4 bg-gray-900 rounded-xl shadow-md">
            <img
              src="/roadzenLogo.jpg"
              alt="Roadzen Pvt Ltd"
              className="max-w-full h-auto object-contain"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">Roadzen Pvt Ltd</p>
          <p className="text-xs text-gray-500">Process Executive (1.6 Years)</p>
        </div>

        {/* APS Matrix */}
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 p-4 bg-gray-900 rounded-xl shadow-md">
            <img
              src="/apsLogo.png"
              alt="APS Matrix"
              className="max-w-full h-auto object-contain"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">APS Matrix</p>
          <p className="text-xs text-gray-500">Web & App Developer (1 Year)</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
