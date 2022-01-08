import React from 'react';
import { Container } from './style';


const CustomTitle: React.FC = ({ children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default CustomTitle;