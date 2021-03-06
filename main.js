function preload()
{
    
}

function setup()
{
    canvas = createCanvas(700, 540);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    circle(30, 30, 35);
    circle(670, 30, 35);
    circle(30, 510, 35);
    circle(670, 510, 35);
    rect(45, 20, 610, 20);
    rect(45, 500, 610, 20);
    rect(20, 45, 20, 450);
    rect(660, 45, 20, 450);

    tint_color = "";
}

function draw()
{
    image(video, 50, 50, 600, 440);
    tint(tint_color);
}

function take_snapshot()
{
    save('snapshot.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}