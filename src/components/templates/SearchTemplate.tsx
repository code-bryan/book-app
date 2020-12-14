import { IonContent, IonPage } from '@ionic/react';
import GenericToolbar from 'components/atoms/GenericToolbar';
import NoSearchMade from 'components/molecules/NoSearchMade';
import React from 'react';
import styled from 'styled-components';

const NoSearchContainer = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Cointainer = styled.div`
    margin: 15px 15px 0;
`;

export enum SearchTemplateMode {
    NOCONTENT,
    SEARCH,
    PREVIOUS
}

interface IProps {
    toolbar: React.ReactNode;
    mode?: SearchTemplateMode
    previusList: React.ReactNode
}

const SearchTemplate: React.FC<IProps> = ({ toolbar, mode, previusList }) => {
    return (
        <IonPage> 
            <GenericToolbar>
                {toolbar}
            </GenericToolbar>
            <IonContent fullscreen>
                {mode === SearchTemplateMode.NOCONTENT && (
                    <NoSearchContainer>
                        <NoSearchMade />
                    </NoSearchContainer>
                )}

                {mode === SearchTemplateMode.PREVIOUS && (
                    <Cointainer>
                        {previusList}
                    </Cointainer>
                )}
            </IonContent>
        </IonPage>
    );
}

SearchTemplate.defaultProps = {
    mode: SearchTemplateMode.NOCONTENT
}

export default SearchTemplate;