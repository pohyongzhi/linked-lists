import { LinkedList } from "./LinkedList.mjs";

const list = new LinkedList();

// Append test
// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(list.print());

// Prepend test
// list.append("dog");
// list.prepend("cat");
// console.log(list.print());

// Size test
// console.log(list.size());
// list.append("dog");
// list.append("dog");
// list.append("dog");
// console.log(list.size());

// Head test
// console.log(list.head());
// list.append("dog");
// console.log(list.head());

// Tail test
// console.log(list.tail());
// list.append("cat");
// list.append("dog");
// list.append("mouse");
// console.log(list.tail());

// At test
// list.append("cat");
// list.append("dog");
// list.append("mouse");
// console.log(list.at(1))

// Pop test
// list.append("cat");
// list.append("dog");
// list.append("mouse");
// list.pop();
// console.log(list.print());

// Contains test
// list.append("cat");
// list.append("dog");
// console.log(list.contains("dog"));
// console.log(list.contains("sdf"));

// Find test
// list.append("cat");
// list.append("dog");
// console.log(list.find("dog"));
// console.log(list.find("sdf"));

// toString test
list.append("cat");
list.append("dog");
console.log(list.toString());
