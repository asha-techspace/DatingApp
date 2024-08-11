import React from "react";

function EditProfile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full w-4 h-4"></span>
          </div>
          <h2 className="text-xl font-semibold mt-4">Nazrul Islam</h2>
          <p className="text-gray-500">Never give up 💪</p>
        </div>
        <p className="mt-6 text-gray-700 text-center">
          All your account information can be accessed and edited here but your
          mail will still remain un-edited.
        </p>
        <form className="mt-4 space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="tel"
            placeholder="Phone Number"
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Bio"
            rows="3"
          ></textarea>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://via.placeholder.com/50"
                alt="Image1"
              />
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://via.placeholder.com/50"
                alt="Image2"
              />
              <button className="flex justify-center items-center w-10 h-10 border border-dashed border-gray-400 rounded-full text-gray-400">
                +
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://via.placeholder.com/50"
                alt="Reel1"
              />
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://via.placeholder.com/50"
                alt="Reel2"
              />
              <button className="flex justify-center items-center w-10 h-10 border border-dashed border-gray-400 rounded-full text-gray-400">
                +
              </button>
            </div>
          </div>

          <button
          type="submit"
          className="w-full bg-purple-800 text-white py-2 rounded-full hover:bg-purple-900 transition duration-200"
        >
          Update
        </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;