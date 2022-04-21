const InvoiceNFT = artifacts.require("InvoiceNFT");

const InvoicePool = artifacts.require("InvoicePool");

module.exports = async function (deployer) {

    await deployer.deploy(InvoiceNFT);
  
    const invoicenft = InvoiceNFT.address;
  
    await deployer.deploy(InvoicePool,invoicenft);
  
    
};