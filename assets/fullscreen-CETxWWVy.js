import{Dn as e,J as t,P as n,V as r,an as i,k as a,mn as o,mt as s,o as c,rt as l}from"./three.core-CtBgdmy3.js";var u=new l(-1,1,1,-1,0,1),d=null,f=0;function p(){return d||(d=new c,d.setAttribute(`position`,new a([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new a([0,2,0,0,2,0],2))),d}var m=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,h=class{material;mesh;constructor(e){this.material=e,f++,this.mesh=new t(p(),e),this.mesh.frustumCulled=!1}render(e,t){e.setRenderTarget(t),e.render(this.mesh,u)}dispose(){this.material.dispose(),f--,f===0&&d&&(d.dispose(),d=null)}};function g(e,t,n={}){return new i({uniforms:t,defines:n,vertexShader:m,fragmentShader:e,depthTest:!1,depthWrite:!1,blending:0})}function _(t,n,i=o){return new e(Math.max(1,t),Math.max(1,n),{type:i,format:s,depthBuffer:!1,stencilBuffer:!1,magFilter:r,minFilter:r,generateMipmaps:!1})}function v(e){let t=e.extensions;return t.has(`EXT_color_buffer_float`)||t.has(`EXT_color_buffer_half_float`)?n:o}export{g as i,_ as n,v as r,h as t};