import React, { useState } from "react";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";


function MyComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        >
          <div className="m-28">
            <div className="mb-4 grid">
              <div className="flex flex-col">
                <h6 className="block antialiased font-press-start text-2xl text-primary font-black leading-normal uppercase text-nowrap">
                  Day of Lorem Ipsum
                </h6>
                <h5 className="mb-2 font-roboto-mono font-bold text-secondary text-xl uppercase leading-normal tracking-wide">06/08/2024</h5>
              </div>
              <div className="relative flex flex-col bg-clip-border bg-base-200 text-secondary shadow-md xl:col-span-2">
                <div className="bg-clip-border bg-transparent text-secondary shadow-none flex justify-between p-6">
                  <div>
                    <div className="artboard artboard-horizontal phone-1 flex flex-col items-center justify-center">568×320</div>
                  </div>

                  <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none font-roboto-mono font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">

                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                  <table className="w-full min-w-[640px] table-auto">

                    <tbody>

                    </tbody>
                  </table>
                </div>


              </div>
            </div>
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-3">

              <div className="relative flex flex-col bg-clip-border bg-base-200 text-secondary shadow-md">
                <div className="p-4">
                  <p className="block antialiased font-press-start text-xl text-primary font-black leading-normal uppercase">Loremipsum speed</p>
                  <h4 className="block antialiased font-roboto-mono tracking-wide font-roboto-mono text-md font-bold text-secondary">1123</h4>
                </div>
                <div className="border-t border-blue-gray-50 p-4">
                  <p className="block antialiased font-roboto-mono text-base leading-relaxed font-normal text-secondary">
                    <strong className="text-accent text-md uppercase">View more</strong>
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col bg-clip-border bg-base-200 text-secondary shadow-md">
                <div className="p-4">
                  <p className="block antialiased font-press-start text-xl text-primary font-black leading-normal uppercase text-nowrap">Lorem Users</p>
                  <h4 className="block antialiased tracking-wide font-roboto-mono text-md font-bold text-secondary">146477</h4>
                </div>
                <div className="border-t border-blue-gray-50 p-4">
                  <p className="block antialiased font-roboto-mono text-base leading-relaxed font-normal text-secondary">
                    <strong className="text-accent text-md uppercase">View more</strong>
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col bg-clip-border bg-base-200 text-secondary shadow-md">
                <div className="p-4">
                  <p className="block antialiased font-press-start text-xl text-primary font-black leading-normal uppercase">Lorem ipsum posts</p>
                  <h4 className="block antialiased tracking-wide font-roboto-mono font-bold text-md text-secondary">4.744.484.557</h4>
                </div>
                <div className="border-t border-blue-gray-50 p-4">
                  <p className="block antialiased font-roboto-mono text-base leading-relaxed font-normal text-secondary">
                    <strong className="text-accent text-md uppercase">View more</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-subgrid">
              <div className="relative flex flex-col bg-clip-border bg-base-200 text-secondary shadow-md overflow-hidden xl:col-span-2">
                <div className="relative bg-clip-border overflow-hidden bg-transparent text-secondary shadow-none m-0 flex items-center justify-between p-6">
                  <div>
                    <h6 className="block antialiased font-press-start text-xl text-primary font-black leading-normal uppercase">Loremipsum</h6>
                    <p className="antialiased font-roboto-mono text-md leading-normal flex items-center gap-1 font-normal text-secondary">
                      <strong></strong>
                    </p>
                  </div>
                  <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none font-roboto-mono font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                  <table className="w-full min-w-[640px] table-auto">
                    <thead>
                      <tr>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-roboto-mono text-[11px] font-bold uppercase text-secondary">boards</p>
                        </th>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-roboto-mono text-[11px] font-bold uppercase text-secondary">description</p>
                        </th>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-roboto-mono text-[11px] font-bold uppercase text-secondary">time</p>
                        </th>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-roboto-mono text-[11px] font-bold uppercase text-secondary">posts</p>
                        </th>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-roboto-mono text-[11px] font-bold uppercase text-secondary">number</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-roboto-mono text-md leading-normal text-primary font-bold underline">/b/</p>
                          </div>
                        </td>

                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-roboto-mono text-xs font-bold text-secondary">Lorem ipsum lorem ipsum Loremipsum lorem ipsum Loremipsum lorem ipsum.</p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-secondary">12/11/2024</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-accent">756</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-primary">123456789</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-roboto-mono text-md leading-normal text-primary font-bold underline">/b/</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-roboto-mono text-xs font-bold text-secondary">Lorem ipsum lorem ipsum Loremipsum lorem ipsum ipsum.</p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-secondary">12/11/2024</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-accent">623</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-primary">132457689</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-roboto-mono text-md leading-normal text-primary font-bold underline">/s/</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-roboto-mono text-xs font-bold text-secondary">Lorem ipsum lorem ipsum Loremipsum lorem ipsum Loremipsum Loremipsum lorem ipsum Loremipsum lorem ipsum.</p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-secondary">12/11/2024</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-accent">558</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-primary">112549056</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-roboto-mono text-md leading-normal text-primary font-bold underline">/n/</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-roboto-mono text-xs font-bold text-secondary">Lorem ipsum lorem ipsum Loremipsum lorem ipsum Loremipsum</p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-secondary">12/11/2024</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-accent">477</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-primary">143689460</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-roboto-mono text-md leading-normal text-primary font-bold underline">/a/</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-roboto-mono text-xs font-bold text-secondary">Lorem ipsum lorem ipsum Loremipsum lorem ipsum Loremipsum.</p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-secondary">12/11/2024</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-accent">431</p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-roboto-mono mb-1 block text-xs font-bold text-primary">125470826</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

