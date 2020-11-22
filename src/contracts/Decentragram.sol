pragma solidity ^0.5.0;

contract Decentragram {
  // All the business logic for the app is in this contract
  string public name = 'Decentragram';

  // Store Images
  /*
  Setting the imageCount to 0 is setting the mapping index of the first image to 0. Instead of getting an autoincremnting index, we have to increment it ourselves each time a new image is created. Those will be our IDs for images
  */
  uint public imageCount = 0;
  // Think of mapping as a hash map or object. It stores a key and a value
  // In this case the key is a uint (like an id) and the Image will be the value
  mapping(uint => Image) public images;

  struct Image {
    // This is like a model for each one of our posts. Think of it as a template
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

  // Create Images takes in all the params we defined in the struct to create a new image
  function uploadImage(string memory _imgHash, string memory _description) public {
    // images is the database we declare on line 10.
    // Each time a new image is created, its id is incremented by 1:
    imageCount ++;
    // The key is set to 1 below, and the value is a new Image instance
    // with all of the values that we're setting in the parens
    images[imageCount] = Image(imageCount, _imgHash, _description, 0, msg.sender);
    //Note: It's conventional to use _ before local function variables, but omit them for state variables.

    // This line triggers every time a new Image is uploaded.
    emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
  }

  // Tip Images
}
