let temperature = 18; // replace with your temperature value

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
        break;
}