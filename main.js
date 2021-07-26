var Canvas = new fabric.Canvas("my_canvas");

var block_height = 30;
var block_width = 30;

player_x = 10;
player_y = 10;

var player_object = '';

function player_update(){
    fabric.Image.fromURl("player.png", function(Img){player_object=Img
    player_object.scaleToWidth(150);
    player_object.scaleToHeigth(140);
    player_object.set({
    top:player_y,
    left:player_x
    });{}
    Canvas.add(player_object
        )

    });

}

function new_image(get_image){
    fabric.Image.fromURl(get_image, function(Img) { block_image_object=Img
    block_image_object.scaleToWidth(block_width);
    block_image_object.scaleToHeigth(block_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    Canvas.add(block_image_object)

    });
}

window.addEventListener('keydown', my_keydown);

function my_keydown(e){
    keyPressed = e.keycode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_height = block_height + 10 ;
        block_width = block_width + 10;
        document.getElementById("curr_hei").innerHTML = block_height;
        document.getElementById("curr_wid").innerHTML = block_width;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        block_height = block_height - 10 ;
        block_width = block_width - 10;
        document.getElementById("curr_hei").innerHTML = block_height;
        document.getElementById("curr_wid").innerHTML = block_width;
    }

    if (keyPressed == '38'){
        up();
        console.log('up');
    }

    if (keyPressed == '40'){
        down();
        console.log('down');
    }

    if (keyPressed == '39'){
        right();
        console.log('right');
    }

    if (keyPressed == '37'){
        left();
        console.log('left');
    }

    if (keyPressed == '87'){
        new_image('wall.jpg');
        console.log('w');
    }

    if (keyPressed == '84'){
        new_image('trunk.jpg');
        console.log('t');
    }

    if (keyPressed == '68'){
        new_image('dark_green.jpg');
        console.log('d');
    }

    if (keyPressed == '76'){
        new_image('light_green.jpg');
        console.log('l');
    }

    if (keyPressed == '82'){
        new_image('roof.jpg');
        console.log('r');
    }

    if (keyPressed == '89'){
        new_image('yellow_wall.jpg');
        console.log('y');
    }

    if (keyPressed == '67'){
        new_image('cloud.jpg');
        console.log('c');
    }

    if (keyPressed == '71'){
        new_image('ground.jpg');
        console.log('g');
    }

    if (keyPressed == '85'){
        new_image('unique.jpg');
        console.log('u');
    }
}