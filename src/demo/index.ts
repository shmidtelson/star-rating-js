import StarRating from "../lib";
import {doc} from "prettier";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const sr = new StarRating(document.getElementById('root'), {});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const sr2 = new StarRating(document.getElementById('change'), {
  currentRating: 4,
});

sr2.onChange = (e) => {
  console.log(e)
  console.log("I did it")
};

const sr3 = new StarRating(document.getElementById('loading'), {loader: true});
