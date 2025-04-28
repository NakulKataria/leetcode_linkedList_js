/*You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function mergeList(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1) {
        tail.next = l1;
    }
    if (l2) {
        tail.next = l2;
    }
    return dummy.next;
}


/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {

if (lists.length === 0) return null;

    for (let i = 1; i < lists.length; i++) {
        lists[i] = mergeList(lists[i], lists[i - 1]);
    }
    return lists[lists.length - 1];

};