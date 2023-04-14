/* As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters. */
let regex=/^(https:\/\/www.linkedin.com\/in\/)+[a-zA-z0-9.!@#$%^&*-_]{5,30}/g
let url="https://www.linkedin.com/in/mohit-pal-867128247/"
if(regex.test(url)){
    console.log("valid linkedin profile url")
}else{
    console.log("invalid linkedin profilr url")
}
