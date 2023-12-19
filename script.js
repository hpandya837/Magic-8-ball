function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' // FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const responseImage = document.getElementById('response-image');
    responseImage.classList.add('shaking');

    // Add a delay before displaying the answer
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 8);
        let answer, image, color;

        switch (randomNumber) {
            case 0:
                answer = "Yes";
                image = "yes-image.jpg";
                color = "text-success";
                break;
            case 1:
                answer = "No";
                image = "no-image.jpg";
                color = "text-danger";
                break;
            case 2:
                answer = "Ask again later";
                image = "later-image.jpg";
                color = "text-secondary";
                break;
            case 3:
                answer = "Maybe";
                image = "maybe-image.jpg";
                color = "text-warning";
                break;
            case 4:
                answer = "Cannot predict now";
                image = "cannot-predict-image.jpg";
                color = "text-muted";
                break;
            case 5:
                answer = "Don't count on it";
                image = "dont-count-on-it-image.jpg";
                color = "text-danger";
                break;
            case 6:
                answer = "Most likely";
                image = "most-likely-image.jpg";
                color = "text-success";
                break;
            case 7:
                answer = "Outlook not so good";
                image = "outlook-not-good-image.jpg";
                color = "text-danger";
                break;
            default:
                break;
        }

        const responseText = document.getElementById('response-text');
        responseText.innerText = answer;
        responseText.classList = `display-4 ${color}`;
        responseImage.src = image;

        // Remove the shaking class after displaying the answer
        responseImage.classList.remove('shaking');
    }, 3000); // Adjust the delay time (in milliseconds) as needed
}
