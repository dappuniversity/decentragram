
pragma solidity ^0.5.0;


contract Decentrabook {


  string public name = "Decentrabook";
  

  //store Images
  uint public imageCount = 0;

  mapping(uint => Image) public images; 



  struct Image{

    uint id;
    string hash;
    string description;
    uint tipAmount;
    address payable author;
  }


  event ImageCreated(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  event ImageTipped(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  //Create Images 

  function uploadImage(string memory _imgHash, string memory _description) public{
    
    //Image Description is actually exists.
    require(bytes(_description).length > 0);
    //Image Hash is actually exists.
    require(bytes(_imgHash).length > 0);
    //Image sender is actually exists.
    require(msg.sender != address(0x0));
    //increae image id
    imageCount++;

    //Add images to contract
    images[imageCount] = Image(imageCount, _imgHash, _description, 0 , msg.sender);

    //Triger the event
    emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
  }

  //Reward Images

  function tipImageOwner(uint _id) public payable {
    require(_id > 0 && _id <= imageCount);
    //Fetch Image
    Image memory _image = images[_id];
    //Fetch author
    address payable _author = _image.author;
    //Paying the author 

    address(_author).transfer(msg.value);
    //Increace tip amount
    _image.tipAmount = _image.tipAmount + msg.value;
    //Update image
    images[_id] = _image;
    //trigger event
    emit ImageTipped(_id, _image.hash, _image.description, _image.tipAmount, _author);
  }



}