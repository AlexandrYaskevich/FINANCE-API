import style from  "./style.module.css"
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (<div className={style.headermain}>
        <h1>FINANCE-APP</h1>
        <HeaderMenu />
    </div>);
}

export default Header;