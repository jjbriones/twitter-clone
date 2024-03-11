import musk from "./images/musk.png";
import troll from "./images/troll.jpg";
import chucknorris from "./images/chucknorris.jpeg";
import tomCruise from "./images/tcruise.png";
import flower from "./images/flower.png";
import overflow from "./images/overflow.png";
import love from "./images/love.png";

export const tweetsData = [
  {
    handle: `@TrollBot66756542 💎`,
    profilePic: troll,
    likes: 27,
    retweets: 10,
    tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
    replies: [],
    isLiked: false,
    isRetweeted: false,
    uuid: "4b161eee-c0f5-4545-9c4b-8562944223ee",
  },
  {
    handle: `@Elon ✅`,
    profilePic: musk,
    likes: 6500,
    retweets: 234,
    tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
    replies: [
      {
        handle: `@TomCruise ✅`,
        profilePic: tomCruise,
        tweetText: `Yes! Sign me up! 😎🛩`,
      },
      {
        handle: `@ChuckNorris ✅`,
        profilePic: chucknorris,
        tweetText: `I went last year😴`,
      },
    ],
    isLiked: false,
    isRetweeted: false,
    uuid: "3c23454ee-c0f5-9g9g-9c4b-77835tgs2",
  },
  {
    handle: `@NoobCoder12`,
    profilePic: flower,
    likes: 10,
    retweets: 3,
    tweetText: `Are you a coder if you only know HTML?`,
    replies: [
      {
        handle: `@StackOverflower ☣️`,
        profilePic: overflow,
        tweetText: `No. Obviosuly not. Go get a job in McDonald's.`,
      },
      {
        handle: `@YummyCoder64`,
        profilePic: love,
        tweetText: `You are wonderful just as you are! ❤️`,
      },
    ],
    isLiked: false,
    isRetweeted: false,
    uuid: "8hy671sff-c0f5-4545-9c4b-1237gyys45",
  },
];
