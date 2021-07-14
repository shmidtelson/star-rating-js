## Welcome to Star Rating Library

## Examples
<link href="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.js"></script>

<script type="text/javascript">
setTimeout(function () {
const StarRating = window.StarRating.default;
const StarRatingInstance = new StarRating(document.getElementById('example1'));
}, 500);
</script>
<blockquote>
<div id="example1"></div>
</blockquote>

## Options

```javascript
const options = {
  // How many stars has been chosen
  currentRating: 5,
  
  // Current color of stars and text. Hover color is automatically set Ligher, for default value = #ff9999
  starsColor: '#ff0000',
  
  // Disable stars widget for click events
  disabled: false,
  
  // Size of stars and text. Supports such as font-size
  size: "16px",
  
  // Change state of widget to loading (Show spin)
  loader: false,
  
  // Set up custom message in infopanel
  message: '',
}
```
