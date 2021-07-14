import StarRating from "../lib";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
new StarRating(document.getElementById('root'), {});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const sr2 = new StarRating(document.getElementById('change'), {
  currentRating: 4,
});

sr2.onChange = (e) => {
  console.log(e)
  console.log("I did it")
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
new StarRating(document.getElementById('loading'), {loader: true});
new StarRating(document.getElementById('message'), {message: '41 votes'});
