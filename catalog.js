// catalog.js — fuente única de verdad para 147 by Bastian
// Para actualizar stock: cambiar el número en "stock: X"

var PHONE = '51966429467';

var CATALOG = {
  pequenas: {
    label: 'De Mano',
    size: '90 × 40 CM',
    dims: '90 × 40 cm',
    weight: '120 g',
    gsm: '180 g/m²',
    back: 'pequenas.html',
    products: [
      {
        id: 'pequena-1',
        name: 'Haz Que Cuente',
        desc: 'Lettering / Verde · Trigo',
        detail: 'Haz que cuente. Lettering a mano sobre fondo trigo con tinta verde oliva. Para el nadador que sabe que cada metro importa.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-1.jpeg',
        swatches: ['#5C6B2E', '#C9A85C'],
        swatchLabels: ['VERDE', 'TRIGO'],
        bg: 'bone',
        editorial: null
      },
      {
        id: 'pequena-2',
        name: 'Splash',
        desc: 'Ilustración / Naranja · Verde',
        detail: 'Ilustración de piscina y nadadores sobre fondo naranja. Energía, movimiento y color para tus entrenamientos.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-2.jpeg',
        swatches: ['#E84E1B', '#1B9E3E'],
        swatchLabels: ['NARANJA', 'VERDE'],
        bg: null,
        editorial: null
      },
      {
        id: 'pequena-3',
        name: 'Forma Libre',
        desc: 'Ilustración / Teal · Naranja',
        detail: 'Nadador en acción sobre fondo teal con detalles naranja. El movimiento del agua capturado en diseño.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-3.jpeg',
        swatches: ['#1B7B8A', '#E87E1B'],
        swatchLabels: ['TEAL', 'NARANJA'],
        bg: null,
        editorial: null
      },
      {
        id: 'pequena-4',
        name: 'Puesta',
        desc: 'Degradado / Naranja · Amarillo',
        detail: 'Degradado de naranja a amarillo con el 147 en el fondo. Para los que entrenan con fuego.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-4.jpeg',
        swatches: ['#FF6B1A', '#FFB347'],
        swatchLabels: ['NARANJA', 'AMARILLO'],
        bg: null,
        editorial: null
      },
      {
        id: 'pequena-5',
        name: 'Carril Azul',
        desc: 'Líneas / Azul · Navy',
        detail: 'Líneas horizontales en azules del carril de competencia. Minimalismo acuático con el 147 al fondo.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-5.jpeg',
        swatches: ['#1B4B8A', '#2B7FC9'],
        swatchLabels: ['NAVY', 'AZUL'],
        bg: null,
        editorial: null
      },
      {
        id: 'pequena-6',
        name: 'Los Dados',
        desc: 'Ilustración / Violeta · Morado',
        detail: 'Dados con el 1, 4 y 7 entre humo violeta. El azar no existe en la pileta — solo trabajo y disciplina.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-6.jpeg',
        swatches: ['#6B1BE8', '#3D0D8A'],
        swatchLabels: ['VIOLETA', 'MORADO'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'pequena-7',
        name: 'Medianoche',
        desc: 'Ilustración / Lila · Violeta',
        detail: 'Lunas sonrientes sobre fondo lila con el 147. Diseño nocturno para los que entrenan cuando todos duermen.',
        price: 18,
        stock: 1,
        img: 'imgs/pequenas/pequena-7.jpeg',
        swatches: ['#7B4BC9', '#4B1B8A'],
        swatchLabels: ['LILA', 'VIOLETA'],
        bg: 'deep',
        editorial: null
      }
    ]
  },
  grandes: {
    label: 'XL',
    size: '160 × 90 CM',
    dims: '160 × 90 cm',
    weight: '260 g',
    gsm: '180 g/m²',
    back: 'grandes.html',
    products: [
      {
        id: 'grande-1',
        name: 'Furia',
        desc: 'Ilustración / Naranja · Negro',
        detail: 'Un lobo entre llamas con el 147. Para los que entran al agua como si fuera su territorio.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-1.jpeg',
        swatches: ['#C94A1B', '#1A0A00'],
        swatchLabels: ['NARANJA', 'NEGRO'],
        bg: null,
        editorial: null
      },
      {
        id: 'grande-2',
        name: 'Descarga',
        desc: 'Ilustración / Verde · Rosa',
        detail: 'Rayos verdes y rosas sobre negro profundo. El 147 al fondo como una señal eléctrica. Velocidad pura.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-2.jpeg',
        swatches: ['#1BC94A', '#C91B8A'],
        swatchLabels: ['VERDE', 'ROSA'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'grande-3',
        name: 'Corriente',
        desc: 'Ilustración / Verde · Violeta',
        detail: 'Ondas verdes sobre violeta oscuro. El movimiento constante del agua que no para nunca.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-3.jpeg',
        swatches: ['#1BC94A', '#3D0D8A'],
        swatchLabels: ['VERDE', 'VIOLETA'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'grande-4',
        name: 'El Fondo',
        desc: 'Ilustración / Teal · Celeste',
        detail: 'Nadador visto desde abajo, entre ondas teal. La perspectiva del agua. 160×90 para cubrirte completo.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-4.jpeg',
        swatches: ['#1B8A8A', '#1B6BC9'],
        swatchLabels: ['TEAL', 'CELESTE'],
        bg: null,
        editorial: null
      },
      {
        id: 'grande-5',
        name: 'Equipo',
        desc: 'Ilustración / Teal · Navy',
        detail: 'Varios nadadores en acción sobre teal profundo. Para los que entrenan en grupo y compiten en solitario.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-5.jpeg',
        swatches: ['#1B7B8A', '#0A1E3D'],
        swatchLabels: ['TEAL', 'NAVY'],
        bg: null,
        editorial: null
      },
      {
        id: 'grande-6',
        name: 'Gran Ola',
        desc: 'Ilustración / Gris · Blanco',
        detail: 'Torii japonés en medio de la gran ola. El 147 emerge del agua. Diseño de fuerza y respeto.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-6.jpeg',
        swatches: ['#3A3A4A', '#E8E8F0'],
        swatchLabels: ['GRIS', 'BLANCO'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'grande-7',
        name: 'Los Dados',
        desc: 'Ilustración / Violeta · Morado',
        detail: 'Los dados del 1, 4 y 7 entre humo violeta. El azar no existe en la pileta — solo trabajo y disciplina.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-7.jpeg',
        swatches: ['#6B1BE8', '#3D0D8A'],
        swatchLabels: ['VIOLETA', 'MORADO'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'grande-8',
        name: 'El Corredor',
        desc: 'Ilustración / Rojo · Negro',
        detail: 'Corredor rojo con el 147 al final. La entrada al agua como un ritual. Para los que saben lo que les espera.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-8.jpeg',
        swatches: ['#C91B1B', '#0A0000'],
        swatchLabels: ['ROJO', 'NEGRO'],
        bg: null,
        editorial: null
      },
      {
        id: 'grande-9',
        name: 'Relámpago',
        desc: 'Ilustración / Azul · Gris',
        detail: 'Electricidad azul sobre negro. El 147 en el centro de la tormenta. Para los que no le tienen miedo al agua fría.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-9.jpeg',
        swatches: ['#1B4BC9', '#3A3A4A'],
        swatchLabels: ['AZUL', 'GRIS'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'grande-10',
        name: 'Medianoche',
        desc: 'Ilustración / Lila · Violeta',
        detail: 'Lunas sonrientes sobre fondo lila con el 147. Diseño nocturno para los que entrenan cuando todos duermen.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-10.jpeg',
        swatches: ['#7B4BC9', '#4B1B8A'],
        swatchLabels: ['LILA', 'VIOLETA'],
        bg: 'deep',
        editorial: null
      },
      {
        id: 'grande-11',
        name: 'Galaxia',
        desc: 'Ilustración / Rosa · Violeta',
        detail: 'Explosión de energía en rosa y violeta. El 147 en el centro del universo. Para los que entrenan a otro nivel.',
        price: 65,
        stock: 1,
        img: 'imgs/grandes/grande-11.jpeg',
        swatches: ['#C91BC9', '#6B1BE8'],
        swatchLabels: ['ROSA', 'VIOLETA'],
        bg: 'deep',
        editorial: null
      }
    ]
  }
};

// ─── Helpers ───────────────────────────────────────────────

function _waLink(name, size) {
  return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent('Hola 147, me interesa la ' + name + ' (' + size + ')');
}

function _productLink(col, id) {
  return 'producto.html?col=' + col + '&id=' + id;
}

function _stockTag(p) {
  if (p.stock === 0) return { cls: 'pcard__tag--low', text: 'AGOTADO' };
  if (p.stock <= 2) return { cls: 'pcard__tag--low', text: 'QUEDAN ' + p.stock };
  if (p.editorial === 'ltd') return { cls: '', text: 'EDICIÓN LTD' };
  if (p.editorial === 'new') return { cls: 'pcard__tag--new', text: 'NUEVO' };
  return null;
}

var _arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

var _waSvg = '<svg class="wa-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>';

// ─── Grid renderer (collection pages) ─────────────────────

function renderGrid(col, containerId) {
  var collection = CATALOG[col];
  var container = document.getElementById(containerId);
  if (!container || !collection) return;
  var size = collection.size;

  container.innerHTML = collection.products.map(function(p, i) {
    var tag = _stockTag(p);
    var tagHtml = tag ? ('<span class="pcard__tag ' + tag.cls + '">' + tag.text + '</span>') : '';
    var isBone = p.bg === 'bone';
    var isDeep = p.bg === 'deep';
    var mediaCls = 'pcard__media ph' + (isDeep ? ' ph--deep' : isBone ? ' ph--bone' : '');
    var numStyle = isBone ? ' style="color:rgba(22,8,32,0.5);"' : '';
    var swatchStyle = isBone ? ' style="background:rgba(22,8,32,0.08);border-color:rgba(22,8,32,0.15);"' : '';
    var swatches = p.swatches.map(function(c) {
      return '<span class="pcard__dot" style="background:' + c + ';"></span>';
    }).join('');
    var num = i < 9 ? ('N°0' + (i + 1)) : ('N°' + (i + 1));
    var href = p.stock > 0 ? _productLink(col, p.id) : '#';

    return (
      '<a class="pcard" href="' + href + '">' +
        '<div class="' + mediaCls + '">' +
          '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;">' +
          '<span class="pcard__num"' + numStyle + '>' + num + '</span>' +
          tagHtml +
          '<div class="pcard__swatch"' + swatchStyle + '>' + swatches + '</div>' +
        '</div>' +
        '<h3 class="pcard__name">' + p.name + '</h3>' +
        '<p class="pcard__desc">' + p.desc + '</p>' +
        '<div class="pcard__foot">' +
          '<span class="pcard__price">S/. ' + p.price + '</span>' +
          '<span class="pcard__arrow">' + _arrow + '</span>' +
        '</div>' +
      '</a>'
    );
  }).join('');
}

// ─── Product page init ─────────────────────────────────────

function initProductPage() {
  var params = new URLSearchParams(window.location.search);
  var colKey = params.get('col') || 'grandes';
  var productId = params.get('id') || 'marea-147';
  var collection = CATALOG[colKey];
  if (!collection) return;
  var p = collection.products.find(function(x) { return x.id === productId; });
  if (!p) { p = collection.products[0]; }

  // Page title
  document.title = p.name + ' · Toalla ' + (colKey === 'grandes' ? 'XL' : 'de Mano') + ' · 147 by Bastian';

  // Nav back
  var navBack = document.getElementById('prod-nav-back');
  if (navBack) navBack.href = collection.back;

  // Breadcrumb
  var bCol = document.getElementById('prod-breadcrumb-col');
  if (bCol) { bCol.href = collection.back; bCol.textContent = collection.label; }
  var bCur = document.getElementById('prod-breadcrumb-current');
  if (bCur) bCur.textContent = p.name;

  // Gallery image
  var imgEl = document.getElementById('prod-img');
  if (imgEl) { imgEl.src = p.img; imgEl.alt = p.name; }

  // Stock label
  var stockEl = document.getElementById('prod-stock');
  if (stockEl) {
    if (p.stock === 0) { stockEl.textContent = 'AGOTADO'; stockEl.style.color = '#FF9A6B'; }
    else { stockEl.textContent = 'QUEDAN ' + p.stock; }
  }

  // Title
  var titleEl = document.getElementById('prod-title');
  if (titleEl) {
    var parts = p.name.split(' ');
    titleEl.innerHTML = (parts.length > 1
      ? parts.slice(0, -1).join(' ') + '<br>' + parts[parts.length - 1]
      : p.name) + '.';
  }

  // Description
  var descEl = document.getElementById('prod-desc');
  if (descEl) {
    var sizeLabel = colKey === 'grandes' ? 'Toalla XL premium en microfibra.' : 'Toalla de mano premium en microfibra.';
    descEl.innerHTML = '<strong>' + sizeLabel + '</strong> ' + p.detail;
  }

  // Price
  var priceNum = document.getElementById('prod-price');
  if (priceNum) priceNum.textContent = 'S/. ' + p.price;

  // Size display
  var sizeEl = document.getElementById('prod-size');
  if (sizeEl) sizeEl.textContent = collection.size;

  // Size selector — mark correct option as active
  document.querySelectorAll('.size-opt').forEach(function(opt) {
    opt.classList.remove('is-active');
    var nameEl = opt.querySelector('.size-opt__name');
    if (!nameEl) return;
    var isMatch = (colKey === 'grandes' && nameEl.textContent.trim() === 'XL') ||
                  (colKey === 'pequenas' && nameEl.textContent.trim() === 'De mano');
    if (isMatch) opt.classList.add('is-active');
  });

  // Color swatches
  var swatchContainer = document.getElementById('prod-swatches');
  if (swatchContainer) {
    swatchContainer.innerHTML = p.swatches.map(function(c, i) {
      return (
        '<button class="color' + (i === 0 ? ' is-active' : '') + '" style="background:' + c + ';" aria-label="' + p.swatchLabels[i] + '">' +
          '<span class="color__lbl">' + p.swatchLabels[i] + '</span>' +
        '</button>'
      );
    }).join('');

    var colorValEl = document.getElementById('prod-color-val');
    if (colorValEl) colorValEl.textContent = p.swatchLabels[0];

    swatchContainer.querySelectorAll('.color').forEach(function(btn) {
      btn.addEventListener('click', function() {
        swatchContainer.querySelectorAll('.color').forEach(function(b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        if (colorValEl) colorValEl.textContent = btn.querySelector('.color__lbl').textContent;
        updateWaLink();
      });
    });
  }

  // WA link — dynamic based on color + personalization
  var perso = false;
  function updateWaLink() {
    var activeColor = swatchContainer ? swatchContainer.querySelector('.color.is-active .color__lbl') : null;
    var colorName = activeColor ? activeColor.textContent : '';
    var persoNote = perso ? ' + bordado' : '';
    var msg = 'Hola 147, me interesa la ' + p.name + ' (' + collection.size + ')' + (colorName ? ' en ' + colorName : '') + persoNote;
    var link = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
    var waMain = document.getElementById('prod-wa-main');
    if (waMain) waMain.href = link;
    var waSticky = document.getElementById('prod-wa-sticky');
    if (waSticky) waSticky.href = link;
  }
  updateWaLink();

  // Specs
  var specDims = document.getElementById('prod-spec-dims');
  if (specDims) specDims.textContent = collection.dims;
  var specWeight = document.getElementById('prod-spec-weight');
  if (specWeight) specWeight.textContent = collection.weight;

  // Related products
  var relatedEl = document.getElementById('prod-related');
  if (relatedEl) {
    var related = collection.products.filter(function(x) { return x.id !== p.id; }).slice(0, 4);
    relatedEl.innerHTML = related.map(function(r) {
      var mc = 'rcard__media ph' + (r.bg === 'deep' ? ' ph--deep' : r.bg === 'bone' ? ' ph--bone' : '');
      return (
        '<a class="rcard" href="' + _productLink(colKey, r.id) + '">' +
          '<div class="' + mc + '">' +
            '<img src="' + r.img + '" alt="' + r.name + '" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">' +
          '</div>' +
          '<div class="rcard__body">' +
            '<div class="rcard__name">' + r.name + '</div>' +
            '<div class="rcard__price">S/. ' + r.price + ' · ' + collection.size + '</div>' +
          '</div>' +
        '</a>'
      );
    }).join('');
  }

  // Qty stepper + personalization — wired to dynamic price
  var qtyDisplay = document.getElementById('qty');
  var stickyPriceEl = document.getElementById('prod-sticky-price');
  var persoToggle = document.querySelector('.perso__toggle');
  var n = 1;

  function updateTotal() {
    var persoAmt = perso ? 12 : 0;
    var total = (p.price + persoAmt) * n;
    if (qtyDisplay) qtyDisplay.textContent = n;
    if (stickyPriceEl) stickyPriceEl.textContent = 'S/. ' + total;
    if (priceNum) priceNum.textContent = 'S/. ' + (p.price + persoAmt);
  }

  if (persoToggle) {
    persoToggle.addEventListener('click', function() {
      perso = persoToggle.classList.contains('is-on');
      updateWaLink();
      updateTotal();
    });
  }

  var qtyBtns = document.querySelectorAll('.qty button');
  if (qtyBtns.length >= 2) {
    qtyBtns[0].addEventListener('click', function() { if (n > 1) { n--; updateTotal(); } });
    qtyBtns[1].addEventListener('click', function() { n++; updateTotal(); });
  }

  updateTotal();
}

// ─── Auto-init ─────────────────────────────────────────────
// Si estamos en la página de producto, inicializar automáticamente.
(function() {
  if (document.getElementById('prod-title')) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProductPage);
    } else {
      initProductPage();
    }
  }
})();
