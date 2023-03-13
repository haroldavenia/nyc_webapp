import styled from 'styled-components';

export const StyledActionsContainer = styled.div`
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
`;

export const StyledAction = styled.div`
    align-items: center;
    color: #1771b7;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 40px;
`;

export const StyledActionLabel = styled.p`
    font-size: 13px;
    margin: 5px 0;
    padding: 0;
`;

export const StyledAddressContainer = styled.div``;

export const StyledAddress = styled.div`
    color: gray;
    display: flex;
    flex-direction: column;
`;

export const StyledBoroughInfo = styled.div`
    align-items: center;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
`;

export const StyledCol = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const StyledContainer = styled.div`
    background-color: white;
    border: 1px solid lightGray;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 12px;
`;

export const StyledIconContainer = styled.div`
    flex-wrap: wrap;
    align-content: center;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
`;

export const StyledIconSection = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 50px;
    padding: 10px 20px 10px 10px;
`;

export const StyledInfo = styled.p`
    font-size: 14px;
`;

export const StyledInfoIconLabel = styled.p`
    color: #1771b7;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0 0 0;
    padding: 0;
`;

export const StyledLink = styled.a`
    color: #1771b7;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
`;

export const StyledPropertyInfoContainer = styled.div`
    padding: 20px 0;
`;

export const StyledRow = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const StyledStreet = styled.p`
    font-weight: bold;
    margin: 0;
    padding: 0;
`;

export const StyledValue = styled.p`
    color: ${(props) => (props.bold ? 'black' : 'gray')};
    font-size: 14px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
    margin: 0;
    padding: 0;
`;

export const StyledValueSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
