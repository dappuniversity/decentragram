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

  event ImageTipped(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  // Create Images takes in all the params we defined in the struct to create a new image
  function uploadImage(string memory _imgHash, string memory _description) public {
    /*
    You can use require statements inside your functions to make sure that valid data is entered as an argument. Inside the require statement would be a statement that needs to evaluate to true for the rest of the function to run. If it evaluates to false, the second argument in the require statement is run. The require statement below makes sure that description is longer than 0.
    */
    // Make sure description lenght is greater than 0
    require(bytes(_description).length > 0);

    //Make sure the image hash exists
    require(bytes(_imgHash).length > 0);

    //Make sure the uploader address exists
    require(msg.sender != address(0x0));

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

  // Tip Image Authors
  // Note that we have to include the keyword 'payable' because this function will send cryptocurrency. It takes an id as an argument
  function tipImageOwner(uint _id) public payable {
    //Make sure the image is valid:
    require(_id > 0 && _id <= imageCount);

    // This line will fetch the image from storage (mapping):
    Image memory _image = images[_id];

    // We then send money to the author of the post using the built in .transfer() method
    address payable _author = _image.author;

    //We msg.value is the amount of crypto that is sent in from the person calling the tipImageOwner function.
    address(_author).transfer(msg.value);

    //This line increments the tip amount on the image
    _image.tipAmount = _image.tipAmount + msg.value;

    //This returns the image to the block chain in the images mapping
    images[_id] = _image;

    emit ImageTipped(_id, _image.hash, _image.description, _image.tipAmount, _author);
  }
}
