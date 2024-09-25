// src/Pages/Registration.js
import React from 'react';

const Registration = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-left w-full px-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
          />
        </svg>
        <a
          href="https://docs.google.com/forms/d/12zO6Goapr6MlOti3zXSeXXHwxCjkBe6UrHpI-hNrWBw/edit"
          className="text-2xl font-bold text-muted-foreground hover:text-blue-500"
        >
          <span>Attendees Registration Form</span>
        </a>
      </div>
      <div className="p-6 bg-background text-foreground">
        <h2 className="text-3xl font-bold mb-4 ml-10">
          Guest Room Charges are as follows without Mess facilities:
        </h2>

        <div className="overflow-x-auto p-10 my-8 mx-auto ">
          <table className="min-w-full max-w-xxl w-full border border-gray-300 text-base hover:text-xl">
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1/2 px-12 py-8 text-left font-bold text-lg border-b">Room Type</th>
                <th className="w-1/2 px-12 py-8 text-left font-bold text-lg border-b">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-12 py-8 border-b">
                  Single seated furnished guest room common WC
                </td>
                <td className="px-12 py-8 border-b font-semibold">
                  Rs. 200/- + 12% GST per day.
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-12 py-8 border-b">
                  Single seated furnished guest room attached WC
                </td>
                <td className="px-12 py-8 border-b font-semibold">
                  Rs. 350/- + 12% GST per day.
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-12 py-8 border-b">
                  Double seated furnished guest room common WC
                </td>
                <td className="px-12 py-8 border-b font-semibold">
                  Rs. 400/- + 12% GST per day.
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-12 py-8 border-b">
                  Double seated furnished guest room attached WC
                </td>
                <td className="px-12 py-8 border-b font-semibold">
                  Rs. 700/- + 12% GST per day.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default Registration;
