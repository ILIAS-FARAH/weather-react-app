import Place from './Place';
import Search from './Search';
import Settings from './Settings';
import Logo from './Logo';
import '../styles/components/Header.scss';

function Header() {
  return (
    <div className='Header'>
      <Logo />
      <Place />
      <Search />
      <Settings />
    </div>
  );
}

export default Header;
