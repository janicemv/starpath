image_array = [
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png'
]

function get_random_image() {
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    // Get an image with random index
    selected_image = image_array[random_index]

    // Display image
    document.getElementById('star_oracle').src = `./images/${selected_image}`
    console.log("Blessing given")
}

function submitForm() {
    alert("Thanks! Nothing was sent :)");
}
