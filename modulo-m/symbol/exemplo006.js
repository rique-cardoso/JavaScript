const myIterable = {
    values: [10, 20, 30, 40],
    [Symbol.iterator](){
        let index = 0
        return{
            next: () => {
                if(index < this.values.length){
                    return {value: this.values[index++], done: false}
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

for (const value of myIterable){
    console.log(value) // 10, 20, 30, 40
} 