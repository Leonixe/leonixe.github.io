uniform sampler2D texture;
uniform sampler2D displacementTexture;
varying vec2 fuv;
uniform float coef;
uniform float distortionFactor;

void main(){

    float distortionX = texture2D(displacementTexture, fuv).x;
    distortionX = (distortionX - 0.5) * distortionFactor;
    vec4 color = texture2D(texture, fuv + (vec2(distortionX) * 0.05 * coef));
    gl_FragColor = color;
}