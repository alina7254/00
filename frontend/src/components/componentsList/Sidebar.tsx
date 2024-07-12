import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={` overflow-auto fixed z-40 h-screen bg-primary transition-transform duration-300 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
      style={{ width: "250px", top: 70, left: 0,}}
    >
      <div id="dropdownList">
        <table className="table bg-primary table-pin-rows p-4">
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/a/ - Аниме</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                B
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/b/ - Бред</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                M
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/mov/ - Фильмы</td>
            </tr>
            <tr>
              <td className="text-nowrap text-white">/mu/ - Музыка</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                N
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">
                /ne/ - Животные и природа
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                P
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">
                /pr/ - Программирование
              </td>
            </tr>
            <tr>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                S
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/sp/ - Спорт</td>
            </tr>
            <tr>
              <td className="text-nowrap text-white">/sci/ - Наука</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                T
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/tv/ - Сериалы</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                U
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/un/ - Образование</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="text bg-primary subpixel-antialiased press-start-2p-regular font-bold text-lg text-white">
                V
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-white">/vg/ - Видеоигры</td>
            </tr>
            <td>
              <tr className="divider text-nowap text-white">Developer Hub</tr>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Sidebar;
