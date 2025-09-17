import React, { useState } from "react";
import Image from "next/image";
import userImg from "../../public/icons/dummy.svg";

const orders = [
  {
    id: "#750",
    date: "6 Sept, 2023",
    total: "₹2,443.00 (5 Products)",
    status: "Processing",
  },
  {
    id: "#703",
    date: "24 May, 2023",
    total: "₹1,443.00 (3 Products)",
    status: "Completed",
  },
  {
    id: "#591",
    date: "20 Apr, 2023",
    total: "₹2,443.00 (5 Products)",
    status: "Completed",
  },
  {
    id: "#491",
    date: "12 Mar, 2023",
    total: "₹1,443.00 (3 Products)",
    status: "Completed",
  },
  {
    id: "#459",
    date: "2 Feb, 2023",
    total: "₹2,443.00 (5 Products)",
    status: "Completed",
  },
];

const allOrders = [
  ...orders,
  ...Array(10).fill({
    id: "#401",
    date: "21 Dec, 2022",
    total: "₹1,443.00 (3 Products)",
    status: "Completed",
  }),
];

export default function Profile() {
  const [tab, setTab] = useState<"profile" | "orders" | "settings">("profile");
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-[400px] mt-40  py-10 px-2 md:px-0 flex justify-center">
      <div className="w-full lg:w-10/12  mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 bg-white rounded-lg shadow p-4 h-fit">
          <h3 className="text-sm font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <button
                className={`flex items-center w-full px-3 py-2 rounded cursor-pointer ${
                  tab === "profile"
                    ? "bg-green-50 text-green-600 font-semibold"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setTab("profile")}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-3 py-2 rounded cursor-pointer ${
                  tab === "orders"
                    ? "bg-green-50 text-green-600 font-semibold"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setTab("orders")}
              >
                Order History
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full px-3 py-2 rounded cursor-pointer ${
                  tab === "settings"
                    ? "bg-green-50 text-green-600 font-semibold"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setTab("settings")}
              >
                Settings
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-50 text-red-500">
                Log out
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {tab === "profile" && (
            <div className="flex flex-col gap-6">
              {/* Profile Top */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* User Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                  <Image
                    src={userImg}
                    alt="User"
                    width={70}
                    height={70}
                    className="rounded-full mb-2"
                  />
                  <div className="font-semibold text-lg">Ramachandran</div>
                  <button className="text-green-600 text-sm mt-2 hover:underline">
                    Edit Profile
                  </button>
                </div>
                {/* Address Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-center">
                  <div className="text-xs text-gray-400 mb-1">
                    BILLING ADDRESS
                  </div>
                  <div className="font-semibold">Ramachandran</div>
                  <div className="text-md font-normal my-2 text-[#666666]">
                    44/2, West Street, Mambalam, Chennai, Tamil Nadu, India
                  </div>
                  <div className="text-md  text-black font-normal">
                    ramu456@gmail.com
                  </div>
                  <div className="text-md  text-black font-normal">
                    +91 123 456 6780
                  </div>
                  <button className="text-green-600 text-xs mt-2 hover:underline text-left">
                    EDIT ADDRESS
                  </button>
                </div>
                {/* Empty for spacing */}
                <div />
              </div>
              {/* Order History Table */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold">Recent Order History</div>
                  <button
                    className="text-green-600 text-sm hover:underline"
                    onClick={() => setTab("orders")}
                  >
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 bg-[#F2F2F2]">
                        <th className="py-2 px-2 text-left font-normal">
                          ORDER ID
                        </th>
                        <th className="py-2 px-2 text-left font-normal">
                          DATE
                        </th>
                        <th className="py-2 px-2 text-left font-normal">
                          TOTAL
                        </th>
                        <th className="py-2 px-2 text-left font-normal">
                          STATUS
                        </th>
                        <th className="py-2 px-2 text-left font-normal"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, idx) => (
                        <tr key={idx} className="font-normal">
                          <td className="py-2 px-2">{order.id}</td>
                          <td className="py-2 px-2">{order.date}</td>
                          <td className="py-2 px-2">{order.total}</td>
                          <td
                            className={`py-2 px-2 ${
                              order.status === "Completed"
                                ? "text-green-600"
                                : "text-gray-700"
                            }`}
                          >
                            {order.status}
                          </td>
                          <td className="py-2 px-2">
                            <button className="text-green-600 hover:underline text-sm">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {tab === "orders" && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-semibold mb-4">Order History</div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 bg-[#F2F2F2]">
                      <th className="py-2 px-2 text-left font-normal">
                        ORDER ID
                      </th>
                      <th className="py-2 px-2 text-left font-normal">DATE</th>
                      <th className="py-2 px-2 text-left font-normal">TOTAL</th>
                      <th className="py-2 px-2 text-left font-normal">
                        STATUS
                      </th>
                      <th className="py-2 px-2 text-left font-normal"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allOrders
                      .slice((page - 1) * 10, page * 10)
                      .map((order, idx) => (
                        <tr key={idx} className="">
                          <td className="py-2 px-2">{order.id}</td>
                          <td className="py-2 px-2">{order.date}</td>
                          <td className="py-2 px-2">{order.total}</td>
                          <td
                            className={`py-2 px-2 ${
                              order.status === "Completed"
                                ? "text-green-600"
                                : "text-gray-700"
                            }`}
                          >
                            {order.status}
                          </td>
                          <td className="py-2 px-2">
                            <button className="text-green-600 hover:underline text-sm">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <button
                  className="px-2 py-1 rounded hover:bg-gray-100"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  {"<"}
                </button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`px-3 py-1 rounded-full ${
                      page === p
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className="px-2 py-1 rounded hover:bg-gray-100"
                  disabled={page === 3}
                  onClick={() => setPage((p) => Math.min(3, p + 1))}
                >
                  {">"}
                </button>
              </div>
            </div>
          )}

          {tab === "settings" && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-semibold mb-4">Settings</div>
              <p className="text-gray-500 text-sm">
                Settings content goes here.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
