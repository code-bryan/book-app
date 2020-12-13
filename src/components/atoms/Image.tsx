import { IonImg, IonThumbnail } from '@ionic/react';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface SharedProps {
    height?: number;
    width?: number;
}

const ImageContainer: React.FC<HTMLAttributes<HTMLIonThumbnailElement> & SharedProps> = styled(IonThumbnail)`
    --border-radius: 5px;
    height: ${(props: SharedProps) => props.height}px;
    width: ${(props: SharedProps) => props.width}px;
`;

const ImageContent = styled(IonImg)`
    width: 100%;
    height: 100%;
`;

interface IProps extends SharedProps {
    src: string;
}

const Image: React.FC<IProps> = ({ src, height, width }) => {
    return (
        <ImageContainer height={height} width={width}>
            <ImageContent src={src} />
        </ImageContainer>
    );
};

Image.defaultProps = {
    height: 140,
    width: 130,
};

export default Image;
