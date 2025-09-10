import React from "react";
import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form>
      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" />
            <input type="file" id="doc-img" hidden />
            <p>Upload Doctor Picture</p>
          </label>
        </div>

        <div>
          <div>
            <div>
              <p>Dcotor Name</p>
              <input type="text" placeholder="Enter Doctor Name" requrired />
            </div>
            <div>
              <p>Dcotor Email</p>
              <input type="email" placeholder="Enter Doctor Email" requrired />
            </div>
            <div>
              <p>Dcotor Password</p>
              <input
                type="password"
                placeholder="Enter Doctor Password"
                requrired
              />
            </div>
            <div>
              <p>Dcotor Address</p>
              <input type="text" placeholder="Address Line 1" requrired />
              <input type="text" placeholder="Address Line 2" />
            </div>
          </div>

          <div>
            <div>
              <p>Education</p>
              <input type="email" placeholder="Enter Education" requrired />
            </div>
            <div>
              <p>Speciality</p>
              <input type="text" placeholder="Enter Speciality" requrired />
            </div>
            <div>
              <p>Experience</p>
              <select>
                <option value="">Not selected</option>
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                <option value="5">5 Year</option>
                <option value=">5">>5 Year</option>
              </select>
            </div>
            <div>
              <p>Fees</p>
              <input type="number" placeholder="Enter Fees" requrired />
            </div>
          </div>
        </div>

        <div>
          <p>About Doctor</p>
          <textarea placeholder="Write about doctor" rows={5} requrired />
        </div>

        <button className="bg-sky-700 text-white text-base px-10 py-2 border rounded-full">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
