import { IonRange } from '@ionic/react';
import styled from 'styled-components';
import Colors from 'theme/Colors';

const PlayerRange = styled(IonRange)`
    --knob-size: 26px;
    --bar-height: 3px;
    --knob-background: ${Colors.PRIMARY};
    --bar-background: #D0D0D0;
    --bar-background-active: #3F3D56;
`;

export default PlayerRange;