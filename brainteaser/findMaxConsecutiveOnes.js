var findMaxConsecutiveOnes = function(nums) {
    let onroll = false, counter, max = 0;

    for ( let i=0; i<nums.length; i++ ) {
        if ( nums[i] === 1 ) {
          counter++
        }
        if ( counter > max ) max = counter
        if ( nums[i] === 0 ) {
          counter = 0;
        }
    }
    return max;
};

findMaxConsecutiveOnes([1,0,1,1,0,1])
