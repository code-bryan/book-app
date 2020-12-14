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

const Container = styled.div`
    margin: 15px 15px 0;
`;

const Section = styled.div`
    margin: 15px 0 0;
`;

export enum SearchTemplateMode {
    NOCONTENT,
    SEARCH,
    PREVIOUS
}

interface IProps {
    toolbar: React.ReactNode;
    mode?: SearchTemplateMode
    previusList: React.ReactNode;
    categoryTagList: React.ReactNode;
    collectionTagList: React.ReactNode;
    bookList: React.ReactNode;
}

const SearchTemplate: React.FC<IProps> = ({ toolbar, mode, previusList, categoryTagList, collectionTagList, bookList }) => {
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
                    <Container>
                        {previusList}
                    </Container>
                )}

                {mode === SearchTemplateMode.SEARCH && (
                    <>
                        <Section>
                            {categoryTagList}
                        </Section>

                        <Section>
                            {collectionTagList}
                        </Section>

                        <Section>
                            {bookList}
                        </Section>
                    </>
                )}
            </IonContent>
        </IonPage>
    );
}

SearchTemplate.defaultProps = {
    mode: SearchTemplateMode.NOCONTENT
}

export default SearchTemplate;