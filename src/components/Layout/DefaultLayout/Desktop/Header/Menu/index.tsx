import React from 'react';
import { NavLink } from 'react-router-dom';
import {Container} from './styles'


const Menu: React.FC<any> = () => {
    return (
        <Container>
            <NavLink to='#'>Videos</NavLink>
            <NavLink to='#'>Characters</NavLink>
            <NavLink to='#'>Comics</NavLink>
            <NavLink to='#'>Movies</NavLink>
            <NavLink to='#'>Tv Shows</NavLink>
            <NavLink to='#'>Games</NavLink>
            <NavLink to='#'>News</NavLink>
            <NavLink to='#'>More</NavLink> 
        </Container>
    );
};

export default Menu;