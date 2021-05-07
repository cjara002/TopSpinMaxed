//@ts-nocheck
import AWSAppSyncClient from "aws-appsync";
import { getTennisPlayer } from "./queries";
import { createTodo } from "./mutations";
import { title } from "node:process";

const client = null;

async function appLoaded() {
    client = new AWSAppSyncClient({
        url: 'https://ejd572rvtncjtjjaz24xywhgg4.appsync-api.eu-west-1.amazonaws.com/graphql',
        region: 'eu-west-1',
        auth:{
            type: 'API_KEY',
            apiKey: 'da2-m3nhh62nkvb5hbcraax5t66dni',
        }
    });
    
async function createTask(name: string, description: string) {
    const mutate = CreateTaskMutation
    let task = {
        title: title,
        date: new Date().toISOString().slice(0 , 10),
        description: description
    }
    client.mutate({ mutation: mutate, variables: { createtaskinput: task }})
    //..then(result)
}
}