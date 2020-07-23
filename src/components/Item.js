import React from 'react';

import styled from 'styled-components';

const ItemWrapper = styled.button`
    cursor: pointer;
    color: #fff;
    display: flex;
    width: 400px;
    padding: 10px 0;
    justify-content: space-between;
    border: none;
    text-align: left;
    border-bottom: 1px solid grey;
    background: transparent;
`;

const Name = styled.p`
    font-size: 1.4em;
    font-weight: bold;
`;

const Description = styled.p`
    color: grey;
`;

const Owned = styled.p`
    font-size: 2.5em;
`;

const Item = ({ name, cost, value, numOwned, handleItemClick }) => {
    return (
        <ItemWrapper onClick={handleItemClick}>
            <div>
                <Name>{name}</Name>
                <Description>Cost: {cost} cookies. Produces {value} cookie(s)/second.</Description>
            </div>
            <Owned>{numOwned}</Owned>
        </ItemWrapper>
    )
};

export default Item;