import styled from "styled-components";

export const StyledWalletConnect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6deae3;
  background: url("https://wallpapercave.com/wp/wp3284839.gif");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  font-family: Segoe UI;
`;

export const StyledWalletBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 70vw;
`;

export const StyledWalletHeader = styled.div`
  text-align: center;
  background-color: #17181a87;
`;

export const StyledWalletBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #17181a43;
  padding: 30px;
`;

export const StyledMainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWalletImage = styled.div`
  margin-right: 40px;
  img {
    width: 450px;
    height: 450px;
  }
`;

export const StyledWalletContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledBlockBounty = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  padding: 10px 0;
`;

export const StyledContentTitle = styled.div`
  margin-bottom: 10px;
`;

export const StyledDate = styled.div``;

export const StyledRemainNFTNumber = styled.div`
  margin-bottom: 10px;
`;

export const StyledRemainNFTDesc = styled.div``;

export const StyledEthCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPlusBtn = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? "#c7c7c5" : "#c7c7c5")};
  transition: all 0.2s;
  :hover {
    color: ${({ disabled }) => (disabled ? "white" : "#6234eb")};
    background-color: ${({ disabled }) => (disabled ? "#c7c7c5" : "#0e0438")};
  }

  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

export const StyledMinusBtn = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? "#c7c7c5" : "#c7c7c5")};
  transition: all 0.2s;
  :hover {
    color: ${({ disabled }) => (disabled ? "white" : "#6234eb")};
    background-color: ${({ disabled }) => (disabled ? "#c7c7c5" : "#0e0438")};
  }
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

export const StyledEthNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledConnectButton = styled.div`
  text-align: center;
  padding: 10px 28px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    color: #6234eb;
    background-color: #0e0438;
  }
  background: #c7c7c5;
  font-size: 20px;
  line-height: 36px;
  font-weight: 700;
  color: black;
`;

export const StyledDetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 0 15px;
`;

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInfoTitle = styled.div`
  margin-bottom: 5px;
`;
