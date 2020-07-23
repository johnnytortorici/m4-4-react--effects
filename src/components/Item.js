import React from 'react';

import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: flex;
    width: 400px;
    padding: 10px 0;
    justify-content: space-between;
    border-bottom: 1px solid grey;
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

const Item = ({ name, cost, value, numOwned, handleClick }) => {
    return (
        <ItemWrapper>
            <div>
                <Name>{name}</Name>
                <Description>Cost: {cost} cookies. Produces {value} cookie(s)/second.</Description>
            </div>
            <Owned>{numOwned}</Owned>
        </ItemWrapper>
    )
};

export default Item;