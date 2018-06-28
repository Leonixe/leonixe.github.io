varying vec2 fuv;

void main() {
    fuv = uv;
    gl_Position =   projectionMatrix *
                    modelViewMatrix *
                    vec4(position,1.0);
}