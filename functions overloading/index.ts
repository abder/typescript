interface Point {
  x: number;
  y: number;
}

function createPoint(x: number, y: number): Point;
function createPoint(json: string): Point;
function createPoint(first: string | number, second?: number): Point {
  if (second !== undefined) {
    return {
      x: first as number,
      y: second,
    };
  } else {
    return JSON.parse(first as string) as Point;
  }
}

console.log(createPoint('{"a":1,"b":2}'));
