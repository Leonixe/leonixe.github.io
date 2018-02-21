uniform vec2 resolution;
uniform sampler2D texture;
uniform float delta;
uniform float feed;
uniform float kill;

void main() {
    vec2 vUv = gl_FragCoord.xy / resolution;

    float step_x = 1.0 / resolution.x;
    float step_y = 1.0 / resolution.y;
    vUv -= vec2(+step_x/2.0, +step_y/2.0);

    vec2 uv = texture2D(texture, vUv).xy;
    vec2 uv0 = texture2D(texture, vUv+vec2(-step_x, 0.0)).xy;
    vec2 uv1 = texture2D(texture, vUv+vec2(step_x, 0.0)).xy;
    vec2 uv2 = texture2D(texture, vUv+vec2(0.0, -step_y)).xy;
    vec2 uv3 = texture2D(texture, vUv+vec2(0.0, step_y)).xy;
    vec2 uv4 = texture2D(texture, vUv+vec2(-step_x, step_y)).xy;
    vec2 uv5 = texture2D(texture, vUv+vec2(-step_x, -step_y)).xy;
    vec2 uv6 = texture2D(texture, vUv+vec2(step_x, -step_y)).xy;
    vec2 uv7 = texture2D(texture, vUv+vec2(step_x, step_y)).xy;

    vec2 lapl = (uv0 + uv1 + uv2 + uv3) * 0.2 + (uv4 + uv5 + uv6 + uv7) * 0.05 - uv;

    float A = uv.r;
    float B = uv.g;

    float diffuseA = 1.0;
    float diffuseB = 0.5;

    float laplA = lapl.r;
    float laplB = lapl.g;

    float reaction = A * B * B;

    float da = A + (diffuseA * laplA - reaction + feed * (1.0 - A)) * delta;
    float db = B + (diffuseB * laplB + reaction - (kill + feed) * B) * delta;

    // if ( da <= 1.0 && da >= 0.1 ) {
    //     gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    // }
    // else{
    //     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // } 
    // da = clamp(da, 0.0, 1.0);
    // db = clamp(db, 0.0, 1.0);
    
    gl_FragColor = vec4(da, db, 0.0, 1.0);
}