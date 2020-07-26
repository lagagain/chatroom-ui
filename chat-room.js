const thumb_path = './assets/person.svg';
const avatar_path = './assets/person.svg';


var chat_app = new Vue({
    el: '#chat-room-app',
    data: {
        chat_name: 'Example Chat room',
        thumb: './assets/person.svg', // image url
        floors: [
            {
                show: 'left',  // left or right
                avatar: './assets/person.svg', // image url
                messeng: 'hi', // text
            },{
                show: 'right',  // left or right
                avatar: './assets/person.svg', // image url
                messeng: 'Hello, World', // text
                right: true,
            },{
                show: 'left',  // left or right
                avatar: './assets/person.svg', // image url
                messeng: 'hi', // text
            },{
                show: 'right',  // left or right
                avatar: './assets/person.svg', // image url
                messeng: 'Hello, World', // text
                right: true,
            }
        ],
        messeng: '', // text
        max_history: 100, // integer
    }, methods:{
        sendMesseng: sendMeseng,
        receiveMesseng: receiveMesseng,
    }
});

function sendMeseng (){
    if(this.messeng.length > 0){
        this.floors.push(newFloor({show:'right', avatar:'./assets/person.svg',messeng:this.messeng}));
        this.messeng = "";
        this.$nextTick(function(){
            let chat_body = document.querySelector(".chat-body");
            chat_body.scrollTo(0, chat_body.scrollHeight);
        });
    }
}

// example: chat_app.receiveMesseng({messeng:"abc",  avatar:'./assets/person.svg'})
function receiveMesseng(msg){
    this.floors.push(newFloor(msg));
    this.$nextTick(function(){
        let chat_body = document.querySelector(".chat-body");
        chat_body.scrollTo(0, chat_body.scrollHeight);
    });
}


function newFloor(floor){
    return floor;
}
