import React from 'react';
import { NavLink } from 'react-router-dom';
import { KNOWLEDGE_DATA, CATEGORIES } from '../data/knowledge';
import * as Icons from 'lucide-react';
import './LNB.css';

const LNB = ({ isMenuOpen }) => {
    return (
        <nav className={`lnb ${isMenuOpen ? 'is-open' : ''}`}>
            <div className="lnb-content scroll-thin">
                {CATEGORIES.map((cat) => {
                    const catItems = KNOWLEDGE_DATA.filter(item => item.mainTheme === cat.name);
                    if (catItems.length === 0) return null;

                    return (
                        <div key={cat.id} className="lnb-section">
                            <div className="section-label">{cat.name}</div>
                            <ul className="nav-list">
                                {catItems.map((item) => (
                                    <li key={item.id}>
                                        <NavLink
                                            to={`/detail/${item.id}`}
                                            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                                        >
                                            <span>{item.enTitle}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default LNB;
