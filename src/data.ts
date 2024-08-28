export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
}
export const tvShowsAndMovies: Movie[] = [
    {
        id: 1,
        title: "Breaking Bad",
        imageUrl: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg",
    },
    {
        id: 2,
        title: "Stranger Things",
        imageUrl: "https://preview.redd.it/qfy83815x1z81.jpg?width=1080&crop=smart&auto=webp&s=8d276fdbd9ca93afee38a0d72e464ede0d7c9a24",
    },
    {
        id: 3,
        title: "Game of Thrones",
        imageUrl: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-89780,resizemode-75,msid-103219254/news/international/us/game-of-thrones-legends-release-date-what-we-know-so-far.jpg",
    },
    {
        id: 4,
        title: "The Dark Knight",
        imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
    },
];
