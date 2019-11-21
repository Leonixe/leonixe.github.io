uniform float rows;
uniform float columns;
varying vec2 fUv;

#define PI 3.1415926535897932384626433832795

bool isDraw (vec2 x, vec2 c, float r) {
  float dx = x.x - c.x;
  float dy = x.y - c.y;
  return dx * dx + dy * dy <= r*r;
}

float radius (vec2 p) {
  float dx = (p.x);
  float dy = (p.y);

  return sqrt(dx * dx + dy * dy);
}

float angle (vec2 p) {
  //float result = atan(p.x, p.y);

  if (x > 0.0) {
    return atan(p.y / p.x);
  }
  else if(x < 0.0 && y >= 0.0){
    return atan(p.y/ p.x + PI);
  } else if (x < 0.0 && y < 0.0) {
    return atan(p.y/ p.x - PI);
  } else if ( x == 0.0 && y > 0.0 ) {
    return PI / 2.0;
  } else if (x == 0.0 && y < 0.0) {
    return -PI / 2.0;
  } else {
    return 0.0;
  }
  //return result < 0.0 ? result + 2.0 * PI : result;
}

vec2 backward (vec2 p) {

  return p.y*vec2(cos(p.x), sin(p.x));
}

vec2 forward (vec2 p) {

  return vec2(angle(p), radius(p));
}

void main() {

  float steyp = (2.0*PI)/5.0;
  vec2 o = forward(fUv-vec2(0.5));
  vec2 x = vec2(floor(o.x / steyp) * steyp, floor(o.y));
  vec2 center = backward(vec2(x.x+steyp/2.0 , 0.5));
  float r = min(0.5,PI*x.y);

  gl_FragColor = vec4(distance(fUv-vec2(0.5),center), 0.0,0.0,1.0);
  //gl_FragColor = distance(fract(fUv * vec2(1.0,0.5)), center) <= 0.5 ?  vec4(vec3(0.0),1.0) : vec4(vec3(1.0),1.0);

}