// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract WitnessContract {
    // Struct to represent a data entry
    struct DataEntry {
        address creator;
        string data;
        uint timestamp;
        string cid; // optional cid pointer to record/data.
    }

    // owner
    address private owner;

    // General information
    string public name;
    string public description;
    // created at
    uint public createdAt = block.timestamp;

    // number of evolutions
    uint public evolutionCount;

    // Mapping to store data entries with a unique URL
    mapping(bytes32 => DataEntry) public dataEntries;

    // Event to log data entry creation
    event DataEntryCreated(bytes32 dataHash, address creator, string data, uint timestamp);

    constructor(string memory _name, string memory _description, string memory _data, string memory _cid) {
        // Constructor to initialize the contract
        owner = msg.sender;
        name = _name;
        description = _description;
        createDataEntry(_data, _cid);
    }

    // get owner
    function getOwner() public view returns (address) {
        return owner;
    }

    // Function to create a new data entry
    function createDataEntry(string memory _data, string memory _cid) public {
        require(bytes(_data).length > 0, "Data cannot be empty");
        // owner
        require(msg.sender == owner, "Only owner can create data entry");
        bytes32 dataHash = keccak256(abi.encodePacked(_data));
        dataEntries[dataHash] = DataEntry(msg.sender, _data, block.timestamp, _cid);
        emit DataEntryCreated(dataHash, msg.sender, _data, block.timestamp);
        evolutionCount++;
    }

    // Function to retrieve data by its unique URL (dataHash)
    function validateDataEntry(bytes32 _dataHash) public view returns (DataEntry memory) {
        DataEntry memory entry = dataEntries[_dataHash];
        require(entry.creator != address(0), "Data entry does not exist");
        return entry;
    }

    // get metadata
    function getMetadata() public view returns (string memory, string memory, uint, uint) {
        return (name, description, evolutionCount, createdAt);
    }


}
