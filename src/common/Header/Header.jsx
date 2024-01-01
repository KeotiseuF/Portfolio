import './Header.css';
import Lang from '../Lang/Lang.tsx';

function Header () {
    return (
        <div className='header'>
            <div className='dark-mode'></div>
            <Lang />
        </div>
    )
}

export default Header;