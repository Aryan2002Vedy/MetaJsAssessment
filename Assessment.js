/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arrNFt = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColor,_shirtType,_bling) {
    const NFTobj = {
        "name":_name,
        "eyeColor":_eyeColor,
        "shirtType":_shirtType,
        "bling":_bling,
    }
    arrNFt.push(NFTobj)
    console.log("Minting Done for "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<arrNFt.length;i++){
        console.log("ID: "+(i+1));              
        console.log("\nName is: "+arrNFt[i].name);
        console.log("Eyecolor is: "+arrNFt[i].eyeColor);
        console.log("Shirt Type is: "+arrNFt[i].shirtType);
        console.log("Bling is: "+arrNFt[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFT's: "+arrNFt.length)
}

// call your functions below this line

mintNFT("Aryan","Brown","Formal","Ring")
mintNFT("Bob","Blue","Hoodie","Gold Chain")
listNFTs()
getTotalSupply()
