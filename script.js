const robot = {
  xPosition: null,
  yPosition: null,
  facing: null,
};

const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

const table = {
  northConstraint: 4,
  eastConstraint: 4,
  southConstraint: 0,
  westConstraint: 0,
};

//debug stuff so I don't have to report() constantly while I break stuff
let debugMessagesEnabled = false;
const toggleDebugMode = () => (debugMessagesEnabled = !debugMessagesEnabled);

const place = function (x, y, f) {
  //check if all values are valid & if so send it
  if (
    x >= table.westConstraint &&
    x <= table.eastConstraint &&
    y >= table.southConstraint &&
    y <= table.northConstraint &&
    directions.indexOf(f) >= 0
  ) {
    robot.xPosition = x;
    robot.yPosition = y;
    robot.facing = f;
  }
  if (debugMessagesEnabled === true) {
    console.log(`placed at ${x},${y} facing ${f}`);
  }
};

const move = function () {
  //check direction & increment if in bounds
  if (robot.facing == `NORTH` && robot.yPosition < table.northConstraint) {
    robot.yPosition++;
  }
  if (robot.facing == `EAST` && robot.xPosition < table.eastConstraint) {
    robot.xPosition++;
  }
  if (robot.facing == `SOUTH` && robot.yPosition > table.southConstraint) {
    robot.yPosition--;
  }
  if (robot.facing == `WEST` && robot.xPosition > table.westConstraint) {
    robot.xPosition--;
  }
  if (debugMessagesEnabled === true) {
    console.log(
      `moved ${robot.facing} to ${robot.xPosition},${robot.yPosition}`
    );
  }
};

const left = function () {
  //check index of current facing in directions
  if (directions.indexOf(robot.facing) >= 0) {
    //get new direction index
    let dir = directions.indexOf(robot.facing) - 1;
    if (dir >= 0) {
      //if valid return direction from index
      robot.facing = directions[dir];
    } else {
      //if invalid, get last item from directions
      robot.facing = directions[directions.length - 1];
    }
  }
  if (debugMessagesEnabled === true) {
    console.log(`turned left to face ${robot.facing}`);
  }
};

const right = function () {
  //check index of current facing in directions
  if (directions.indexOf(robot.facing) >= 0) {
    //get index for new direction
    let dir = directions.indexOf(robot.facing) + 1;
    if (dir < directions.length) {
      //if valid return direction from index
      robot.facing = directions[dir];
    } else {
      //if invalid, get first item from directions
      robot.facing = directions[0];
    }
  }
  if (debugMessagesEnabled === true) {
    console.log(`turned right to face ${robot.facing}`);
  }
};

const setTableSize = function (n, e, s, w) {
  //check all values are valid numbers
  if (!isNaN(n) && !isNaN(e) && !isNaN(s) && !isNaN(w) && n >= s && e >= w) {
    table.northConstraint = Number(n);
    table.eastConstraint = Number(e);
    table.southConstraint = Number(s);
    table.westConstraint = Number(w);
  }
  if (debugMessagesEnabled === true) {
    console.log(
      `table constraints are now: x ${table.westConstraint}-${table.eastConstraint}; y ${table.southConstraint}-${table.northConstraint}`
    );
  }
};

const report = function () {
  if (
    //check all values exist for robot
    robot.xPosition === null ||
    robot.yPosition === null ||
    robot.facing === null
  ) {
    console.log(`I haven't been placed yet!`);
  } else if (
    //check robot is in bounds
    robot.yPosition > table.northConstraint ||
    robot.yPosition < table.southConstraint ||
    robot.xPosition > table.eastConstraint ||
    robot.xPosition < table.westConstraint
  ) {
    console.log(
      `Uh oh, the table seems to have shrunk - I'm currently floating in the air at ${robot.xPosition},${robot.yPosition}. You better put me back, I can't move like this!`
    );
  } else {
    console.log(
      `I am currently at ${robot.xPosition},${robot.yPosition}, facing ${robot.facing}!`
    );
  }
};

console.log(
  `Hi this is a conceptual robot. These are commands:
    setTableSize(n, e, s, w): allows you to specify the cardinal constraints of the table. default size is 4, 4, 0, 0
    place(x, y, f): places the robot at the specified coordinates facing the given cardinal direction (NORTH, EAST, SOUTH, WEST)
    move(): moves the robot forward one grid unit
    left(): turns 90 degrees to the left
    right(): like the above but the other way
    report(): the robot will tell you where it is and the direction it's facing

    have fun!`
);
