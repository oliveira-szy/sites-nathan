/* Dani & Clara Brinquedos — interações da página.
   Nenhum dado é enviado a servidores: o formulário só monta
   a mensagem e abre o WhatsApp no aparelho do visitante. */
(function () {
  'use strict';

  var WHATSAPP = '5521982118875';
  var doc = document.documentElement;
  doc.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initMenu();
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
    var els = document.querySelectorAll('.card, .step, .why__item, .stat, .faq details, .quote, .cta, .fab__art, .reg__map');
    if (!('IntersectionObserver' in window)) return;
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
      var cidade = clean(form.elements.cidade.value, 60);
      var obs = clean(form.elements.obs.value, 400);
      var brinquedos = Array.prototype.slice
        .call(form.querySelectorAll('input[name="brinquedo"]:checked'))
        .map(function (el) { return clean(el.value, 40); });

      [form.elements.nome, date, form.elements.cidade].forEach(function (el) { el.removeAttribute('aria-invalid'); });

      var erro = null, campo = null;
      if (nome.length < 2) { erro = 'Informe seu nome.'; campo = form.elements.nome; }
      else if (!formatDate(data)) { erro = 'Escolha a data da festa.'; campo = date; }
      else if (data < todayISO()) { erro = 'A data da festa não pode estar no passado.'; campo = date; }
      else if (cidade.length < 2) { erro = 'Informe o bairro ou a cidade da festa.'; campo = form.elements.cidade; }

      if (erro) {
        msg.textContent = erro;
        campo.setAttribute('aria-invalid', 'true');
        campo.focus();
        return;
      }

      var linhas = [
        'Olá, Dani & Clara! Quero um orçamento pelo site.',
        '',
        '*Nome:* ' + nome,
        '*Data da festa:* ' + formatDate(data),
        '*Local:* ' + cidade,
        '*Brinquedos:* ' + (brinquedos.length ? brinquedos.join(', ') : 'Quero sugestões')
      ];
      if (obs) linhas.push('*Observações:* ' + obs);

      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(linhas.join('\n'));
      // com 'noopener' o window.open sempre retorna null, então cortamos o opener manualmente
      var win = window.open(url, '_blank');
      if (win) win.opener = null;
      else window.location.href = url; // bloqueador de pop-up
    });
  }
})();
