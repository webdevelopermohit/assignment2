/*a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.*/
let regex=/^(https:\/\/|http:\/\/)+[a-zA-Z0-9!.@#$%^&*_-]+(com)$/g;
let url="https://www.google.com"
if(regex.test(url)){
    console.log("valid url")
}else{
    console.log("invalid url")
}
