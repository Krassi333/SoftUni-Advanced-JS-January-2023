function createSortedList() {
    return {
        listOfNumbers: [],
        add: function (element) {
            this.listOfNumbers.push(element);
            this.listOfNumbers.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (this.listOfNumbers[index] != undefined) {
                this.listOfNumbers.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (this.listOfNumbers[index] != undefined) {
                return this.listOfNumbers[index];
            }
        },
        size: 0
    }
}


let list = createSortedList();
//list.add(5);
//list.add(6);
//list.add(7);
//console.log(list.get(1));
//list.remove(1);
console.log(list.size);