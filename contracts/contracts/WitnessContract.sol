// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WitnessContract {
    // Struct to represent a data entry
    struct DataEntry {
        address creator;
        string data;
        uint timestamp;
    }

    // Mapping to store data entries with a unique URL
    mapping(bytes32 => DataEntry) public dataEntries;

    // Event to log data entry creation
    event DataEntryCreated(bytes32 dataHash, address creator, string data, uint timestamp);

    constructor() {
        // Constructor to initialize the contract
    }

    // Function to create a new data entry
    function createDataEntry(string memory _data) public {
        bytes32 dataHash = keccak256(abi.encodePacked(_data));
        dataEntries[dataHash] = DataEntry(msg.sender, _data, block.timestamp);
        emit DataEntryCreated(dataHash, msg.sender, _data, block.timestamp);
    }

    // Function to retrieve data by its unique URL (dataHash)
    function retrieveDataEntry(bytes32 _dataHash) public view returns (address, string memory, uint) {
        DataEntry memory entry = dataEntries[_dataHash];
        require(entry.creator != address(0), "Data entry does not exist");
        return (entry.creator, entry.data, entry.timestamp);
    }

    // Function to check the evolution pattern of data
    // function checkEvolutionPattern(bytes32 _dataHash) public view returns (address[] memory, uint[] memory) {
    //     DataEntry memory currentEntry = dataEntries[_dataHash];
    //     require(currentEntry.creator != address(0), "Data entry does not exist");

    //     address[] memory creators;
    //     uint[] memory timestamps;

    //     while (currentEntry.creator != address(0)) {
    //         creators.push(currentEntry.creator);
    //         timestamps.push(currentEntry.timestamp);

    //         bytes32 nextDataHash = keccak256(abi.encodePacked(currentEntry.creator, currentEntry.data, currentEntry.timestamp - 1));
    //         currentEntry = dataEntries[nextDataHash];
    //     }

    //     return (creators, timestamps);
    // }
}
