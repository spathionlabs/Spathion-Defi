// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./External/Ownable.sol";
import "./External/Pausable.sol";
import "./External/ReentrancyGuard.sol";
import "./InvoiceNFT.sol";
import "./External/Counters.sol";

contract InvoicePool is Ownable,Pausable,ReentrancyGuard {

   using Counters for Counters.Counter;
   Counters.Counter public stakedNFTs;

   // NFT contract

   InvoiceNFT public nft;

   // amount of nfts staked by user

   mapping(address => uint256) amountOfnftstaked;

  // check if nft staked

  mapping(uint256 => bool) isStaked;

   // events

   event Staked(address indexed from, uint256 indexed tokenId, uint256 time);

   event unStaked(address indexed from, uint256 indexed tokenId, uint256 time);

  // constructor

   constructor(InvoiceNFT _nft) {

       nft = _nft;
   }
   
    // Stake Nft

    function stakeNft(uint256 id) external whenNotPaused nonReentrant {

        require (nft.ownerOf(id)== msg.sender,"Invalid transfer" );
        isStaked[id] == true ;
        IERC721(nft).transferFrom(msg.sender,address(this),id);
        stakedNFTs.increment();
        amountOfnftstaked[msg.sender] += 1;

        emit Staked( msg.sender,id,block.timestamp);


    }

    function unstakeNFT(uint256 id) public {
       
        require (nft.ownerOf(id)== msg.sender,"Invalid transfer" );
        IERC721(nft).transferFrom(address(this),msg.sender,id);
        stakedNFTs.decrement();
        amountOfnftstaked[msg.sender] -= 1;

        emit unStaked( msg.sender,id,block.timestamp);

    }

    
    

    
}

    






    





    


