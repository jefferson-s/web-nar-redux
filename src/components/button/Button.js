import React from 'react';

export default function Button({children, onClick}){
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}