import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";
import {
  StyledWalletBox,
  StyledWalletBody,
  StyledWalletHeader,
  StyledWalletConnect,
  StyledWalletImage,
  StyledWalletContent,
  StyledContentTitle,
  StyledDate,
  StyledBlockBounty,
  StyledRemainNFTNumber,
  StyledRemainNFTDesc,
  StyledEthCounter,
  StyledEthNumber,
  StyledConnectButton,
  StyledPlusBtn,
  StyledMinusBtn,
  StyledDetailInfo,
  StyledInfoBlock,
  StyledInfoTitle,
  StyledMainContent,
} from "./styles";

import Text from "../../components/customs/Text";
import { contractAddress, contractAbi } from "./contractInfo";
import getWeb3 from "../../getWeb3";

const ConnectWallet = () => {
  const [tokencount, setTokencount] = useState(1);
  const [tokenprice, setTokenprice] = useState(0.9);
  const [connectState, setConnectState] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const onIncrease = () => {
    if (tokencount < 5) {
      setTokencount(tokencount + 1);
      setTokenprice(0.9 + tokenprice);
    }
  };

  const onDecrease = () => {
    if (tokencount > 1) {
      setTokencount(tokencount - 1);
      setTokenprice(tokenprice - 0.9);
    }
  };

  const connectMetamask = async () => {
    if (window.ethereum) {
      const web3 = new Web3(Web3.givenProvider);
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      let chainId = await web3.eth.getChainId();
      if (chainId !== 1) {
        toast.warning("Please switch to Ethereum main net.");
      }
      let accounts = await web3.eth.getAccounts();
      setWalletAddress(accounts[0]);
      setConnectState(true);
    } else {
      toast.error("Please install metamask to connect to this site.");
      setConnectState(false);
    }
  };

  const mint = async () => {
    const web3 = await getWeb3();

    const NervousNFTContract = new web3.eth.Contract(
      contractAbi,
      contractAddress
    );

    await NervousNFTContract.methods
      .mint(tokencount)
      .send({
        value: await web3.utils.toWei(tokenprice.toString(), "ether"),
        to: contractAddress,
        from: walletAddress,
      })
      .on("receipt", function (receipt) {
        toast.success("Success!");
      })
      .on("error", function (error) {
        console.log("error", error);
        toast.error(error);
      });
  };

  const handleClick = () => {
    if (connectState) mint();
    else connectMetamask();
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
    <>
      <StyledWalletConnect>
        <StyledWalletBox>
          <StyledWalletHeader>
            <Text fSize={20} fWeight={600} fColor="#6deae3">
              Fucking retard stop being annoying
            </Text>
          </StyledWalletHeader>
          <StyledWalletBody>
            <StyledMainContent>
              <StyledWalletImage>
                <img
                  src="https://images.rbxcdn.com/c83761712c58384892d63501cad3a1ee"
                  alt="img"
                />
              </StyledWalletImage>
              <StyledWalletContent>
                <StyledBlockBounty>
                  <StyledContentTitle>
                    <Text
                      mode="span"
                      fSize={32}
                      fColor="white"
                      fWeight={900}
                      lHeight={36}
                    >
                      LIMITED SALE
                    </Text>
                  </StyledContentTitle>
                  <StyledDate>
                    <Text
                      mode="span"
                      fSize={12}
                      fColor="#df7da3"
                      tSpacing={0.25}
                    >
                      NOVEMBER 30
                    </Text>
                  </StyledDate>
                </StyledBlockBounty>
                <StyledBlockBounty>
                  <StyledRemainNFTNumber>
                    <Text
                      mode="span"
                      fSize={24}
                      fWeight={700}
                      tAlign="center"
                      fColor="white"
                    >
                      772 / 777
                    </Text>
                  </StyledRemainNFTNumber>
                  <StyledRemainNFTDesc>
                    <Text mode="span" fSize={19} fWeight={900} fColor="white">
                      FAIR DISTRIBUTION
                    </Text>
                  </StyledRemainNFTDesc>
                  <StyledRemainNFTDesc>
                    <Text mode="span" fSize={14} fWeight={600} fColor="white">
                      Every NFT costs 0.09 ETH. There are no price tiers.
                    </Text>
                  </StyledRemainNFTDesc>
                </StyledBlockBounty>
                <StyledBlockBounty>
                  <StyledEthCounter>
                    <StyledMinusBtn
                      onClick={onDecrease}
                      token={tokencount}
                      disabled={tokencount === 1 ? true : false}
                    >
                      -
                    </StyledMinusBtn>
                    <Text mode="span" fSize={25} fWeight={600} fColor="white">
                      {tokencount}
                    </Text>
                    <StyledPlusBtn
                      onClick={onIncrease}
                      token={tokencount}
                      disabled={tokencount === 5 ? true : false}
                    >
                      +
                    </StyledPlusBtn>
                  </StyledEthCounter>
                </StyledBlockBounty>
                <StyledBlockBounty>
                  <StyledEthNumber>
                    <Text
                      mode="span"
                      fSize={24}
                      lHeight={36}
                      fWeight={900}
                      fColor="white"
                    >
                      Your a retard
                    </Text>
                    <Text mode="span" fSize={24} fWeight={700} fColor="#6deae3">
                      {Number(tokenprice).toFixed(1)} ETH
                    </Text>
                  </StyledEthNumber>
                </StyledBlockBounty>
                <StyledBlockBounty>
                  <StyledConnectButton onClick={handleClick}>
                    {!connectState ? "Connect Wallet" : "Mint Now"}
                  </StyledConnectButton>
                </StyledBlockBounty>
              </StyledWalletContent>
            </StyledMainContent>
            <StyledDetailInfo>
              <StyledInfoBlock>
                <StyledInfoTitle>
                  <Text mode="span" fSize={21} fWeight={700} fColor="#6deae3">
                    Limited Mint Date
                  </Text>
                </StyledInfoTitle>
                <Text mode="span" fSize={18} fWeight={400} fColor="#6deae3">
                  November 1 - 12am EST
                </Text>
              </StyledInfoBlock>
              <StyledInfoBlock>
                <StyledInfoTitle>
                  <Text mode="span" fSize={21} fWeight={700} fColor="#6deae3">
                    Supply
                  </Text>
                </StyledInfoTitle>
                <Text mode="span" fSize={18} fWeight={400} fColor="#6deae3">
                  777
                </Text>
              </StyledInfoBlock>
              <StyledInfoBlock>
                <StyledInfoTitle>
                  <Text mode="span" fSize={21} fWeight={700} fColor="#6deae3">
                    Price
                  </Text>
                </StyledInfoTitle>
                <Text mode="span" fSize={18} fWeight={400} fColor="#6deae3">
                  0.09 ETH
                </Text>
              </StyledInfoBlock>
              <StyledInfoBlock>
                <StyledInfoTitle>
                  <Text mode="span" fSize={21} fWeight={700} fColor="#6deae3">
                    Max
                  </Text>
                </StyledInfoTitle>
                <Text mode="span" fSize={18} fWeight={400} fColor="#6deae3">
                  5 per Wallet
                </Text>
              </StyledInfoBlock>
            </StyledDetailInfo>
          </StyledWalletBody>
        </StyledWalletBox>
      </StyledWalletConnect>
      <ToastContainer theme="dark" />
    </>
  );
};

export default ConnectWallet;
