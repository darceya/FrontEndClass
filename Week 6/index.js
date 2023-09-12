

function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x msut be a string'); 
    }
    return x + y;
}