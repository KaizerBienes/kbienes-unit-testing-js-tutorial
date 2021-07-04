class Example4Zoo {
    getAllAnimals() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['Elephant', 'Bear', 'Giraffe']);
            }, 500)
        });
    }
}

module.exports = Example4Zoo;