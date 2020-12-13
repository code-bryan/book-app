import { IonSlides } from '@ionic/react';
import React from 'react';

const options = { slidesPerView: 'auto', zoom: false, grabCursor: true };

interface IProps {
    paddingSize?: number;
};

const HorizontalScrollList: React.FC<IProps> = ({ children, paddingSize }) => (
    <IonSlides 
        style={{ width: '100%', paddingLeft: paddingSize, paddingRight: paddingSize }} 
        options={options}
        mode="ios"
    >
        {children}
    </IonSlides>
);

HorizontalScrollList.defaultProps = {
    paddingSize: 0,
}

export default HorizontalScrollList;