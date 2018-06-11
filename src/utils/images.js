const images = [

    'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
    'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png'

]

const getRandomImage = () => {

    const index = Math.floor((Math.random() * (images.length - 1)) + 0);
    return images[index];

}

export { images, getRandomImage };
