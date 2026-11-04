/* FP Brinquedos & Diversão — interações da página.
   Nenhum dado é enviado a servidores: o formulário só monta
   a mensagem e abre o WhatsApp no aparelho do visitante. */
(function () {
  'use strict';

  var WHATSAPP = '5521990089078';
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initMenu();
    initStories();
    initFilters();
    initReveal();
    initForm();
    var ano = document.getElementById('ano');
    if (ano) ano.textContent = String(new Date().getFullYear());
  });

  /* Sombra no cabeçalho ao rolar */
  function initHeader() {
    var bar = document.querySelector('.topbar');
    if (!bar) return;
    var onScroll = function () { bar.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Menu mobile */
  function initMenu() {
    var btn = document.querySelector('.menu-btn');
    var nav = document.getElementById('menu');
    if (!btn || !nav) return;

    function setOpen(open) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      nav.classList.toggle('is-open', open);
    }
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
  }

  /* "Stories" do hero: cada card troca de brinquedo quando a barrinha enche.
     Os três começam defasados para não trocarem juntos. */
  function initStories() {
    var stories = document.querySelectorAll('[data-story]');
    stories.forEach(function (story, n) {
      var slides = story.querySelectorAll('.story__slide');
      var bars = story.querySelectorAll('.story__bars span');
      if (slides.length < 2 || reduceMotion) {
        if (bars[0]) bars[0].classList.add('is-done');
        return;
      }
      var cur = 0;

      function show(i) {
        slides.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
        bars.forEach(function (b, k) {
          b.classList.remove('is-run');
          b.classList.toggle('is-done', k < i);
        });
        // força o navegador a reiniciar a animação da barra
        void bars[i].offsetWidth;
        bars[i].classList.add('is-run');
      }

      bars.forEach(function (b) {
        b.firstElementChild.addEventListener('animationend', function () {
          cur = (cur + 1) % slides.length;
          show(cur);
        });
      });

      // tocar no card avança (como no Instagram), exceto no link de baixo
      story.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        cur = (cur + 1) % slides.length;
        show(cur);
      });

      window.setTimeout(function () { show(0); }, 900 + n * 1400);
    });
  }

  /* Filtro do catálogo */
  function initFilters() {
    var chips = document.querySelectorAll('.filters .chip');
    var cards = document.querySelectorAll('#lista-brinquedos .card');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', String(on));
        });
        cards.forEach(function (card) {
          var cats = (card.getAttribute('data-cat') || '').split(/\s+/);
          card.hidden = !(f === 'todos' || cats.indexOf(f) !== -1);
        });
      });
    });
  }

  /* Animação ao rolar */
  function initReveal() {
    var els = document.querySelectorAll('.card, .lux, .step, .why__item, .pack, .hood, .faq details, .team__photo, .form');
    if (!('IntersectionObserver' in window) || reduceMotion) return;
    els.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Formulário de orçamento -> WhatsApp */
  function clean(value, max) {
    // remove caracteres de controle e limita o tamanho
    return String(value || '')
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, max);
  }

  function formatDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
    return m ? m[3] + '/' + m[2] + '/' + m[1] : '';
  }

  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function initForm() {
    var form = document.getElementById('form-orcamento');
    if (!form) return;
    var msg = document.getElementById('form-msg');
    var date = form.elements.data;
    if (date) date.min = todayISO();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.textContent = '';

      var nome = clean(form.elements.nome.value, 60);
      var data = clean(date.value, 10);
      var bairro = clean(form.elements.bairro.value, 60);
      var obs = clean(form.elements.obs.value, 400);
      var itens = Array.prototype.slice
        .call(form.querySelectorAll('input[name="brinquedo"]:checked'))
        .map(function (el) { return clean(el.value, 60); });

      [form.elements.nome, date, form.elements.bairro].forEach(function (el) { el.removeAttribute('aria-invalid'); });

      var erro = null, campo = null;
      if (nome.length < 2) { erro = 'Coloca o seu nome, por favor.'; campo = form.elements.nome; }
      else if (!formatDate(data)) { erro = 'Escolhe a data da festa.'; campo = date; }
      else if (data < todayISO()) { erro = 'A data da festa não pode estar no passado.'; campo = date; }
      else if (bairro.length < 2) { erro = 'Coloca o bairro da festa.'; campo = form.elements.bairro; }

      if (erro) {
        msg.textContent = erro;
        campo.setAttribute('aria-invalid', 'true');
        campo.focus();
        return;
      }

      var linhas = [
        'Olá, FP Brinquedos! Quero um orçamento pelo site.',
        '',
        '*Nome:* ' + nome,
        '*Data da festa:* ' + formatDate(data),
        '*Bairro:* ' + bairro,
        '*Quero:* ' + (itens.length ? itens.join(', ') : 'Quero sugestões')
      ];
      if (obs) linhas.push('*Detalhes:* ' + obs);

      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(linhas.join('\n'));
      // com 'noopener' o window.open sempre retorna null, então cortamos o opener manualmente
      var win = window.open(url, '_blank');
      if (win) win.opener = null;
      else window.location.href = url; // bloqueador de pop-up
    });
  }
})();
