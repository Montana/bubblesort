function BubbleSort(arrayToSort){
    const len = arrayToSort.length;

    for(let i = 0; i<len; i++){
        for(let j = 0;j< len; j++){
            if(arrayToSort[j] > arrayToSort[j+1]){
                let tempGreaterValue = arrayToSort[j];
                let tempMinorValue = arrayToSort[j + 1];
                arrayToSort[j] = tempMinorValue;
                arrayToSort[j + 1] = tempGreaterValue;
            }
        }   
    }
    return arrayToSort;
}
