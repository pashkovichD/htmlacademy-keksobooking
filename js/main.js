import {getOffers} from './data.js';
import {renderCards} from './card.js';
import {inActiveState, activeState} from './form.js';

const SIMILAR_OFFER_COUNT = 10;

// console.log(getOffers(SIMILAR_OFFER_COUNT));
renderCards(getOffers(SIMILAR_OFFER_COUNT));

inActiveState();
setTimeout(activeState, 5000);
