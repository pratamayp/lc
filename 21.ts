export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Fungsi untuk menggabungkan dua linked list yang sudah diurutkan
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return dummy.next;
}

// Fungsi untuk mengkonversi array menjadi linked list
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Testcase 1
let list1 = createLinkedList([1, 2]);
let list2 = createLinkedList([2, 3]);
let mergedList = mergeTwoLists(list1, list2);
