/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0); // Dummy node
    let current = head; // Pointer for result list
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0; // Use 0 if l1 is null
        let y = (l2 !== null) ? l2.val : 0; // Use 0 if l2 is null
        let sum = x + y + carry; // Compute sum

        carry = Math.floor(sum / 10); // Calculate carry
        current.next = new ListNode(sum % 10); // Create new node
        current = current.next; // Move to next node

        // Move to next nodes only if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // If there's any carry left, add a new node
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return head.next; // Return the actual list (skip dummy node)
};