import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-gradient-to-r from-purple-700/40 to-purple-900/30 backdrop-blur-lg border border-gray-700 rounded-2xl gap-5 shadow-lg transition-transform duration-300 hover:scale-105`}
    >
      {/* Notification Image */}
      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-purple-500 shadow-md">
        <img
          src={notification1}
          alt="Notification"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Notification Details */}
      <div className="flex-1 flex flex-col justify-center">
        <h6 className="mb-1 font-semibold text-lg text-white">{title}</h6>
        <p className="text-sm text-gray-300 italic">
          🚀 A new opportunity awaits you!
        </p>

        {/* Avatar Icons & Time */}
        <div className="flex items-center justify-between mt-2">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-8 h-8 border-2 border-gray-800 rounded-full overflow-hidden shadow-sm"
              >
                <img
                  src={item}
                  className="w-full h-full object-cover"
                  alt={`User ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-400">⏳ 1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
