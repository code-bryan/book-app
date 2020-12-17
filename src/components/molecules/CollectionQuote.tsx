import DotIcon, { DotTextContainer } from 'components/atoms/DotIcon';
import React from 'react';
import Text from 'components/atoms/Text';

interface IProps {
    big?: boolean;
}

const CollectionQuote: React.FC<IProps> = ({ children, big }) => {
    return (
        <DotTextContainer>
            <DotIcon big={big} />
            <Text color="secondary" size={big ? 15 : 11} weight={big ? "bold" : 600}>{children}</Text>
        </DotTextContainer>
    )
}

CollectionQuote.defaultProps = {
    big: false,
};

export default CollectionQuote;