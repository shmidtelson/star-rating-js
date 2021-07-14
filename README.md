 <div align="center">
    <img align="center" width="230" src="https://i.imgur.com/iHgtvmg.png" />
  <h2>Star Rating JavaScript Library</h2>
  <blockquote>Simple Kit for organizing your star rating module</blockquote>

<a href="https://www.npmjs.com/package/@romua1d/star-rating-js" rel="nofollow">
    <img src="https://camo.githubusercontent.com/84d2adc82d7053ecd748d7c4423fa83dc96e2629011fcdf1e42b29e06e25a9a0/68747470733a2f2f62616467656e2e6e65742f6e706d2f762f73696d706c652d6b6579626f6172643f636f6c6f723d626c7565" alt="npm version" data-canonical-src="https://badgen.net/npm/v/@romua1d/star-rating-js?color=blue" style="max-width:100%;">
  </a><a href="https://github.com/shmidtelson/star-rating-js/actions"><img alt="Build Status" src="https://github.com/shmidtelson/star-rating-js/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/shmidtelson/star-rating-js/actions"> <img alt="Publish Status" src="https://github.com/shmidtelson/star-rating-js/workflows/Publish/badge.svg?color=green" /></a> <img src="https://img.shields.io/david/shmidtelson/star-rating-js.svg" /> <a href="https://david-dm.org/shmidtelson/star-rating-js?type=dev"><img src="https://img.shields.io/david/dev/shmidtelson/star-rating-js.svg" /></a> <img src="https://api.dependabot.com/badges/status?host=github&repo=shmidtelson/star-rating-js" />

</div>

## Links

<a href="https://shmidtelson.github.io/star-rating-js/"><b>DOCs</b></a> | <a href="https://www.npmjs.com/package/@romua1d/star-rating-js"><b>NPM</b></a>

## 🚀 How to use

1. `npm install @romua1d/star-rating -D` or `yarn add @romua1d/star-rating -D`
2. connect library to your project
### npm

```
import StarRating from '@romua1d/star-rating';
const StarRatingInstance = new StarRating();
...
```

### self-host/cdn

```
<link href="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.js"></script>

const StarRating = window.StarRating.default;
const StarRatingInstance = new StarRating(document.getElementById('someId'));
...
```
