import{t as e}from"./balance-8rb3x3uk.js";import{a as t,n,r,s as i}from"./quality-Dp7DmYZh.js";import{n as a}from"./settings-DOsuYSKI.js";import{n as o,t as s}from"./motion-bYE0hprd.js";import{r as c}from"./camera-overlay-BLvIbNwn.js";import{a as l,s as u}from"./particle-presets-COlDZ_Gm.js";import{t as d}from"./device-check-store-CDBQ4hSN.js";import{Cn as f,Sn as p,Tn as m,V as h,W as g,d as _,f as v,in as y,mn as b,rt as x,wn as S}from"./three.core-CtBgdmy3.js";import{n as C,r as w,t as T}from"./particles-CvrFKVRn.js";import{i as E,n as D,r as O,t as k}from"./fullscreen-CETxWWVy.js";import{i as A,n as j}from"./shake-ChZ6BdTW.js";import{t as M}from"./webgl-support-Dyk-X7Xj.js";var N=`
uniform sampler2D tVideo;
uniform vec2 uTexel;
uniform vec3 uInk;
uniform float uEdgeLo;
uniform float uEdgeHi;
varying vec2 vUv;

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec3 tap(vec2 o) { return texture2D(tVideo, vUv + o * uTexel).rgb; }
float dist2(vec3 a, vec3 b) { vec3 d = a - b; return dot(d, d); }
vec3 snn(vec3 c, vec3 a, vec3 b) { return dist2(a, c) < dist2(b, c) ? a : b; }

void main() {
  vec3 c = tap(vec2(0.0));
  // Соседи на 1,5 текселя: немного шире пикселя — контуры устойчивее к шуму камеры.
  float o = 1.5;
  vec3 n = tap(vec2(0.0, -o));
  vec3 s = tap(vec2(0.0, o));
  vec3 e = tap(vec2(o, 0.0));
  vec3 w = tap(vec2(-o, 0.0));
  vec3 ne = tap(vec2(o, -o));
  vec3 nw = tap(vec2(-o, -o));
  vec3 se = tap(vec2(o, o));
  vec3 sw = tap(vec2(-o, o));

  // Sobel по яркости.
  float lnw = luma(nw), ln = luma(n), lne = luma(ne), lw = luma(w), le = luma(e), lsw = luma(sw), ls = luma(s), lse = luma(se);
  float gx = (lne + 2.0 * le + lse) - (lnw + 2.0 * lw + lsw);
  float gy = (lsw + 2.0 * ls + lse) - (lnw + 2.0 * ln + lne);
  float edge = length(vec2(gx, gy));

#ifdef FULL
  // Symmetric nearest neighbour: из каждой пары противоположных соседей — ближний к центру.
  c = (c + snn(c, n, s) + snn(c, e, w) + snn(c, ne, sw) + snn(c, nw, se)) / 5.0;
  float l = luma(c);
  vec3 chroma = c - vec3(l);
  // Мягкая постеризация яркости: 5 уровней с плавными ступенями, оттенок сохраняется.
  float L = l * 5.0;
  float fl = floor(L);
  float q = (fl + smoothstep(0.3, 0.7, L - fl)) / 5.0;
  l = mix(l, q, 0.8);
  c = vec3(l) + chroma * 1.45;
  c = (c - 0.5) * 1.06 + 0.52;
#else
  float l = luma(c);
  c = vec3(l) + (c - vec3(l)) * 1.25;
  c = (c - 0.5) * 1.05 + 0.51;
#endif
  float ink = smoothstep(uEdgeLo, uEdgeHi, edge);
  c = mix(c, uInk, ink * 0.9);
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`,P=class e{mode;video;texture;target=null;pass;lastVersion=-1;scale;constructor(t,n,r){this.mode=n,this.video=t,this.scale=r,this.texture=e.videoTexture(t);let i=u(l.ink);this.pass=new k(E(N,{tVideo:{value:this.texture},uTexel:{value:new p(1/640,1/480)},uInk:{value:new f(i[0],i[1],i[2])},uEdgeLo:{value:n===`full`?.2:.24},uEdgeHi:{value:n===`full`?.52:.6}},n===`full`?{FULL:``}:{}))}static videoTexture(e){let t=new m(e);return t.colorSpace=``,t.minFilter=h,t.magFilter=h,t.generateMipmaps=!1,t}get ready(){return this.video.videoWidth>0&&this.video.videoHeight>0&&this.video.readyState>=2}get videoWidth(){return this.video.videoWidth}get videoHeight(){return this.video.videoHeight}setVideo(t){t!==this.video&&(this.texture.dispose(),this.video=t,this.texture=e.videoTexture(t),this.pass.material.uniforms.tVideo.value=this.texture,this.lastVersion=-1)}update(e){if(!this.ready)return this.target&&this.lastVersion>=0?this.target.texture:null;let t=this.video.videoWidth,n=this.video.videoHeight,r=Math.round(t*this.scale),i=Math.round(n*this.scale);return this.target&&this.target.width===r&&this.target.height===i||(this.target?.dispose(),this.target=D(r,i,b),this.lastVersion=-1),`requestVideoFrameCallback`in this.video||(this.texture.needsUpdate=!0),(this.texture.version!==this.lastVersion||this.lastVersion<0)&&(this.pass.material.uniforms.uTexel.value.set(1/t,1/n),this.pass.render(e,this.target),this.lastVersion=this.texture.version),this.target.texture}dispose(){this.pass.dispose(),this.texture.dispose(),this.target?.dispose(),this.target=null}},F=`saturate(1.3) contrast(1.08) brightness(1.04)`;function I(e,t,n){if(!e)return()=>{};let r=t===`low`||t===`off`,i=e.style.filter,a=null;if(r){e.style.filter=F,a=document.createElement(`div`),a.className=`fx-camera-grade`,a.setAttribute(`aria-hidden`,`true`),Object.assign(a.style,{position:`absolute`,inset:`0`,pointerEvents:`none`,mixBlendMode:`soft-light`,opacity:`0.38`,background:`linear-gradient(90deg, ${l.redHi} 0%, ${l.sky1} 32%, rgba(128,128,128,0) 47%, rgba(128,128,128,0) 53%, ${l.blue} 68%, ${l.blueHi} 100%)`});let t=e.parentElement??n;t&&(e.parentElement===t?e.after(a):t.prepend(a))}return()=>{e.style.filter=i===`saturate(1.3) contrast(1.08) brightness(1.04)`?``:i,a?.remove()}}function L(e,t,n,r,i){if(!(e>0)||!(t>0)||!(n>0)||!(r>0))return{x:0,y:0,w:1,h:1};let a=c(e,t,n,r,i);return{x:a.x/e,y:a.y/t,w:a.w/e,h:a.h/t}}var R=e=>1-(1-e)**3,z=class{sources=[];addWave(e,t,n,r={}){let i={kind:`wave`,x:e,y:t,start:n,radius:r.radius??700,strength:r.strength??28,width:r.width??70,duration:r.durationMs??650};this.push(i)}addLens(e,t,n,r){let i={kind:`lens`,x:e,y:t,radius:n,strength:r,released:!1};return this.push(i),{set:(e,t,n,r)=>{i.x=e,i.y=t,i.radius=n,i.strength=r},release:()=>{i.released=!0}}}get count(){return this.sources.length}clear(){this.sources.length=0}write(e,t,n){for(let t=this.sources.length-1;t>=0;t--){let n=this.sources[t];(n.kind===`wave`&&e-n.start>=n.duration||n.kind===`lens`&&n.released)&&this.sources.splice(t,1)}let r=0;for(let i of this.sources){if(r>=4)break;if(i.kind===`wave`){let a=Math.max(0,(e-i.start)/i.duration);t.set([i.x,i.y,i.radius*R(a),i.width*(.55+.45*(1-a))],r*4),n.set([i.strength*(1-a)**1.5,0,0,0],r*4)}else t.set([i.x,i.y,i.radius,0],r*4),n.set([i.strength,1,0,0],r*4);r++}for(let e=r;e<4;e++)t.fill(0,e*4,e*4+4),n.fill(0,e*4,e*4+4);return r}push(e){if(this.sources.length>=4){let e=this.sources.findIndex(e=>e.kind===`wave`);this.sources.splice(e>=0?e:0,1)}this.sources.push(e)}},B=class{maxPerWindow;windowMs;times=[];constructor(e=3,t=1e3){this.maxPerWindow=e,this.windowMs=t}tryFire(e){for(;this.times.length&&this.times[0]<=e-this.windowMs;)this.times.shift();return this.times.length>=this.maxPerWindow?!1:(this.times.push(e),!0)}reset(){this.times.length=0}};function V(e,t){let n=Math.max(0,e);return t?n*.5:n}function H(e,t,n){return((e.real?n:t)-e.start)/e.duration}function U(e){if(e<0||e>=1)return 0;if(e<.08)return e/.08;let t=(e-.08)/.92;return(1-t)*(1-t)}var W=`
uniform sampler2D tFx;
uniform sampler2D tBloom;
uniform sampler2D tCam;
uniform float uCamOn;
uniform sampler2D tLayer;
uniform vec4 uLayerRect;
uniform float uLayerOn;
uniform vec2 uSize;
uniform vec4 uRect;
uniform float uMirror;
uniform float uBloomStrength;
uniform vec3 uInk;
uniform vec3 uWarmShadow;
uniform vec3 uCoolShadow;
uniform vec2 uHalfSat;
uniform vec2 uHalfExp;
uniform float uDim;
uniform float uVignette;
uniform float uTime;
uniform vec4 uDistA[4];
uniform vec4 uDistB[4];
uniform int uDistCount;
uniform vec4 uFlash[3];
uniform vec3 uFlashColor[3];
varying vec2 vUv;

float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

// Слой в точке сцены suv (y вверх): предумноженный цвет и альфа, вне прямоугольника — пусто.
vec4 layerAt(vec2 suv) {
  if (uLayerOn < 0.5) return vec4(0.0);
  vec2 q = (vec2(suv.x, 1.0 - suv.y) - uLayerRect.xy) / uLayerRect.zw;
  if (q.x < 0.0 || q.x > 1.0 || q.y < 0.0 || q.y > 1.0) return vec4(0.0);
  return texture2D(tLayer, vec2(q.x, 1.0 - q.y));
}

// Цветокор половины для слоя: насыщенность и экспозиция той половины прямоугольника видео, где он лежит.
vec3 gradeLayer(vec3 c, vec2 suv) {
  float side = step(uRect.x + uRect.z * 0.5, suv.x);
  float sat = mix(uHalfSat.x, uHalfSat.y, side);
  return mix(vec3(luma(c)), c, sat) * mix(uHalfExp.x, uHalfExp.y, side);
}

vec3 softClip(vec3 c) {
  vec3 over = max(c - 0.8, 0.0);
  return min(c, 0.8) + 0.2 * (1.0 - exp(-over / 0.2));
}

void main() {
  vec2 px = vec2(vUv.x, 1.0 - vUv.y) * uSize;
  vec2 off = vec2(0.0);
  float chroma = 0.0;
#ifdef DISTORT
  for (int i = 0; i < 4; i++) {
    if (i >= uDistCount) break;
    vec4 a = uDistA[i];
    vec4 b = uDistB[i];
    vec2 d = px - a.xy;
    float dist = length(d);
    vec2 dir = dist > 1e-3 ? d / dist : vec2(0.0);
    if (b.y < 0.5) {
      // Волна: гребень на радиусе a.z шириной a.w.
      float x = (dist - a.z) / max(a.w, 1.0);
      // Производная гаусса: впереди гребня пиксели тянутся наружу, позади — внутрь, как у линзы-кольца.
      float band = -x * exp(-x * x) * 1.65;
      off += dir * band * b.x;
      chroma += abs(band) * b.x;
    } else {
      // Линза: увеличение внутри радиуса и дрожь «жара».
      float f = clamp(1.0 - dist / max(a.z, 1.0), 0.0, 1.0);
      float bulge = f * f;
      float ripple = sin(dist * 0.08 - uTime * 9.0) * 0.35;
      off += dir * bulge * b.x * (1.0 + ripple);
      chroma += bulge * b.x * 0.5;
    }
  }
#endif
  vec2 suv = vUv - vec2(off.x, -off.y) / uSize;
  vec2 cs = vec2(chroma, 0.0) / uSize * 0.12;

  vec4 fx = texture2D(tFx, suv);
  vec4 lay = layerAt(suv);
  lay.rgb = gradeLayer(lay.rgb, suv);
  // Без камеры в WebGL слой лежит под эффектами предумноженной альфой.
  vec3 color = lay.rgb * (1.0 - fx.a) + fx.rgb;
  float outA = fx.a + lay.a * (1.0 - fx.a);
#ifdef BLOOM
  vec3 bloom = texture2D(tBloom, suv).rgb * uBloomStrength;
#else
  vec3 bloom = vec3(0.0);
#endif

#ifdef CAMERA
  if (uCamOn > 0.5) {
  vec2 sp = vec2(suv.x, 1.0 - suv.y);
  vec2 q = (sp - uRect.xy) / uRect.zw;
  vec3 cam = uInk * (1.0 - lay.a) + lay.rgb;
  if (q.x >= 0.0 && q.x <= 1.0 && q.y >= 0.0 && q.y <= 1.0) {
    vec2 vuv = vec2(uMirror > 0.5 ? 1.0 - q.x : q.x, 1.0 - q.y);
    vec2 cuv = vec2(cs.x / uRect.z, 0.0);
    cam = vec3(texture2D(tCam, vuv + cuv).r, texture2D(tCam, vuv).g, texture2D(tCam, vuv - cuv).b);
    // Цветокор половин в экранных координатах: тепло слева, холод справа.
    float side = smoothstep(0.45, 0.55, q.x);
    cam *= mix(vec3(1.08, 0.98, 0.88), vec3(0.9, 0.99, 1.1), side);
    float l = luma(cam);
    cam += mix(uWarmShadow, uCoolShadow, side) * 0.2 * (1.0 - smoothstep(0.0, 0.5, l));
    float sat = mix(uHalfSat.x, uHalfSat.y, side);
    cam = mix(vec3(luma(cam)), cam, sat) * mix(uHalfExp.x, uHalfExp.y, side);
    // Слой (волшебник практики) стоит в комнате: поверх камеры, под виньеткой.
    cam = cam * (1.0 - lay.a) + lay.rgb;
    // Виньетка к цвету ink.
    vec2 vq = (q - 0.5) * vec2(1.0, 1.1);
    float vig = smoothstep(0.78, 0.32, length(vq));
    cam = mix(uInk, cam, mix(1.0 - uVignette, 1.0, vig));
  }
  cam *= 1.0 - uDim;
  color = cam * (1.0 - fx.a) + fx.rgb;
  outA = 1.0;
  }
#endif

  color += bloom;
  for (int i = 0; i < 3; i++) {
    vec4 f = uFlash[i];
    if (f.w <= 0.0) continue;
    float fall = f.z <= 0.0 ? 1.0 : exp(-dot(px - f.xy, px - f.xy) / (f.z * f.z));
    color += uFlashColor[i] * f.w * fall;
  }
  color = softClip(color);
  // Без камеры канвас прозрачен: свет (bloom, вспышки, аддитивные частицы) с альфой 0
  // при предумноженной альфе добавляется к тому, что под канвасом.
  outA = clamp(outA, 0.0, 1.0);
  gl_FragColor = vec4(color, outA);
}
`,G=class{fxTarget;composite;bloom;camera;fallbackTex;cssW=1;cssH=1;constructor(e){this.bloom=e.bloom,this.camera=e.camera,this.fxTarget=D(1,1,e.type),this.fallbackTex=this.fxTarget.texture;let t={};e.bloom&&(t.BLOOM=``),e.distortion&&(t.DISTORT=``),e.camera&&(t.CAMERA=``);let n=e=>new f(...u(e));this.composite=new k(E(W,{tFx:{value:this.fxTarget.texture},tBloom:{value:this.fallbackTex},tCam:{value:this.fallbackTex},uCamOn:{value:0},tLayer:{value:this.fallbackTex},uLayerRect:{value:new S(0,0,1,1)},uLayerOn:{value:0},uSize:{value:new p(1,1)},uRect:{value:new S(0,0,1,1)},uMirror:{value:1},uBloomStrength:{value:e.bloomStrength??.65},uInk:{value:n(l.ink)},uWarmShadow:{value:n(l.redLo)},uCoolShadow:{value:n(l.blueLo)},uHalfSat:{value:new p(1,1)},uHalfExp:{value:new p(1,1)},uDim:{value:0},uVignette:{value:.5},uTime:{value:0},uDistA:{value:Array.from({length:4},()=>new S)},uDistB:{value:Array.from({length:4},()=>new S)},uDistCount:{value:0},uFlash:{value:Array.from({length:3},()=>new S)},uFlashColor:{value:Array.from({length:3},()=>new f)}},t)),this.composite.material.premultipliedAlpha=!0}setSize(e,t,n,r){this.fxTarget.setSize(Math.max(1,e),Math.max(1,t)),this.bloom?.setSize(Math.max(1,e),Math.max(1,t)),this.cssW=n,this.cssH=r}render(e,t){let n=this.composite.material.uniforms;this.bloom&&(n.tBloom.value=this.bloom.render(e,this.fxTarget.texture)),n.tCam.value=t.camera??this.fallbackTex,n.uCamOn.value=+!!t.camera;let r=t.layer??null;n.tLayer.value=r?r.texture:this.fallbackTex,n.uLayerOn.value=+!!r,r&&n.uLayerRect.value.set(r.rect.x,r.rect.y,r.rect.w,r.rect.h),n.uSize.value.set(this.cssW,this.cssH),n.uRect.value.set(t.rect.x,t.rect.y,t.rect.w,t.rect.h),n.uMirror.value=+!!t.mirrored,n.uDim.value=t.dim,n.uHalfSat.value.set(t.halfSat[0],t.halfSat[1]),n.uHalfExp.value.set(t.halfExp[0],t.halfExp[1]),n.uTime.value=t.timeSec;let i=n.uDistA.value,a=n.uDistB.value;for(let e=0;e<4;e++)i[e].fromArray(t.distA,e*4),a[e].fromArray(t.distB,e*4);n.uDistCount.value=t.distCount;let o=n.uFlash.value,s=n.uFlashColor.value;for(let e=0;e<3;e++){let n=t.flashes[e];n?(o[e].set(n.x,n.y,n.radius,n.intensity),s[e].set(n.color[0],n.color[1],n.color[2])):o[e].set(0,0,0,0)}this.composite.render(e,null)}get hasCamera(){return this.camera}dispose(){this.composite.dispose(),this.bloom?.dispose(),this.fxTarget.dispose()}},K=class e{canvas;renderer;scene=new y;camera;particles;tier;profile;opts;post;stylizer=null;distortion=new z;distA=new Float32Array(16);distB=new Float32Array(16);flashes=[];limiter=new B;resizeObserver;sizeDirty=!0;cssW=1;cssH=1;pr=1;nowMs=0;lostValue=!1;disposed=!1;lastRenderMs=0;lastCalls=0;lastTriangles=0;gpuTimer;dim=0;layer=null;clearColor=new _;halfSat=[1,1];halfExp=[1,1];onContextLost=()=>{this.lostValue||(this.lostValue=!0,this.opts.onLost?.())};static create(t){try{return new e(t)}catch(e){return console.warn(`[fx] WebGL-сцена не создалась:`,e),null}}constructor(e){this.opts=e,this.tier=e.tier,this.profile={...r[e.tier],...e.tune??{}},v.enabled=!1;let t=document.createElement(`canvas`);t.className=`fx-stage`,Object.assign(t.style,{position:`absolute`,inset:`0`,width:`100%`,height:`100%`,pointerEvents:`none`,display:`block`}),t.setAttribute(`aria-hidden`,`true`),t.addEventListener(`webglcontextlost`,this.onContextLost);let n;try{n=new w({canvas:t,alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1})}catch(e){throw t.removeEventListener(`webglcontextlost`,this.onContextLost),e}n.outputColorSpace=g,this.gpuTimer=e.gpuTiming?q.create(n.getContext()):null,n.autoClear=!1,n.info.autoReset=!1,n.setClearColor(0,0),this.canvas=t,this.renderer=n,this.camera=new x(0,1,0,1,-100,100),this.particles=new T({capacity:this.profile.maxParticles,density:this.profile.density,unit:()=>this.unit,seed:e.seed??334446}),this.scene.add(this.particles.group);let i=O(n),a=this.profile.bloomScale>0?e.bloom?.({renderer:n,profile:this.profile})??new C({scale:this.profile.bloomScale,levels:this.profile.bloomLevels,type:i}):null,o=this.profile.camera!==`css`;this.post=new G({type:i,bloom:a,distortion:this.profile.distortion,camera:o}),o&&e.video&&(this.stylizer=new P(e.video,this.profile.camera,this.profile.stylizeScale));let s=e.container;e.before&&e.before.parentElement===s?s.insertBefore(t,e.before):s.appendChild(t),this.resizeObserver=typeof ResizeObserver==`function`?new ResizeObserver(()=>{this.sizeDirty=!0}):null,this.resizeObserver?.observe(s),this.applySize()}get lost(){return this.lostValue}get width(){return this.cssW}get height(){return this.cssH}get unit(){return this.cssH/1080}get pixelRatio(){return this.pr}get time(){return this.nowMs}videoRectNorm(){let e=this.opts.video,t=e?.videoWidth||4,n=e?.videoHeight||3;return L(this.cssW,this.cssH,t,n,this.opts.fit??`contain`)}videoRect(){let e=this.videoRectNorm();return{x:e.x*this.cssW,y:e.y*this.cssH,w:e.w*this.cssW,h:e.h*this.cssH}}setVideo(e){this.opts.video=e,e&&this.profile.camera!==`css`&&(this.stylizer?this.stylizer.setVideo(e):this.stylizer=new P(e,this.profile.camera,this.profile.stylizeScale))}burst(e,t,n,r){return this.lostValue?0:this.particles.burst(e,t,n,r)}emitter(e,t,n,r){return this.particles.emitter(e,t,n,r)}shockwave(e,t,n={}){if(this.burst(n.preset??`goldShockwave`,e,t,n),this.profile.distortion&&n.distortion!==!1){let r=this.unit*(n.scale??1),i=n.wave??{};this.distortion.addWave(e,t,this.nowMs,{radius:(i.radius??620)*r,strength:(i.strength??26)*r,width:(i.width??64)*r,durationMs:i.durationMs??620})}}lens(e,t,n,r){return this.profile.distortion?this.distortion.addLens(e,t,n,r):{set:()=>{},release:()=>{}}}flash(e={},t=performance.now()){let n=e.x===void 0||e.y===void 0||!(e.radius&&e.radius>0);if(n&&!this.limiter.tryFire(t))return!1;let r=this.opts.reducedMotion?.()??!1;return this.flashes.length>=3&&this.flashes.shift(),this.flashes.push({start:n?t:this.nowMs,duration:Math.max(1,e.durationMs??220),real:n,x:e.x??0,y:e.y??0,radius:n?0:(e.radius??0)*this.unit,intensity:V(e.intensity??.8,r),color:u(e.color??`#FFFFFF`)}),!0}setDim(e){this.dim=Math.min(1,Math.max(0,e))}setHalfGrade(e,t){let n=e===`left`?0:1;t.saturation!==void 0&&(this.halfSat[n]=Math.max(0,t.saturation)),t.exposure!==void 0&&(this.halfExp[n]=Math.max(0,t.exposure))}get dimValue(){return this.dim}halfGrade(e){let t=e===`left`?0:1;return{saturation:this.halfSat[t],exposure:this.halfExp[t]}}setLayer(e){this.layer=e}add(e){this.scene.add(e)}render(e,t=performance.now()){if(this.lostValue||this.disposed)return;let n=performance.now();this.nowMs=e,this.sizeDirty&&this.applySize();let r=this.renderer;r.info.reset(),this.gpuTimer?.begin(),this.particles.update(e);let i=this.stylizer?.update(r)??null,a=this.renderLayer(e);r.setRenderTarget(this.post.fxTarget),r.clear(!0,!1,!1),r.render(this.scene,this.camera);let o=this.distortion.write(e,this.distA,this.distB),s=[];for(let n=this.flashes.length-1;n>=0;n--){let r=this.flashes[n],i=H(r,e,t);i>=1?this.flashes.splice(n,1):s.push({x:r.x,y:r.y,radius:r.radius,intensity:r.intensity*U(Math.max(0,i)),color:r.color})}r.setRenderTarget(null),r.clear(!0,!1,!1),this.post.render(r,{camera:i,rect:this.videoRectNorm(),mirrored:this.opts.mirrored??!0,dim:this.dim,halfSat:this.halfSat,halfExp:this.halfExp,timeSec:e/1e3,distA:this.distA,distB:this.distB,distCount:o,flashes:s,layer:a}),this.gpuTimer?.end(),this.lastCalls=r.info.render.calls,this.lastTriangles=r.info.render.triangles,this.lastRenderMs=performance.now()-n}stats(){return{tier:this.tier,width:this.cssW,height:this.cssH,pixelRatio:this.pr,particles:this.particles.liveCount(),capacity:this.particles.capacity,layers:this.particles.liveByLayer(),emitters:this.particles.emitterCount,drawCalls:this.lastCalls,triangles:this.lastTriangles,renderMs:this.lastRenderMs,gpuMs:this.gpuTimer?.meanMs()??null,camera:!!this.stylizer?.ready,distortions:this.distortion.count}}dispose(){if(!this.disposed){if(this.disposed=!0,this.resizeObserver?.disconnect(),this.canvas.removeEventListener(`webglcontextlost`,this.onContextLost),this.gpuTimer?.dispose(),this.particles.dispose(),this.stylizer?.dispose(),this.post.dispose(),this.scene.clear(),this.renderer.dispose(),!this.lostValue)try{this.renderer.forceContextLoss()}catch{}this.canvas.remove()}}renderLayer(e){let t=this.layer;if(!t)return null;let n=this.renderer;n.getClearColor(this.clearColor);let r=n.getClearAlpha(),i=null;try{i=t.render(n,{width:this.cssW,height:this.cssH,pixelRatio:this.pr,timeMs:e,videoRect:this.videoRectNorm(),profile:this.profile})}catch(e){console.warn(`[fx] слой снят после ошибки:`,e),this.layer=null,i=null}return n.setRenderTarget(null),n.setScissorTest(!1),n.setViewport(0,0,this.cssW,this.cssH),n.setClearColor(this.clearColor,r),i}applySize(){this.sizeDirty=!1;let e=this.opts.container.getBoundingClientRect(),t=Math.max(1,this.opts.container.clientWidth||Math.round(e.width)),n=Math.max(1,this.opts.container.clientHeight||Math.round(e.height)),r=Math.min(typeof devicePixelRatio==`number`&&devicePixelRatio>0?devicePixelRatio:1,this.profile.maxPixelRatio)*this.profile.renderScale;this.cssW=t,this.cssH=n,this.pr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(t,n,!1);let i=Math.max(1,Math.round(t*r)),a=Math.max(1,Math.round(n*r));this.post.setSize(i,a,t,n);let o=this.camera;o.left=0,o.right=t,o.top=0,o.bottom=n,o.updateProjectionMatrix()}},q=class e{gl;ext;pending=[];samples=[];active=null;constructor(e,t){this.gl=e,this.ext=t}static create(t){let n=t.getExtension(`EXT_disjoint_timer_query_webgl2`);return n?new e(t,n):null}begin(){if(this.poll(),this.pending.length>8)return;let e=this.gl.createQuery();e&&(this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e),this.active=e)}end(){this.active&&=(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.active),null)}meanMs(){return this.samples.length?this.samples.reduce((e,t)=>e+t,0)/this.samples.length:null}dispose(){for(let e of this.pending)this.gl.deleteQuery(e);this.pending.length=0}poll(){let e=this.gl,t=e.getParameter(this.ext.GPU_DISJOINT_EXT);for(;this.pending.length;){let n=this.pending[0];if(!e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE))break;this.pending.shift(),t||(this.samples.push(e.getQueryParameter(n,e.QUERY_RESULT)/1e6),this.samples.length>60&&this.samples.shift()),e.deleteQuery(n)}}},J=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Y=class{lastReal=null;fxNow=0;fxDelta=0;freezeUntil=-1/0;slow=null;paused=!1;reduced;constructor(e={}){this.reduced=e.reducedMotion??!1}get now(){return this.fxNow}get delta(){return this.fxDelta}get scale(){return this.lastReal===null?1:this.scaleAt(this.lastReal)}get frozen(){return this.lastReal!==null&&(this.paused||this.lastReal<this.freezeUntil)}get reducedMotion(){return this.reduced}set reducedMotion(e){this.reduced=e,e&&(this.freezeUntil=-1/0)}advance(e){let t=this.lastReal;if(this.lastReal=e,t===null||!(e>t))return this.fxDelta=0,this.fxNow;let n=Math.max(t,e-100);return this.fxDelta=this.integrate(n,e),this.fxNow+=this.fxDelta,this.slow&&e>=this.slow.until+this.slow.easeOutMs&&(this.slow=null),this.fxNow}hitStop(e){if(this.reduced||!(e>0))return!1;let t=this.lastReal??0;return this.freezeUntil=Math.max(this.freezeUntil,t+e),!0}slowMo(e,t,n=250){let r=Math.min(1,Math.max(0,e)),i=this.lastReal??0;this.slow={scale:r,until:i+Math.max(0,t),easeOutMs:Math.max(0,n)}}setPaused(e){this.paused=e}reset(){this.freezeUntil=-1/0,this.slow=null,this.paused=!1}scaleAt(e){if(this.paused||e<this.freezeUntil)return 0;let t=this.slow;return t?e<t.until?t.scale:t.easeOutMs>0&&e<t.until+t.easeOutMs?t.scale+(1-t.scale)*J((e-t.until)/t.easeOutMs):1:1}integrate(e,t){if(this.paused)return 0;let n=[e,t];this.freezeUntil>e&&this.freezeUntil<t&&n.push(this.freezeUntil);let r=this.slow;if(r)for(let i of[r.until,r.until+r.easeOutMs])i>e&&i<t&&n.push(i);n.sort((e,t)=>e-t);let i=0;for(let e=0;e+1<n.length;e++){let t=n[e],r=n[e+1];if(r<=t)continue;let a=(t+r)/2;i+=(r-t)/6*(this.scaleAt(t+1e-9)+4*this.scaleAt(a)+this.scaleAt(r-1e-9))}return i}},X=class{runtime;preset;opts;inner=null;x;y;stopped=!1;constructor(e,t,n,r,i){this.runtime=e,this.preset=t,this.opts=n,this.x=r,this.y=i}get active(){return!this.stopped}bind(e){this.inner=e&&!this.stopped?e.emitter(this.preset,this.x,this.y,this.opts):null}moveTo(e,t){this.x=e,this.y=t,this.inner?.moveTo(e,t)}jumpTo(e,t){this.x=e,this.y=t,this.inner?.jumpTo(e,t)}stop(){this.stopped||(this.stopped=!0,this.inner?.stop(),this.inner=null,this.runtime.forget(this))}};function Z(){let t=d();if(!t)return null;let n=e.device,r=t.summary,i=r.frames===0||r.meanMs!==null&&r.meanMs>n.maxMeanInferenceMs||r.slowShare!==null&&r.slowShare>n.maxSlowFrameShare;return{level:t.level,suggestClassic:t.level===`warn`&&i}}function Q(){try{return typeof location<`u`?new URLSearchParams(location.search).get(`fx`):null}catch{return null}}var $=class{clock;shakes;opts;choiceValue;tierValue;governor;stageValue=null;undoCss=()=>{};handles=new Set;listeners=new Set;reduced;unwatchMotion;lastTransform=``;lostPending=!1;disposed=!1;lastReal=0;lastRender=-1/0;fight=!1;layer=null;constructor(e){this.opts=e,this.reduced=e.reducedMotion??s(),this.clock=new Y({reducedMotion:this.reduced}),this.shakes=new j({seed:e.seed??24301,reducedMotion:this.reduced}),this.unwatchMotion=e.reducedMotion===void 0?o(e=>{this.reduced=e,this.clock.reducedMotion=e,this.shakes.reducedMotion=e}):()=>{},e.onTierChange&&this.listeners.add(e.onTierChange);let r=e.webgl2??M();this.choiceValue=i({param:t(e.param===void 0?Q():e.param),setting:e.setting??a(),webgl2:r,verdict:e.verdict===void 0?Z():e.verdict}),this.tierValue=this.choiceValue.tier,this.governor=this.choiceValue.governed?new n({start:this.tierValue}):null,this.build(`webgl-failed`)}get tier(){return this.tierValue}get choice(){return this.choiceValue}get stage(){return this.stageValue}get reducedMotion(){return this.reduced}get frameMeanMs(){return this.governor?.meanMs()??0}get governed(){return this.governor!==null}onTierChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}setFight(e){this.fight=e,this.governor?.setFight(e)}setTier(e,t=!1){let r=this.opts.webgl2??M()?e:`off`;this.governor=t&&r!==`off`?new n({start:r}):null,this.governor?.setFight(this.fight),!(r===this.tierValue&&this.stageValue)&&(this.tierValue=r,this.build(`manual`),this.emit(`manual`))}setLayer(e){this.layer=e,this.stageValue?.setLayer(e)}setVideo(e){this.opts.video=e,this.stageValue?.setVideo(e),this.applyCss()}frame(e,t){if(this.disposed)return;this.lastReal=e,this.lostPending&&(this.lostPending=!1,this.toOff(`context-lost`));let n=this.clock.advance(e),r=this.governor?.sample(e)??null;r&&r!==this.tierValue&&(this.tierValue=r,this.build(`governor`),this.emit(`governor`)),t?.(n,this.clock.delta);let i=this.opts.shakeTarget??this.opts.container,a=(this.stageValue?.height??(this.opts.container.clientHeight||1080))/1080,o=A(this.shakes.offset(e),a);o!==this.lastTransform&&(i.style.transform=o,this.lastTransform=o);let s=this.opts.maxFps??0;s>0&&e-this.lastRender<1e3/s*.9||(this.lastRender=e,this.stageValue?.render(n,e))}burst(e,t,n,r){return this.stageValue?.burst(e,t,n,r)??0}emitter(e,t,n,r={}){let i=new X(this,e,r,t,n);return this.handles.add(i),i.bind(this.stageValue),i}forget(e){this.handles.delete(e)}shockwave(e,t,n){this.stageValue?.shockwave(e,t,n)}lens(e,t,n,r){return this.stageValue?.lens(e,t,n,r)??{set:()=>{},release:()=>{}}}flash(e){return this.stageValue?.flash(e,this.lastReal||performance.now())??!1}hitStop(e){return this.clock.hitStop(e)}slowMo(e,t,n){this.clock.slowMo(e,t,n)}shake(e){return this.shakes.add(e.amplitudePx,e.durationMs,this.lastReal||performance.now())}kick(e,t){return this.shakes.kick(e,t,this.lastReal||performance.now())}stats(){return{...this.stageValue?.stats()??{tier:this.tierValue,width:this.opts.container.clientWidth,height:this.opts.container.clientHeight,pixelRatio:1,particles:0,capacity:0,layers:{glow:{live:0,capacity:0},normal:{live:0,capacity:0},add:{live:0,capacity:0}},emitters:0,drawCalls:0,triangles:0,renderMs:0,gpuMs:null,camera:!1,distortions:0},tier:this.tierValue,governed:this.governed,frameMeanMs:this.frameMeanMs,fxTimeMs:this.clock.now,frozen:this.clock.frozen}}dispose(){if(this.disposed)return;this.disposed=!0,this.unwatchMotion();for(let e of[...this.handles])e.stop();this.stageValue?.dispose(),this.stageValue=null,this.layer=null,this.undoCss();let e=this.opts.shakeTarget??this.opts.container;this.lastTransform&&(e.style.transform=``),this.listeners.clear()}build(e){this.stageValue?.dispose(),this.stageValue=null;let t=this.tierValue;r[t].webgl&&t!==`off`&&(this.stageValue=K.create({container:this.opts.container,tier:t,video:this.opts.video??null,mirrored:this.opts.mirrored??!0,fit:this.opts.fit??`contain`,before:this.opts.before??null,...this.opts.seed===void 0?{}:{seed:this.opts.seed},...this.opts.bloom?{bloom:this.opts.bloom}:{},...this.opts.tune?{tune:this.opts.tune}:{},...this.opts.gpuTiming?{gpuTiming:!0}:{},reducedMotion:()=>this.reduced,onLost:()=>{this.lostPending=!0}}),this.stageValue||(this.tierValue=`off`,this.governor=null,this.emit(e))),this.stageValue?.setLayer(this.layer);for(let e of this.handles)e.bind(this.stageValue);this.applyCss()}toOff(e){this.tierValue!==`off`&&(this.tierValue=`off`,this.governor=null,this.build(e),this.emit(e))}applyCss(){this.undoCss(),this.undoCss=I(this.opts.video??null,this.tierValue,this.opts.container)}emit(e){for(let t of[...this.listeners])t(this.tierValue,e)}};export{Z as n,K as r,$ as t};