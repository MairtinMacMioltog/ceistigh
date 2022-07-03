import fifaWC from '../data/fifaWC.json' assert {type: 'json'};
import superBowl from '../data/superBowl.json' assert {type: 'json'};
import { difference } from './setOperations.mjs';

function occurences(tournament, state) {
    const frequencyMap = new Map();
    tournament.forEach((t) => {
        state.forEach((s) => {
            if (frequencyMap.has(t[s])) {
                frequencyMap.set(t[s], frequencyMap.get(t[s]) + 1);
            }
            else {
                frequencyMap.set(t[s], 1);
            }
        });

    });
    return new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));
};

function winnerHosts(tournament) {
    const frequencyMap = new Map();
    tournament.forEach((t) => {
        if (t.winner === t.country) {
            if (frequencyMap.has(t.winner)) {
                frequencyMap.set(t.winner, frequencyMap.get(t.winner) + 1);
            }
            else {
                frequencyMap.set(t.winner, 1);
            }
        }
    });
    return new Map([...frequencyMap.entries()].sort((a, b) => b[1] - a[1]));
}

function noWinFinalists(tournament) {
    const winnerSet = new Set(Array.from(occurences(tournament, ["winner"]).keys()));
    const loserSet = new Set(Array.from(occurences(tournament, ["loser"]).keys()));
    return difference(loserSet, winnerSet);
}

function attendance(tournament) {
    return tournament.sort((a, b) => a.attendance - b.attendance);
}

console.log("winner", occurences(fifaWC, ["winner"]));
console.log("loser", occurences(fifaWC, ["loser"]));
console.log("finalist", occurences(fifaWC, ["winner", "loser"]));
console.log("host", occurences(fifaWC, ["country"]));
console.log("city", occurences(fifaWC, ["city"]));
console.log("winning hosts", winnerHosts(fifaWC));
console.log("never won", noWinFinalists(fifaWC));
console.log("attendance", attendance(fifaWC));


console.log("winner", occurences(superBowl, ["winner"]));
console.log("loser", occurences(superBowl, ["loser"]));
console.log("finalist", occurences(superBowl, ["winner", "loser"]));
console.log("host", occurences(superBowl, ["state"]));
console.log("city", occurences(superBowl, ["city"]));
console.log("never won", noWinFinalists(superBowl));
console.log("attendance", attendance(superBowl));