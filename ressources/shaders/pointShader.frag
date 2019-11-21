varying float randpointsize;

void main() {
	gl_FragColor = randpointsize < .3 ?  vec4(0.0, 0.0, 0.0, 0.0) : vec4(0.23, 0.23, 0.23, 0.0+randpointsize/5.0);
  //gl_FragColor = randpointsize < 1.0 ?  vec4(0.0, 0.0, 0.0, 0.0) : vec4(0.23, 0.23, 0.23, 0.25+randpointsize/20.0);
}