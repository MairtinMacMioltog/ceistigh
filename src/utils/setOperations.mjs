export function union(setA, setB) {
    return new Set([...setA, ...setB]);
}

export function intersection(setA, setB) {
    return new Set(Array.from(setA).filter((n) => setB.has(n)));
}

export function difference(setA, setB) {
    return new Set(Array.from(setA).filter((n) => !setB.has(n)));
}

export function symmetricDifference(setA, setB) {
    return new Set([
        ...Array.from(setA).filter((n) => !setB.has(n)),
        ...Array.from(setB).filter((n) => !setA.has(n)),
    ]);
}
