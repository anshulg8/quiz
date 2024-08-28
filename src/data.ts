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
    {
        id: 10,
        title: "Descendants of the Sun",
        imageUrl: images["dots"],
    },
    {
        id: 11,
        title: "Alchemy of Souls",
        imageUrl: images["alchemy"],
    },
    {
        id: 12,
        title: "King the Land",
        imageUrl: images["kingtheland"],
    },
    {
        id: 13,
        title: "Squid Game",
        imageUrl: images["squid"],
    },
    {
        id: 14,
        title: "Business Proposal",
        imageUrl: images["businessproposal"],
    },
    {
        id: 15,
        title: "Goblin",
        imageUrl: images["goblin"],
    },
    {
        id: 16,
        title: "It's Okay to Not Be Okay",
        imageUrl: images["oknotok"],
    },
    {
        id: 17,
        title: "Vincenzo",
        imageUrl: images["vincenzo"],
    },
];
