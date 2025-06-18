// for in loop

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    console.log(key);   
}

for (const key in myObject) {
    console.log(myObject[key]);   
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);   
}

const programming = ["js", "rb", "java", "py", "cpp"]

for (const key in programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(programming[key]);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);           // does not give any output
    
}