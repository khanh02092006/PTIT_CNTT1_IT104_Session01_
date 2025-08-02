const groupAnagrams = (words) => {
    const map = new Map();

    for (const word of words) {

        const sorted = word.split('').sort().join('');


        if (!map.has(sorted)) {
            map.set(sorted, []);
        }


        map.get(sorted).push(word);
    }


    return Array.from(map.values());
};


const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);

console.log(result);

