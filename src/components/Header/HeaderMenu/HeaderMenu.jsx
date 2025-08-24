import style from  "./style.module.css"
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div>
        <nav className={style.navigation}>
            <li>
                <NavLink className={({isActive}) => isActive ? style.active : style.normal} to="">Main</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? style.active : style.normal} to="/stocks">Stocks</NavLink>
            </li>
        </nav>
        </div>
    )
}

export default HeaderMenu;