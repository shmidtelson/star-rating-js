## Welcome to Star Rating Library

## Examples
<link href="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/@romua1d/star-rating-js@latest/build/index.min.js"></script>

<script type="text/javascript">
setTimeout(function () {
const StarRating = window.StarRating.default;

new StarRating(document.getElementById('example1'), {
    message: '56 votes',
});
new StarRating(document.getElementById('loading'), {
    loader: true,
});
new StarRating(document.getElementById('disabled'), {
    disabled: true,
});
}, 500);
</script>

### Example 1 (Message)
<div id="example1"></div>

### Example 2 (Loading)
<div id="loading"></div>

### Example 3 (Disabled)
<div id="disabled"></div>


## Options

```javascript
const options = {
  // How many stars has been chosen
  currentRating: 5,
  
  // Current color of stars. Hover color is automatically set Darker, for default value = #cc0000
  starsColor: '#ff0000',
  
  // Current color of text and border of infopanel. 
  textColor: '#848484', 
  
  // Current background color of infopanel
  infoPanelBackgroundColor: '#fff',
  
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

| Method | Description | Arguments |
| --- | --- | --- |
| `changeRatingValue(value)` | Change how many stars will check | 1-5 |
| `disable()` | Disable click events | - |
| `enable()` | Enable click events | - |
| `changeColor(hex)` | Change current color of widget. Hover color will set up automatic | hex value for example (#000) |
| `changeSize(size)` | Change current size of stars and text | Supports such as font-size |
| `changeLoader()` | Change state of widget to loading (Show spin) If was true it will set up to false and backward | - |
| `changeMessage(text)` |  Set up custom message in infopanel | Some text |

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
