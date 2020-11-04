pragma solidity ^0.5.0;

contract Decentragram {
    string public name = "Decentragram";

    // Store Images
    uint256 public imageCount = 0;
    mapping(uint256 => Image) public images;

    struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
    }

    event ImageCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    event ImageTipped(
      uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    // Create Images
    function uploadImage(string memory _imgHash, string memory _description)
        public
    {
        // check if description exists
        // chcek if image hash exists
        // check if the address is not blank
        require(
            bytes(_description).length > 0 &&
            bytes(_imgHash).length > 0 &&
            msg.sender != address(0x0)
        );

        // increase the image count
        imageCount++;

        // add image to contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            msg.sender
        );

        // trigger the event
        emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
    }

    // Tip Images
    function tipImageOwner(uint _id) public payable {
      require(_id > 0 && _id <= imageCount);// make sure id is valid

      // fetch the image
      Image memory _image = images[_id];

      // fetch the author
      address payable _author = _image.author;

      // pay author by sending the ether
      address(_author).transfer(msg.value);

      // Increment the tip amount
      _image.tipAmount += msg.value;

      // update the image
      images[_id] = _image;

      // trigger the event
      emit ImageTipped(_id, _image.hash, _image.description, _image.tipAmount, _author);
    }
}
