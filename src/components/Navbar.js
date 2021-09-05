import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
 

    <nav>
      <ul className="flex text-white font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
          <NavLink exact to="/" activeClassName="cursor-pointer text-orange-400">
            Inicio
          </NavLink>
        </li>
        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
          <NavLink exact to="/about" activeClassName="cursor-pointer text-orange-400">
            Acerca de
          </NavLink>
        </li>
        
        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
          <NavLink exact to="/teacher" activeClassName="cursor-pointer text-orange-400">
            Jugar
          </NavLink>
        </li>
        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
          <NavLink exact to="/contact" activeClassName="cursor-pointer text-orange-400">
            Contáctanos
          </NavLink>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
