//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

//Como a premissa é o array estar ordenado
//podemos usar BST aqui
/**
 * @param {number[]} nums
 * @return {number}
 */
export function findMin(nums) {
    if (!nums?.length) return undefined;
    if (nums.length === 1) return nums[0];

    let left = 0;
    let right = nums.length - 1;
    //[4,5,6,7,0,1,2]
    //se a direita estiver maior que a esquerda, nao houve rotacao
    //retorna logo a esquerda
    if (nums[right] > nums[left]) return nums[left];

    while (nums[right] < nums[left]) {
        //Find the mid element
        const mid = left + Math.floor((right - left) / 2);

        //Se o item a direita for menor que a esquerda
        //achamos o menor
        if (nums[mid + 1] < nums[mid]) return nums[mid + 1];
        //Se o item atual for menor que o anterior
        //achamos o menor
        if (nums[mid] < nums[mid - 1]) return nums[mid];

        if (nums[mid] > nums[0]) left = mid + 1;
        else right = mid - 1;
    }
}
