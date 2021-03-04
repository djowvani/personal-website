import { StyledRightFrame, StyledName, StyledOccupation } from './RightFrame-styles'

const RightFrame = ({name, occupation}) => {
    return (
        <StyledRightFrame>
            <StyledName>{name}</StyledName>
            <StyledOccupation>{occupation}</StyledOccupation>
        </StyledRightFrame>
    );
}

export default RightFrame;