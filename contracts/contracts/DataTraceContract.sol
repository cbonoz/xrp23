// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DataTraceContract {
    // Struct to represent a data entry
    struct DataEntry {
        address creator;
        bytes32 dataHash;
        uint timestamp;
        uint version;
        string cid; // optional cid pointer to record/data.
        string notes; // optional notes
    }

    // owner
    address private owner;

    // General information
    string public name;
    string public description;
    // created at
    uint public createdAt = block.timestamp;

    // number of versions
    uint public versionCount = 0;

    // Mapping to store data entries with a unique URL
    mapping(bytes32 => DataEntry) public dataEntries;

    // Event to log data entry creation
    event DataEntryCreated(address creator, bytes32 dataHash, uint timestamp, uint versionCount, string notes);

    constructor(string memory _name, string memory _description, bytes32 _dataHash, string memory _cid, string memory _notes) {
        // Constructor to initialize the contract
        owner = msg.sender;
        name = _name;
        description = _description;
        createVersion(_dataHash, _cid, _notes);
    }

    // get owner
    function getOwner() public view returns (address) {
        return owner;
    }

    // Function to create a new data entry
    function createVersion(bytes32 _dataHash, string memory _cid, string memory _notes) public {
        // require owner and nonempty data hash
        require(msg.sender == owner, "Only owner can create data entry");
        require(_dataHash != "", "Data hash cannot be empty");
        // create new data entry and update version count
        versionCount++;
        DataEntry memory entry = DataEntry(msg.sender, _dataHash, block.timestamp, versionCount, _cid, _notes);
        dataEntries[_dataHash] = entry;
        emit DataEntryCreated( msg.sender, _dataHash, block.timestamp, versionCount, _notes);
    }

    // Function to retrieve data by its unique URL (dataHash)
    function validateVersion(bytes32 _dataHash) public view returns (DataEntry memory) {
        DataEntry memory entry = dataEntries[_dataHash];
        require(entry.creator != address(0), "Data entry does not exist");
        return entry;
    }

    // get metadata
    function getMetadata() public view returns (string memory, string memory, uint, uint, address) {
        return (name, description, versionCount, createdAt, owner);
    }


}
