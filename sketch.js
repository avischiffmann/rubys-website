//Shorthand
Engine = Matter.Engine, World = Matter.World, Bodies = Matter.Bodies, Render = Matter.Render, Composite = Matter.Composite, Composites = Matter.Composites, Mouse = Matter.Mouse, MouseConstraint = Matter.MouseConstraint;
//Matter.js variables
var engine, render, mouseConstraint, world, bodies, mouse;
//Toggle
var toggle = true;
//Physical constraints
var ground, ceiling, wall1, wall2, tempHeight = window.innerHeight, tempWidth = window.innerWidth;
//Preload variables
var popSound;
var meow1;
var meow2;
var meow3;
var currentSound;
var luck1;
var cat1, cat2, cat5;
var jieling1, jieling2;
var korea1, korea2;
var taeyoon1;
var michael1;
var yoona1, yoona2, yoona3, yoona4, yoona5, yoona6, yoona7, yoona8, yoona9, yoona10, yoona11;
var jenny1;
var seoyeon1, seoyeon2, seoyeon3, seoyeon4, seoyeon5, seoyeon6;
var jiwoo1;
var yourbestfriend1;
preLoad();
var meowArray = [meow1,meow2,meow3];
currentSound=popSound;
var meowBool = false;
//Texture variables
var currentIMG = luck1;
var currentIMGWidth = 250;
var currentIMGHeight = 250;
var eugeneBool = false;
var jielingBool = false;
var yoonaBool = false;
var seoyeonBool = false;
var eugeneArray = [cat1, cat2, cat5];
var jielingArray = [jieling1, jieling2];
var yoonaArray = [yoona1, yoona2, yoona3, yoona4, yoona5, yoona6, yoona7, yoona8, yoona9, yoona10, yoona11];
var seoyeonArray = [seoyeon1, seoyeon2, seoyeon3, seoyeon4, seoyeon5, seoyeon6];
//Misc.
var sealSong = new Audio('sounds/seal song.mp3');
sealSong.loop = true;
var dmFugue = new Audio('sounds/dmfugue.mp3');
dmFugue.loop = true;
var chicken = new Audio('sounds/chicken.mp3');
chicken.loop = true;
var soundToggle = true;
var str1 = "";
var str2 = "";
var str3 = "";
var potato = "";
var randomPotato = ['https://www.youtube.com/watch?v=VrD-3i7Yweg', 'https://en.wikipedia.org/wiki/History_of_the_potato', 'https://en.wikipedia.org/wiki/Gamja-tang', 'https://ko.wikipedia.org/wiki/%EA%B0%90%EC%9E%90', 'https://en.wikipedia.org/wiki/Potato_Hill', 'https://en.wikipedia.org/wiki/Potato_Lake', 'https://en.wikipedia.org/wiki/Chip_and_Potato', 'https://en.wikipedia.org/wiki/Potato_(Blackadder)', 'https://en.wikipedia.org/wiki/Potato_(film)', 'https://en.wikipedia.org/wiki/Potato_(production_company)', 'https://en.wikipedia.org/wiki/Potato_(band)', 'https://en.wikipedia.org/wiki/Mr._Potato_Head', 'https://en.wikipedia.org/wiki/Irish_potato_candy', 'https://en.wikipedia.org/wiki/Potato_starch', 'https://en.wikipedia.org/wiki/Sweet_potato', 'https://en.wikipedia.org/wiki/Category:Potato_dishes', 'https://en.wikipedia.org/wiki/Gamja-jeon', 'https://en.wikipedia.org/wiki/Gamja-ongsimi', 'https://en.wikipedia.org/wiki/Category:Meat_and_potatoes_dishes', 'https://en.wikipedia.org/wiki/Meat_and_potato_pie', 'https://en.wikipedia.org/wiki/Baked_potato', 'https://en.wikipedia.org/wiki/Bengal_potatoes', 'https://en.wikipedia.org/wiki/Bombay_potato', 'https://en.wikipedia.org/wiki/Canarian_wrinkly_potatoes', 'https://en.wikipedia.org/wiki/Chocolate-covered_potato_chips', 'https://en.wikipedia.org/wiki/Duchess_potatoes', 'https://en.wikipedia.org/wiki/Farali_potatoes', 'https://en.wikipedia.org/wiki/Fondant_potatoes', 'https://en.wikipedia.org/wiki/Fried_potatoes', 'https://en.wikipedia.org/wiki/Funeral_potatoes', 'https://en.wikipedia.org/wiki/Hasselback_potatoes', 'https://en.wikipedia.org/wiki/Lyonnaise_potatoes', 'https://en.wikipedia.org/wiki/Mashed_potato', 'https://en.wikipedia.org/wiki/Potato_babka', 'https://en.wikipedia.org/wiki/Potato_bread', 'https://en.wikipedia.org/wiki/Potato_cake', 'https://en.wikipedia.org/wiki/Potato_chip', 'https://en.wikipedia.org/wiki/Potato_doughnut', 'https://en.wikipedia.org/wiki/Potato_filling', 'https://en.wikipedia.org/wiki/Potato_kugel', 'https://en.wikipedia.org/wiki/Potato_pancake', 'https://en.wikipedia.org/wiki/Potato_salad', 'https://en.wikipedia.org/wiki/Potato_scone', 'https://en.wikipedia.org/wiki/Potato_skins', 'https://en.wikipedia.org/wiki/Potato_waffle', 'https://en.wikipedia.org/wiki/Potato_wedges', 'https://en.wikipedia.org/wiki/Potatoes_O%27Brien', 'https://en.wikipedia.org/wiki/Potatonik', 'https://en.wikipedia.org/wiki/Rioja_style_potatoes', 'https://en.wikipedia.org/wiki/Salt_potatoes', 'https://en.wikipedia.org/wiki/Tornado_potato', 'https://en.wikipedia.org/wiki/Colorado_potato_beetle', 'https://en.wikipedia.org/wiki/Climate_change_and_potatoes', 'https://en.wikipedia.org/wiki/Eskimo_potato', 'https://en.wikipedia.org/wiki/European_Cultivated_Potato_Database', 'https://en.wikipedia.org/wiki/Potato_ricer', 'https://en.wikipedia.org/wiki/Genetically_modified_potato', 'https://en.wikipedia.org/wiki/Innovator_potato', 'https://en.wikipedia.org/wiki/Instant_mashed_potatoes', 'https://en.wikipedia.org/wiki/International_Year_of_the_Potato', 'https://en.wikipedia.org/wiki/M%C4%81ori_potatoes', 'https://en.wikipedia.org/wiki/Potato_masher', 'https://en.wikipedia.org/wiki/Potato_dextrose_agar', 'https://en.wikipedia.org/wiki/Potato_fruit', 'https://en.wikipedia.org/wiki/Potato_paradox', 'https://en.wikipedia.org/wiki/Potato_Research', 'https://en.wikipedia.org/wiki/Potatoes_of_Chilo%C3%A9', 'https://en.wikipedia.org/wiki/Smash_(instant_mashed_potato)', 'https://en.wikipedia.org/wiki/The_Tale_of_the_Wonderful_Potato', 'https://en.wikipedia.org/wiki/Waxy_potato_starch', 'https://en.wikipedia.org/wiki/Highland_Potato_Famine', 'https://en.wikipedia.org/wiki/European_Potato_Failure', 'https://en.wikipedia.org/wiki/Potato_Control_Law', 'https://en.wikipedia.org/wiki/Potato_movement', 'https://en.wikipedia.org/wiki/Potato_riots', 'https://en.wikipedia.org/wiki/War_of_the_Bavarian_Succession', 'https://en.wikipedia.org/wiki/Better_Made_Potato_Chips', 'https://en.wikipedia.org/wiki/Cape_Cod_Potato_Chips', 'https://en.wikipedia.org/wiki/Hostess_Potato_Chips', 'https://en.wikipedia.org/wiki/Seabrook_Potato_Crisps'];
var score = 0;

function preLoad() {
  popSound = 'sounds/pop.mp3';
  meow1 = 'sounds/meow.mp3';
  meow2 = 'sounds/meow1.mp3';
  meow3 = 'sounds/meow3.mp3';
  luck1 = 'images/goodluck.png';
  cat1 = 'images/cats/cat1.png';
  cat2 = 'images/cats/cat2.png';
  cat5 = 'images/cats/cat5.png';
  jieling1 = 'images/bulldog.png';
  jieling2 = 'images/waffle.png';
  taeyoon1 = 'images/voxball.png';
  michael1 = 'images/pete.png';
  yoona1 = 'images/seattle.png';
  yoona2 = 'images/seoul.png';
  yoona3 = 'images/airplane.png';
  yoona4 = 'images/rubyball.png';
  yoona5 = 'images/aviball.png';
  jenny1 = 'images/jenny.png';
  seoyeon1 = 'images/seoyeon/seoyeon-01.png';
  seoyeon2 = 'images/seoyeon/seoyeon-02.png';
  seoyeon3 = 'images/seoyeon/seoyeon-03.png';
  seoyeon4 = 'images/seoyeon/seoyeon-04.png';
  seoyeon5 = 'images/seoyeon/seoyeon-05.png';
  seoyeon6 = 'images/seoyeon/seoyeon-06.png';
  jiwoo1 = 'images/jiwoo.png';
  yourbestfriend1 = 'images/yourbestfriend.png';
}

function setup() {
  $('#subMenu').css('transform', 'translate(-' + ($('#scoreTag').width() + 50) + 'px, 0px)');

  //Create engine
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 2.5;

  //Create renderer
  var options = {
    width: window.innerWidth,
    height: window.innerHeight,
    background: "images/backgroundpaper.jpg",
    wireframes: false,
    
  }
  render = Render.create({
    element: document.body,
    engine: engine,
    options: options
  });

  //Create mouse constraints
  mouse = Mouse.create(render.canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: {
      stiffness: 1,
      render: {
        visible: true
      }
    }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(world, mouseConstraint);
  Mouse.setScale(mouse, {x: 2, y: 2});
  render.mouse = mouse;

  //Add walls, ceiling, and ground
  var params = {
    isStatic: true
  }
  ground = Bodies.rectangle(render.canvas.width / 2, render.canvas.height + 500, screen.width * 4, 1000, params);
  wall1 = Bodies.rectangle(-500, render.canvas.height / 2, 1000, screen.height * 4, params);
  wall2 = Bodies.rectangle(render.canvas.width + 500, render.canvas.height / 2, 1000, screen.height * 4, params);
  ceiling = Bodies.rectangle(render.canvas.width / 2, -500, screen.width * 4, 1000, params);
  World.add(world, ground);
  World.add(world, wall1);
  World.add(world, wall2);
  World.add(world, ceiling);

  //Set up bodies array
  var stack = Composites.stack();
  bodies = stack.bodies;
  World.add(world, stack);

  //Run the engine and renderer
  Engine.run(engine);
  Render.run(render);

  $(document).mousedown(function (event) {
    if (event.which == 3) {
      toggle = false;
      clearBoard();
    }
  })
  $('#defaultCanvas0').remove();
}

function draw() {
  if(!(window.innerWidth == tempWidth) || !(window.innerHeight == tempHeight)) {
    tempWidth = window.innerWidth;
    tempHeight = window.innerHeight;
    //Resize canvas, walls, ceiling, and ground
    render.bounds.max.x = window.innerWidth;
    render.bounds.max.y = window.innerHeight;
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    Matter.Body.setPosition(ceiling, {x: render.canvas.width / 2, y: -500});
    Matter.Body.setPosition(wall1, {x: -500, y: render.canvas.height / 2});
    Matter.Body.setPosition(wall2, {x: render.canvas.width + 500, y: render.canvas.height / 2});
    Matter.Body.setPosition(ground, {x: render.canvas.width / 2, y: render.canvas.height + 500});
  }

  //Iterate through the objects on screen
  for (var i = 0; i < bodies.length; i++) {
    var bodyi = bodies[i];
    var pos = bodyi.position;
    var angle = bodyi.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();
  }

  //Check for mouse constraints
  a = mouseConstraint.constraint.pointA;
  bodyB = mouseConstraint.constraint.bodyB;

  //Add to world if mouse is pressed down
  // if(mousePressed && toggle) {
  //   bodies.push(new makeCircle(mouseX, mouseY));
  // }
}

function mousePressed() {
  if(meowBool) {
    audio1 = new Audio(meowArray[Math.floor(Math.random() * 3)]);
  } else {
    audio1 = new Audio(popSound);
  }
  audio1.play();
  bodies.push(new makeCircle(mouseX, mouseY));
  bodies.push(new makeCircle(mouseX, mouseY));
  bodies.push(new makeCircle(mouseX, mouseY));
  bodies.push(new makeCircle(mouseX, mouseY));
  bodies.push(new makeCircle(mouseX, mouseY));
}

//Function that makes a circle
function makeCircle(x, y) {
  //Update score
  score++;
  document.getElementById('scoreTag').innerHTML = "Ruby 💎" + score + " balls"; //Update # of balls
  $('#subMenu').css('transform', 'translate(-' + ($('#scoreTag').width() + 50) + 'px, 0px)'); //Update menu location

  //Random size and play sound
  var randomSize = (Math.random() + 1.25) * 40;

  //Checks for people with multiple images
  if(eugeneBool) {
    currentIMG = eugeneArray[Math.floor(Math.random() * 3)];
  } else if(jielingBool) {
    currentIMG = jielingArray[Math.floor(Math.ceil(Math.random() * 5) / 5)];
  } else if(yoonaBool) {
    currentIMG = yoonaArray[Math.floor(Math.random() * 5)];
  } else if(seoyeonBool) {
    currentIMG = seoyeonArray[Math.floor(Math.random() * 6)]
  }

  var params = {
    restitution: 0.7,
    friction: 0.2,
    render: {
      sprite: {
        texture: currentIMG,
        xScale: randomSize * 2 / currentIMGWidth,
        yScale: randomSize * 2 / currentIMGHeight
      }
    }
  }
  return Bodies.circle(x, y, randomSize, params);
}

//Function happyBirthday
function goodLuck () {
  clearBoard();
  eugeneBool = true;
  currentIMG = luck1;
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = false;
  sealSong.pause();
  meowBool = false;

}

//Function eugene
function cats() {
  clearBoard();
  currentIMG = eugeneArray[0]
  eugeneBool = true;
  catsBool = true;
  meowBool = true;
}

//Function jieling
function jieling() {
  clearBoard();
  currentIMG = jielingArray[0]
  eugeneBool = false;
  jielingBool = true;
  yoonaBool = false;
  seoyeonBool = false;
  meowBool = false;
}

//Function taeyoon
function taeyoon() {
  clearBoard();
  currentIMG = taeyoon1;
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = false;
  sealSong.pause();
  meowBool = false;
}

//Function michael
function michael() {
  clearBoard();
  currentIMG = michael1;
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = false;
  sealSong.pause();
}

//Function yoona
function yoona() {
  clearBoard();
  currentIMG = yoonaArray[0];
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = true;
  seoyeonBool = false;
  sealSong.pause();
}

//Function jenny
function jenny() {
  clearBoard();
  currentIMG = jenny1;
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = false;
  sealSong.pause();
}

//Function seoyeon
function seoyeon() {
  clearBoard();
  currentIMG = seoyeonArray[0];
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = true;
  sealSong.pause();
}

//jiwoo
function jiwoo() {
  clearBoard();
  currentIMG = jiwoo1;
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = false;
  sealSong.pause();
}

//Function yourbestfriend
function yourbestfriend() {
  clearBoard();
  currentIMG = yourbestfriend1;
  eugeneBool = false;
  jielingBool = false;
  yoonaBool = false;
  seoyeonBool = false;
  sealSong.pause();
}

//Function the clears the board
function clearBoard() {
  for(var i = bodies.length-1; i >= 0; i--) {
    var body = bodies[i];
    World.remove(world, body);
    bodies.splice(body, 1);
  }
  var stack = Composites.stack();
  bodies = stack.bodies;
  World.add(world, stack);
  setTimeout(function() {
    toggle = true;
  }, 150);
}

//Function that checks for hotkeys pressed
function keyPressed() {
  if(keyCode == 32) {
    toggle = !toggle;
  }

  if(keyCode == 8) {
    clearBoard();
  }

  if(48 <= keyCode && keyCode <= 57) {
    engine.world.gravity.y = (2.5 * (keyCode - 48) / 10);
  }

  if(keyCode == 77) {
    soundToggle = !soundToggle;
  }
}

function keyTyped() {
  str1 += key;
  if(str1.length > 15) {
    str1 = str1.substring(1, str1.length);
    if(str1 == "jenny loves you") {
      dmFugue.pause();
      sealSong.play();
      chicken.pause();
      document.getElementById("egg1").style = "inline";
      document.getElementById("egg1").style.width = screen.width;
      document.getElementById("egg2").style.width = 0;
      document.getElementById("egg3").style.width = 0;
      document.getElementById("subMenu").style.display = "none";
      stopRender();
    }
  }

  str2 += key;
  if(str2.length > 6) {
    str2 = str2.substring(1, str2.length);
    if(str2 == "ㅇㅣㅃㅡㄴㅣ") {
      sealSong.pause();
      dmFugue.play();
      chicken.pause();
      document.getElementById("egg2").style = "inline";
      document.getElementById("egg2").style.width = screen.width;
      document.getElementById("egg1").style.width = 0;
      document.getElementById("egg3").style.width = 0;
      document.getElementById("subMenu").style.display = "none";
      stopRender();
    }
  }

  str3 += key;
  if(str3.length > 13) {
    str3 = str3.substring(1, str3.length);
    if(str3 == "i love cheese") {
      sealSong.pause();
      dmFugue.pause();
      chicken.play();
      document.getElementById("egg3").style = "inline";
      document.getElementById("egg3").style.width = screen.width;
      document.getElementById("egg1").style.width = 0;
      document.getElementById("egg2").style.width = 0;
      document.getElementById("subMenu").style.display = "none";
      stopRender();
    }
  }

  potato += key;
  if(potato.length > 5) {
    potato = potato.substring(1, potato.length);
    if(potato == "kamja" || potato == "ㄱㅏㅁㅈㅏ") {
      window.open(randomPotato[Math.floor(random() * randomPotato.length)]);
    }
  }
}

function stopRender() {
  render.canvas.remove();
  render.canvas = null;
  render.context = null;
  render.textures = {};
  Render.stop(render);
}