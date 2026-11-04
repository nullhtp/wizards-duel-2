import{o as e,t}from"./tokens-Cw4laJjl.js";import{n}from"./types-BVYE29_7.js";import{n as r}from"./match-CaUuRcp2.js";import{a as i,f as a,l as o,n as s,o as c,r as l,s as u}from"./body-geometry-DFQukZVj.js";import{a as d,i as f,n as p,o as m,r as h,s as g}from"./geometry-jbwI1WbX.js";import{a as _,c as v,n as y,o as b,r as x,s as S,t as C}from"./particle-presets-COlDZ_Gm.js";import{Cn as w,J as T,a as E,an as D,o as O,ot as ee,wn as te}from"./three.core-CtBgdmy3.js";import{r as k,t as A}from"./shake-ChZ6BdTW.js";var j=C;function ne(e){let t=j[e],n=e===`fire`;return{name:`${e}Hand`,kind:`emitter`,layers:[{name:`glow`,shape:`soft`,blend:`glow`,rate:34,life:[.12,.16],speed:0,size:[130,150],color:[[0,t.core,.5],[1,t.base,0]]},{name:`wisp`,shape:`puff`,blend:`normal`,rate:24,life:[.14,.24],speed:[20,60],spread:360,radius:[0,12],size:[20,30],sizeCurve:[[0,.5],[.2,1],[1,.1]],color:[[0,t.hot,1],[.3,t.core,1],[.65,t.mid,.95],[1,t.deep,0]],gravity:[0,n?-280:25],drag:2.4,inherit:-.15,stretch:8e-4},{name:`heart`,shape:n?`soft`:`crystal`,blend:n?`add`:`normal`,rate:40,life:[.06,.09],speed:0,size:n?[40,48]:[34,40],color:n?[[0,_.white,.9],[1,t.hot,.5]]:[[0,t.hot,1],[1,t.core,1]],rotation:[-10,10],intensity:n?1.4:1,inherit:1},{name:`sparks`,shape:n?`streak`:`star`,blend:`add`,rate:14,life:[.3,.5],speed:[70,190],spread:360,radius:[0,12],size:n?[5,8]:[12,18],color:[[0,_.white,1],[.4,t.core,1],[1,t.base,0]],gravity:[0,n?-220:60],drag:2,stretch:n?.03:0,intensity:1.6}]}}function M(e){let t=j[e],n=e===`fire`;return{name:`${e}Windup`,kind:`emitter`,layers:[{name:`glow`,shape:`soft`,blend:`glow`,rate:50,life:[.1,.14],speed:0,size:[250,280],color:[[0,t.core,.6],[1,t.base,0]]},{name:`gather`,shape:`streak`,blend:`add`,rate:150,life:[.16,.2],speed:0,radius:[120,170],radial:[-820,-700],tangential:[-60,60],size:[8,12],color:[[0,t.base,0],[.3,t.core,1],[1,_.white,1]],stretch:.025,intensity:1.7},{name:`orb`,shape:n?`puff`:`crystal`,blend:`normal`,rate:100,life:[.06,.09],speed:[0,20],spread:360,size:n?[90,104]:[96,110],color:[[0,t.hot,1],[.5,t.core,1],[1,t.mid,1]],rotation:n?[0,360]:[-12,12],spin:[-120,120],outline:n?0:.06,inherit:1},{name:`heart`,shape:`soft`,blend:`add`,rate:60,life:[.05,.08],speed:0,size:[44,52],color:[[0,_.white,.8],[1,t.hot,.3]],intensity:1.4,inherit:1}]}}function N(e){let t=j[e];return{name:`${e}Vortex`,kind:`emitter`,layers:[{name:`swirl`,shape:`streak`,blend:`add`,rate:80,life:[.42,.56],speed:0,radius:[170,250],radial:[-460,-380],tangential:[300,420],size:[7,10],color:[[0,t.base,0],[.25,t.core,1],[.85,t.hot,1],[1,t.hot,0]],stretch:.005,intensity:1.3},{name:`motes`,shape:e===`fire`?`soft`:`snowflake`,blend:`add`,rate:24,life:[.5,.7],speed:0,radius:[140,220],radial:[-320,-260],tangential:[220,300],size:[22,30],color:[[0,t.core,0],[.3,t.core,.9],[1,_.white,0]],spin:[-120,120],intensity:1.3},{name:`glow`,shape:`soft`,blend:`glow`,rate:20,life:[.14,.2],speed:0,size:[180,210],color:[[0,t.core,.4],[1,t.base,0]]}]}}function re(e){let t=j[e];return{name:`${e}Aura`,kind:`emitter`,layers:[{name:`rise`,shape:`star`,blend:`add`,rate:26,life:[.6,.9],speed:[10,40],spread:360,radius:[60,220],size:[16,26],sizeCurve:[[0,0],[.2,1],[1,0]],color:[[0,_.white,1],[.5,_.gold,1],[1,t.core,0]],gravity:[0,-420],drag:.6,rotation:[0,45],intensity:1.8},{name:`embers`,shape:`streak`,blend:`add`,rate:18,life:[.4,.7],speed:[40,90],spread:360,radius:[80,200],size:[6,9],color:[[0,_.white,1],[.5,t.core,1],[1,t.base,0]],gravity:[0,-520],stretch:.03,intensity:1.6}]}}function P(e){let t=j[e],n=e===`fire`?v(_.redHi,_.white,.35):v(_.blueHi,_.white,.25);return{name:`${e}Glass`,kind:`burst`,layers:[{name:`shards`,shape:`shard`,blend:`normal`,count:26,life:[.5,.9],speed:[260,820],spread:360,radius:[80,200],radial:[120,320],size:[34,62],sizeCurve:[[0,1],[.7,.85],[1,0]],color:[[0,_.white,1],[.25,n,.95],[.7,t.base,.85],[1,t.deep,0]],gravity:[0,1150],drag:1.6,spin:[-720,720],outline:.14},{name:`chips`,shape:`crystal`,blend:`normal`,count:10,life:[.4,.7],speed:[200,600],spread:360,radius:[60,180],size:[22,34],color:[[0,_.white,1],[.5,n,1],[1,t.base,0]],gravity:[0,900],drag:1.8,spin:[-500,500],outline:.1},{name:`glints`,shape:`star`,blend:`add`,count:12,life:[.2,.4],speed:[100,420],spread:360,radius:[40,200],size:[26,40],sizeCurve:[[0,1],[1,0]],color:[[0,_.white,1],[1,t.core,0]],rotation:[0,45],intensity:2},{name:`ring`,shape:`ring`,blend:`add`,count:1,life:.3,speed:0,size:640,sizeCurve:[[0,.4],[1,1.1]],color:[[0,_.white,1],[1,t.core,0]],intensity:1.3,hero:!0}]}}function F(e){let t=j[e];return{name:`${e}ShieldReady`,kind:`burst`,layers:[{name:`glint`,shape:`star`,blend:`add`,count:1,life:.4,speed:0,size:300,rotation:0,sizeCurve:[[0,.2],[.25,1],[1,.1]],color:[[0,_.white,1],[1,t.core,0]],intensity:1.8,hero:!0},{name:`ring`,shape:`ring`,blend:`add`,count:1,life:.35,speed:0,size:420,sizeCurve:[[0,1],[1,.6]],color:[[0,t.core,0],[.3,_.white,.9],[1,t.core,0]],intensity:1.2,hero:!0}]}}function I(e){let t=j[e];return{name:`${e}Hiss`,kind:`emitter`,layers:[{name:`smoke`,shape:`puff`,blend:`normal`,rate:34,life:[.4,.65],speed:[30,90],spread:120,angle:-90,radius:[0,16],size:[28,46],sizeCurve:[[0,.4],[.3,1],[1,1.3]],color:[[0,v(t.mist,_.white,.3),.85],[.4,v(_.sky4,_.white,.45),.6],[1,_.sky4,0]],gravity:[0,-160],drag:2.5,spin:[-80,80]},{name:`fizz`,shape:`streak`,blend:`add`,rate:22,life:[.12,.24],speed:[140,300],spread:360,size:[4,6],color:[[0,_.white,1],[1,t.core,0]],stretch:.03,drag:4,intensity:1.4}]}}function ie(e){let t=j[e];return{name:`${e}SeamSparks`,kind:`burst`,layers:[{name:`sparks`,shape:`streak`,blend:`add`,count:4,life:[.22,.45],speed:[90,260],angle:e===`fire`?180:0,spread:110,size:[5,8],color:[[0,_.white,1],[.4,t.core,1],[1,t.base,0]],gravity:[0,e===`fire`?-120:80],drag:2.2,stretch:.03,intensity:1.6}]}}function ae(e){let t=j[e];return{name:`${e}RuneSpark`,kind:`burst`,layers:[{name:`stars`,shape:`star`,blend:`add`,count:10,life:[.3,.5],speed:[160,380],spread:360,size:[18,28],sizeCurve:[[0,1],[1,0]],color:[[0,_.white,1],[.5,_.gold,1],[1,t.core,0]],rotation:[0,45],drag:3,intensity:2},{name:`ring`,shape:`ring`,blend:`add`,count:1,life:.3,speed:0,size:220,sizeCurve:[[0,.2],[1,1]],color:[[0,_.white,1],[1,_.gold,0]],intensity:1.4,hero:!0}]}}function oe(e){let t=j[e];return{name:`${e}RuneTrail`,kind:`emitter`,layers:[{name:`glitter`,shape:`star`,blend:`add`,rate:16,life:[.25,.4],speed:[0,30],spread:360,size:[12,18],sizeCurve:[[0,1],[1,0]],color:[[0,_.white,1],[1,t.core,0]],rotation:[0,45],intensity:1.7}]}}function se(e){let t=j[e];return{name:`${e}OverchargeArcs`,kind:`emitter`,layers:[{name:`arcs`,shape:`arc`,blend:`add`,rate:40,life:[.07,.12],speed:[60,160],spread:360,radius:[70,150],size:[220,320],color:[[0,_.white,1],[.4,_.gold,.95],[1,t.core,0]],intensity:2,inherit:.6},{name:`runes`,shape:`star`,blend:`add`,rate:30,life:[.3,.5],speed:[40,120],spread:360,radius:[120,180],tangential:[200,300],size:[18,26],color:[[0,_.white,1],[.5,_.gold,1],[1,_.goldLo,0]],rotation:[0,45],intensity:1.8}]}}function L(e){let t=x[y[e].bolt];return{name:`${e}OverchargeBolt`,kind:`emitter`,layers:t.layers.map(e=>e.name===`glow`?{...e,color:e.color.map(([e,t,n])=>[e,t,n*.45])}:e.name===`heart`?{...e,size:[28,32],color:e.color.map(([e,t,n])=>[e,t,n*.6])}:e)}}var R={name:`fightBurst`,kind:`burst`,layers:[{name:`stars`,shape:`star`,blend:`add`,count:26,life:[.4,.8],speed:[400,1100],spread:360,radius:[40,120],size:[26,44],sizeCurve:[[0,1],[1,0]],color:[[0,_.white,1],[.4,_.gold,1],[1,_.goldLo,0]],drag:2.6,rotation:[0,45],intensity:2},{name:`streaks`,shape:`streak`,blend:`add`,count:30,life:[.3,.6],speed:[700,1500],spread:360,radius:[60,160],size:[8,12],color:[[0,_.white,1],[.5,_.gold,1],[1,_.red,0]],drag:3,stretch:.03,intensity:1.8},{name:`puffs`,shape:`puff`,blend:`normal`,count:8,life:[.4,.7],speed:[200,500],spread:360,radius:[80,160],size:[80,120],sizeCurve:[[0,.6],[.3,1],[1,.1]],color:[[0,`#FFF6C8`,1],[.4,_.gold,1],[1,_.goldLo,0]],drag:4,outline:0}]},z={name:`stormStrike`,kind:`burst`,layers:[{name:`sparks`,shape:`streak`,blend:`add`,count:10,life:[.2,.4],speed:[200,500],spread:360,size:[5,8],color:[[0,_.white,1],[.5,`#C9A8FF`,1],[1,_.sky3,0]],gravity:[0,400],stretch:.03,intensity:1.7}]},B=e=>({fire:e(`fire`),ice:e(`ice`)}),V={hand:B(ne),windup:B(M),vortex:B(N),aura:B(re),glass:B(P),shieldReady:B(F),hiss:B(I),seamSparks:B(ie),runeSpark:B(ae),runeTrail:B(oe),overchargeArcs:B(se),overchargeBolt:B(L),fightBurst:R,stormStrike:z},H=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,U=`
float hash12(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm3(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; }
  return s;
}
`;function W(e,t,n=!1,r=H){return new D({uniforms:t,vertexShader:r,fragmentShader:e,transparent:!0,depthTest:!1,depthWrite:!1,side:2,blending:5,blendSrc:201,blendDst:n?201:205,blendSrcAlpha:n?200:201,blendDstAlpha:n?201:205})}function G(e){let[t,n,r]=S(e);return new w(t,n,r)}function K(){return new ee(1,1)}var q={storm:-1,pillar:.4,bubble:.6,aura:.5,runes:1.5,lightning:2.5},ce=`
uniform vec3 uColor;
uniform vec3 uCore;
uniform float uTime;
uniform float uAlpha;
varying vec2 vUv;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float x = p.x;
  float t = vUv.y;
  float prof = exp(-x * x * 5.0) * 0.55 + exp(-x * x * 38.0) * 0.7;
  float vfade = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.7, 1.0, t));
  float streak = 0.72 + 0.28 * sin(t * 26.0 - uTime * 9.0 + sin(x * 9.0 + uTime) * 2.0);
  float A = prof * vfade * streak * uAlpha;
  vec3 col = mix(uColor, uCore, exp(-x * x * 26.0));
  gl_FragColor = vec4(col * A, 0.0);
}
`,le=`
uniform vec3 uColor;
uniform vec3 uCore;
uniform float uTime;
uniform float uAlpha;
varying vec2 vUv;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;
  float a = atan(p.y, p.x);
  float flame = 0.78 + 0.07 * sin(a * 7.0 + uTime * 5.0) + 0.04 * sin(a * 13.0 - uTime * 8.0);
  // Языки ауры длиннее сверху (y вниз: верх — отрицательный y).
  flame += 0.08 * smoothstep(0.2, -0.9, p.y);
  float ring = exp(-pow((r - flame) * 7.0, 2.0));
  float fill = smoothstep(flame, 0.2, r) * 0.18;
  float A = (ring + fill) * uAlpha;
  vec3 col = mix(uColor, uCore, ring * 0.6);
  gl_FragColor = vec4(col * A, 0.0);
}
`,J=class{pillar;aura;pm;am;constructor(n,r){let i=e[r],a=()=>({uColor:{value:G(i.hi)},uCore:{value:G(t.gold)},uTime:{value:0},uAlpha:{value:0}});this.pm=W(ce,a(),!0),this.am=W(le,a(),!0),this.pillar=new T(n,this.pm),this.aura=new T(n,this.am);for(let e of[this.pillar,this.aura])e.frustumCulled=!1,e.visible=!1;this.pillar.renderOrder=q.pillar,this.aura.renderOrder=q.aura}update(e,t,n,r,i,a,o,s){let c=o>.01;if(this.pillar.visible=c,this.aura.visible=c,!c)return;let l=Math.max(10,n-t);this.pillar.position.set(e,t+l/2,0),this.pillar.scale.set(r,l,1),this.aura.position.set(e,n-a*.25,0),this.aura.scale.set(i*2,a*2,1);for(let e of[this.pm,this.am])e.uniforms.uTime.value=s,e.uniforms.uAlpha.value=o}dispose(){this.pm.dispose(),this.am.dispose()}},ue=`
attribute float aSide;
varying float vSide;
void main() {
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,de=`
uniform vec3 uColor;
uniform float uAlpha;
varying float vSide;
void main() {
  float v = abs(vSide);
  float core = 1.0 - smoothstep(0.12, 0.3, v);
  float glow = exp(-v * v * 4.0) * 0.7;
  float A = max(core, glow) * uAlpha;
  vec3 col = mix(uColor, vec3(1.0), core * 0.9);
  gl_FragColor = vec4(col * A, 0.0);
}
`,Y=class{flickerMs;mesh;material;geometry;pos;n;rand;lastShape=-1/0;constructor(e,t=10,n=7,r=55){this.flickerMs=r,this.n=t+1,this.rand=k(n),this.pos=new Float32Array(this.n*2*3);let i=new Float32Array(this.n*2),a=[];for(let e=0;e<this.n;e++)if(i[e*2]=-1,i[e*2+1]=1,e<this.n-1){let t=e*2;a.push(t,t+1,t+2,t+1,t+3,t+2)}this.geometry=new O,this.geometry.setAttribute(`position`,new E(this.pos,3)),this.geometry.setAttribute(`aSide`,new E(i,1)),this.geometry.setIndex(a),this.material=W(de,{uColor:{value:G(e)},uAlpha:{value:0}},!0,ue),this.mesh=new T(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=q.lightning,this.mesh.visible=!1}set(e,t,n,r,i,a,o,s=!1){if(this.material.uniforms.uAlpha.value=o,this.mesh.visible=o>.01,!this.mesh.visible||!s&&a-this.lastShape<this.flickerMs)return;this.lastShape=a;let c=n-e,l=r-t,u=Math.hypot(c,l)||1,d=-l/u,f=c/u,p=this.rand,m=[];for(let n=0;n<this.n;n++){let r=n/(this.n-1),a=Math.sin(Math.PI*r),o=n===0||n===this.n-1?0:(p()-.5)*2*i.jag*u*(.35+.65*a);m.push([e+c*r+d*o,t+l*r+f*o])}for(let e=0;e<this.n;e++){let t=m[e],n=m[Math.max(0,e-1)],r=m[Math.min(this.n-1,e+1)],a=r[0]-n[0],o=r[1]-n[1],s=Math.hypot(a,o)||1;a/=s,o/=s;let c=i.width/2*(.55+.45*Math.sin(Math.PI*(e/(this.n-1)))+.15),l=e*6;this.pos[l]=t[0]-o*c,this.pos[l+1]=t[1]+a*c,this.pos[l+2]=0,this.pos[l+3]=t[0]+o*c,this.pos[l+4]=t[1]-a*c,this.pos[l+5]=0}this.geometry.getAttribute(`position`).needsUpdate=!0}hide(){this.mesh.visible=!1}dispose(){this.geometry.dispose(),this.material.dispose()}},fe=`
uniform vec3 uColor;
uniform vec3 uDark;
uniform vec3 uInk;
uniform float uAlpha;
uniform float uSpin;
uniform float uSeed;
uniform float uFront;
varying vec2 vUv;
float h1(float n) { return fract(sin(n) * 43758.5453123); }
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  // Передняя половина эллипса — нижняя на экране (y вниз), задняя — верхняя.
  if ((uFront > 0.5) != (p.y >= 0.0)) discard;
  float r = length(p);
  if (r > 1.0) discard;
  float aa = fwidth(r) * 1.5;
  float inner = 0.74;
  float outer = 0.95;
  float band = smoothstep(inner - aa, inner, r) * (1.0 - smoothstep(outer, outer + aa, r));
  float edge = min(r - inner, outer - r);
  float inkLine = band * (1.0 - smoothstep(0.012, 0.028 + aa, edge));
  float goldLine = band * (1.0 - smoothstep(0.0, 0.01 + aa, abs(edge - 0.042)));
  float a = atan(p.y, p.x) + uSpin;
  float N = 14.0;
  float t = a / 6.2831853 + 2.0;
  float cell = floor(t * N);
  float u = fract(t * N);
  float v = (r - inner) / (outer - inner);
  float h = h1(cell * 1.37 + uSeed);
  float w = 0.07;
  float stem = 1.0 - smoothstep(w, w + 0.05, abs(u - 0.5));
  float diag = 1.0 - smoothstep(w, w + 0.05, abs((u - 0.5) - (v - 0.5) * (h > 0.5 ? 0.9 : -0.9)));
  float bar = (1.0 - smoothstep(w, w + 0.06, abs(v - (0.3 + 0.4 * h1(cell * 2.1 + uSeed))))) * step(abs(u - 0.5), 0.3);
  float glyph = max(stem * step(0.2, h), max(diag * step(0.35, h), bar));
  glyph *= step(0.22, v) * step(v, 0.78) * band;
  vec3 col = uDark;
  col = mix(col, uColor * 1.15, goldLine);
  col = mix(col, uColor * 1.45 + vec3(0.18), glyph);
  col = mix(col, uInk, inkLine);
  float A = band * uAlpha;
  float glow = exp(-pow((r - (inner + outer) * 0.5) * 5.0, 2.0)) * 0.45 * (1.0 - band);
  gl_FragColor = vec4(col * A + uColor * glow * uAlpha, A);
}
`,X=class{back;front;bm;fm;constructor(e,n,r){let i=e=>W(fe,{uColor:{value:G(n)},uDark:{value:G(t.panel)},uInk:{value:G(t.ink)},uAlpha:{value:1},uSpin:{value:0},uSeed:{value:r},uFront:{value:+!!e}});this.bm=i(!1),this.fm=i(!0),this.back=new T(e,this.bm),this.front=new T(e,this.fm),this.back.renderOrder=.9,this.front.renderOrder=1.5;for(let e of[this.back,this.front])e.frustumCulled=!1}update(e,t,n,r,i,a,o){let s=o>.01&&n>1;for(let a of[this.back,this.front])a.visible=s,a.position.set(e,t,0),a.scale.set(n*2,n*2*r,1),a.rotation.z=i;for(let e of[this.bm,this.fm])e.uniforms.uSpin.value=a,e.uniforms.uAlpha.value=o}removeFromParent(){this.back.removeFromParent(),this.front.removeFromParent()}dispose(){this.bm.dispose(),this.fm.dispose()}},Z=1.22,pe=`
uniform vec3 uColor;
uniform vec3 uHi;
uniform vec3 uInk;
uniform float uTime;
uniform float uOpen;
uniform float uEnergy;
uniform float uCrack;
uniform float uFlash;
uniform float uAlpha;
uniform vec4 uRipple;
uniform float uAspect;
uniform float uSeed;
varying vec2 vUv;
${U}

vec4 hexCoords(vec2 uv) {
  vec2 r = vec2(1.0, 1.7320508);
  vec2 h = r * 0.5;
  vec2 a = mod(uv, r) - h;
  vec2 b = mod(uv - h, r) - h;
  vec2 gv = dot(a, a) < dot(b, b) ? a : b;
  return vec4(gv, uv - gv);
}
float hexEdge(vec2 gv) {
  vec2 p = abs(gv);
  return max(dot(p, vec2(0.5, 0.8660254)), p.x);
}

void main() {
  vec2 p = (vUv * 2.0 - 1.0) * ${Z.toFixed(2)};
  float open = max(uOpen, 0.0001);
  vec2 q = p / open;
  float r = length(q);
  if (r > ${Z.toFixed(2)}) discard;
  float aa = fwidth(r) * 1.5;
  float inside = 1.0 - smoothstep(1.0 - aa, 1.0, r);
  float e = 0.4 + 0.6 * uEnergy;
  float fres = pow(clamp(r, 0.0, 1.0), 3.0);

  // Гекс-сетка на поверхности (с поправкой на вытянутость эллипса), медленно плывёт.
  vec4 hc = hexCoords(q * vec2(uAspect, 1.0) * 3.4 + vec2(0.0, uTime * 0.06));
  float hexLine = smoothstep(0.41, 0.47, hexEdge(hc.xy));

  // Рябь от точки удара: кольцо по поверхности.
  float rip = 0.0;
  if (uRipple.w > 0.0) {
    float d = length((q - uRipple.xy) * vec2(uAspect, 1.0)) / max(uAspect, 1.0);
    float front = uRipple.z * 3.4;
    rip = exp(-pow((d - front) * 5.0, 2.0)) * (1.0 - smoothstep(0.0, 0.6, uRipple.z)) * uRipple.w;
  }
  float hexVis = (0.16 + 0.6 * fres) * e + rip * 1.4;

  // Трещины: рёбра ячеек Вороного, ползут от обода внутрь по мере убывания запаса.
  float crack = 0.0;
  if (uCrack > 0.01) {
    vec2 g = q * 2.4 + uSeed;
    vec2 ip = floor(g);
    vec2 fp = fract(g);
    float f1 = 8.0;
    float f2 = 8.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 o = vec2(float(i), float(j));
        vec2 pt = o + vec2(hash12(ip + o), hash12(ip + o + 17.31));
        float dd = length(pt - fp);
        if (dd < f1) { f2 = f1; f1 = dd; } else if (dd < f2) { f2 = dd; }
      }
    }
    float line = 1.0 - smoothstep(0.0, 0.045, f2 - f1);
    float reach = smoothstep(1.05 - uCrack * 1.15, 1.15 - uCrack * 1.15, r);
    crack = line * reach * smoothstep(0.0, 0.3, uCrack);
  }

  vec3 col = mix(uColor, uHi, fres * 0.85);
  float a = (0.06 + 0.3 * fres) * e;
  col = mix(col, uHi * 1.25 + vec3(0.12), clamp(hexLine * hexVis, 0.0, 1.0));
  a = max(a, hexLine * hexVis * 0.6);
  float rim = smoothstep(0.84, 0.99, r) * inside;
  col = mix(col, mix(uHi, vec3(1.0), 0.4) * 1.35, rim);
  a = max(a, rim * 0.8 * e);
  // Блик-серп сверху слева (y вниз: верх — отрицательный y).
  float gl = (1.0 - smoothstep(0.0, 0.06, abs(length(q - vec2(0.1, 0.1)) - 0.74))) * smoothstep(0.15, -0.65, q.x + q.y);
  col = mix(col, vec3(1.0), gl * 0.9);
  a = max(a, gl * 0.85);
  float ink = 1.0 - smoothstep(0.0, 0.03 + aa, abs(r - 1.0));
  col = mix(col, uInk, ink * 0.7);
  a = max(a, ink * 0.55 * e);
  col = mix(col, vec3(1.0), crack);
  a = max(a, crack * 0.95);
  col = mix(col, vec3(1.0), uFlash * 0.85);
  a = max(a, uFlash * 0.8);
  a *= inside;
  float halo = (1.0 - inside) * exp(-(r - 1.0) * 12.0) * (0.3 * e + 0.5 * uFlash);
  vec3 rgbOut = col * a + uHi * halo;
  float A = a + halo * 0.6;
  gl_FragColor = vec4(rgbOut, A) * uAlpha;
}
`,me=class{side;mesh;material;constructor(n,r){this.side=r;let i=e[r];this.material=W(pe,{uColor:{value:G(i.base)},uHi:{value:G(i.hi)},uInk:{value:G(t.ink)},uTime:{value:0},uOpen:{value:0},uEnergy:{value:1},uCrack:{value:0},uFlash:{value:0},uAlpha:{value:1},uRipple:{value:new te(0,0,0,0)},uAspect:{value:1},uSeed:{value:r===`left`?3.7:11.2}}),this.mesh=new T(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=q.bubble,this.mesh.visible=!1}update(e,t,n,r,i,a){let o=i.ghost>0&&i.open<.05,s=o?.55+.45*i.ghost:i.open,c=o?i.ghost*.8:1,l=s>.02&&c>.01;if(this.mesh.visible=l,!l)return;this.mesh.position.set(e,t,0),this.mesh.scale.set(n*2*Z,r*2*Z,1);let u=this.material.uniforms;u.uTime.value=a,u.uOpen.value=s,u.uEnergy.value=i.energy,u.uCrack.value=i.crack,u.uFlash.value=o?Math.max(i.flash,i.ghost*.6):i.flash,u.uAlpha.value=c,u.uAspect.value=n/Math.max(1,r);let d=u.uRipple.value;i.ripple?d.set(i.ripple.x,i.ripple.y,i.ripple.ageMs/1e3,1):d.set(0,0,0,0)}dispose(){this.material.dispose()}},he=`
uniform vec3 uTop;
uniform vec3 uBottom;
uniform float uTime;
uniform float uAlpha;
varying vec2 vUv;
${U}
void main() {
  float t = vUv.y;
  vec3 col = mix(uTop, uBottom, t);
  float clouds = fbm3(vec2(vUv.x * 3.0 + uTime * 0.04, t * 2.2 - uTime * 0.025));
  float a = mix(0.62, 0.26, t) + (clouds - 0.5) * 0.34;
  a = clamp(a, 0.0, 0.8) * uAlpha;
  gl_FragColor = vec4(col * a, a);
}
`,ge=class{mesh;material;constructor(e){this.material=W(he,{uTop:{value:G(t.sky4)},uBottom:{value:G(`#4B2A9E`)},uTime:{value:0},uAlpha:{value:0}}),this.mesh=new T(e,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=q.storm,this.mesh.visible=!1}update(e,t,n,r,i,a){this.mesh.visible=i>.01,this.mesh.visible&&(this.mesh.position.set(e+n/2,t+r/2,0),this.mesh.scale.set(n,r,1),this.material.uniforms.uAlpha.value=i,this.material.uniforms.uTime.value=a)}dispose(){this.material.dispose()}},Q=[`left`,`right`],$=e=>b[e],_e=class{fx;balance;geometry=null;meshes=null;storm=null;strikes=[];overSets=null;bolts=new Map;pendingLaunch=new Map;windups={left:null,right:null};windupPos={left:null,right:null};hands={left:{leftWrist:null,rightWrist:null},right:{leftWrist:null,rightWrist:null}};vortex={left:[null,null],right:[null,null]};hiss={left:[null,null],right:[null,null]};aura={left:null,right:null};fullCharge={left:0,right:0};stormLevel=0;nextStrike=0;strikeAt=null;nextSeam=0;seamFlip=!1;dimUntil=-1/0;dimmed=!1;rand=k(53473);view=null;rect=null;fxNow=0;disposed=!1;constructor(e,t){this.fx=e,this.balance=t,this.buildMeshes()}onTierChange(){this.buildMeshes()}reset(){for(let e of this.bolts.values())this.dropBolt(e);this.bolts.clear(),this.pendingLaunch.clear();for(let e of Q)this.windups[e]?.stop(),this.windups[e]=null,this.fullCharge[e]=0;this.stormLevel=0,this.fx.clock.reset(),this.fx.stage?.setDim(0),this.dimmed=!1}frame(e,t){if(this.disposed)return;this.view=e;let n=this.fx.stage;this.rect=n?n.videoRect():null,this.fx.clock.setPaused(e.paused??e.state?.phase===`paused`),this.fx.frame(e.nowMs,(n,r)=>{this.fxNow=n,this.update(e,n),t?.(n,r)})}stormSoon(){this.nextStrike=this.fxNow+550}onEvents(e){for(let t of e)switch(t.type){case`windupCancel`:this.windupCancel(t.side);break;case`boltLaunch`:this.launch(t.side,t.bolt,!1);break;case`overchargeLaunch`:this.launch(t.side,t.bolt,!0);break;case`hit`:this.hit(t.side,t.damage,t.isOvercharge);break;case`reflect`:this.reflect(t.side,t.bolt);break;case`reflectedAbsorbed`:this.absorbed(t.side);break;case`shieldBreak`:this.shieldBreak(t.side);break;case`shieldReady`:this.shieldReady(t.side);break;case`stackGained`:this.stackGained(t.side);break;case`fullCharge`:this.fullChargeBurst(t.side);break;case`chargeBurned`:this.chargeBurned(t.side);break;case`chargeLockStart`:this.lockStart(t.side);break;case`suddenDeathStart`:this.stormSoon();break;case`matchEnd`:this.fx.slowMo(.3,650,450)}}fightStart(){let e=this.rect??this.fx.stage?.videoRect();if(!e)return;let t=e.x+e.w/2,n=e.y+e.h*.42;this.fx.burst(V.fightBurst,t,n,{scale:1.2}),this.fx.shockwave(t,n,{preset:`goldShockwave`,scale:1.3,wave:{radius:1100,strength:22,width:70,durationMs:650}}),this.fx.flash({x:t,y:n,radius:700,color:_.gold,intensity:.55,durationMs:300}),this.fx.shake({amplitudePx:7,durationMs:220})}dispose(){if(!this.disposed){this.disposed=!0,this.reset();for(let e of Q){for(let t of[`leftWrist`,`rightWrist`])this.hands[e][t]?.emitter.stop();for(let t of[...this.vortex[e],...this.hiss[e],this.aura[e]])t?.stop()}this.disposeMeshes()}}get unit(){return this.fx.stage?.unit??1}disposeMeshes(){if(this.meshes)for(let e of Q)this.meshes[e].bubble.dispose(),this.meshes[e].pillar.dispose();this.storm?.dispose();for(let e of this.strikes)e.dispose();for(let e of Object.values(this.overSets??{})){for(let t of e.rings)t.dispose();for(let t of e.arcs)t.dispose()}this.overSets=null,this.geometry?.dispose(),this.meshes=null,this.storm=null,this.strikes=[],this.geometry=null}buildMeshes(){this.disposeMeshes();let e=this.fx.stage;if(!e)return;let t=K();this.geometry=t;let n=n=>{let r={bubble:new me(t,n),pillar:new J(t,n)};return e.add(r.bubble.mesh),e.add(r.pillar.pillar),e.add(r.pillar.aura),r};this.meshes={left:n(`left`),right:n(`right`)},this.storm=new ge(t),e.add(this.storm.mesh),this.strikes=[new Y(`#C9A8FF`,14,31,45),new Y(`#C9A8FF`,9,57,45)];for(let t of this.strikes)e.add(t.mesh);let r=n=>{let r={rings:[new X(t,_.gold,3.1),new X(t,n===`fire`?_.redHi:_.blueHi,8.7)],arcs:[new Y(`#FFE9A8`,7,n===`fire`?11:23),new Y(n===`fire`?`#FFD27A`:`#BFF6FF`,7,n===`fire`?17:29)],busy:!1};for(let t of r.rings)t.update(0,0,1,1,0,0,0),e.add(t.back),e.add(t.front);for(let t of r.arcs)e.add(t.mesh);return r};this.overSets={fire:r(`fire`),ice:r(`ice`)},this.prewarm();for(let e of this.bolts.values())e.over&&=(e.over.sparks.stop(),e.over.lens.release(),null)}prewarm(){let e=this.fx.stage;if(!e)return;let t=[];e.scene.traverse(e=>{e.visible||=(t.push(e),!0)});try{e.renderer.compileAsync(e.scene,e.camera).catch(()=>{})}catch{}for(let e of t)e.visible=!1}px(e){let t=this.rect;return{x:t.x+e.x*t.w,y:t.y+e.y*t.h}}body(e){return this.view?.bodies[e]??null}innerWristNorm(e){let t=c(this.body(e),e,1,1);return t?{x:t.x,y:t.y}:null}update(e,t){let n=this.rect;if(!n||!this.fx.stage)return;let r=e.state,i=t/1e3;for(let a of Q)this.updateHands(a,e.humans[a],n),this.updateWindup(a,r,n),this.updateCharge(a,r,e.readings[a],n,i,t),this.updateBubble(a,e.bubbles[a],n,i);this.updateBolts(r,n,t,r&&r.phase!==`paused`?e.tickFrac??0:0),this.updateStorm(e.storm??(!!r&&(r.phase===`suddenDeath`||r.phase!==`ended`&&r.suddenDeathStartTick!==null)),n,t),this.updateSeam(n,t),this.dimmed&&t>=this.dimUntil&&(this.dimmed=!1,this.fx.stage.setDim(0))}updateHands(e,t,n){let r=this.body(e),i=a(r,n.w,n.h),o=Math.max(.55,Math.min(1.5,i/(.26*(this.fx.stage?.height??n.h))));for(let i of[`leftWrist`,`rightWrist`]){let a=t?u(r,i,n.w,n.h,.35):null,s=this.hands[e][i];if(!a){s?.emitter.stop(),this.hands[e][i]=null;continue}let c=n.x+a.x,l=n.y+a.y;s&&Math.abs(s.scale/o-1)<.3?s.emitter.moveTo(c,l):(s?.emitter.stop(),this.hands[e][i]={emitter:this.fx.emitter(V.hand[$(e)],c,l,{scale:o}),scale:o})}}updateWindup(e,t,n){if(!(t&&t.phase!==`ended`&&t.players[e].windup!==null)){this.windups[e]&&(this.windups[e].stop(),this.windups[e]=null);return}let r=this.innerWristNorm(e)??g(e),i=this.px(r);if(this.windupPos[e]=i,this.windups[e])this.windups[e].moveTo(i.x,i.y);else{let t=a(this.body(e),n.w,n.h),r=Math.max(.7,Math.min(1.4,t/(.26*(this.fx.stage?.height??n.h))));this.windups[e]=this.fx.emitter(V.windup[$(e)],i.x,i.y,{scale:r})}}updateCharge(e,t,n,i,o,s){let c=this.body(e),d=t?.players[e]??null,f=!!t&&(t.phase===`fighting`||t.phase===`suddenDeath`),p=this.view?.charge?.[e],m=p?p.charging:t?f&&d.lastConfirmed===`charge`:n===`charge`,h=a(c,i.w,i.h),g=Math.max(.6,Math.min(1.4,h/(.26*(this.fx.stage?.height??i.h)))),_=[`leftWrist`,`rightWrist`].map(e=>u(c,e,i.w,i.h,.3)),v=l(c,e,i.w,i.h);for(let t=0;t<2;t++){let n=_[t]??(t===0?{x:v.x,y:v.y-h*1.1}:null),r=this.vortex[e][t]??null;!m||!n?(r?.stop(),this.vortex[e][t]=null):r?r.moveTo(i.x+n.x,i.y+n.y):this.vortex[e][t]=this.fx.emitter(V.vortex[$(e)],i.x+n.x,i.y+n.y,{scale:g})}let y=p?p.locked:!!t&&!!d&&f&&r(d,t.tick);for(let t=0;t<2;t++){let n=_[t],r=this.hiss[e][t]??null;!y||!n?(r?.stop(),this.hiss[e][t]=null):r?r.moveTo(i.x+n.x,i.y+n.y):this.hiss[e][t]=this.fx.emitter(V.hiss[$(e)],i.x+n.x,i.y+n.y,{scale:g})}let b=p?p.full:!!d&&!!t&&t.phase!==`ended`&&d.stacks>=this.balance.duel.maxStacks,x=+!!b;this.fullCharge[e]+=(x-this.fullCharge[e])*Math.min(1,(this.fx.clock.delta||16)/140);let S=this.fullCharge[e],C=l(c,e,i.w,i.h),w=this.meshes?.[e];if(w){let e=.78+.22*Math.sin(s/160);w.pillar.update(i.x+C.x,i.y,i.y+C.y+h*.6,h*1.5,h*1.35,h*2.1,S*e,o)}b&&!this.aura[e]?this.aura[e]=this.fx.emitter(V.aura[$(e)],i.x+C.x,i.y+C.y,{scale:g}):b?this.aura[e].moveTo(i.x+C.x,i.y+C.y):this.aura[e]&&(this.aura[e].stop(),this.aura[e]=null)}updateBubble(e,t,n,r){let i=this.meshes?.[e];if(!i)return;let a=s(this.body(e),e,n.w,n.h);i.bubble.update(n.x+a.cx,n.y+a.cy,a.rx,a.ry,t,r)}updateBolts(e,t,n,r){for(let e of this.bolts.values())e.seen=!1;let i=this.fx.stage;for(let a of e?.bolts??[]){let e=this.bolts.get(a.id),o={...a,progress:d(a,r)},s=this.px(h(o,e?.launchFrom??this.pendingLaunch.get(a.id)??null));if(!e){let n=$(a.owner),r=p(a,t.h,i.height);e={emitter:this.fx.emitter(a.isOvercharge?V.overchargeBolt[n]:y[n].bolt,s.x,s.y,{scale:r}),element:n,launchFrom:this.pendingLaunch.get(a.id)??null,scale:r,over:null,last:s,seen:!0},this.pendingLaunch.delete(a.id),this.bolts.set(a.id,e)}e.seen=!0,e.emitter.moveTo(s.x,s.y),e.last=s,a.isOvercharge&&this.updateOvercharge(e,a,s,n)}for(let[e,t]of this.bolts)t.seen||(this.dropBolt(t),this.bolts.delete(e))}updateOvercharge(e,t,n,r){let i=this.fx.stage;if(!e.over){let t=this.overSets?.[e.element];if(!t||t.busy)return;t.busy=!0,e.over={set:t,sparks:this.fx.emitter(V.overchargeArcs[e.element],n.x,n.y,{scale:e.scale/2}),lens:this.fx.lens(n.x,n.y,0,0)}}let{rings:a,arcs:o}=e.over.set,s=.06*i.height*e.scale,c=r/1e3,l=t.target===`right`?1:-1;a[0].update(n.x,n.y,s*1.7,.42,l*.35,c*3.2,.95),a[1].update(n.x,n.y,s*1.45,.34,-l*.6,-c*4.1,.9);for(let e=0;e<o.length;e++){let t=this.rand()*Math.PI*2,i=s*(1.2+this.rand()*.6);o[e].set(n.x,n.y,n.x+Math.cos(t)*i,n.y+Math.sin(t)*i,{jag:.22,width:16*this.unit},r,.9)}e.over.sparks.moveTo(n.x,n.y),e.over.lens.set(n.x-l*s*.6,n.y,s*2.4,24*this.unit)}dropBolt(e){if(e.emitter.stop(),e.over){e.over.sparks.stop(),e.over.lens.release();for(let t of e.over.set.rings)t.update(0,0,1,1,0,0,0);for(let t of e.over.set.arcs)t.hide();e.over.set.busy=!1,e.over=null}}updateStorm(e,t,n){let r=this.fx.clock.delta||0;if(this.stormLevel+=(+!!e-this.stormLevel)*Math.min(1,r/500),this.storm?.update(t.x,t.y,t.w,t.h,this.stormLevel,n/1e3),e&&n>=this.nextStrike&&this.strikes.length){this.nextStrike=n+1400+this.rand()*1600;let e=t.x+t.w*(.12+this.rand()*.76),r=e+(this.rand()-.5)*t.w*.2,i=t.y+t.h*(.22+this.rand()*.16);this.strikeAt={start:n,ax:e,ay:t.y,bx:r,by:i,mesh:this.rand()<.5?0:1},this.fx.reducedMotion||(this.fx.flash({x:r,y:i,radius:520,color:`#B58CFF`,intensity:.32,durationMs:220}),this.fx.burst(V.stormStrike,r,i))}for(let e=0;e<this.strikes.length;e++){let t=this.strikeAt,r=this.strikes[e];if(!t||t.mesh!==e){r.hide();continue}let i=n-t.start,a=i<200?(Math.floor(i/45)%2==0?1:.45)*(1-i/260):0;a<=0?(r.hide(),i>260&&(this.strikeAt=null)):r.set(t.ax,t.ay,t.bx,t.by,{jag:.16,width:22*this.unit},n,a*Math.max(.8,this.stormLevel))}}updateSeam(e,t){if(t<this.nextSeam)return;this.nextSeam=t+70+this.rand()*50,this.seamFlip=!this.seamFlip;let n=this.seamFlip?`fire`:`ice`,r=e.x+e.w/2+(n===`fire`?-3:3)*this.unit,i=e.y+e.h*(.04+this.rand()*.92);this.fx.burst(V.seamSparks[n],r,i,{scale:.8+this.rand()*.5})}windupCancel(e){let t=this.windupPos[e];this.windups[e]?.stop(),this.windups[e]=null,t&&this.fx.burst(y[$(e)].smokePop,t.x,t.y,{scale:1.2})}launch(e,t,n){let r=this.innerWristNorm(e);if(this.pendingLaunch.set(t.id,r),!this.rect){n&&this.fx.kick(A.overchargeKick.amount,A.overchargeKick.durationMs);return}let i=this.px(r??f(e)),a=t.target===`right`?0:180,o=$(e);this.fx.burst(y[o].muzzle,i.x,i.y,{angle:a,scale:n?1.6:1}),this.windups[e]?.stop(),this.windups[e]=null,n?(this.fx.kick(A.overchargeKick.amount,A.overchargeKick.durationMs),this.fx.stage?.setDim(.35),this.dimmed=!0,this.dimUntil=this.fxNow+450,this.fx.burst(V.runeSpark[o],i.x,i.y,{scale:1.6}),this.fx.flash({x:i.x,y:i.y,radius:300,color:_.gold,intensity:.35,durationMs:180})):this.fx.flash({x:i.x,y:i.y,radius:220,color:o===`fire`?_.redHi:_.blueHi,intensity:.35,durationMs:140})}impactPoint(e){return this.px(f(e))}hit(e,t,r){let i=this.rect,a=$(n(e)),o=r?A.overcharge:A.hit(t);if(this.fx.shake(o),!i)return;let s=this.impactPoint(e),c=Math.max(0,Math.min(1,(t-15)/35));r?(this.fx.burst(y[a].hit,s.x,s.y,{scale:1.7}),this.fx.burst(V.fightBurst,s.x,s.y,{scale:1.1}),this.fx.shockwave(s.x,s.y,{preset:y[a].shockwave,scale:2.3,wave:{radius:1500,strength:42,width:90,durationMs:820}}),this.fx.shockwave(s.x,s.y,{preset:`goldShockwave`,scale:1.4,distortion:!1}),this.fx.flash({color:`#FFFFFF`,intensity:.6,durationMs:340}),this.fx.hitStop(120)):(this.fx.burst(y[a].hit,s.x,s.y,{scale:1+.3*c}),this.fx.shockwave(s.x,s.y,{preset:y[a].shockwave,scale:.75+.35*c,wave:{radius:520,strength:20,width:56,durationMs:520}}),this.fx.flash({x:s.x,y:s.y,radius:460,color:_.red,intensity:.32+.2*c,durationMs:220}),this.fx.hitStop(60+30*c))}bubbleEdge(e){let t=this.rect;if(!t)return null;let n=s(this.body(e),e,t.w,t.h),r=e===`left`?1:-1;return m({x:0,y:0,w:t.w,h:t.h},{x:n.cx+r*n.rx*.82,y:n.cy-n.ry*.05})}reflect(e,t){let n=this.bubbleEdge(e);if(this.pendingLaunch.set(t.id,n),this.fx.shake(A.reflect),!n)return;let r=this.px(n);this.fx.burst(`reflectPing`,r.x,r.y,{scale:1.2}),this.fx.burst(y[$(e)].muzzle,r.x,r.y,{angle:e===`left`?0:180}),this.fx.flash({x:r.x,y:r.y,radius:320,color:`#FFFFFF`,intensity:.7,durationMs:160}),this.fx.hitStop(60)}absorbed(e){let t=this.bubbleEdge(e);if(!t)return;let n=this.px(t);this.fx.burst(`reflectPing`,n.x,n.y,{scale:.8})}shieldBreak(e){this.fx.shake({amplitudePx:7,durationMs:160});let t=this.rect;if(!t)return;let n=s(this.body(e),e,t.w,t.h),r=Math.max(.7,Math.min(1.6,n.rx/(.3*(this.fx.stage?.height??t.h))));this.fx.burst(V.glass[$(e)],t.x+n.cx,t.y+n.cy,{scale:r}),this.fx.flash({x:t.x+n.cx,y:t.y+n.cy,radius:420,color:`#FFFFFF`,intensity:.45,durationMs:180})}shieldReady(e){let t=this.rect;if(!t)return;let n=s(this.body(e),e,t.w,t.h);this.fx.burst(V.shieldReady[$(e)],t.x+n.cx-n.rx*.45,t.y+n.cy-n.ry*.5)}orbitCenter(e){let t=this.rect;if(!t)return null;let n=this.body(e),r=i(n?.hat??null,t.w,t.h);if(r){let e=o(r);return{x:t.x+e.cx,y:t.y+e.cy}}let s=u(n,`nose`,t.w,t.h),c=a(n,t.w,t.h);if(s)return{x:t.x+s.x,y:t.y+s.y-c*.7};let d=l(n,e,t.w,t.h);return{x:t.x+d.x,y:t.y+d.y-c*1.2}}stackGained(e){let t=this.orbitCenter(e);t&&this.fx.burst(V.runeSpark[$(e)],t.x,t.y)}fullChargeBurst(e){let t=this.rect;if(!t)return;let n=l(this.body(e),e,t.w,t.h);this.fx.shockwave(t.x+n.x,t.y+n.y,{preset:`goldShockwave`,scale:.8,distortion:!1}),this.fx.flash({x:t.x+n.x,y:t.y+n.y-t.h*.2,radius:520,color:_.gold,intensity:.4,durationMs:260})}chargeBurned(e){let t=this.orbitCenter(e);t&&this.fx.burst(V.runeSpark[$(e)],t.x,t.y,{scale:1.3})}lockStart(e){let t=this.rect;if(!t)return;let n=this.body(e);for(let r of[`leftWrist`,`rightWrist`]){let i=u(n,r,t.w,t.h,.3);i&&this.fx.burst(y[$(e)].smokePop,t.x+i.x,t.y+i.y,{scale:.9})}}};export{K as a,J as i,X as n,V as o,Y as r,_e as t};