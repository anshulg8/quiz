import images from './images';

export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
}

export const tvShowsAndMovies: Movie[] = [
    {
        id: 1,
        title: "Breaking Bad",
        imageUrl: images["bb"],
    },
    {
        id: 2,
        title: "The Big Bang Theory",
        imageUrl: images["tbbt"],
    },
    {
        id: 3,
        title: "Game of Thrones",
        imageUrl: images["got"],
    },
    {
        id: 4,
        title: "Friends",
        imageUrl: images["friends"],
    },
    {
        id: 5,
        title: "How I Met Your Mother",
        imageUrl: images["himym"],
    },
    {
        id: 6,
        title: "Parks & Recreation",
        imageUrl: images["pnr"],
    },
    {
        id: 7,
        title: "Rick & Morty",
        imageUrl: images["rickmorty"],
    },
    {
        id: 8,
        title: "Seinfeld",
        imageUrl: images["seinfeld"],
    },
    {
        id: 9,
        title: "The Office",
        imageUrl: images["theoffice"],
    },
];
