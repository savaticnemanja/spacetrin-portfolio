# Instructions on how to add tracks

1. Upload .webp image with the following naming convention to ./src/assets (eg. utopia-cover.webp)
2. Add the following image to index.js line inside ./src/assets (export { default as HomeBanner } from "./home-banner.webp";)
3. Import cover image and populate track information inside ./src/data/tracks.js (eg. down below)

import { **NEWTRACKCOVERNAME**, VenusCover, UtopiaCover, SleepItAwayCover, RealityCheckCover } from "../assets";
 
{
  id: 1,
  cover: VenusCover,
  name: "Venus",
  artists: "Spacetrin",
  spotify: "https://open.spotify.com/album/2A6prNRqa5D9sxM7m4Tx33",
  youtube: "https://www.youtube.com/watch?v=bgqh6lTRrK8",
  appleMusic: "https://geo.music.apple.com/album/venus-single/1730955577",
  soundcloud: "https://soundcloud.com/spacetrin/venus-1si=9d79f4916f55471f890f431401a9b01d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
},
