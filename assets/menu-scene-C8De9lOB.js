import{t as e}from"./tokens-Cw4laJjl.js";import{r as t}from"./quality-Dp7DmYZh.js";import{n,t as r}from"./motion-bYE0hprd.js";import{a as i,c as a,h as o}from"./motion-Dh7dcKPN.js";import{n as s,t as c}from"./particle-presets-COlDZ_Gm.js";import{t as l}from"./wizard-variants-Byo15j5K.js";import{Cn as u,Dn as d,F as f,I as ee,J as p,N as m,R as te,Sn as h,T as g,V as ne,W as re,_,a as v,an as y,cn as b,ct as ie,d as x,f as ae,i as S,in as C,it as w,mt as oe,nt as T,o as se,ot as ce,p as le,q as ue,rt as de,st as fe,un as pe,wn as me}from"./three.core-CtBgdmy3.js";import{n as he,r as ge,t as _e}from"./particles-CvrFKVRn.js";import{i as E,n as ve,r as D,t as O}from"./fullscreen-CETxWWVy.js";import{r as k}from"./shake-ChZ6BdTW.js";import{a as A,c as ye,i as be,l as j,n as M,o as N,r as P,s as xe,t as F}from"./toon-wizard-BC0fPycn.js";var I=`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(17.1, 9.2);
    a *= 0.5;
  }
  return s;
}
`,L={zenith:`#5B36C9`,upper:`#F05FA0`,horizon:`#FF9A62`,sunGlow:`#FFD27A`,sun:`#FFF4D2`,below:`#8A5FE0`,deep:`#3F2496`,wisp:`#FFC3DA`,haze:`#C47ACB`},Se=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,Ce=`
uniform vec3 uSun;
uniform float uTime;
uniform float uRays;
uniform vec3 uZenith;
uniform vec3 uUpper;
uniform vec3 uHorizon;
uniform vec3 uSunGlow;
uniform vec3 uSunColor;
uniform vec3 uBelow;
uniform vec3 uDeep;
uniform vec3 uWisp;
varying vec3 vDir;
${I}
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 c;
  if (h >= 0.0) {
    c = mix(uHorizon, uUpper, smoothstep(0.0, 0.22, h));
    c = mix(c, uZenith, smoothstep(0.2, 0.75, h));
  } else {
    c = mix(uBelow, uDeep, smoothstep(0.0, 0.45, -h));
    c = mix(uHorizon, c, smoothstep(0.0, 0.05, -h));
  }
  float s = max(dot(d, uSun), 0.0);
  vec2 dh = normalize(d.xz + 1e-5);
  vec2 sh = normalize(uSun.xz + 1e-5);
  float toward = pow(max(dot(dh, sh), 0.0), 3.0);
  // Золотая полоса горизонта, сильнее к солнцу.
  c += uSunGlow * exp(-abs(h) * 9.0) * (0.12 + 0.4 * toward);
  // Ореол и диск солнца.
  c = mix(c, uSunGlow, pow(s, 10.0) * 0.55);
  c += uSunGlow * pow(s, 90.0) * 0.5;
  float disk = smoothstep(0.9975, 0.9982, s);
  c = mix(c, uSunColor * 1.35, disk);
  // Мягкие лучи вокруг солнца.
  if (uRays > 0.0) {
    vec3 up = vec3(0.0, 1.0, 0.0);
    vec3 ax = normalize(cross(uSun, up));
    vec3 ay = cross(ax, uSun);
    float a = atan(dot(d, ay), dot(d, ax));
    float rays = pow(abs(sin(a * 7.0 + uTime * 0.05)), 18.0) + 0.6 * pow(abs(sin(a * 11.0 - uTime * 0.03 + 1.3)), 24.0);
    c += uSunGlow * rays * smoothstep(0.55, 0.97, s) * (1.0 - smoothstep(0.97, 0.999, s)) * 0.22 * uRays;
  }
  // Перистые облака-мазки в перспективе (плоскость неба).
  if (h > 0.02) {
    vec2 p = d.xz / (h + 0.08) * vec2(0.9, 2.6) + vec2(uTime * 0.006, 0.0);
    float n = fbm(p * 1.3);
    float edge = fwidth(n) * 1.2 + 0.004;
    float wisp = smoothstep(0.6 - edge, 0.6 + edge, n);
    float fade = smoothstep(0.03, 0.12, h) * (1.0 - smoothstep(0.32, 0.6, h));
    vec3 wc = mix(uWisp, uSunGlow, toward * 0.6);
    c = mix(c, wc, wisp * fade * 0.55);
  }
  gl_FragColor = vec4(c, 1.0);
}
`,we=`
varying vec3 vPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Te=`
uniform vec3 uSun;
uniform float uTime;
uniform vec3 uShadow;
uniform vec3 uMid;
uniform vec3 uTop;
uniform vec3 uWarm;
uniform vec3 uFar;
varying vec3 vPos;
${I}
void main() {
  vec2 q = vPos.xz * 0.035 + vec2(uTime * 0.008, uTime * 0.003);
  float puff = fbm(q) * 0.72 + fbm(q * 2.7 - uTime * 0.01) * 0.28;
  float e = fwidth(puff) * 0.8 + 0.002;
  float b1 = smoothstep(0.38 - e, 0.38 + e, puff);
  float b2 = smoothstep(0.52 - e, 0.52 + e, puff);
  vec3 c = mix(uShadow, uMid, b1);
  c = mix(c, uTop, b2);
  vec2 dir = normalize(vPos.xz - cameraPosition.xz + 1e-4);
  float toward = pow(max(dot(dir, normalize(uSun.xz + 1e-5)), 0.0), 2.0);
  c += uWarm * toward * (0.15 + 0.35 * b2);
  float dist = length(vPos.xz - cameraPosition.xz);
  c = mix(c, uFar, smoothstep(18.0, 110.0, dist));
  gl_FragColor = vec4(c, 1.0);
}
`;function Ee(t,n){let r={value:0},i={value:t.clone().normalize()},a=e=>({value:new x(e)}),o=new y({vertexShader:Se,fragmentShader:Ce,side:1,depthWrite:!1,depthTest:!0,uniforms:{uSun:i,uTime:r,uRays:{value:+!!n.rays},uZenith:a(L.zenith),uUpper:a(L.upper),uHorizon:a(L.horizon),uSunGlow:a(L.sunGlow),uSunColor:a(L.sun),uBelow:a(L.below),uDeep:a(L.deep),uWisp:a(L.wisp)}}),s=new p(new b(400,48,24),o);s.renderOrder=100,s.frustumCulled=!1;let c=new y({vertexShader:we,fragmentShader:Te,uniforms:{uSun:i,uTime:r,uShadow:a(`#6544C8`),uMid:a(`#A07BEC`),uTop:a(`#F7C2E4`),uWarm:a(e.sky1),uFar:a(L.below)}}),l=new p(new ce(700,700,1,1),c);return l.rotation.x=-Math.PI/2,l.position.y=-8.5,l.renderOrder=90,{sky:s,sea:l,uniforms:{uTime:r,uSun:i},dispose:()=>{s.geometry.dispose(),o.dispose(),l.geometry.dispose(),c.dispose()}}}var De=4.5,R=2.5,z=.2,B=new u(0,0,.2),Oe=`
varying vec3 vLocal;
varying vec3 vN;
varying vec3 vPosW;
varying float vDepth;
void main() {
  vLocal = position;
  vN = normal;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPosW = wp.xyz;
  vec4 mv = viewMatrix * wp;
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,ke=`
uniform vec3 uLightDir;
uniform vec3 uShadowTint;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uTime;
uniform float uPulse;
uniform vec2 uCharge;
uniform vec3 uWarm;
uniform vec3 uCold;
uniform vec3 uStoneA;
uniform vec3 uStoneB;
uniform vec3 uInner;
uniform vec3 uGrout;
uniform vec3 uSideA;
uniform vec3 uSideB;
uniform vec4 uBlob[2];
uniform float uTop;
varying vec3 vLocal;
varying vec3 vN;
varying vec3 vPosW;
varying float vDepth;
${I}

float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

// Руна в клетке q ∈ [-1, 1]²: 2–4 штриха из набора по битам id.
float glyph(vec2 q, float id) {
  float d = 9.0;
  float b = floor(id * 61.0);
  if (mod(b, 2.0) >= 1.0) d = min(d, segDist(q, vec2(0.0, -0.8), vec2(0.0, 0.8)));
  if (mod(floor(b / 2.0), 2.0) >= 1.0) d = min(d, segDist(q, vec2(-0.6, -0.6), vec2(0.6, 0.6)));
  if (mod(floor(b / 4.0), 2.0) >= 1.0) d = min(d, segDist(q, vec2(-0.6, 0.6), vec2(0.6, -0.6)));
  if (mod(floor(b / 8.0), 2.0) >= 1.0) d = min(d, segDist(q, vec2(-0.6, 0.65), vec2(0.6, 0.65)));
  if (mod(floor(b / 16.0), 2.0) >= 1.0) {
    d = min(d, segDist(q, vec2(-0.6, -0.3), vec2(0.0, 0.35)));
    d = min(d, segDist(q, vec2(0.0, 0.35), vec2(0.6, -0.3)));
  }
  if (mod(floor(b / 32.0), 2.0) >= 1.0 || d > 8.0) d = min(d, abs(length(q) - 0.42));
  return d;
}

void main() {
  vec3 N = normalize(vN);
  float side = smoothstep(-0.25, 0.25, vLocal.x);
  vec3 runeCol = mix(uWarm, uCold, side);
  vec3 c;
  float glow = 0.0;
  if (N.y > 0.5 && uTop > 0.5) {
    vec2 p = vLocal.xz - vec2(0.0, 0.2);
    float r = length(p);
    float th = atan(p.x, p.y);
    float px = fwidth(r) * 1.2 + 1e-3;
    if (r > 1.9) {
      // Плитки кольцами.
      float rr = (r - 1.9) / 0.66;
      float ring = floor(rr);
      float count = max(10.0, floor(6.28318 * (1.9 + (ring + 0.5) * 0.66) / 0.82));
      float u = (th + 3.14159) / 6.28318 * count + ring * 0.37;
      float cell = floor(u);
      float h = hash12(vec2(ring, cell));
      c = mix(uStoneA, uStoneB, step(0.55, h)) * (0.93 + 0.1 * hash12(vec2(cell, ring + 7.0)));
      float fr = fract(rr);
      float fc = fract(u);
      float gr = min(fr, 1.0 - fr) * 0.66;
      float gc = min(fc, 1.0 - fc) * 6.28318 * r / count;
      float g = min(gr, gc);
      c = mix(uGrout, c, smoothstep(0.022, 0.022 + px, g));
      // Царапины и трещины на плитках.
      float crack = fbm(p * 3.0 + h * 10.0);
      c *= 1.0 - 0.12 * smoothstep(0.62, 0.66, crack);
      // Внешний край темнее.
      c = mix(c, uGrout, smoothstep(${4.05.toFixed(2)}, ${4.4.toFixed(2)}, r) * 0.35);
    } else {
      // Внутренний диск — полированный камень с рунами.
      c = uInner * (0.96 + 0.06 * fbm(p * 2.0));
      // Два кольца.
      float ring1 = abs(r - 1.72);
      float ring2 = abs(r - 1.12);
      float lines = 1.0 - smoothstep(0.035, 0.035 + px, ring1);
      lines = max(lines, 1.0 - smoothstep(0.022, 0.022 + px, ring2));
      // Руны между кольцами: 14 секторов.
      float sectors = 14.0;
      float sa = (th + 3.14159) / 6.28318 * sectors;
      float sid = floor(sa);
      vec2 q = vec2((fract(sa) - 0.5) * 2.0 * (1.42 * 6.28318 / sectors) / 0.42, (r - 1.42) / 0.21);
      float gd = glyph(q, hash12(vec2(sid, 3.0)));
      float gw = fwidth(q.y) * 1.5 + 0.02;
      if (r > 1.2 && r < 1.64) lines = max(lines, 1.0 - smoothstep(0.13, 0.13 + gw, gd));
      // Звезда в центре: шесть лучей.
      float a6 = mod(th + 3.14159, 1.0472) - 0.5236;
      float star = abs(r * sin(a6)) - 0.05 * max(0.0, 0.9 - r);
      if (r < 0.9) lines = max(lines, 1.0 - smoothstep(0.0, px * 2.0, star));
      lines = max(lines, 1.0 - smoothstep(0.03, 0.03 + px, abs(r - 0.92)));
      float flicker = 0.85 + 0.15 * sin(uTime * 2.3 + th * 3.0);
      float charge = mix(uCharge.x, uCharge.y, side);
      glow = lines * (0.5 * flicker + uPulse * 0.75 + charge * 0.55);
      c = mix(c, runeCol * 0.85, lines * 0.6);
    }
    // Тени-кляксы под волшебниками.
    for (int i = 0; i < 2; i++) {
      vec2 d = (vLocal.xz - uBlob[i].xy) / vec2(uBlob[i].z, uBlob[i].z * 0.7);
      float sh = 1.0 - smoothstep(0.6, 1.0, length(d));
      c = mix(c, c * uShadowTint * 0.9, sh * uBlob[i].w);
    }
  } else {
    // Бок площадки: кладка.
    float th = atan(vLocal.x, vLocal.z);
    float row = floor((vLocal.y + 1.0) / 0.16);
    float u = (th + 3.14159) / 6.28318 * 44.0 + row * 0.5;
    float h = hash12(vec2(floor(u), row));
    c = mix(uSideA, uSideB, step(0.5, h));
    float fu = fract(u);
    float fv = fract((vLocal.y + 1.0) / 0.16);
    float g = min(min(fu, 1.0 - fu) * 0.6, min(fv, 1.0 - fv) * 0.16);
    c = mix(uGrout, c, smoothstep(0.012, 0.02, g));
    float w = dot(normalize(vec3(N.x, 0.0, N.z)), uLightDir) * 0.5 + 0.5;
    c = mix(c * uShadowTint * 1.1, c, smoothstep(0.38, 0.42, w));
  }
  c += runeCol * glow;
  float fog = smoothstep(uFogNear, uFogFar, vDepth);
  c = mix(c, uFogColor, fog);
  gl_FragColor = vec4(c, 1.0);
}
`,Ae=`
uniform float uTime;
uniform float uPhase;
varying vec2 vUv;
varying vec3 vN;
varying float vDepth;
void main() {
  vUv = uv;
  vec3 p = position;
  float hang = 1.0 - uv.y;
  float wave = sin(uTime * 2.2 + uPhase + uv.y * 3.0 + uv.x * 2.0) * 0.12 * hang + sin(uTime * 3.7 + uPhase * 2.0 + uv.y * 7.0) * 0.03 * hang;
  p.z += wave;
  vN = normalize(normalMatrix * vec3(-cos(uTime * 2.2 + uPhase + uv.y * 3.0) * 0.3 * hang, 0.0, 1.0));
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,je=`
uniform vec3 uColor;
uniform vec3 uTrim;
uniform vec3 uInk;
uniform vec3 uShadowTint;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uElement;
varying vec2 vUv;
varying vec3 vN;
varying float vDepth;
void main() {
  vec2 uv = vUv;
  // Ласточкин хвост внизу.
  float notch = 0.22 - abs(uv.x - 0.5) * 0.6;
  if (uv.y < notch) discard;
  vec3 c = uColor;
  // Кайма и контур по краю.
  float ex = min(uv.x, 1.0 - uv.x);
  float ey = min(uv.y - notch, 1.0 - uv.y);
  float e = min(ex * 0.9, ey * 1.5);
  c = mix(uTrim, c, smoothstep(0.07, 0.075, e));
  c = mix(uInk, c, smoothstep(0.018, 0.026, e));
  // Эмблема стихии: огонь — капля, лёд — шестиугольный кристалл.
  vec2 q = (uv - vec2(0.5, 0.58)) * vec2(1.0, 1.6);
  float d;
  if (uElement < 0.5) {
    vec2 k = q * vec2(1.0, 1.0);
    d = length(k + vec2(0.0, 0.05)) - 0.17;
    d = min(d, max(abs(k.x) * 1.4 + (k.y - 0.25) * 0.9, -k.y));
  } else {
    vec2 a = abs(q);
    d = max(a.x * 0.866 + a.y * 0.5, a.y) - 0.19;
  }
  float aa = fwidth(d) + 1e-3;
  c = mix(c, uInk, 1.0 - smoothstep(0.02, 0.02 + aa, d));
  c = mix(c, uTrim, 1.0 - smoothstep(0.0, aa, d));
  float lit = dot(normalize(vN), vec3(0.0, 0.3, 1.0)) * 0.5 + 0.5;
  if (!gl_FrontFacing) lit *= 0.75;
  c = mix(c * uShadowTint * 1.15, c, smoothstep(0.42, 0.46, lit));
  float fog = smoothstep(uFogNear, uFogFar, vDepth);
  gl_FragColor = vec4(mix(c, uFogColor, fog), 1.0);
}
`,Me=class{group=new m;floor;crystals=[];floaters=[];banners=[];geometries=[];materials=[];toon;glowMat;outline;env;constructor(t){this.env=t.env,this.toon=this.track(j(t.env)),this.glowMat=this.track(j(t.env)),this.outline=t.outline?this.track(xe(t.env,{width:.9})):null;let n=k(42);this.floor=this.track(new y({vertexShader:Oe,fragmentShader:ke,uniforms:{uLightDir:t.env.lightDir,uShadowTint:t.env.shadowTint,uFogColor:t.env.fogColor,uFogNear:t.env.fogNear,uFogFar:t.env.fogFar,uTime:t.env.time,uPulse:{value:0},uCharge:{value:new h(0,0)},uWarm:{value:new x(e.redHi)},uCold:{value:new x(e.blueHi)},uStoneA:{value:new x(`#EBC7DC`)},uStoneB:{value:new x(`#D8B0D6`)},uInner:{value:new x(`#6F4FBF`)},uGrout:{value:new x(`#5A3C9C`)},uSideA:{value:new x(`#A783D2`)},uSideB:{value:new x(`#9673C6`)},uBlob:{value:[new me(-2.5,z,.7,.55),new me(R,z,.7,.55)]},uTop:{value:1}}}));let r=new _(De,4.38,.5,72,1);r.translate(0,-.25,0),this.geometries.push(r),this.group.add(new p(r,this.floor)),this.outline&&(N(r),this.group.add(new p(r,this.outline))),this.addStatic(this.buildRim(n)),this.addStatic(this.buildGrass(n)),this.addStatic(this.buildRock(n),!0),this.addStatic(this.buildPillars(n),!0),this.addGlow(this.buildHangingCrystals(n)),this.buildFloatingCrystals(),this.buildBanners(),t.extras&&(this.buildFloatingRocks(n),this.buildDistantIslands(n))}setRunes(e,t,n){this.floor.uniforms.uPulse.value=e,this.floor.uniforms.uCharge.value.set(t,n)}update(e){for(let t of this.floaters){let n=t.phase+e*t.orbit;t.orbitR>0?t.obj.position.set(Math.sin(n)*t.orbitR,t.base.y+Math.sin(e*.7+t.phase)*.25,Math.cos(n)*t.orbitR-2):t.obj.position.set(t.base.x,t.base.y+Math.sin(e*1.3+t.phase)*.14,t.base.z),t.obj.rotation.y=e*t.spin+t.phase}for(let t of this.banners)t.uniforms.uTime.value=e}dispose(){this.group.removeFromParent();for(let e of this.geometries)e.dispose();for(let e of this.materials)e.dispose()}track(e){return this.materials.push(e),e}addStatic(e,t=!1,n=this.group){let r=e;if(t){let e=r.toNonIndexed();r.dispose(),e.computeVertexNormals(),r=e}N(r),this.geometries.push(r);let i=new p(r,this.toon);return n.add(i),this.outline&&n.add(new p(r,this.outline)),i}addGlow(e,t=this.group){N(e),this.geometries.push(e);let n=new p(e,this.glowMat);return t.add(n),this.outline&&t.add(new p(e,this.outline)),n}buildRim(e){let t=[];for(let n=0;n<26;n++){let r=n/26*Math.PI*2+e()*.05,i=4.32,a=(Math.cos(r)>.75?.16:.26)+e()*.12,o=e();t.push(A(new S(.62,a,.34,1,1,1),{color:o>.5?`#D3B1DA`:`#C29FD3`,rim:1},{at:[Math.sin(r)*i,a/2-.02,Math.cos(r)*i],rot:new g(e()*.08,r,e()*.06)})),e()>.55&&t.push(A(new b(.16,8,6),{color:`#6BD487`,rim:1},{at:[Math.sin(r)*i,a-.01,Math.cos(r)*i],scale:[1.4,.45,1]}))}return P(t)}buildGrass(e){let t=[M([{r:4.45,y:-.42,color:`#2F9C62`},{r:4.72,y:-.34,color:`#2F9C62`},{r:4.8,y:-.16,color:`#5BD07A`},{r:4.62,y:-.02,color:`#7FE38E`},{r:4.44,y:-.02,color:`#7FE38E`}],{color:`#5BD07A`,rim:1},{segments:72,wave:e=>.07*Math.sin(e*13)+.05*Math.sin(e*29+1)})];for(let n=0;n<44;n++){let n=e()*Math.PI*2,r=4.62+e()*.14,i=.18+e()*.22;t.push(A(new le(.06+e()*.04,i,5),{color:e()>.5?`#7FE38E`:`#5BD07A`,rim:1},{at:[Math.sin(n)*r,i/2-.08,Math.cos(n)*r],rot:new g((e()-.5)*.5,0,(e()-.5)*.5)}))}return P(t)}buildRock(e){let t=new Map,n=(n,r)=>{let i=`${n.toFixed(3)}:${r.toFixed(3)}`;return t.has(i)||t.set(i,(e()-.5)*.55),t.get(i)};return M([{r:0,y:-6.5,color:`#644CA8`},{r:.25,y:-6.3,color:`#644CA8`},{r:.8999999999999999,y:-5.2,color:`#7158B4`},{r:1.7999999999999998,y:-4.1,color:`#8064BC`},{r:2.8,y:-3,color:`#9470C4`},{r:3.65,y:-2,color:`#A277C2`},{r:4.35,y:-1.1,color:`#C08CC0`},{r:4.55,y:-.38,color:`#B07FB8`},{r:0,y:-.38,color:`#B07FB8`}],{color:`#A277C2`,rim:1,shade:.2},{segments:15,wave:(e,t)=>t<-.5?n(e,t)*(1+Math.min(1,-t/4)):0})}buildPillars(t){let n=[],r={color:`#DDB3D9`,rim:1},i={color:`#A985CC`,rim:1};return[78,120,160,200,240,282].forEach((a,o)=>{let s=a*Math.PI/180,c=3.75,l=Math.sin(s)*c,u=Math.cos(s)*c,d=o===4,f=d?1.1:2.1+t()*.8;n.push(A(new _(.46,.52,.22,8),i,{at:[l,.11,u]})),n.push(A(new _(.33,.38,f,10),r,{at:[l,.22+f/2,u],rot:new g(0,t(),d?.06:0)})),d?n.push(A(new _(.3,.3,.9,8),r,{at:[l+.55,.28,u+.25],rot:new g(.2,.7,Math.PI/2)})):(n.push(A(new pe(.36,.06,8,20),{color:e.gold,gloss:.6},{at:[l,.22+f*.72,u],rot:new g(Math.PI/2,0,0)})),n.push(A(new S(.82,.2,.82),i,{at:[l,.32+f,u],rot:new g(0,s,0)})),n.push(A(new _(.42,.3,.16,8),r,{at:[l,.16+f,u]})))}),P(n)}buildHangingCrystals(t){let n=[],r=[`#C69CFF`,e.blueHi,`#FF9EDB`,`#C69CFF`,`#9DE9FF`];for(let e=0;e<9;e++){let i=t()*Math.PI*2,a=1.2+t()*2.4,o=-1-(4.4-a)*.95-t()*.3,s=.45+t()*.6;n.push(A(new T(.2,0),{color:r[e%r.length],gloss:.8,glow:.55,rim:.5},{at:[Math.sin(i)*a,o-s*.5,Math.cos(i)*a],rot:new g((t()-.5)*.4,t()*3,(t()-.5)*.4),scale:[1,s*3.2,1]}))}return P(n)}buildFloatingCrystals(){let t=[[120,e.redHi],[160,e.gold],[200,`#C69CFF`],[240,e.blueHi]];for(let[e,n]of t){let t=e*Math.PI/180,r=3.75,i=new m,a=A(new T(.28,0),{color:n,gloss:.9,glow:.45,rim:.4},{scale:[1,1.7,1]});this.addGlow(a,i);let o=new u(Math.sin(t)*r,3.7+e%3*.25,Math.cos(t)*r);i.position.copy(o),this.group.add(i),this.crystals.push(i),this.floaters.push({obj:i,base:o,phase:e*.1,spin:.8,orbit:0,orbitR:0})}}buildBanners(){for(let t of[-1,1]){let n=new m;n.position.set(t*3.55,0,-2.3),n.rotation.y=-t*.5;let r={color:`#8A5A33`,rim:1},i={color:e.gold,gloss:.7,rim:1};this.addStatic(P([A(new _(.06,.07,3.6,8),r,{at:[-.62,1.8,0]}),A(new _(.05,.05,1.45,8),r,{at:[0,3.3,0],rot:new g(0,0,Math.PI/2)}),A(new b(.11,10,8),i,{at:[-.62,3.66,0]}),A(new b(.08,10,8),i,{at:[.74,3.3,0]})]),!1,n);let a=this.track(new y({vertexShader:Ae,fragmentShader:je,side:2,uniforms:{uTime:{value:0},uPhase:{value:t>0?1.7:0},uColor:{value:new x(t<0?e.red:e.blue)},uTrim:{value:new x(e.gold)},uInk:this.env.ink,uShadowTint:this.env.shadowTint,uFogColor:this.env.fogColor,uFogNear:this.env.fogNear,uFogFar:this.env.fogFar,uElement:{value:t<0?0:1}}}));this.banners.push(a);let o=new ce(1.15,2.1,8,16);o.translate(.05,2.17,.02),this.geometries.push(o),n.add(new p(o,a)),this.group.add(n)}}buildFloatingRocks(e){for(let t=0;t<7;t++){let t=new m,n=.25+e()*.45,r=A(new f(n,0),{color:e()>.5?`#8A68B0`:`#7B5A9E`,rim:1},{scale:[1,.75,1]}),i=A(new b(n*.85,8,6),{color:`#6BD487`,rim:1},{at:[0,n*.45,0],scale:[1,.35,1]}),a=P([r,i]);this.addStatic(a,!0,t);let o=6.5+e()*3.5,s=new u(0,-1.6+e()*3.4,0);this.group.add(t),this.floaters.push({obj:t,base:s,phase:e()*Math.PI*2,spin:(e()-.5)*.6,orbit:.025+e()*.025,orbitR:o})}}buildDistantIslands(e){for(let[t,n,r,i]of[[-46,-3,-88,2.2],[34,3,-96,1.6],[62,-5,-60,1.3],[-80,5,-120,2.8]]){let a=new m;a.position.set(t,n,r),a.scale.setScalar(i);let o=this.buildRock(e),s=A(new _(4.7,4.8,.4,20),{color:`#6BD487`,rim:1},{at:[0,-.2,0]}),c=A(new b(1.4,10,8),{color:`#4FBF74`,rim:1},{at:[1.2,.9,-.8],scale:[1,1.2,1]}),l=A(new b(1,10,8),{color:`#5BD07A`,rim:1},{at:[-1.6,.6,.6]}),u=P([o,s,c,l]);this.addStatic(u,!0,a),a.rotation.y=e()*6,this.group.add(a)}}},Ne={azimuth:0,elevation:13,distance:18.5,fov:30,target:[0,1.25,.2],shiftX:.17},Pe={azimuth:-8,elevation:7,distance:15,fov:34,target:[0,2.4,.2],shiftX:0},Fe={azimuth:0,elevation:4,distance:2.6,fov:58,target:[0,1.5,.2],shiftX:0},V={azimuthAmp:10,azimuthPeriod:46,elevationAmp:1.6,elevationPeriod:33,distanceAmp:.35,distancePeriod:27},Ie={azimuth:6,elevation:3},Le={stiffness:18,damping:8.5},Re={stiffness:22,damping:9.4},H=(e,t,n)=>e+(t-e)*n;function U(e,t,n){return{azimuth:H(e.azimuth,t.azimuth,n),elevation:H(e.elevation,t.elevation,n),distance:H(e.distance,t.distance,n),fov:H(e.fov,t.fov,n),target:[H(e.target[0],t.target[0],n),H(e.target[1],t.target[1],n),H(e.target[2],t.target[2],n)],shiftX:H(e.shiftX,t.shiftX,n)}}function ze(e){let t=e.azimuth*Math.PI/180,n=e.elevation*Math.PI/180;return[e.target[0]+e.distance*Math.sin(t)*Math.cos(n),e.target[1]+e.distance*Math.sin(n),e.target[2]+e.distance*Math.cos(t)*Math.cos(n)]}var Be=class{t=0;px={x:0,v:0};py={x:0,v:0};mode={x:0,v:0};update(e,t){let n=Math.min(.1,Math.max(0,e));if(t.reducedMotion)return this.mode={x:+(t.mode===`cards`),v:0},this.px={x:0,v:0},this.py={x:0,v:0},U(Ne,Pe,this.mode.x);this.t+=n,this.px=o(this.px,Ve(t.pointer.x),n,Le),this.py=o(this.py,Ve(t.pointer.y),n,Le),this.mode=o(this.mode,+(t.mode===`cards`),n,Re);let r=this.t,s=U(Ne,Pe,Math.min(1.05,Math.max(-.05,this.mode.x))),c={...s,azimuth:s.azimuth+V.azimuthAmp*Math.sin(2*Math.PI*r/V.azimuthPeriod)+Ie.azimuth*this.px.x,elevation:s.elevation+V.elevationAmp*Math.sin(2*Math.PI*r/V.elevationPeriod+1.1)-Ie.elevation*this.py.x,distance:s.distance+V.distanceAmp*Math.sin(2*Math.PI*r/V.distancePeriod+.4)};return t.dive>0?U(c,Fe,i(Math.min(1,t.dive))):t.arrive<1?U(Fe,c,a(Math.max(0,t.arrive))):c}};function Ve(e){return Number.isFinite(e)?Math.max(-1,Math.min(1,e)):0}function W(e,t,n,r,i,a,o){let s=[.04+e()*.05,e()*6.28,.4+e()*.8,.06+e()*.1];for(let c=0;c<a;c++){let a=e()*Math.PI*2,c=Math.sqrt(e())*i*1.25,l=i*(.45+e()*.55)*(1-c/(i*1.6)*.4);o.push({x:t+Math.cos(a)*c*1.4,y:n+l*.35+e()*i*.25,z:r+Math.sin(a)*c*.8,r:l,tint:e(),drift:s})}}function He(e,t=7){let n=k(t),r=[];for(W(n,-10.5,-3.2,-3,2.6,Math.round(e*.07),r),W(n,12,-3.8,-7,3,Math.round(e*.07),r),W(n,-4,-5.4,7.5,2,Math.round(e*.05),r),W(n,7.5,-5.2,6,2.2,Math.round(e*.05),r);r.length<e*.72;){let e=n()*Math.PI*2,t=9+n()*30,i=Math.sin(e)*t,a=Math.cos(e)*t-6;a>6&&Math.abs(i)<6||W(n,i,-7-n()*2,a,1.6+n()*2.4,4+Math.floor(n()*4),r)}for(;r.length<e;){let e=(n()-.5)*160,t=-55-n()*50;W(n,e,-6+n()*4,t,5+n()*5,4+Math.floor(n()*3),r)}return r.slice(0,e)}function Ue(e,t,n){let r=be(new f(1,n>=.8?3:2),{color:`#FFFFFF`,rim:1,shade:1}),i=He(t),a=new Float32Array(i.length*4);i.forEach((e,t)=>a.set(e.drift,t*4)),r.setAttribute(`aDrift`,new ee(a,4));let o=j({...e,lightDir:{value:new u(.25,1,.35).normalize()}},{drift:!0,bands:1}),s=new te(r,o,i.length),c=new ue,l=new ie,d=new x(`#FFE9F4`),p=new x(`#FFC6E2`),m=new x;return i.forEach((e,t)=>{c.compose(new u(e.x,e.y,e.z),l,new u(e.r,e.r*.86,e.r)),s.setMatrixAt(t,c),s.setColorAt(t,m.copy(d).lerp(p,e.tint*.8))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.frustumCulled=!1,{mesh:s,dispose:()=>{r.dispose(),o.dispose()}}}var G=.5,We=[{at:.3,type:`pose`,side:`left`,pose:`attack`,windup:!0},{at:.36,type:`pose`,side:`right`,pose:`attack`,windup:!0},{at:.8,type:`cast`,side:`left`,target:`center`,flight:G},{at:.8,type:`cast`,side:`right`,target:`center`,flight:G},{at:1.3,type:`clash`,big:!1},{at:1.34,type:`hit`,side:`left`,strength:.45},{at:1.34,type:`hit`,side:`right`,strength:.45},{at:1.9,type:`pose`,side:`left`,pose:`none`},{at:2,type:`pose`,side:`right`,pose:`none`},{at:2.9,type:`pose`,side:`left`,pose:`attack`,windup:!0},{at:3.05,type:`pose`,side:`right`,pose:`shield`},{at:3.4,type:`cast`,side:`left`,target:`shield`,flight:.55},{at:3.95,type:`reflect`,side:`right`},{at:4.35,type:`fizzle`,side:`right`},{at:4.2,type:`pose`,side:`left`,pose:`none`},{at:4.7,type:`pose`,side:`right`,pose:`none`},{at:5.5,type:`pose`,side:`right`,pose:`attack`,windup:!0},{at:5.56,type:`pose`,side:`left`,pose:`attack`,windup:!0},{at:6,type:`cast`,side:`left`,target:`center`,flight:G},{at:6,type:`cast`,side:`right`,target:`center`,flight:G},{at:6.5,type:`clash`,big:!1},{at:6.54,type:`hit`,side:`left`,strength:.4},{at:6.54,type:`hit`,side:`right`,strength:.4},{at:7,type:`pose`,side:`left`,pose:`none`},{at:7.05,type:`pose`,side:`right`,pose:`none`},{at:7.6,type:`pose`,side:`left`,pose:`charge`},{at:7.7,type:`pose`,side:`right`,pose:`charge`},{at:9,type:`pose`,side:`left`,pose:`attack`,windup:!0},{at:9,type:`pose`,side:`right`,pose:`attack`,windup:!0},{at:9.4,type:`cast`,side:`left`,target:`center`,flight:G,big:!0},{at:9.4,type:`cast`,side:`right`,target:`center`,flight:G,big:!0},{at:9.9,type:`clash`,big:!0},{at:9.94,type:`hit`,side:`left`,strength:1},{at:9.94,type:`hit`,side:`right`,strength:1},{at:10.5,type:`pose`,side:`left`,pose:`none`},{at:10.55,type:`pose`,side:`right`,pose:`none`},{at:11,type:`pose`,side:`right`,pose:`attack`,windup:!0},{at:11.1,type:`pose`,side:`left`,pose:`shield`},{at:11.5,type:`cast`,side:`right`,target:`shield`,flight:.55},{at:12.05,type:`reflect`,side:`left`},{at:12.3,type:`pose`,side:`right`,pose:`none`},{at:12.45,type:`fizzle`,side:`left`},{at:12.75,type:`pose`,side:`left`,pose:`none`}],K=13.4,Ge=[...We].sort((e,t)=>e.at-t.at);function Ke(e,t){let n=[];if(!(t>e))return n;let r=Math.max(e,t-K),i=Math.floor(r/K);for(;i*K<=t;i++){let e=i*K;for(let i of Ge){let a=e+i.at;if(a>r&&a<=t){let{at:e,...t}=i;n.push({...t,t:a})}}}return n}var qe=`
varying vec3 vN;
varying vec3 vPosW;
varying vec3 vLocal;
void main() {
  vLocal = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPosW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Je=`
uniform vec3 uColor;
uniform vec3 uHot;
uniform float uOpen;
uniform float uHit;
uniform float uTime;
varying vec3 vN;
varying vec3 vPosW;
varying vec3 vLocal;
// Расстояние до края гекса в плоских координатах.
float hexEdge(vec2 p) {
  vec2 r = vec2(1.0, 1.732);
  vec2 h = r * 0.5;
  vec2 a = mod(p, r) - h;
  vec2 b = mod(p - h, r) - h;
  vec2 g = dot(a, a) < dot(b, b) ? a : b;
  vec2 q = abs(g);
  return 0.5 - max(q.x * 0.5 + q.y * 0.866, q.x);
}
void main() {
  vec3 V = normalize(cameraPosition - vPosW);
  float fres = 1.0 - abs(dot(normalize(vN), V));
  vec3 n = normalize(vLocal);
  vec2 uv = vec2(atan(n.x, n.z) * 2.2, n.y * 3.2);
  float e = hexEdge(uv * 2.4);
  float line = 1.0 - smoothstep(0.03, 0.06, e);
  // Рябь от точки удара (спереди-снаружи) после отражения.
  float ripple = 0.0;
  if (uHit > 0.0) {
    float d = distance(n, vec3(0.0, 0.1, 1.0));
    float front = uHit * 2.4;
    ripple = smoothstep(0.18, 0.0, abs(d - front)) * (1.0 - uHit);
  }
  float a = (0.06 + 0.6 * pow(fres, 2.4) + line * (0.1 + 0.45 * fres) + ripple * 1.2) * uOpen;
  vec3 c = mix(uColor, uHot, line * 0.5 + fres * 0.3) * a * 1.6;
  c += uHot * max(0.0, 1.0 - uHit * 3.0) * step(0.0001, uHit) * (0.12 + 0.4 * fres) * uOpen;
  gl_FragColor = vec4(c, 1.0);
}
`,Ye=`
varying vec2 vUv;
varying vec3 vN;
varying vec3 vPosW;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPosW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Xe=`
uniform vec3 uColor;
uniform float uAmount;
uniform float uTime;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vPosW;
void main() {
  vec3 V = normalize(cameraPosition - vPosW);
  float facing = abs(dot(normalize(vN), V));
  float core = pow(facing, 1.6);
  float fade = smoothstep(0.0, 0.12, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
  float streak = 0.75 + 0.25 * sin(vUv.x * 40.0 + uTime * 3.0) * sin(vUv.y * 9.0 - uTime * 5.0);
  // Край столба светится, середина прозрачна — волшебник внутри читается.
  float edge = pow(1.0 - facing, 2.0);
  float a = (0.12 * core + 0.55 * edge) * fade * streak * uAmount;
  gl_FragColor = vec4(uColor * a, 1.0);
}
`,Ze=`
attribute vec4 aSeed;
attribute vec3 aColor;
uniform float uTime;
uniform float uPx;
varying vec3 vColor;
varying float vTw;
void main() {
  vec3 p = position;
  float t = uTime * aSeed.y + aSeed.x * 6.28;
  p += vec3(sin(t) * 0.6, sin(t * 0.7 + aSeed.z * 3.0) * 0.35 + mod(uTime * 0.12 * aSeed.w + aSeed.z * 3.0, 3.0) - 1.5, cos(t * 0.8) * 0.6);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vTw = 0.55 + 0.45 * sin(uTime * (1.5 + aSeed.w * 2.0) + aSeed.x * 20.0);
  vColor = aColor;
  gl_PointSize = uPx * (0.6 + aSeed.w * 0.8) / max(0.5, -mv.z) * 9.0;
  gl_Position = projectionMatrix * mv;
}
`,Qe=`
varying vec3 vColor;
varying float vTw;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d = length(q);
  float core = smoothstep(0.35, 0.0, d);
  float halo = smoothstep(1.0, 0.0, d) * 0.35;
  gl_FragColor = vec4((vColor * halo + vec3(1.0, 0.98, 0.9) * core) * vTw * 1.4, 1.0);
}
`,q={transparent:!0,depthWrite:!1,blending:2},$e=class{mesh;mat;open=0;target=0;hitAt=-1/0;constructor(e,t){this.mat=new y({vertexShader:qe,fragmentShader:Je,...q,uniforms:{uColor:{value:new x(e)},uHot:{value:new x(t)},uOpen:{value:0},uHit:{value:0},uTime:{value:0}}}),this.mesh=new p(new b(1,32,20),this.mat),this.mesh.visible=!1,this.mesh.renderOrder=10}setOpen(e){this.target=+!!e}hit(e){this.hitAt=e}update(e,t){let n=this.target>this.open?9:6;this.open+=(this.target-this.open)*Math.min(1,t*n);let r=this.open<.01?0:.2+.8*this.open+Math.sin(this.open*Math.PI)*.12;this.mesh.scale.set(.5*r,1.3*r,1.15*r),this.mesh.visible=this.open>.01;let i=(e-this.hitAt)/.6;this.mat.uniforms.uHit.value=i>=0&&i<1?Math.max(i,1e-4):0,this.mat.uniforms.uOpen.value=this.open,this.mat.uniforms.uTime.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}},et=class{mesh;mat;amount=0;target=0;constructor(e){this.mat=new y({vertexShader:Ye,fragmentShader:Xe,...q,uniforms:{uColor:{value:new x(e)},uAmount:{value:0},uTime:{value:0}}});let t=new _(.7,.9,7,24,1,!0);t.translate(0,3.5,0),this.mesh=new p(t,this.mat),this.mesh.visible=!1,this.mesh.renderOrder=9}set(e){this.target=+!!e}get value(){return this.amount}update(e,t){this.amount+=(this.target-this.amount)*Math.min(1,t*(this.target>this.amount?3:5)),this.mesh.visible=this.amount>.01,this.mat.uniforms.uAmount.value=this.amount*(.85+.15*Math.sin(e*9)),this.mat.uniforms.uTime.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}},tt=class{points;mat;constructor(e,t=11){let n=k(t),r=new Float32Array(e*3),i=new Float32Array(e*4),a=new Float32Array(e*3),o=[new x(`#FFD36B`),new x(`#FF9ED6`),new x(`#9DF3FF`),new x(`#FFE9A8`)];for(let t=0;t<e;t++){let e=n()*Math.PI*2,s=1.5+n()**.7*8.5;r.set([Math.sin(e)*s,-1.5+n()*6,Math.cos(e)*s-1],t*3),i.set([n(),.15+n()*.35,n(),n()],t*4);let c=o[Math.floor(n()*o.length)];a.set([c.r,c.g,c.b],t*3)}let s=new se;s.setAttribute(`position`,new v(r,3)),s.setAttribute(`aSeed`,new v(i,4)),s.setAttribute(`aColor`,new v(a,3)),this.mat=new y({vertexShader:Ze,fragmentShader:Qe,...q,uniforms:{uTime:{value:0},uPx:{value:2}}}),this.points=new fe(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=20}update(e,t){this.mat.uniforms.uTime.value=e,this.mat.uniforms.uPx.value=t}dispose(){this.points.geometry.dispose(),this.mat.dispose()}};new u;var J=`#FFFFFF`,Y=new Map;function X(e,t){let n=Y.get(e);return n||(n=t(),Y.set(e,n)),n}var nt={name:`menuClashStar`,kind:`burst`,layers:[{name:`flash`,shape:`soft`,blend:`glow`,count:1,life:.32,speed:0,size:320,sizeCurve:[[0,.4],[.25,1],[1,1.2]],color:[[0,`#FFF2C4`,.55],[.3,e.gold,.3],[1,e.sky2,0]],hero:!0},{name:`star`,shape:`star`,blend:`add`,count:1,life:.28,speed:0,size:300,rotation:[0,45],spin:[80,140],sizeCurve:[[0,.3],[.2,1.1],[1,.2]],color:[[0,J,1],[.5,`#FFF2B0`,.9],[1,e.gold,0]],intensity:1.6,hero:!0},{name:`sparks`,shape:`streak`,blend:`add`,count:46,life:[.35,.7],speed:[500,1300],spread:360,size:[9,14],color:[[0,J,1],[.35,e.gold,1],[1,e.goldLo,0]],gravity:[0,900],drag:2.2,stretch:.03,intensity:1.8},{name:`stars`,shape:`star`,blend:`add`,count:14,life:[.5,.9],speed:[180,520],spread:360,size:[26,46],spin:[-200,200],color:[[0,J,1],[.5,`#FFF2B0`,.9],[1,e.gold,0]],drag:2.5,gravity:[0,220],intensity:1.4}]};function Z(e){return X(`charge-${e}`,()=>rt(e))}function rt(e){let t=c[e];return{name:`menuCharge-${e}`,kind:`emitter`,layers:[{name:`motes`,shape:e===`fire`?`soft`:`snowflake`,blend:`add`,rate:70,life:[.5,.9],speed:[60,180],angle:-90,spread:120,radius:[30,90],size:e===`fire`?[12,20]:[16,24],spin:[-180,180],color:[[0,t.hot,0],[.15,t.core,1],[.7,t.base,.8],[1,t.deep,0]],gravity:[0,-420],drag:1.2,intensity:1.6},{name:`sparks`,shape:`streak`,blend:`add`,rate:40,life:[.3,.6],speed:[120,320],angle:-90,spread:70,radius:[10,50],size:[6,9],color:[[0,J,1],[.4,t.core,1],[1,t.base,0]],gravity:[0,-300],stretch:.04,intensity:1.8}]}}var it={name:`menuRuneSparks`,kind:`burst`,layers:[{name:`motes`,shape:`soft`,blend:`add`,count:26,life:[.8,1.6],speed:[40,160],angle:-90,spread:160,radius:[40,260],size:[8,14],color:[[0,J,1],[.3,e.gold,1],[1,e.sky2,0]],gravity:[0,-160],drag:.8,intensity:1.6}]};function at(e){return X(`sparkle-${e}`,()=>({name:`menuCardSparkle-${e}`,kind:`emitter`,layers:[{name:`twinkle`,shape:`star`,blend:`add`,rate:26,life:[.5,.9],speed:[40,140],spread:360,radius:[10,70],size:[18,30],spin:[-160,160],sizeCurve:[[0,.2],[.3,1],[1,0]],color:[[0,J,1],[.5,e,1],[1,e,0]],gravity:[0,-120],drag:1.4,intensity:1.5}]}))}function Q(e){return X(`burst-${e}`,()=>({name:`menuCardBurst-${e}`,kind:`burst`,layers:[{name:`pop`,shape:`star`,blend:`add`,count:16,life:[.4,.7],speed:[200,520],spread:360,size:[16,30],spin:[-240,240],color:[[0,J,1],[.4,e,1],[1,e,0]],drag:3,intensity:1.6},{name:`ring`,shape:`ring`,blend:`add`,count:1,life:.4,speed:0,size:260,sizeCurve:[[0,.2],[1,1]],color:[[0,J,.9],[1,e,0]],hero:!0}]}))}Z(`fire`),Z(`ice`),at(e.gold),Q(e.gold);var ot={high:{tier:`high`,maxPixelRatio:t.high.maxPixelRatio,renderScale:1,msaa:4,bloomScale:.5,bloomLevels:5,bloomStrength:.75,cloudPuffs:300,fireflies:140,particles:t.high.maxParticles,density:t.high.density,sceneryOutline:!0,detail:1,extras:!0},medium:{tier:`medium`,maxPixelRatio:t.medium.maxPixelRatio,renderScale:.9,msaa:2,bloomScale:.25,bloomLevels:4,bloomStrength:.7,cloudPuffs:190,fireflies:80,particles:t.medium.maxParticles,density:t.medium.density,sceneryOutline:!0,detail:.8,extras:!0},low:{tier:`low`,maxPixelRatio:t.low.maxPixelRatio,renderScale:1,msaa:0,bloomScale:0,bloomLevels:0,bloomStrength:0,cloudPuffs:110,fireflies:40,particles:t.low.maxParticles,density:t.low.density,sceneryOutline:!1,detail:.6,extras:!1}};function st(e,t){return Math.min(Number.isFinite(t)&&t>0?t:1,e.maxPixelRatio)*e.renderScale}var ct=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform sampler2D tBlur;
uniform float uBloom;
uniform float uBlur;
uniform float uDim;
uniform float uFade;
uniform vec3 uInk;
uniform float uAspect;
uniform vec4 uFlash;
uniform vec3 uFlashColor;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
#ifdef BLUR
  c = mix(c, texture2D(tBlur, vUv).rgb, uBlur);
#endif
#ifdef BLOOM
  c += texture2D(tBloom, vUv).rgb * uBloom;
#endif
  vec2 d = (vUv - uFlash.xy) * vec2(uAspect, 1.0);
  c += uFlashColor * uFlash.w * exp(-dot(d, d) / max(uFlash.z * uFlash.z, 1e-5));
  vec2 q = (vUv - 0.5) * vec2(1.0, 1.2);
  float v = smoothstep(0.9, 0.3, length(q));
  c = mix(uInk, c, mix(0.62, 1.0, v));
  c = mix(c, uInk, uDim);
  vec3 over = max(c - 0.85, 0.0);
  c = min(c, 0.85) + 0.15 * (1.0 - exp(-over / 0.15));
  c = mix(c, uInk, uFade);
  gl_FragColor = vec4(c, 1.0);
}
`,lt=`
uniform sampler2D tInput;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D(tInput, vUv).rgb * 4.0;
  s += texture2D(tInput, vUv - h).rgb;
  s += texture2D(tInput, vUv + h).rgb;
  s += texture2D(tInput, vUv + vec2(h.x, -h.y)).rgb;
  s += texture2D(tInput, vUv - vec2(h.x, -h.y)).rgb;
  gl_FragColor = vec4(s / 8.0, 1.0);
}
`,ut=`
uniform vec3 uAccent;
uniform vec3 uDeep;
uniform vec2 uSize;
uniform float uRadius;
uniform float uFocus;
uniform float uTime;
varying vec2 vUv;
void main() {
  vec2 p = vUv * uSize;
  vec2 h = uSize * 0.5;
  vec2 q = abs(p - h) - (h - uRadius);
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uRadius;
  if (d > 0.5) discard;
  vec3 top = mix(uAccent, vec3(1.0, 0.86, 0.95), 0.35);
  vec3 c = mix(uDeep, top, smoothstep(-0.1, 1.15, vUv.y));
  vec2 g2 = (vUv - vec2(0.5, 0.46)) * vec2(uSize.x / uSize.y, 1.0);
  float g = exp(-dot(g2, g2) * 7.0);
  c += uAccent * g * (0.28 + 0.5 * uFocus);
  float a = atan(g2.y, g2.x);
  float rays = pow(abs(sin(a * 7.0 + uTime * 0.5)), 14.0) * smoothstep(0.75, 0.05, length(g2));
  c += vec3(1.0, 0.96, 0.82) * rays * (0.08 + 0.28 * uFocus);
  // Тень-пол у ног.
  vec2 f = (vUv - vec2(0.5, 0.12)) * vec2(uSize.x / uSize.y * 1.2, 4.0);
  c *= 1.0 - 0.35 * exp(-dot(f, f) * 2.0);
  gl_FragColor = vec4(c, 1.0);
}
`,$=Math.PI/180,dt=1.45,ft=class e{gl;ext;pending=[];samples=[];active=null;constructor(e,t){this.gl=e,this.ext=t}static create(t){let n=t.getExtension(`EXT_disjoint_timer_query_webgl2`);return n?new e(t,n):null}begin(){if(this.poll(),this.pending.length>8)return;let e=this.gl.createQuery();e&&(this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e),this.active=e)}end(){this.active&&=(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.active),null)}meanMs(){return this.samples.length?this.samples.reduce((e,t)=>e+t,0)/this.samples.length:null}dispose(){for(let e of this.pending)this.gl.deleteQuery(e);this.pending.length=0}poll(){let e=this.gl,t=e.getParameter(this.ext.GPU_DISJOINT_EXT);for(;this.pending.length;){let n=this.pending[0];if(!e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE))break;this.pending.shift(),t||(this.samples.push(e.getQueryParameter(n,e.QUERY_RESULT)/1e6),this.samples.length>120&&this.samples.shift()),e.deleteQuery(n)}}},pt=class t{canvas;renderer;profile;opts;env;scene=new C;camera=new w(33,1,.1,1200);fxScene=new C;fxCamera=new de(0,1,0,1,-100,100);particles;uiParticles;uiScene=new C;sky;arena;clouds;fireflies;duelists;shields;pillars;charge={left:null,right:null};bolts=[];rig=new Be;composite;cardBg;bloom;blurPass;sceneTarget;blurTargets=[];cards=new Map;cardProvider=null;materials=[];resizeObserver;gpu;unwatchMotion;reduced;raf=0;running=!1;disposed=!1;lostValue=!1;sizeDirty=!0;cssW=1;cssH=1;pr=1;lastNow=null;showT;clock=0;mode=`menu`;dim=0;dimTarget=0;pointer={x:0,y:0};diveValue=0;arriveValue=1;anim=null;runePulse=0;flash={x:.5,y:.5,r:.1,i:0,color:new x(`#FFFFFF`)};shake=0;sparkleClock=0;statsValue;fpsEma=60;tmp=new u;tmp2=new u;onContextLost=e=>{e.preventDefault(),!this.lostValue&&(this.lostValue=!0,this.stop(),this.opts.onLost?.())};onPointer=e=>{e.pointerType!==`touch`&&(this.pointer.x=e.clientX/Math.max(1,innerWidth)*2-1,this.pointer.y=e.clientY/Math.max(1,innerHeight)*2-1)};onTilt=e=>{if(e.gamma===null||e.beta===null)return;let t=(screen.orientation?.angle??0)%180!=0,n=t?e.beta:e.gamma,r=t?e.gamma:e.beta-40;this.pointer.x=Math.max(-1,Math.min(1,n/25)),this.pointer.y=Math.max(-1,Math.min(1,r/25))};static create(e){try{return new t(e)}catch(e){return console.warn(`[menu-scene] сцена не создалась:`,e),null}}constructor(t){this.opts=t,this.profile=ot[t.tier],this.reduced=t.reducedMotion??r(),this.unwatchMotion=t.reducedMotion===void 0?n(e=>{this.reduced=e}):()=>{},this.showT=t.startAt??0,ae.enabled=!1;let i=document.createElement(`canvas`);i.className=`menu-scene-canvas`,Object.assign(i.style,{position:`absolute`,inset:`0`,width:`100%`,height:`100%`,display:`block`,pointerEvents:`none`}),i.setAttribute(`aria-hidden`,`true`),i.addEventListener(`webglcontextlost`,this.onContextLost),this.renderer=new ge({canvas:i,antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=re,this.renderer.autoClear=!1,this.renderer.info.autoReset=!1,this.renderer.setClearColor(new x(L.below),1),this.canvas=i,this.gpu=t.gpuTiming?ft.create(this.renderer.getContext()):null,this.env=ye();let a=new u(.28,.1,-1).normalize();this.env.rimDir.value.copy(a).setY(.35).normalize(),this.env.fogColor.value.set(L.haze),this.env.fogNear.value=28,this.env.fogFar.value=125,this.sky=Ee(a,{rays:this.profile.extras}),this.scene.add(this.sky.sky,this.sky.sea),this.clouds=Ue(this.env,this.profile.cloudPuffs,this.profile.detail),this.scene.add(this.clouds.mesh),this.arena=new Me({env:this.env,outline:this.profile.sceneryOutline,extras:this.profile.extras,detail:this.profile.detail}),this.scene.add(this.arena.group),this.fireflies=new tt(this.profile.fireflies),this.scene.add(this.fireflies.points);let o=new F({variant:`duelist`,palette:`left`,env:this.env,aim:30,seed:1,facing:1,detail:this.profile.detail});o.object.position.set(-R,0,z),o.object.rotation.y=30*$,o.object.scale.setScalar(dt);let s=new F({variant:`duelist`,palette:`right`,env:this.env,aim:30,seed:2,facing:-1,detail:this.profile.detail});s.object.position.set(R,0,z),s.object.rotation.y=-30*$,s.object.scale.setScalar(dt),this.duelists={left:o,right:s},this.scene.add(o.object,s.object),this.shields={left:new $e(e.red,e.redHi),right:new $e(e.blue,e.blueHi)},this.pillars={left:new et(e.redHi),right:new et(e.blueHi)};for(let e of[`left`,`right`]){let t=e===`left`?-1:1;this.shields[e].mesh.position.set(t*(R-1.05),1.45,z+.3),this.shields[e].mesh.rotation.y=-t*.25,this.pillars[e].mesh.position.set(t*R,0,z),this.scene.add(this.shields[e].mesh,this.pillars[e].mesh)}let c=()=>this.cssH/1080;this.particles=new _e({capacity:this.profile.particles,density:this.profile.density,unit:c,seed:999}),this.fxScene.add(this.particles.group),this.uiParticles=new _e({capacity:600,density:Math.max(.5,this.profile.density),unit:c,seed:1441}),this.uiScene.add(this.uiParticles.group);let l=D(this.renderer);this.sceneTarget=this.makeSceneTarget(1,1,l),this.bloom=this.profile.bloomScale>0?new he({scale:this.profile.bloomScale,levels:this.profile.bloomLevels,type:l,threshold:1,knee:.25}):null;let d={BLUR:``};this.bloom&&(d.BLOOM=``),this.composite=new O(E(ct,{tScene:{value:null},tBloom:{value:null},tBlur:{value:null},uBloom:{value:this.profile.bloomStrength},uBlur:{value:0},uDim:{value:0},uFade:{value:0},uInk:{value:new x(e.ink)},uAspect:{value:1},uFlash:{value:[.5,.5,.1,0]},uFlashColor:{value:new x(`#FFFFFF`)}},d)),this.blurPass=new O(E(lt,{tInput:{value:null},uTexel:{value:new h}})),this.cardBg=new O(E(ut,{uAccent:{value:new x},uDeep:{value:new x(e.panel)},uSize:{value:new h(1,1)},uRadius:{value:16},uFocus:{value:0},uTime:{value:0}}));let f=t.container;f.insertBefore(i,f.firstChild),this.resizeObserver=typeof ResizeObserver==`function`?new ResizeObserver(()=>{this.sizeDirty=!0}):null,this.resizeObserver?.observe(f),t.listenPointer!==!1&&(addEventListener(`pointermove`,this.onPointer,{passive:!0}),addEventListener(`deviceorientation`,this.onTilt,{passive:!0})),this.applySize(),this.statsValue=this.emptyStats(),this.step(0)}get lost(){return this.lostValue}get tier(){return this.profile.tier}get frames(){return this.statsValue.frames}start(){if(this.running||this.disposed||this.lostValue)return;this.running=!0,this.lastNow=null;let e=t=>{this.running&&(this.raf=requestAnimationFrame(e),this.frame(t))};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}warmup(){this.disposed||this.lostValue||(this.renderer.compile(this.scene,this.camera),this.renderer.compile(this.fxScene,this.fxCamera))}frame(e){if(this.disposed||this.lostValue)return;let t=performance.now(),n=this.lastNow===null?16.7:e-this.lastNow;this.lastNow=e;let r=Math.min(.1,Math.max(0,n/1e3));this.sizeDirty&&this.applySize(),this.step(r),this.render(e);let i=this.statsValue;i.frames+=1,n>0&&n<250&&(this.fpsEma+=(1e3/n-this.fpsEma)*.08),i.fps=this.fpsEma,i.frameMs=n,i.cpuMs=performance.now()-t,i.gpuMs=this.gpu?.meanMs()??null,i.particles=this.particles.liveCount();let a=this.opts.governor;if(a){let t=a.sample(e);t&&t!==this.profile.tier&&this.opts.onTierChange?.(t)}}stats(){return{...this.statsValue}}setMode(e){this.mode=e,this.dimTarget=+(e===`cards`)}setCards(e){if(this.cardProvider=e,!e)for(let e of this.cards.values())e.sparkle?.stop()}setPointer(e,t){this.pointer.x=e,this.pointer.y=t}dive(e=420){return this.finishAnim(),this.reduced||e<=0||!this.running?(this.diveValue=+!this.reduced,Promise.resolve()):new Promise(t=>{this.anim={kind:`dive`,start:performance.now(),ms:e,resolve:t}})}arrive(e=900){this.finishAnim(),this.diveValue=0,this.reduced||e<=0?this.arriveValue=1:(this.arriveValue=0,this.anim={kind:`arrive`,start:performance.now(),ms:e,resolve:()=>{}})}pulse(){this.runePulse=Math.max(this.runePulse,.7);let e=this.project(B.clone().setY(.1));e&&this.particles.burst(it,e.x,e.y,{scale:this.fxScaleAt(B)*1.4})}dispose(){if(!this.disposed){this.disposed=!0,this.stop(),this.finishAnim(),this.unwatchMotion(),removeEventListener(`pointermove`,this.onPointer),removeEventListener(`deviceorientation`,this.onTilt),this.resizeObserver?.disconnect(),this.canvas.removeEventListener(`webglcontextlost`,this.onContextLost);for(let e of this.bolts)e.emitter.stop();this.bolts.length=0;for(let e of this.cards.values())this.disposeCard(e);this.cards.clear(),this.duelists.left.dispose(),this.duelists.right.dispose();for(let e of[`left`,`right`])this.shields[e].dispose(),this.pillars[e].dispose();this.fireflies.dispose(),this.arena.dispose(),this.clouds.dispose(),this.sky.dispose(),this.particles.dispose(),this.uiParticles.dispose(),this.composite.dispose(),this.blurPass.dispose(),this.cardBg.dispose(),this.bloom?.dispose(),this.sceneTarget.dispose();for(let e of this.blurTargets)e.dispose();for(let e of this.materials)e.dispose();if(this.gpu?.dispose(),this.scene.clear(),this.renderer.dispose(),!this.lostValue)try{this.renderer.forceContextLoss()}catch{}this.canvas.remove()}}finishAnim(){if(!this.anim)return;let e=this.anim;this.anim=null,e.kind===`dive`?this.diveValue=1:this.arriveValue=1,e.resolve()}step(t){this.clock+=t;let n=this.clock;if(this.env.time.value=n,this.sky.uniforms.uTime.value=n,this.anim){let e=Math.min(1,(performance.now()-this.anim.start)/this.anim.ms);this.anim.kind===`dive`?this.diveValue=e:this.arriveValue=e,e>=1&&this.finishAnim()}let r=this.rig.update(t,{pointer:this.pointer,mode:this.mode,reducedMotion:this.reduced,dive:this.diveValue,arrive:this.arriveValue});this.applyCamera(r,n);let i=this.showT;this.showT+=t;for(let e of Ke(i,this.showT))this.onShow(e);this.duelists.left.update(t),this.duelists.right.update(t),this.scene.updateMatrixWorld(),this.updateBolts();for(let e of[`left`,`right`]){this.shields[e].update(n,t),this.pillars[e].update(n,t);let r=this.charge[e];if(r){let t=this.project(this.duelists[e].headWorldPosition(this.tmp).add(this.tmp2.set(0,.45,0)));t&&r.moveTo(t.x,t.y)}}if(this.runePulse=Math.max(0,this.runePulse-t*1.6),this.arena.setRunes(this.runePulse,this.pillars.left.value,this.pillars.right.value),this.arena.update(n),this.fireflies.update(n,this.pr*(this.cssH/1080)*3),this.flash.i=Math.max(0,this.flash.i-t*4.5),this.dim+=(this.dimTarget-this.dim)*Math.min(1,t*6),this.sparkleClock+=t,this.sparkleClock>1.3){this.sparkleClock=0;let t=this.arena.crystals[Math.floor(Math.random()*this.arena.crystals.length)];if(t){let n=this.project(t.getWorldPosition(this.tmp));n&&this.particles.burst(Q(e.gold),n.x,n.y,{scale:.22,density:.6})}}this.particles.update(n*1e3),this.uiParticles.update(n*1e3)}applyCamera(e,t){let n=this.camera,[r,i,a]=ze(e),o=0,s=0;this.shake>0&&!this.reduced&&(o=Math.sin(t*71)*this.shake*.06,s=Math.cos(t*59)*this.shake*.05,this.shake=Math.max(0,this.shake-.05)),n.position.set(r+o,i+s,a),n.lookAt(e.target[0]+o,e.target[1]+s,e.target[2]),n.fov=e.fov,n.setViewOffset(this.cssW,this.cssH,-e.shiftX*this.cssW,0,this.cssW,this.cssH),n.updateProjectionMatrix(),n.updateMatrixWorld()}onShow(e){switch(e.type){case`pose`:{let t=this.duelists[e.side];t.setPose(e.pose,e.windup?{windup:!0}:{}),this.shields[e.side].setOpen(e.pose===`shield`);let n=e.pose===`charge`;if(this.pillars[e.side].set(n),n&&!this.charge[e.side]){let n=this.project(t.headWorldPosition(this.tmp));this.charge[e.side]=this.particles.emitter(Z(e.side===`left`?`fire`:`ice`),n?.x??0,n?.y??0,{scale:this.fxScaleAt(t.object.position)*2.2})}else!n&&this.charge[e.side]&&(this.charge[e.side].stop(),this.charge[e.side]=null);break}case`cast`:{let t=this.duelists[e.side];t.setPose(`attack`),this.scene.updateMatrixWorld();let n=t.handWorldPosition(`inner`,new u),r=e.target===`center`?new u(0,1.5,z):this.shields[mt(e.side)].mesh.position.clone().add(new u(e.side===`left`?-.5:.5,0,0)),i=e.side===`left`?`fire`:`ice`,a=this.fxScaleAt(n)*(e.big?1.55:1),o=this.project(n);o&&this.particles.burst(s[i].muzzle,o.x,o.y,{scale:a*.9}),this.spawnBolt(e.side,n,r,e.flight,e.big?.55:.32,a);break}case`clash`:{this.stopBolts();let t=new u(0,1.5,z),n=this.project(t),r=this.fxScaleAt(t)*(e.big?1.6:1);n&&(this.particles.burst(`fireHit`,n.x-6,n.y,{scale:r*.42}),this.particles.burst(`iceHit`,n.x+6,n.y,{scale:r*.42}),this.particles.burst(nt,n.x,n.y,{scale:r*(e.big?.4:.5)}),this.particles.burst(`goldShockwave`,n.x,n.y,{scale:r*(e.big?.5:.34)}),this.flashAt(n.x,n.y,e.big?.12:.08,this.reduced?.12:e.big?.3:.18,`#FFE9A8`));let i=this.project(B);i&&this.particles.burst(it,i.x,i.y,{scale:r*1.3}),this.runePulse=e.big?1.2:.85,e.big&&(this.shake=1);break}case`reflect`:{let t=this.bolts.findIndex(t=>t.side!==e.side),n=t>=0?this.bolts.splice(t,1)[0]:null;n?.emitter.stop(),this.shields[e.side].hit(this.clock);let r=n?.pos.clone()??this.shields[e.side].mesh.position.clone(),i=this.project(r),a=this.fxScaleAt(r);i&&(this.particles.burst(`reflectPing`,i.x,i.y,{scale:a*.6}),this.flashAt(i.x,i.y,.07,.22,`#FFFFFF`));let o=this.duelists[mt(e.side)].handWorldPosition(`inner`,new u);this.spawnBolt(e.side,r,r.clone().lerp(o,.55),.4,.2,a*.85);break}case`fizzle`:{let t=this.bolts.findIndex(t=>t.side===e.side);if(t>=0){let n=this.bolts.splice(t,1)[0];n.emitter.stop();let r=this.project(n.pos);r&&this.particles.burst(s[e.side===`left`?`fire`:`ice`].smokePop,r.x,r.y,{scale:this.fxScaleAt(n.pos)})}break}case`hit`:this.duelists[e.side].hit(e.strength)}}spawnBolt(e,t,n,r,i,a){let o=this.project(t),c=s[e===`left`?`fire`:`ice`].bolt,l=this.particles.emitter(c,o?.x??0,o?.y??0,{scale:a});this.bolts.push({side:e,start:t.clone(),end:n.clone(),t0:this.showT,flight:r,arc:i,emitter:l,pos:t.clone()})}updateBolts(){for(let e of this.bolts){let t=Math.min(1,(this.showT-e.t0)/e.flight);e.pos.copy(e.start).lerp(e.end,t),e.pos.y+=Math.sin(t*Math.PI)*e.arc;let n=this.project(e.pos);n&&e.emitter.moveTo(n.x,n.y)}}stopBolts(){for(let e of this.bolts)e.emitter.stop();this.bolts.length=0}flashAt(e,t,n,r,i){this.flash.x=e/this.cssW,this.flash.y=1-t/this.cssH,this.flash.r=n,this.flash.i=r,this.flash.color.set(i)}project(e){let t=this.tmp2.copy(e).project(this.camera);return t.z>1?null:{x:(t.x+1)/2*this.cssW,y:(1-t.y)/2*this.cssH}}fxScaleAt(e){let t=Math.max(.5,this.camera.position.distanceTo(e)),n=1080/(2*Math.tan(this.camera.fov*$/2)*t);return Math.max(.15,Math.min(1.4,n*.0042))}render(e){let t=this.renderer;t.info.reset(),this.gpu?.begin(),this.env.outlinePx.value=Math.max(1.6,this.cssH*this.pr/1080*2.6),this.env.resolution.value.set(this.cssW*this.pr,this.cssH*this.pr),this.env.fogNear.value=28,this.env.fogFar.value=125,t.setRenderTarget(this.sceneTarget),t.setScissorTest(!1),t.clear(!0,!0,!1),t.render(this.scene,this.camera),t.clear(!1,!0,!1),t.render(this.fxScene,this.fxCamera);let n=this.bloom?this.bloom.render(t,this.sceneTarget.texture):null,r=null;if(this.dim>.01){let e=this.sceneTarget.texture,n=this.sceneTarget.width,i=this.sceneTarget.height,a=this.blurPass.material.uniforms;for(let r of this.blurTargets)a.tInput.value=e,a.uTexel.value.set(1/n,1/i),this.blurPass.render(t,r),e=r.texture,n=r.width,i=r.height;r=e}let i=this.composite.material.uniforms;i.tScene.value=this.sceneTarget.texture,i.tBloom.value=n,i.tBlur.value=r??this.sceneTarget.texture,i.uBlur.value=r?this.dim*.85:0,i.uDim.value=this.dim*.42,i.uFade.value=this.diveValue>0?Math.max(0,(this.diveValue-.55)/.45)*.85:0,i.uAspect.value=this.cssW/this.cssH,i.uFlash.value=[this.flash.x,this.flash.y,this.flash.r,this.flash.i],i.uFlashColor.value.copy(this.flash.color),this.composite.render(t,null),this.renderCards(e),this.gpu?.end(),this.statsValue.drawCalls=t.info.render.calls,this.statsValue.triangles=t.info.render.triangles}renderCards(e){let t=this.cardProvider?.()??[],n=this.renderer,r=new Set,i=this.clock;for(let a of t){if(a.rect.w<4||a.rect.h<4)continue;r.add(a.key);let t=this.cards.get(a.key);t&&t.kind===a.kind||(t&&this.disposeCard(t),t=this.makeCard(a),this.cards.set(a.key,t)),this.updateCardFocus(t,a,e);let o=this.statsValue.frameMs/1e3;for(let e of t.wizards)e.update(Math.min(.1,o||1/60));let{x:s,y:c,w:l,h:u}=a.rect,d=this.cssH-c-u;n.setRenderTarget(null),n.setViewport(s,d,l,u),n.setScissor(s,d,l,u),n.setScissorTest(!0),n.clear(!1,!0,!1);let f=this.cardBg.material.uniforms;if(f.uAccent.value.set(t.accent),f.uSize.value.set(l*this.pr,u*this.pr),f.uRadius.value=a.radius*this.pr,f.uFocus.value=t.focused?Math.min(1,(e-t.focusAt)/250):0,f.uTime.value=i,this.cardBg.render(n,null),this.frameCard(t,l/u),this.env.outlinePx.value=Math.max(2,u*this.pr/140),this.env.resolution.value.set(l*this.pr,u*this.pr),this.env.fogNear.value=1e4,this.env.fogFar.value=2e4,t.scene.updateMatrixWorld(),n.render(t.scene,t.camera),t.sparkle&&t.wizards[0]){let e=t.wizards[0].handWorldPosition(`inner`,this.tmp),n=this.tmp2.copy(e).project(t.camera);t.sparkle.moveTo(s+(n.x+1)/2*l,c+(1-n.y)/2*u)}}for(let[e,t]of this.cards)r.has(e)||(this.disposeCard(t),this.cards.delete(e));n.setScissorTest(!1),n.setViewport(0,0,this.cssW,this.cssH),(r.size>0||this.uiParticles.liveCount()>0)&&(n.clear(!1,!0,!1),n.render(this.uiScene,this.fxCamera))}makeCard(t){let n=new C,r=new w(24,1,.1,50),i=[],a=e.gold;if(t.kind===`duo`){let t=new F({variant:`duelist`,palette:`left`,env:this.env,aim:30,seed:5,facing:1}),n=new F({variant:`duelist`,palette:`right`,env:this.env,aim:30,seed:6,facing:-1});t.object.position.set(-.62,0,0),t.object.rotation.y=.5,n.object.position.set(.62,0,0),n.object.rotation.y=-.5,i.push(t,n),a=e.gold}else{let e=new F({variant:t.kind,palette:`neutral`,env:this.env,aim:20,seed:t.key.length,facing:1});e.object.rotation.y=-.32,i.push(e),a=l[t.kind].base}for(let e of i)n.add(e.object);let o=M([{r:0,y:-.2,color:`#7B5A9E`},{r:t.kind===`duo`?1.55:.72,y:-.2,color:`#7B5A9E`},{r:t.kind===`duo`?1.6:.76,y:-.04,color:`#B79AE0`},{r:t.kind===`duo`?1.52:.7,y:0,color:e.gold},{r:t.kind===`duo`?1.4:.6,y:0,color:`#CDB6EA`},{r:0,y:0,color:`#CDB6EA`}],{color:`#CDB6EA`,rim:1},{segments:40});N(o);let s=j(this.env);this.materials.push(s);let c=new p(o,s);n.add(c);let u=Math.max(...i.map(e=>e.height)),d=t.kind===`duo`?2.6:Math.max(1.2,i[0].look.shape.shoulderHalf*4*i[0].look.shape.scale+.6);return{key:t.key,kind:t.kind,scene:n,camera:r,wizards:i,accent:a,focused:!1,focusAt:0,sparkle:null,framing:{height:u,width:d}}}frameCard(e,t){let n=e.camera;n.aspect=t;let r=Math.tan(n.fov*$/2),i=-.32,a=e.framing.height+.12,o=a-i,s=e.framing.width*1.08,c=Math.max(o/(2*r),s/(2*r*t))+.4,l=(a+i)/2;n.position.set(0,l+c*.06,c),n.lookAt(0,l,0),n.updateProjectionMatrix()}updateCardFocus(e,t,n){if(t.focused===e.focused)return;e.focused=t.focused;let r=e.wizards;if(t.focused){e.focusAt=n;for(let e of r)e.setPose(`attack`,{windup:!0});setTimeout(()=>{if(e.focused){for(let e of r)e.setPose(`attack`);setTimeout(()=>{if(e.focused)for(let e of r)e.setPose(`charge`)},380)}},260);let{x:i,y:a,w:o,h:s}=t.rect;this.uiParticles.burst(Q(e.accent),i+o/2,a+s*.42,{scale:Math.max(.5,s/420)}),e.sparkle?.stop(),e.sparkle=this.uiParticles.emitter(at(e.accent),i+o/2,a+s*.4,{scale:Math.max(.5,s/420)})}else{for(let e of r)e.setPose(`none`);e.sparkle?.stop(),e.sparkle=null}}disposeCard(e){e.sparkle?.stop();for(let t of e.wizards)t.dispose();e.scene.traverse(e=>{e instanceof p&&e.geometry.dispose()}),e.scene.clear()}makeSceneTarget(e,t,n){return new d(e,t,{type:n,format:oe,depthBuffer:!0,stencilBuffer:!1,magFilter:ne,minFilter:ne,generateMipmaps:!1,samples:this.pr>=1.75?0:this.profile.msaa})}applySize(){this.sizeDirty=!1;let e=this.opts.container,t=Math.max(1,e.clientWidth||innerWidth),n=Math.max(1,e.clientHeight||innerHeight),r=st(this.profile,typeof devicePixelRatio==`number`?devicePixelRatio:1);this.cssW=t,this.cssH=n,this.pr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(t,n,!1);let i=Math.max(1,Math.round(t*r)),a=Math.max(1,Math.round(n*r)),o=r>=1.75?0:this.profile.msaa;this.sceneTarget.samples!==o&&(this.sceneTarget.dispose(),this.sceneTarget=this.makeSceneTarget(i,a,D(this.renderer))),this.sceneTarget.setSize(i,a),this.bloom?.setSize(i,a);for(let e of this.blurTargets)e.dispose();this.blurTargets=[];let s=i,c=a;for(let e=0;e<4;e++)s=Math.max(1,Math.round(s/2)),c=Math.max(1,Math.round(c/2)),this.blurTargets.push(ve(s,c,D(this.renderer)));this.camera.aspect=t/n,this.camera.updateProjectionMatrix();let l=this.fxCamera;l.left=0,l.right=t,l.top=0,l.bottom=n,l.updateProjectionMatrix(),this.statsValue={...this.statsValue??this.emptyStats(),pixelRatio:r,width:t,height:n}}emptyStats(){return{tier:this.profile.tier,frames:0,fps:0,frameMs:0,cpuMs:0,gpuMs:null,drawCalls:0,triangles:0,particles:0,pixelRatio:this.pr,width:this.cssW,height:this.cssH}}};function mt(e){return e===`left`?`right`:`left`}export{pt as t};