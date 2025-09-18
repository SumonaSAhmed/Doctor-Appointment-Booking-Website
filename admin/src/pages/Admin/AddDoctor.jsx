import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");
  const [degree, setDegree] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("address1", address1);
      formData.append("address2", address2);
      formData.append("about", about);
      formData.append("degree", degree);
      formData.append("speciality", speciality);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));

      // console log formdata
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border border-gray-300 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-white rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>Upload Photo</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Dcotor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-gray-300 rounded px-3 py-2"
                type="text"
                placeholder="Enter Doctor Name"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Dcotor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-300 rounded px-3 py-2"
                type="email"
                placeholder="Enter Doctor Email"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Dcotor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-300 rounded px-3 py-2"
                type="password"
                placeholder="Enter Doctor Password"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Dcotor Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border border-gray-300 rounded px-3 py-2"
                type="text"
                placeholder="Address Line 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border border-gray-300 rounded px-3 py-2"
                type="text"
                placeholder="Address Line 2"
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Degree</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border border-gray-300 rounded px-3 py-2"
                type="text"
                placeholder="Enter Degree"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <input
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border border-gray-300 rounded px-3 py-2"
                type="text"
                placeholder="Enter Speciality"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Not selected</option>
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                <option value="5">5 Year</option>
                <option value="5+">5+ Year</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border border-gray-300 rounded px-3 py-2"
                type="number"
                placeholder="Enter Fees"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full border border-gray-300 rounded px-4 pt-2"
            placeholder="Write about doctor"
            rows={5}
            required
          />
        </div>

        <button
          type="Submit"
          className="bg-sky-700 text-white text-base px-10 py-2 mt-2 border rounded-full"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
