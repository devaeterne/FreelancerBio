import React, { Fragment, useState } from 'react';
import ListItem from "@mui/material/List";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Home style 4',
                link: '/home4'
            },
        ]
    }

]



const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className='mobail_menu'>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler}
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        to={item.link}>{item.title}</Link>
                                }
                                <li><Link to="about" spy={true} smooth={true} duration={500} offset={-80}>About</Link></li>
                                <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-80} >Projects</Link></li>
                                <li><Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contact</Link></li>
                                <li><Link to="blog" spy={true} smooth={true} duration={500} offset={-80}>Blog</Link></li>
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;