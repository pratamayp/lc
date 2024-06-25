import { ListNode } from './21';
// class ListNode {
//   val: number;
//   next: ListNode | null;

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// Contoh penggunaan
let list = new ListNode(1, new ListNode(1, new ListNode(2)));
deleteDuplicates(list);

console.log('a');
