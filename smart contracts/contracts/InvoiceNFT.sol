// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./External/ERC721.sol";
import "./External/Counters.sol";
import "./External/SafeMath.sol";
import "./External/Ownable.sol";


contract InvoiceNFT is ERC721,Ownable {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    using SafeMath for uint256;   

    //address[] internal whitelistedUsers;

    uint256 public NumAddresses;

    address public stakingAddress;

    mapping(address => bool) internal IsWhitelisted;

    struct Invoice {

      address owner;
      string tokenURI;
      uint256 tokenId;
      uint256 InvoiceValue;
      uint256 LoanAmount;
      uint256 LoanPeriod;
    
    }
    
    mapping(uint256 => Invoice) private IdToInvoice;
    
    Invoice[] internal AllInvoices;

    address public operator;
    
    // token exist
    
    mapping(uint256 => bool) public exists;
    
    uint256[] public tokenIds;
    
    address InvoicePool;

    string private _tokenBaseURI;
    
  
   // constructor

    constructor () ERC721("Invoice","INVT") {}
    

    function setBaseURI(string memory _baseURI) public onlyOwner{
        _setBaseURI(_baseURI);
    }
    
    //  Minting a token
   
   function mint(
    
    string memory _tokenURI,
    uint256 _LoanAmount,
    uint256 _InvoiceValue,
    uint256 _LoanPeriod

   ) public returns (uint256) {

    require (IsWhitelisted[msg.sender] == true, "user not whitlisted");
    require (_LoanAmount > 0 , "enter valid amount");
    require (_InvoiceValue > 0, "enter valid value");
    require (_LoanPeriod > 0, "enter valid ");
    require (_InvoiceValue >= _LoanAmount);
       
       // Incrementing total supply
       
       _tokenIds.increment();
        
        uint256 _tokenId = _tokenIds.current();
       
       _mint(msg.sender, _tokenId);               // mint

       tokenURI(_tokenId);                        // setting tokenURI
       
       uint256 time = block.timestamp + (_LoanPeriod * 1 days);
       
       Metadata(msg.sender,_tokenURI,_tokenId,_InvoiceValue,_LoanAmount,time);

       exists[_tokenId] = true;                      
       
       return _tokenId;                         // tokenId of an nft 
    
    }
    
    
    function viewInvoiceById (uint256 _tokenId) public view returns (Invoice memory ) {

       Invoice memory c = IdToInvoice[_tokenId];

       require(exists[_tokenId]== true , " Invalid tokenId");

       return c;
    }

  
    function getAllInvoices() public view returns (Invoice[] memory)  {
        
        return AllInvoices;
        
    }

    function approve(address to, uint256 tokenId) public virtual override {
        address owner = ERC721.ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(
            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _approve(to, tokenId);

       // stakeContract.stakeNft(tokenId);
    }

    
    function setOperator(address _operator) public onlyOwner returns(bool) {
        require(_operator != address(0), "Operator: new operator is the zero address");
        operator = _operator;
       // emit operatorChanged(address(0),operator);
        return true;
    }

    //function setStakingAddress(address _stakeContract) public onlyOwner {
    //    setApprovalForAll(_stakeContract, true);
    //    stakeContract = _stakeContract;
    //  }


     function Metadata(
  
      address _owner,
      string memory _tokenURI,
      uint256 _tokenId,
      uint256 _InvoiceValue,
      uint256 _LoanAmount,
      uint256 _LoanPeriod
    
            
        ) internal {
            
            Invoice memory _Invoice  = Invoice ({
                
                owner : _owner,
                tokenURI : _tokenURI,
                tokenId:_tokenId,
                InvoiceValue:_InvoiceValue,
                LoanAmount:_LoanAmount,
                LoanPeriod:_LoanPeriod
                
            });
            
            IdToInvoice[_tokenId] = _Invoice;
            
            // updating array of AllInvoice   
            
            AllInvoices.push(_Invoice);
           
            // updating array of tokenIds
           
            tokenIds.push(_tokenId);
         
    }

    function Addwhitelist(address _user) public onlyOwner{

        require (_user != msg.sender, "self listing is not allowed");

        require( IsWhitelisted[_user] == false, "Already whitelisted");

        IsWhitelisted[_user] = true;

        NumAddresses++;

        //whitelistedUsers.push(_user);
    }

    function hasWhitelisted(address _user) external view returns (bool) {

        return IsWhitelisted[_user];
    }

    function deleteWhitlistedUser(address _user) public onlyOwner {

        require( IsWhitelisted[_user] == true, "Invalid user");

        NumAddresses--;

        IsWhitelisted[_user] = false;

    }
}      
    
    
    
    
    
    
    
    
    
    
    
    
  