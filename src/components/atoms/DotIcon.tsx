import { HTMLAttributes } from "react";
import styled from "styled-components";
import Colors from "theme/Colors";

export const DotTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;

interface IDotIconProps extends HTMLAttributes<HTMLDivElement> {
    big?: boolean;
}

const DotIcon: React.FC<IDotIconProps> = styled.div`
    background: ${Colors.SECONDARY};
    width: ${(props: IDotIconProps) => props.big ? 8 : 5}px;
    height: ${(props: IDotIconProps) => props.big ? 8 : 5}px;
    border-radius: 50%;
    margin-right: 2.5px;
`;

export default DotIcon;