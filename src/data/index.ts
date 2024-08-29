import images from "../images";
import { bbData } from "./bb";
import { gotData } from "./got";
import { himymData } from "./himym";
import { friendsData } from "./friends";
import { tbbtData } from "./tbbt";
import { pnrData } from "./pnr";
import { seinfeldData } from "./seinfeld";
import { officeData } from "./office";
import { rnmData } from "./rnm";
import { dotsData } from "./dotsData";
import { alchemyData } from "./alchemy";
import { kingLandData } from "./kingLand";
import { goblinData } from "./goblin";
import { oknotokData } from "./oknotok";
import { vincenzoData } from "./vincenzo";
import { squidData } from "./squid";
import { businessPropData } from "./businessProp";
import { Question } from "../components/MovieQuiz";

export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  quizData: Question[];
}

export const tvShowsAndMovies: Movie[] = [
  {
    id: 1,
    title: "Breaking Bad",
    imageUrl: images["bb"],
    quizData: bbData,
  },
  {
    id: 2,
    title: "The Big Bang Theory",
    imageUrl: images["tbbt"],
    quizData: tbbtData,
  },
  {
    id: 3,
    title: "Game of Thrones",
    imageUrl: images["got"],
    quizData: gotData,
  },
  {
    id: 4,
    title: "Friends",
    imageUrl: images["friends"],
    quizData: friendsData,
  },
  {
    id: 5,
    title: "How I Met Your Mother",
    imageUrl: images["himym"],
    quizData: himymData,
  },
  {
    id: 6,
    title: "Parks & Recreation",
    imageUrl: images["pnr"],
    quizData: pnrData,
  },
  {
    id: 7,
    title: "Rick & Morty",
    imageUrl: images["rickmorty"],
    quizData: rnmData,
  },
  {
    id: 8,
    title: "Seinfeld",
    imageUrl: images["seinfeld"],
    quizData: seinfeldData,
  },
  {
    id: 9,
    title: "The Office",
    imageUrl: images["theoffice"],
    quizData: officeData,
  },
  {
    id: 10,
    title: "Descendants of the Sun",
    imageUrl: images["dots"],
    quizData: dotsData,
  },
  {
    id: 11,
    title: "Alchemy of Souls",
    imageUrl: images["alchemy"],
    quizData: alchemyData,
  },
  {
    id: 12,
    title: "King the Land",
    imageUrl: images["kingtheland"],
    quizData: kingLandData,
  },
  {
    id: 13,
    title: "Squid Game",
    imageUrl: images["squid"],
    quizData: squidData,
  },
  {
    id: 14,
    title: "Business Proposal",
    imageUrl: images["businessproposal"],
    quizData: businessPropData,
  },
  {
    id: 15,
    title: "Goblin",
    imageUrl: images["goblin"],
    quizData: goblinData,
  },
  {
    id: 16,
    title: "It's Okay to Not Be Okay",
    imageUrl: images["oknotok"],
    quizData: oknotokData,
  },
  {
    id: 17,
    title: "Vincenzo",
    imageUrl: images["vincenzo"],
    quizData: vincenzoData,
  },
];
