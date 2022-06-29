// a=4, e=3, i=1, o=0, s=5

hackerSpeak = (str) => {
    var characters = {'a':'4', 'e':'3', 'i':'1', 'o':'0', 's':'5'};
    str = str.replace(/[aeios]/g, letter => characters[letter]);
    
    console.log(str)
}
hackerSpeak("Give me all your money")