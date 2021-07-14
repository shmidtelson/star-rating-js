import StarRating from "../lib";

new StarRating(document.getElementById('root'), {});

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
