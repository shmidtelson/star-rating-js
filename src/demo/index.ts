import StarRating from "../lib";


const sr = new StarRating(document.getElementById('root'), {});
window.sr2 = new StarRating(document.getElementById('secondPlugin'), {
    currentRating: 4
});

