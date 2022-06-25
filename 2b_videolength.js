const minutesToSeconds = time => {
    let [minutes, seconds] = time.split(":").map(Number);
    console.log(seconds < 60 ? (minutes * 60) + seconds : false);
}
minutesToSeconds("01:00")