<img align="center" width="230" src="https://i.imgur.com/iHgtvmg.png" />
<h2>Star Rating JavaScript Library</h2>
<blockquote>Simple Kit for organizing your star rating module</blockquote>

<div align="center">
<img src="https://badgen.net/npm/v/@romua1d/star-rating-js" alt="npm version" />
<img src="https://badgen.net/npm/dw/@romua1d/star-rating-js"  alt="" />
<img src="https://badgen.net/npm/license/@romua1d/star-rating-js" alt="" />
<img alt="Build Status" src="https://github.com/shmidtelson/star-rating-js/workflows/Build/badge.svg?color=green" />
<img alt="Publish Status" src="https://github.com/shmidtelson/star-rating-js/workflows/Publish/badge.svg?color=green" />
<img src="https://img.shields.io/david/shmidtelson/star-rating-js.svg" alt="" /> 
<img src="https://img.shields.io/david/dev/shmidtelson/star-rating-js.svg" alt="" />
<img src="https://api.dependabot.com/badges/status?host=github&repo=shmidtelson/star-rating-js" alt="" />
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
