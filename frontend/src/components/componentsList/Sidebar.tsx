import { useNavigate }  from "react-router-dom";
import { SidebarProps } from "../../hooks/types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  
  const handleClick = (board: string) => {
    navigate(`${board}`); 
  };
  
  return (
    <div
      className={`fixed z-40 bg-primary transition-transform duration-300 ${isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      style={{ width: "250px", top: 70, left: 0, height: "calc(100vh - 85px)", overflowY: "auto" }}
    >
      <div id="dropdownList">
        <table className="table">
          <tbody>
            <tr>
              <th className="font-press-start text-white uppercase">
                Random
              </th>
            </tr>
            <tr>
              <td className="p-0 text-xs text-white whitespace-nowrap">
                <ul>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/b")}>/b/ - Random</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/d")}>/d/ - Dirt warehouse</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/news")}>/news/ - News</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/zog")}>/zog/ - Conspiracy Theories</a></li>
                </ul>
              </td>
            </tr>
  
            <tr>
              <th className="font-press-start text-white uppercase">
                Art
              </th>
            </tr>
            <tr>
              <td className="p-0 text-xs text-white whitespace-nowrap">
                <ul>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/vg")}>/vg/ - Video Games</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/mov")}>/mov/ - Movies</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/anime")}>/anime/ - Anime</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/cul")}>/cul/ - Culture</a></li>
                </ul>
              </td>
            </tr>
  
            <tr>
              <th className="font-press-start text-white uppercase">
                Nature
              </th>
            </tr>
            <tr>
              <td className="p-0 text-xs text-white whitespace-nowrap">
                <ul>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/ne")}>/ne/ - Animals and Nature</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/em")}>/em/ - Other Countries</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/sex")}>/sex/ - Sex and Relationships</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/psy")}>/psy/ - Psychology</a></li>
                </ul>
              </td>
            </tr>
  
            <tr>
              <th className="font-press-start text-white uppercase">
                Science
              </th>
            </tr>
            <tr>
              <td className="p-0 text-xs text-white whitespace-nowrap">
                <ul>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/sci")}>/sci/ - Science</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/hw")}>/hw/ - Hardware</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/ai")}>/ai/ - Artificial intelligence</a></li>
                  <li><a className='btn btn-link no-underline text-white lowercase' 
                  onClick={() => handleClick("/un")}>/un/ - Education</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Sidebar;


