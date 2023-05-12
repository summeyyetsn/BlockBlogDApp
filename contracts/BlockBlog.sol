// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockBlog {
    
    struct BlogPost{
        uint postId;
        address owner;
        string post_uri;
        uint likes;
        uint createAt;
        bool isActive;
    }

    mapping (address => string) userProfile_uri; //uri where user information is stored in IPFS
    

    mapping(address => mapping(uint => bool)) public onReadingList; //mapping(user_wallet_address => mapping(postId => t/f)) public onReadingList;
    mapping(address => mapping(uint => bool)) public isFavorite;  //mapping(user_wallet_address => mapping(postId => t/f)) public isFavorite;

    uint private postCount; // number of blog posts created
    mapping(uint => BlogPost) public idToBlogPosts; 

    constructor() {
    }

    // @@@ EVENTS @@@
    event CreateBlogPost(uint id, address indexed owner, string uri);
    event LikeBlogPost(uint id, address indexed likeer, bool isLiked);
    event EditBlogPost(uint id, address indexed owner, string uri);
    event DeletBlogPost(uint id);
    event ListingStatusUpdated(uint id, address indexed owner, bool isActive);

    //@@@ MODIFIERS @@@
    modifier isExistBlogPost(uint postId){
        require(postId <= postCount, "Blog Post doesn't exist" );
        _;
    }

    modifier onlyOwner(uint postId){
        require(idToBlogPosts[postId].owner == msg.sender, "You do not own the blog post");
        _;
    }

    modifier notDeleted(uint _postId) {
        require(idToBlogPosts[_postId].postId != 0, "This blog post has been deleted.");
        _;
    }

   

    // @@@ BLOG POST FUNCTIONS @@@
    function createBlogPost(string calldata _postUri) public returns (uint) {
        postCount++;

        idToBlogPosts[postCount] = BlogPost({ //  we create an object and map that object
            postId: postCount,
            owner: msg.sender,
            post_uri: _postUri,
            likes: 0, 
            createAt: block.timestamp,
            isActive: true
        });

        emit CreateBlogPost(postCount, msg.sender, _postUri); 
        return postCount;
    }

    function likeBlogPost(uint _postId) public isExistBlogPost(_postId){
        if(isFavorite[msg.sender][_postId] == true) {
            idToBlogPosts[_postId].likes -= 1;
        } else {
            idToBlogPosts[_postId].likes += 1;
        }

        isFavorite[msg.sender][_postId] = !isFavorite[msg.sender][_postId];

        emit LikeBlogPost(_postId, msg.sender, isFavorite[msg.sender][_postId]);
    }

    function deleteBlogPost(uint _postId) public isExistBlogPost(_postId) onlyOwner(_postId){
        delete idToBlogPosts[_postId];
    }

    function updateListingStatus(uint _postId) public isExistBlogPost(_postId) onlyOwner(_postId) {
        idToBlogPosts[_postId].isActive = !idToBlogPosts[_postId].isActive;

        emit ListingStatusUpdated(_postId, msg.sender, idToBlogPosts[_postId].isActive);
    }

    function editBlogPost(uint _postId, string memory _postUri)public isExistBlogPost(_postId) onlyOwner(_postId){
        BlogPost storage post = idToBlogPosts[_postId];
        post.post_uri = _postUri;

        emit EditBlogPost(_postId, msg.sender, _postUri);
    }

    function orderCoffee( address payable _to) public payable {
        require(msg.value > 0);
        _to.transfer(msg.value); // Gönderilen Eth _to adresine transfer ediliyor
    }

    function updateReadingList(uint _postId) public isExistBlogPost(_postId) {
        onReadingList[msg.sender][_postId] = !onReadingList[msg.sender][_postId];
    }

    function getReadingList(address _reader) public view returns (uint[] memory) {
        uint readingListLength = 0;

        for(uint i = 1; i < postCount; i++) {
            if(onReadingList[_reader][i] == true) {
                readingListLength++;
            }
        }

        uint[] memory readingList = new uint[](readingListLength);
        uint currentIndex = 0;
        for(uint i = 1; i < postCount; i++) {
            if(onReadingList[_reader][i] == true) {
                readingList[currentIndex] = i;
                currentIndex++;
            }
        }

        return readingList;
    }

    function getUserPostList(address _userAddress) public view returns (uint[] memory) {
        uint userPostCount = 0;
        for (uint i = 1; i <= postCount; i++) {
            if (idToBlogPosts[i].owner == _userAddress && idToBlogPosts[i].isActive) {
                userPostCount++;
            }
        }

        uint[] memory postList = new uint[](userPostCount);
        uint currentIndex = 0;
        for (uint i = 1; i <= postCount; i++) {
            if (idToBlogPosts[i].owner == _userAddress && idToBlogPosts[i].isActive) {
                postList[currentIndex] = i;
                currentIndex++;
            }
        }

        return postList;
    }

    function getAllActivePosts() public view returns(BlogPost[] memory) {
        BlogPost[] memory postList = new BlogPost[](postCount); 
        uint currentIndex = 0;
        for(uint i = 1; i < postCount+1; i++) {
            if(idToBlogPosts[i].isActive == true) {
                postList[currentIndex] = idToBlogPosts[i];
                currentIndex++;
            }
        }
        return postList;
    }

    function getBlogPost(uint _postId) public view notDeleted(_postId) returns (uint, address, uint, uint, string memory){
        BlogPost memory post = idToBlogPosts[_postId]; //
        return (
            post.postId,
            post.owner,
            post.createAt,
            post.likes,
            post.post_uri
        );
    }
    function userProfileUri(string memory uri) public {
        userProfile_uri[msg.sender] = uri;
    }

    function getUserProfileUri(address userAddress) public view returns (string memory) {
        return userProfile_uri[userAddress];
    }

    
}