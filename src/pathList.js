/* The list of router paths */

export const pathNames = {
    Home: "/",
    Us: "/us",
    World: "/world",
    Sports: "/sports",
    Tech: "/tech",
    Business: "/business",
    Bitcoin: "/bitcoin"
};


// Enable load more button only for this types of news
export const loadMoreNewsPaths = [
    pathNames.Us,
    pathNames.World,
    pathNames.Tech,
    pathNames.Bitcoin
];

// right to left content like news in hebrew
export const rtlNewsPaths = [
    pathNames.Home,
    pathNames.Sports,
    pathNames.Business
];

export const pathList = [
    {
        type: "Home",
        path: pathNames.Home
    },
    {
        type: "US",
        path: pathNames.Us
    },
    {
        type: "World",
        path: pathNames.World
    },
    {
        type: "Sports",
        path: pathNames.Sports
    },
    {
        type: "Tech",
        path: pathNames.Tech
    },
    {
        type: "Business",
        path: pathNames.Business
    },
    {
        type: "Bitcoin",
        path: pathNames.Bitcoin
    }
];