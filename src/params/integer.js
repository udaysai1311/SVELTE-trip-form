export function match(param){
    return /^\d+$/.test(param);
}

// catch all routes
// routes folder => create a folder or edit the existing [catch all route folder] as example-'[productId=integer]'