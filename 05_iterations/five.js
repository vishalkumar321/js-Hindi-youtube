const coding = ["js", "rb", "java", "py", "cpp"]

coding.forEach(function (val){
    console.log(val);
});

coding.forEach( (item) => {
    console.log(item); 
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})

myCoding.forEach( (item) =>{
    console.log(item.languageFileName);
})