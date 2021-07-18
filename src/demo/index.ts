import StarRating from "../lib";

new StarRating(document.getElementById('root'), {
  starsColor: '#ff0000',
});

const sr2 = new StarRating(document.getElementById('change'), {
  currentRating: 4,
});

sr2.onChange = (e) => {
  console.log(e)
  console.log("I did it")
};

new StarRating(document.getElementById('loading'), {loader: true});
new StarRating(document.getElementById('message'), {message: '41 votes'});
new StarRating(document.getElementById('disabled'), {disabled: true});
new StarRating(document.getElementById('textcolor'), {message: '45 votes', textColor: "#000000"});
new StarRating(
  document.getElementById('textcolor'),
  {message: '100 votes', infoPanelBackgroundColor: "#ff9696"}
);
