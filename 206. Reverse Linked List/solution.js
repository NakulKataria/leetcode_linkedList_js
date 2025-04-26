/*Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev=null;
    let current=head;
    let next=null;

    while(current){
        next=current.next;//keeping track of next node
        current.next=prev;//reverse linking of next(overriding current.next for prev element)
        prev=current;//keeping track for prev element
        current=next;//updating current for loop
    }

    head=prev;//updatig head for new list

    return head;
    
};