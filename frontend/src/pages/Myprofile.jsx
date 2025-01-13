import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Myprofile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setEdit] = useState(false);

  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      formData.append("address", JSON.stringify(userData.address));
      if (image) {
        formData.append("image", image);
      } else {
        console.log("No image selected.");
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg flex flex-col gap-2 text-sm">
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 rounded opacity-75"
                src={
                  image
                    ? URL.createObjectURL(image)
                    : userData.image || assets.profile_pic
                }
                alt="Profile Image"
              />
              {!image && (
                <img
                  className="w-10 absolute bottom-12 right-12"
                  src={assets.upload_icon}
                  alt="Upload Icon"
                />
              )}
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img
            className="w-36 rounded outline-none border-none shadow-lg"
            src={userData.image || assets.profile_pic}
            alt="Profile Picture"
          />
        )}

        {isEdit ? (
          <input
            className="  bg-gray-50 text-xl font-medium max-w-60 mt-4 text-neutral-700"
            type="text"
            value={userData.name}
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        ) : (
          <p className="font-medium text-xl text-neutral-700 mt-4">
            {userData.name}
          </p>
        )}
        <hr className="bg-zinc-400 h-[1px] border-none" />
        <div>
          <p className="underline  text-neutral-500 mt-3">
            CONTACT INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Email id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-52 "
                type="text"
                value={userData.phone}
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, phone: e.target.value }));
                }}
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <p>
                <input
                  className="bg-gray-100 max-w-52 "
                  value={userData.address.line1}
                  onChange={(e) => {
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }));
                  }}
                  type="text"
                />
                <br />
                <input
                  className="bg-gray-100 max-w-52 "
                  value={userData.address.line2}
                  onChange={(e) => {
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }));
                  }}
                  type="text"
                />
                <br />
                <br />
              </p>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="underline  text-neutral-500 mt-3">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] mt-4 gap-y-2.5 text-neutral-700">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-100 max-w-52 "
                for="gender"
                name="gender"
                value={userData.gender}
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, gender: e.target.value }));
                }}
                id="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-52 "
                type="date"
                value={userData.dob}
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, dob: e.target.value }));
                }}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
        <div className="mt-5">
          {isEdit ? (
            <button
              className="border py-3 px-8 rounded-full bg-primary text-white outline-none hover:drop-shadow-lg hover: scale-110 hover:bg-sky-100 hover:text-gray-800 transition-all duration-300"
              onClick={updateUserProfileData}
            >
              Save Profile
            </button>
          ) : (
            <button
              className="border py-3 px-8 rounded-full bg-primary text-white outline-none hover:drop-shadow-lg hover: scale-110 hover:bg-sky-100 hover:text-gray-800 transition-all duration-300"
              onClick={() => setEdit(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default Myprofile;
