// Find the median of two sorted arrays
//  eg.

// arr1 = [1,3,5]
// arr2 = [2,4,6]

const arr = [2, 4, 6, 1, 9, 5];
const twoSum = (nums, target) => {
    /**
    * Loop through numbers add currentIndex through lenght of array , check if current+Next = target
    */
    for (var i = 0; i < nums.length; i++) {
        var currentValue = nums[i];
        for (var z = i + 1; z < nums.length; z++) {
            var nextValue = nums[z];
            if ((currentValue + nextValue) === target) {
                return [i, z];
            }
        }
    }
};

const linearTimeTwoSum = (nums, target) => {
    /**
     * Loop through numbers check the difference between target and currentValue (nuber @ index)
     * if (target - num) is a value in the map then you have found the two indices
     * if not add the value to the map
     */
    var dict = {};
    for (var i = 0; i < nums.length; i++) {
        /**
         * console.log(dict, 'check', dict[target-nums[i]]);
         * uncomment to see iterations
         */
        if (dict[target - nums[i]] != undefined) {
            return [dict[target - nums[i]], i];
        }
        dict[nums[i]] = i;
    }
}

const timeFunction = (name, callabck) => {
    var start = new Date();
    callabck();
    console.log(`${name} took ${new Date() - start}ms`);
}

timeFunction('Linear Time Two Sum Approach', () => console.log(linearTimeTwoSum(arr, 5)));


timeFunction('Regular Two Sum Approach', () => console.log(twoSum(arr, 5)));