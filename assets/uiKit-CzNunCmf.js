import"./modulepreload-polyfill-P2Xu9kJm.js";/* empty css              */import{c as e,f as t,i as n,o as r,t as i,u as a}from"./tokens-Cw4laJjl.js";import{_ as o,c as s,d as c,f as l,l as u,m as d,n as f,o as p,r as m,s as h,u as g,v as _}from"./pose-icon-BzS9FefF.js";import{a as v,i as y,t as b}from"./glyphs-Dd_bJTDw.js";import{c as x,d as S,i as C,l as w,m as T,s as ee,t as E}from"./motion-Dh7dcKPN.js";import{a as te,i as D,n as ne,r as re}from"./kit-BnKIfnT_.js";var O=4e3,k=[`left`,`right`],A=class{reducedMotion;ghosts={left:C(1),right:C(1)};lastMs=-1;constructor(e){this.reducedMotion=e}health(e,t){return e===`right`?t<1200?1:.75:t<2600?.8:.65}draw(e,t,n,r){let o=(r%O+O)%O;if(r<this.lastMs||o<this.lastMs%O-1)for(let e of k)this.ghosts[e]=C(this.health(e,o),r);this.lastMs=r;for(let e of k)this.ghosts[e]=w(this.ghosts[e],this.health(e,o),r);e.save(),e.clearRect(0,0,t,n),this.background(e,t,n);let s=a(n),c=n/12,u={left:`attack`,right:o>2600?`charge`:`shield`};for(let r of k){let i=r===`left`?t/4:3*t/4;m(e,i,n*.03+c,c,u[r],{side:r})}let f=60-Math.floor(o/1e3)*17,h=f<=10,_=n*.075;g(e,t/2,n*.03+_,_,{color:h?i.redLo:i.panelHi,rim:h?i.red:i.gold,lo:i.panel});let v=`${Math.floor(Math.max(0,f)/60)}:${String(Math.max(0,f)%60).padStart(2,`0`)}`,y=h&&!this.reducedMotion?1+.08*Math.max(0,Math.sin(o/1e3*Math.PI*2)):1;d(e,v,t/2,n*.03+_,{size:_*.78,tabular:!0,italic:!1,fill:h?p.danger:p.white,scaleX:y,scaleY:y}),this.word(e,`HIT 25`,3*t/4,n*.42,n*.11,o-1200,p.white,1300),this.word(e,`REFLECT!`,t/4,n*.42,n*.1,o-2600,p.red,1200);let b=o-200;if(b>=0&&b<1600){let r=S(b,{reducedMotion:this.reducedMotion});e.save(),e.translate(t/2,n*.62),e.scale(r.sx,r.sy),e.globalAlpha*=r.alpha*(b>1350?1-(b-1350)/250:1),l(e,{x:-t*.13,y:-n*.045,w:t*.26,h:n*.09},{fill:[i.gold,`#F5AE20`],rim:`#FFF2B3`,skewDeg:-6}),d(e,`РАУНД 3`,0,0,{size:n*.058,fill:p.white}),e.restore()}for(let r of k)this.bars(e,r,t,n,o,s);e.restore()}background(e,n,a){for(let o of k){let s=o===`left`?0:n/2,c=e.createRadialGradient(s+n/4,a*.45,a*.05,s+n/4,a*.5,a*.75);c.addColorStop(0,t(r[o].base,.42)),c.addColorStop(.6,t(i.sky4,.9)),c.addColorStop(1,`#0d0624`),e.fillStyle=c,e.fillRect(s,0,n/2,a)}let o=e.createLinearGradient(n/2-6,0,n/2+6,0);o.addColorStop(0,t(i.red,0)),o.addColorStop(.45,t(i.redHi,.8)),o.addColorStop(.55,t(i.blueHi,.8)),o.addColorStop(1,t(i.blue,0)),e.fillStyle=o,e.fillRect(n/2-6,0,12,a)}word(e,t,n,r,i,a,o,s){if(a<0||a>s)return;let c=S(a,{reducedMotion:this.reducedMotion}),l=a>s-220?(s-a)/220:1;d(e,t,n,r,{size:i,fill:o,scaleX:c.sx,scaleY:c.sy,alpha:c.alpha*l,rotateDeg:-4})}bars(e,t,n,a,o,l){let d=r[t],f=n*.34,p=a*.05,m=n*.05,g=t===`left`?m+a*.08:n-m-f-a*.08,_=t===`left`?1:-1,v=this.ghosts[t],y=t===`right`?Math.max(0,1-Math.abs(o-1200)/160):Math.max(0,1-Math.abs(o-2600)/160);h(e,{x:g,y:a*.8,w:f,h:p},{value:v.value,ghost:v.ghost,color:d.base,hi:d.hi,lo:d.lo,direction:_,segments:10,flash:y*.7,outlineWidth:l*.7});let b=t===`left`?.4+.6*T(o%2e3/1e3,E.gentle):1;h(e,{x:g,y:a*.8+p*1.35,w:f,h:p*.72},{value:b,color:d.base,hi:d.hi,lo:d.lo,direction:_,marks:[2/3],outlineWidth:l*.6,dim:t===`left`&&o>2600});let x=t===`left`?m+a*.02:n-m-a*.02,S=a*.8+p*.9,C=a*.085;t===`left`&&o>2600?s(e,x,S,C,e=>c(e,x,S,C*.8,{color:d.base,dim:!0})):c(e,x,S,C*.8,{color:d.base,hi:d.hi,lo:d.lo});let w=a*.028;for(let n=0;n<3;n++){let r=t===`left`?g+w+n*w*2.6:g+f-w-n*w*2.6,s=a*.8+p*2.6+w;if(t===`right`)u(e,r,s,w,{color:i.gold,hi:`#FFF2B3`,lo:i.goldLo,glow:1,timeMs:o+n*300});else{let t=n===0?1:n===1?o%2e3/2e3:0;u(e,r,s,w,{color:d.base,hi:d.hi,lo:d.lo,fill:t})}}}},j=new URLSearchParams(location.search),M=j.get(`headless`)===`1`,N=te(),P=document.getElementById(`app`);if(!P)throw Error(`ui-kit: #app не найден`);var F=[`attack`,`shield`,`charge`,`empty`],I={attack:`Атака`,shield:`Щит`,charge:`Заряд`,empty:`Пусто`},ie=[`left`,`right`],ae={left:`Левый · огонь`,right:`Правый · лёд`},oe=[{title:`Огонь — левый`,keys:[`red`,`redHi`,`redLo`]},{title:`Лёд — правый`,keys:[`blue`,`blueHi`,`blueLo`]},{title:`Акцент и контур`,keys:[`gold`,`goldLo`,`ink`]},{title:`Плашки`,keys:[`panel`,`panelHi`,`panelRim`]},{title:`Небо`,keys:[`sky1`,`sky2`,`sky3`,`sky4`]},{title:`Текст и статусы`,keys:[`text`,`text2`,`text3`,`ok`,`warn`,`danger`]}],L=String.raw;function R(e,t,n,r){return L`<section class="uk-section" id="uk-${e}" data-section="${e}">
    <header class="uk-section__head">
      <h2 class="ui-title ui-title--white uk-h2" data-text="${t}">${t}</h2>
      <p class="uk-lead">${n}</p>
    </header>
    ${r}
  </section>`}var z=(e,t,n=``,r=``)=>L`<button class="ui-btn ui-btn--${e} ${n}" ${r}><span class="ui-btn__label">${t}</span></button>`,B=[{cls:``,name:`Обычная`},{cls:`is-hover`,name:`Наведение`},{cls:`is-focus`,name:`Фокус`},{cls:`is-active`,name:`Нажатие`},{cls:``,name:`Недоступна`,extra:`disabled`}];function V(){let e=[[`primary`,`Играть`],[`secondary`,`Классика`],[`ghost`,`Назад`],[`red`,`Красный`],[`blue`,`Синий`]].map(([e,t])=>L`<div class="uk-row-label">${e}</div>`+B.map(n=>L`<div class="uk-cell">${z(e,t,n.cls,n.extra??``)}</div>`).join(``)).join(``);return R(`buttons`,`Кнопки`,`Скошенное тело с контуром ink, два тона, блик в верхней трети, тень вниз. Наведение — подъём с пружиной, нажатие — сплющивание, фокус клавиатуры — золотое свечение.`,L`<div class="uk-btn-grid">${L`<div></div>`+B.map(e=>L`<div class="uk-col-label">${e.name}</div>`).join(``)}${e}</div>
      <div class="uk-flex uk-flex--wrap">
        <button class="ui-btn ui-btn--primary ui-btn--xl ui-btn--stack"><span class="ui-btn__label">Дуэль</span><span class="ui-btn__hint">Двое перед камерой</span></button>
        <button class="ui-btn ui-btn--secondary ui-btn--lg">Practice</button>
        <button class="ui-btn ui-btn--danger">Сдаться</button>
        <button class="ui-btn ui-btn--secondary ui-btn--sm">Ещё раз</button>
        <button class="ui-btn ui-btn--secondary ui-btn--round" aria-label="Настройки">${H()}</button>
      </div>`)}function H(){return L`<svg class="ui-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="${i.ink}" stroke-width="1.6" stroke-linejoin="round" d="M10.3 2h3.4l.5 2.6 1.9.8 2.2-1.5 2.4 2.4-1.5 2.2.8 1.9 2.6.5v3.4l-2.6.5-.8 1.9 1.5 2.2-2.4 2.4-2.2-1.5-1.9.8-.5 2.6h-3.4l-.5-2.6-1.9-.8-2.2 1.5-2.4-2.4 1.5-2.2-.8-1.9L2 13.7v-3.4l2.6-.5.8-1.9-1.5-2.2 2.4-2.4 2.2 1.5 1.9-.8zM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8z"/></svg>`}function U(){let e=(e,t,n=``,r=``)=>L`<button class="ui-switch ${n}" role="switch" aria-checked="${t}" ${r}><span class="ui-switch__label">${e}</span><span class="ui-switch__track"></span></button>`,t=(e,t,n=``)=>L`<div class="ui-seg" role="radiogroup">${e.map((e,r)=>L`<button class="ui-seg__opt ${r===1?n:``}" role="radio" aria-checked="${r===t}">${e}</button>`).join(``)}</div>`;return R(`fields`,`Переключатели и ползунки`,`Переключатель с пружинным бегунком, сегментный выбор с золотой плашкой, ползунок с заливкой до значения (bindRangeFill).`,L`<div class="uk-fields">
      <div class="ui-panel uk-stack">
        ${e(`Звук`,!0)} ${e(`Пропустить проверку поз`,!1)} ${e(`Фокус`,!0,`is-focus`)} ${e(`Недоступно`,!1,``,`disabled`)}
      </div>
      <div class="ui-panel uk-stack">
        ${t([`Русский`,`English`],0)}
        ${t([`Авто`,`Высокие`,`Средние`,`Низкие`],2,`is-focus`)}
        ${t([`Вдвоём`,`Против волшебника`],1)}
      </div>
      <div class="ui-panel uk-stack">
        <label class="uk-range-label">Голос диктора <input class="ui-range" type="range" min="0" max="100" value="80" /></label>
        <label class="uk-range-label">Звуки боя <input class="ui-range is-focus" type="range" min="0" max="100" value="35" /></label>
        <label class="uk-range-label ui-side-left">Красный <input class="ui-range ui-range--side" type="range" min="0" max="1" step="0.01" value="0.6" /></label>
        <label class="uk-range-label ui-side-right">Синий <input class="ui-range ui-range--side" type="range" min="0" max="1" step="0.01" value="0.45" /></label>
        <label class="uk-range-label">Недоступно <input class="ui-range" type="range" value="50" disabled /></label>
      </div>
    </div>`)}function W(){let e=(e,t,n,r=``)=>L`<article class="ui-card ui-card--interactive ${e} ${r}" tabindex="0">
      <div class="ui-card__head">${t}</div>
      <div class="ui-card__body">${n}</div>
    </article>`;return R(`panels`,`Плашки и карточки`,`Плашка — контур, светлая верхняя грань, тень вниз; скошенная и стеклянная поверх сцены. Карточка героя с лентой-заголовком; наведение и фокус поднимают её.`,L`<div class="uk-panels">
        <div class="ui-panel"><strong class="uk-strong">Плашка</strong><p class="uk-p">Текст для чтения стоит ровно. Nunito 600, хорошо читается издалека.</p></div>
        <div class="ui-panel ui-panel--skew"><strong class="uk-strong">Скошенная −4°</strong><p class="uk-p">Тело наклонено, текст — нет.</p></div>
        <div class="uk-sky-mini ui-sky"><div class="ui-sky__sparks"></div><div class="ui-panel ui-panel--glass"><strong class="uk-strong">Стекло</strong><p class="uk-p">Поверх неба или камеры.</p></div></div>
      </div>
      <div class="uk-cards">
        ${e(``,`Ученик`,`Реагирует медленно, стреляет редко — для первой игры`)}
        ${e(`ui-side-left`,`Громила`,`Стреляет часто, щитится через раз`,`is-hover`)}
        ${e(`ui-side-right`,`Трикстер`,`Запоминает ваши касты, показывает позу последним`,`is-focus`)}
      </div>`)}function G(){return R(`banners`,`Баннеры, бейджи, тосты`,`Лента с вырезанными хвостами — раунды, sudden death, победа. Появление с перелётом и squash &amp; stretch (кнопка «Повторить»).`,L`<div class="uk-banners">
        <div class="ui-banner ui-banner--gold"><span class="ui-banner__text">Победа!</span></div>
        <div class="ui-banner ui-banner--red"><span class="ui-banner__text">Бой!</span></div>
        <div class="ui-banner ui-banner--blue"><span class="ui-banner__text">Fight!</span></div>
        <div class="ui-banner ui-banner--danger ui-banner--sm"><span class="ui-banner__text">Sudden death</span></div>
        <div class="ui-banner ui-banner--panel ui-banner--sm"><span class="ui-banner__text">Раунд 3 / 12</span></div>
      </div>
      <div class="uk-flex uk-flex--wrap uk-flex--center">
        <button class="ui-btn ui-btn--secondary ui-btn--sm" data-action="replay">Повторить</button>
        <span class="ui-badge ui-badge--ok"><span class="ui-badge__dot"></span>Готово</span>
        <span class="ui-badge ui-badge--warn">Медленно</span>
        <span class="ui-badge ui-badge--danger">Нет камеры</span>
        <span class="ui-badge ui-badge--gold">×3 заряд</span>
        <span class="ui-badge ui-badge--side ui-side-left">Красный</span>
        <span class="ui-badge ui-badge--side ui-side-right">Синий</span>
        <span class="ui-badge">Офлайн</span>
      </div>
      <div class="uk-toasts">
        <div class="ui-toast ui-toast--ok" role="status"><span class="ui-toast__icon">✓</span><span class="ui-toast__text">Устройство готово к дуэли</span></div>
        <div class="ui-toast ui-toast--warn" role="status"><span class="ui-toast__icon">!</span><span class="ui-toast__text">Доступно обновление</span><button class="ui-btn ui-btn--primary ui-btn--sm">Обновить</button></div>
        <div class="ui-toast ui-toast--danger" role="status"><span class="ui-toast__icon">×</span><span class="ui-toast__text">Камера недоступна — Classic works without it</span></div>
      </div>`)}function K(){return R(`modal`,`Модальное окно`,`Затемнение с размытием, панель влетает с пружиной; Esc и «Отмена» закрывают, уход быстрее входа.`,L`<div class="ui-modal ui-modal--inline uk-modal-demo ui-sky">
        <div class="ui-modal__panel">
          <h3 class="ui-modal__title">Дуэль может тормозить</h3>
          <p class="ui-modal__text">Распознавание медленное: 62 мс на кадр. Classic mode reacts on beats and works on any device.</p>
          <div class="ui-modal__actions">
            <button class="ui-btn ui-btn--ghost">Всё равно Дуэль</button>
            <button class="ui-btn ui-btn--primary">Играть в Классику</button>
          </div>
        </div>
      </div>
      <div class="uk-flex uk-flex--center"><button class="ui-btn ui-btn--secondary" data-action="modal">Открыть окно</button></div>`)}function se(){return R(`icons`,`Иконки поз`,`Медальон цвета стороны и силуэт волшебника в шляпе: Атака — рука к сопернику с огоньком стихии, Щит — «Т» с пузырём, Заряд — руки вверх с вихрем. Слева SVG (меню, инструкция), справа Canvas (оверлей камеры) — одна геометрия.`,L`<div class="uk-icon-grid">${L`<div></div>`+F.map(e=>L`<div class="uk-col-label">${I[e]}</div>`).join(``)}${ie.map(e=>L`<div class="uk-row-label">${ae[e]}<br /><small>SVG · Canvas</small></div>`+F.map(t=>L`<div class="uk-icon-pair" data-side="${e}" data-pose="${t}"><span class="uk-icon-svg"></span><canvas class="uk-icon-canvas" width="168" height="168"></canvas></div>`).join(``)).join(``)}${L`<div class="uk-row-label">Инструкция<br /><small>нейтральный</small></div>`+F.slice(0,3).map(e=>L`<div class="uk-icon-pair" data-side="left" data-pose="${e}" data-neutral="1"><span class="uk-icon-svg"></span></div>`).join(``)}</div>${ce()}`)}function ce(){let e=[i.text,i.gold,i.ok,i.warn,i.danger,i.blueHi,i.text];return L`<div class="uk-glyphs">
      <div class="uk-row-label">Глифы<br /><small>glyphs.ts</small></div>
      <div class="uk-glyph-row">${b.map((t,n)=>L`<figure class="uk-glyph"><span class="uk-glyph__svg">${v(t,{color:e[n]??i.text})}</span><figcaption>${t}</figcaption></figure>`).join(``)}</div>
      <div class="uk-row-label">Самоцветы<br /><small>gemSvg</small></div>
      <div class="uk-glyph-row">${[`red`,`blue`].map(e=>[0,.5,1,1].map((t,n)=>L`<span class="uk-gem">${y({color:i[e],fill:t,glow:+(n===3)})}</span>`).join(``)).join(``)}</div>
      <div class="uk-row-label">Искры<br /><small>.ui-burst</small></div>
      <div class="uk-glyph-row"><span class="uk-burst-stage"></span><button class="ui-btn ui-btn--secondary ui-btn--sm" data-action="burst">Взрыв</button></div>
    </div>`}function le(){return R(`canvas`,`Canvas-кит`,`HUD из функций canvas-kit: медальоны поз, таймер с табличными цифрами, слова с пружиной, полосы с бликом и следом урона, самоцветы стеков, перечёркнутый щит, плашка раунда. Цикл 4 с.`,L`<div class="uk-canvas-wrap"><canvas class="uk-hud" width="1280" height="640"></canvas></div>
      <div class="uk-canvas-row">
        <canvas class="uk-text-canvas" width="1280" height="200"></canvas>
      </div>`)}function ue(){return R(`motion`,`Движение`,`Пружины вместо линейности: easeOutBack, пружины pop (вход), snappy (микро) и gentle (кино). Стаггер 50 мс; при «уменьшить движение» — только проявление.`,L`<div class="uk-motion">
        <canvas class="uk-curves" width="640" height="300"></canvas>
        <div class="uk-stagger">
          ${[`Дуэль`,`Классика`,`Практика`,`Инструкция`].map((e,t)=>L`<div class="uk-stagger__item" style="--i:${t}">${e}</div>`).join(``)}
          <button class="ui-btn ui-btn--secondary ui-btn--sm" data-action="stagger">Повторить</button>
        </div>
      </div>`)}function de(){let e=e=>L`<div class="uk-theme ui-side-${e}" data-theme="${e}">
      <h3 class="ui-title ui-title--side uk-h3" data-text="${e===`left`?`Красный волшебник`:`Синий волшебник`}">${e===`left`?`Красный волшебник`:`Синий волшебник`}</h3>
      <div class="uk-flex uk-flex--wrap">
        <button class="ui-btn ui-btn--side">Реванш</button>
        <span class="ui-badge ui-badge--side">${e===`left`?`Огонь`:`Лёд`}</span>
      </div>
      <div class="ui-banner ui-banner--side ui-banner--sm"><span class="ui-banner__text">${e===`left`?`HIT 25`:`REFLECT`}</span></div>
      <div class="ui-panel ui-panel--side"><strong class="uk-strong">Нанесённый урон</strong><div class="ui-num uk-big-num">${e===`left`?`85`:`120`}</div></div>
      <input class="ui-range ui-range--side" type="range" min="0" max="100" value="${e===`left`?70:40}" aria-label="Пример" />
    </div>`;return R(`themes`,`Темы сторон`,`Классы .ui-side-left и .ui-side-right задают --side, --side-hi, --side-lo — компоненты с модификатором --side берут цвет стороны.`,L`<div class="uk-themes">${e(`left`)}${e(`right`)}</div>`)}function fe(){return R(`palette`,`Палитра`,`Токены art-direction — CSS-переменные (tokens.css) и таблица для Canvas (tokens.ts) с одинаковыми значениями.`,L`<div class="uk-palette">${oe.map(t=>L`<div class="uk-swatch-group"><h3 class="uk-h4">${t.title}</h3><div class="uk-swatches">${t.keys.map(t=>L`<div class="uk-swatch"><span class="uk-swatch__chip" style="background:${i[t]}"></span><code>${e(t)}</code><span class="uk-swatch__hex">${i[t]}</span></div>`).join(``)}</div></div>`).join(``)}</div>`)}function pe(){return R(`type`,`Шрифты`,`Rubik 800–900 — заголовки, слова исхода, цифры (курсив для слов и баннеров); Nunito 600–800 — интерфейс и инструкция. Локально, латиница + кириллица, OFL.`,L`<div class="uk-type">
      <div class="ui-panel">
        <p class="uk-type-display">Съешь же ещё этих мягких французских булок</p>
        <p class="uk-type-display uk-type-display--en">The quick brown fox jumps over the lazy dog</p>
        <p class="uk-type-num ui-num">0:59 · 1:11 · 1:08 · 100 / 75</p>
        <p class="uk-type-ui uk-w600">Nunito 600 — Рука в сторону — выстрел, руки буквой Т — щит, руки вверх — заряд. ЁЖИК, ёлка, щётка.</p>
        <p class="uk-type-ui uk-w700">Nunito 700 — Arm out to the side fires, arms in a T block, arms up charge.</p>
        <p class="uk-type-ui uk-w800">Nunito 800 — Поднимите руки для реванша · Raise both arms for a rematch</p>
      </div>
    </div>`)}function me(){return L`<header class="uk-hero ui-sky">
    <div class="ui-sky__sparks"></div>
    <div class="uk-hero__medal uk-hero__medal--left"></div>
    <div class="uk-hero__center">
      <span class="ui-badge ui-badge--gold">UI-кит · фаза 10</span>
      <h1 class="ui-title uk-hero__title" data-text="Wizards Duel">Wizards Duel</h1>
      <p class="uk-hero__sub ui-toon-text">Дуэль волшебников — яркий эпичный мульт</p>
      <div class="uk-flex uk-flex--center">
        <button class="ui-btn ui-btn--primary ui-btn--lg">Играть</button>
        <button class="ui-btn ui-btn--secondary ui-btn--lg">Настройки</button>
      </div>
    </div>
    <div class="uk-hero__medal uk-hero__medal--right"></div>
  </header>`}P.innerHTML=L`<div class="uk-page">
  ${me()}
  <nav class="uk-nav" aria-label="Разделы">
    ${[`palette:Палитра`,`type:Шрифты`,`buttons:Кнопки`,`fields:Поля`,`panels:Плашки`,`banners:Баннеры`,`modal:Окно`,`icons:Иконки`,`canvas:Canvas`,`motion:Движение`,`themes:Темы`].map(e=>e.split(`:`)).map(([e,t])=>L`<a class="uk-nav__link" href="#uk-${e}">${t}</a>`).join(``)}
    <a class="uk-nav__link uk-nav__link--back" href="./">← Меню</a>
  </nav>
  <main class="uk-main">
    ${fe()} ${pe()} ${V()} ${U()} ${W()} ${G()} ${K()} ${se()} ${le()} ${ue()} ${de()}
  </main>
</div>`,re(P);for(let e of P.querySelectorAll(`.uk-icon-pair`)){let t=e.dataset.side,r=e.dataset.pose,i=e.dataset.neutral===`1`;e.querySelector(`.uk-icon-svg`)?.append(f(r,{side:t,title:I[r],...i?{palette:n}:{}}));let a=e.querySelector(`canvas`),o=a?.getContext(`2d`);a&&o&&m(o,a.width/2,a.height/2,a.width*(50/116),r,{side:t})}P.querySelector(`.uk-hero__medal--left`)?.append(f(`attack`,{side:`left`})),P.querySelector(`.uk-hero__medal--right`)?.append(f(`shield`,{side:`right`}));function q(e,t){for(let n of P.querySelectorAll(e))n.classList.remove(t),n.offsetWidth,n.classList.add(t)}P.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`)?.dataset.action;if(t===`replay`&&q(`.uk-banners .ui-banner`,`ui-banner--enter`),t===`stagger`&&q(`.uk-stagger__item`,`is-in`),t===`modal`&&he(),t===`burst`)for(let e of P.querySelectorAll(`.uk-burst-stage .ui-burst`))D(e)}),P.querySelector(`.uk-burst-stage`)?.append(ne(14)),q(`.uk-banners .ui-banner`,`ui-banner--enter`),q(`.uk-stagger__item`,`is-in`),P.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.ui-switch`);n&&!n.disabled&&n.setAttribute(`aria-checked`,String(n.getAttribute(`aria-checked`)!==`true`));let r=t.closest(`.ui-seg__opt`);if(r&&!r.disabled)for(let e of r.parentElement?.querySelectorAll(`.ui-seg__opt`)??[])e.setAttribute(`aria-checked`,String(e===r))});function he(){let e=document.activeElement,t=document.createElement(`div`);t.className=`ui-modal`,t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-modal`,`true`),t.innerHTML=L`<div class="ui-modal__panel">
    <h3 class="ui-modal__title">Выйти в меню?</h3>
    <p class="ui-modal__text">Матч закончится, счёт не сохранится. Leave the match?</p>
    <div class="ui-modal__actions"><button class="ui-btn ui-btn--ghost" data-close>Отмена</button><button class="ui-btn ui-btn--danger" data-close>Выйти</button></div>
  </div>`;let n=()=>{t.classList.add(`ui-modal--exit`),document.removeEventListener(`keydown`,r),setTimeout(()=>t.remove(),N?120:260),e?.focus()},r=e=>{e.key===`Escape`&&n()};t.addEventListener(`click`,e=>{(e.target.closest(`[data-close]`)||e.target===t)&&n()}),document.addEventListener(`keydown`,r),document.body.append(t),t.querySelector(`[data-close]`)?.focus()}var J=P.querySelector(`.uk-hud`),Y=P.querySelector(`.uk-text-canvas`),X=P.querySelector(`.uk-curves`),Z=new A(N),Q=j.has(`t`)?Number(j.get(`t`)):null,ge=performance.now();function _e(e,t,n,r){e.clearRect(0,0,t,n),[[`БОЙ!`,p.gold,0],[`Щит сломан`,p.blue,1],[`OVERCHARGE 30`,p.red,2]].forEach(([i,a,o])=>{let s=t/3*(o+.5),c=N?0:Math.sin(r/600+o)*2;d(e,i,s,n/2,{size:n*.34,fill:a,rotateDeg:-3+c*.5,maxWidth:t/3-30,glow:o===0?{color:`rgba(255,197,49,0.7)`,blur:.35}:null})})}function ve(e,t,n){e.clearRect(0,0,t,n);let r=e=>n-30-e/1.25*(n-60);e.strokeStyle=`rgba(217,210,255,0.25)`,e.lineWidth=2;for(let n of[0,1])e.beginPath(),e.moveTo(30,r(n)),e.lineTo(t-30,r(n)),e.stroke();let a=[[`easeOutBack`,i.gold,ee],[`pop`,i.red,e=>T(e*.7,E.pop)],[`snappy`,i.blue,e=>T(e*.7,E.snappy)],[`gentle`,i.ok,e=>T(e*.7,E.gentle)],[`easeOutCubic`,i.text3,x]];a.forEach(([o,s,c],l)=>{e.strokeStyle=i.ink,e.lineWidth=7,e.lineJoin=`round`,e.beginPath();for(let n=0;n<=100;n++){let i=n/100,a=30+i*(t-60);n===0?e.moveTo(a,r(c(i))):e.lineTo(a,r(c(i)))}e.stroke(),e.strokeStyle=s,e.lineWidth=3.5,e.stroke();let u=Math.max(14,n*.055);d(e,o,t-30-8,n-30-12-(a.length-1-l)*u*1.35,{size:u,role:`ui`,align:`right`,fill:s,outlineWidth:.14,shadow:.08})})}function ye(e){let t=e.getBoundingClientRect(),n=Math.min(2,devicePixelRatio||1),r=Math.max(1,Math.round(t.width*n)),i=Math.max(1,Math.round(t.height*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i)}function $(){let e=Q??performance.now()-ge;for(let e of[J,Y,X])ye(e);Z.draw(J.getContext(`2d`),J.width,J.height,e),_e(Y.getContext(`2d`),Y.width,Y.height,e),ve(X.getContext(`2d`),X.width,X.height),requestAnimationFrame($)}_().then(()=>{requestAnimationFrame($)}),M&&(window.__uiKit={freeze(e){Q=e},fontsLoaded:()=>o(),fontsReady:()=>_(),sections:()=>[...P.querySelectorAll(`.uk-section`)].map(e=>e.dataset.section),reducedMotion:()=>N});