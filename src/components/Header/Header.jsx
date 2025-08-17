import style from  "./style.module.css"
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {
    return (<div className={style.headermain}>
        <div>Header</div>
        <HeaderMenu />
    </div>);
}

export default Header;