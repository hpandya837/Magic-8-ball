function shakeMagic8Ball(){

const question= prompt('Ask the Magic 8 Ball a question:')
console.log(question)
if(question === null){
    document.querySelector('#response-text').innerText =  'MF GIVE ME A QESTION U DUMB BITCH'
    document.querySelector('#response-text').classList =  'text-danger'
    document.querySelector('#response-image').src =  '#badImagex`'
}

if (!question.trim()) {
    alert('Please enter a vaild question')
    return
}

}