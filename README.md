### Still there are some issues i need to figure them out !!

## This is a sample repository that demonstrates the continuos deployement magic through github actions

### Create a simple nodejs server and push it to github



### create an aws ec2 instance and clone the server into the machine and run it there locally 
    - git pull origin main         ## pm2 is a process maanger which lets our process runs even when we logput of the ece instance
    - npm install
    - pm2 kill
    - pm2 start index.js

### from now every time you push changes to your github you have to follow these steps manally in order to bring the latest changes into action.

### we are developers we should do tasks manually in order to automate one step is to create a deploy.sh file and store all the commands in it this is called shell scripting and you just have to run the .sh file so that it will decerease some of the manual tasks but still there is an issue that is we should everytime log into the server and then run this script right! so there is another simple line of code which makes this another some extent great that is adding this line

` `

### now we will see github actions 
