uniform sampler2D uTexture;
uniform float uAlpha;
uniform float index;

 varying vec2 vUv;

 // zoom on texture 
 vec2 scaleUV(vec2 uv,float scale) {
   float center = 0.5;
   return ((uv - center) * scale) + center;
 }

 void main() {
   vec3 color = texture2D(uTexture,scaleUV(vUv,0.8)).rgb;
   gl_FragColor = vec4(color/index,uAlpha);
 }