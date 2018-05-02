import styled from 'styled-components';
import * as styles from '../../ui/defaultStyles';

export const HomeContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 307px);
    padding: ${styles.paddingDefault};
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    button {
        flex: 1;
        align-self: stretch;
    }

    h1 {
        flex: 2;
    }

    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        flex-direction: column;

        h1 {
            display: none;
        }
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
