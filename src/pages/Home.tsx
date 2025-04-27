import { Link } from 'react-router-dom';

import Toby from '../components/toby';
import Links from '../components/links';
import Dropdown from '../components/Dropdown';
import Langselect from '../components/langselect';



const Home = () => {
    return (
        <>
            <div className="border grid">
            <Toby />
            <Links />
            <Dropdown />
            <Langselect />
            <a className="button fill item pro1" href="https://confjuzen.github.io/booki/">BOOKI</a>
            <a className="button fill item pro2" href="https://confjuzen.github.io/Portfolio-architecte-sophie-bluel">PORTFOLIO DYNAMIC</a>
            <Link className="button fill item pro3" to="/graphics">MY GRAPHIC DESIGN</Link>
            <div className="item decription"></div>
        <div className="item2 progap"></div>
        </div>
     </>
    )
};

export default Home;