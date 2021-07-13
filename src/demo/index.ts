import StarRating from "../lib";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const sr = new StarRating(document.getElementById('root'), {});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let sr2 = new StarRating(document.getElementById('secondPlugin'), {
  currentRating: 4,
});

sr2.onChange = (e) => {
  console.log(e)
  console.log("I did it")
}

