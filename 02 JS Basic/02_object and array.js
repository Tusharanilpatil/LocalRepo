const actors = ["", "ankush", "chinmay","mahesh"]
const actress = ["pooja", "sara", "kajal", "sneha"]

 actors.push(actress)

 console.log(actors);
 console.log(actress[3][1]);

  const directors = actors.concat(actress)
  console.log(directors);

const all_new_directors = [...actors, ...actress]

console.log(all_new_directors);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Tushar"))
console.log(Array.from("Tushar"))
console.log(Array.from({name: "tushar"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));