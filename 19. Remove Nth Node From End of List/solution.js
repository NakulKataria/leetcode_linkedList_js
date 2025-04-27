/*Given the head of a linked list, remove the nth node from the end of the list and return its head.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1,head);
    let fast=dummy,slow=dummy;
  
    for (let i=0; i<=n;i++){
      fast=fast.next;
    }
  
    while(fast){
      fast=fast.next;
      slow=slow.next;
    }
    slow.next=slow.next.next;
  
    return dummy.next;
  };