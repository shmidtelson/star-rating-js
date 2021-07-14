## Welcome to Star Rating Library

## Examples
<link href="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.js"></script>

<script type="text/javascript">
setTimeout(function () {
const StarRating = window.StarRating.default;
const options = {
  message: '56 votes',
};

const StarRatingInstance = new StarRating(document.getElementById('example1'), options);
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

## Methods of instance
 Method | Description | Arguments
--- | --- | ---
`changeRatingValue(value)` | Change how many stars will check | 1-5 |
`disable()` | Disable click events      |   -
`enable()` | Enable click events|    - 
`changeColor(hex)` | Change current color of widget. Hover color will set up automatic | hex value for example (#000)
`changeSize(size)` | Change current size of stars and text | Supports such as font-size
`changeLoader()` | Change state of widget to loading (Show spin) | -
`changeMessage(text) ` |  Set up custom message in infopanel | Some text

## Events
### onChange(event)
```javascript
// Default change event. U can modify it and add your own logic
instance.onChange = (event) => {
  if (!e?.target?.dataset?.value) {
    return;
  }

  this.changeRatingValue(e.target.dataset.value);
}

```
