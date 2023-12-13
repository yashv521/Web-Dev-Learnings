let ask = prompt('What you want to do ?')
const arr = [];

while( ask !== 'quit')
{
    if(ask === 'new'){
        const newTodo = prompt('Enter new item');
        arr.push(newTodo);
        console.log(`${newTodo} added to list`)
    
    }
    else if(ask === 'list') {
        console.log('*****');
        for(let i=0;i<arr.length;i++){
            console.log(` ${i} : ${arr[i]}`);
        }
        console.log('*****');
    }
    else if(ask === 'delete'){
        const index = parseInt(prompt('Enter the Index to be deleted!!'));
        if(!Number.isNaN(index))
        {
           const deleted = arr.splice(index,1);
           console.log(`Ok, deleted ${deleted[0]}`);
        }
        else{
            console.log('Unknown Index');
        }   
    }
    ask = prompt('What would you like to do?');
}
console.log("OK QUIT THE APP")