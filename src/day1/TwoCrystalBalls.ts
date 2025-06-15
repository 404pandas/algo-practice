export default function two_crystal_balls(breaks: boolean[]): number {
    // How did he know to jump by the square root of the length?
    // The idea is to minimize the number of jumps while ensuring that we can find the first break.
    // The square root jump strategy is a common approach in problems where you need to find a threshold or boundary condition.
    // By jumping in increments of the square root of the length, you can quickly narrow down the range where the first break occurs.
const jumpAmount = Math.floor(Math.sqrt(breaks.length));

let i = jumpAmount;
// Why this for loop?
// The loop is designed to find the first index where a break occurs.
// It starts at the jump amount and checks every jump amount index until it finds a break or exceeds the length of the array.

// Ask Dustin- Why the empty semicolon?

for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
        break;
    }
}

i -= jumpAmount; // Step back to the last index before the break

// What is j
// The variable j is used to iterate through the indices between the last jump and the current index i.
// It helps to perform a linear search in the range where the first break might occur.
for (let j=0; j< jumpAmount && i < breaks.length; ++j)  {
if (breaks[i]) {
    return i;
}
}