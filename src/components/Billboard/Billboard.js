import { StyledBillboard } from './Billboard-styles'

const Billboard = ({children}) => {
    return (
        <StyledBillboard>
            {children}
        </StyledBillboard>
    );
}

export default Billboard;