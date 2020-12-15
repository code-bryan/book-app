import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

interface SharedProps {
    color?: string;
}

const Button: React.FC<HTMLAttributes<HTMLButtonElement> & SharedProps> = styled.button`
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    font-weight: 500;
    font-size: 13px;
    outline: none;

    &.fill {
        background: ${(props: SharedProps) => props.color};
        height: 40px;
    }

    &.outline {
        height: 38px;
        background: ${Colors.WHITE};
        border-color: ${(props: SharedProps) => props.color};
        color: ${(props: SharedProps) => props.color};
        border-width: 2px;
        border-style: solid;
    }
`;

const IconContainer = styled.div`
    margin-right: 3px;
`;

export enum ActionButtonMode {
    FILL = 'fill',
    OUTLINE = 'outline'
}

interface IProps extends SharedProps {
    icon?: React.ReactNode;
    title: string;
    mode?: ActionButtonMode;
}

const ActionButton: React.FC<IProps> = ({ icon, title, mode, ...props }) => {
    return (
        <Button {...props} className={`${mode}`}>
            {icon && (
                <IconContainer>
                    {icon}
                </IconContainer>
            )}
            {title}
        </Button>
    );
};

ActionButton.defaultProps = {
    mode: ActionButtonMode.FILL,
    color: Colors.SECONDARY
}

export default ActionButton;