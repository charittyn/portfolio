(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navClose = document.querySelector('.mobile-nav-close');
  const navBackdrop = document.querySelector('.nav-backdrop');

  if (navToggle && navLinks) {
    const setNavState = (open) => {
      navLinks.classList.toggle('open', open);
      navBackdrop?.classList.toggle('open', open);
      document.body.classList.toggle('nav-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      navBackdrop?.setAttribute('aria-hidden', String(!open));

      if (window.matchMedia('(max-width: 980px)').matches) {
        navLinks.setAttribute('aria-hidden', String(!open));
      } else {
        navLinks.setAttribute('aria-hidden', 'false');
      }

      if (open) {
        // The same visible toggle becomes the close control, so keep focus on it.
        window.setTimeout(() => navToggle.focus({ preventScroll: true }), 60);
      } else if (navLinks.contains(document.activeElement) || document.activeElement === navClose) {
        navToggle.focus({ preventScroll: true });
      }
    };

    navToggle.addEventListener('click', () => setNavState(!navLinks.classList.contains('open')));
    navClose?.addEventListener('click', () => setNavState(false));
    navBackdrop?.addEventListener('click', () => setNavState(false));

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setNavState(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) setNavState(false);
    });

    window.addEventListener('resize', () => {
      if (!window.matchMedia('(max-width: 980px)').matches) setNavState(false);
    });

    setNavState(false);
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      caseCards.forEach((card) => {
        card.hidden = !(category === 'all' || card.dataset.category === category);
      });
    });
  });

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  const successPanel = document.querySelector('#form-success-panel');
  const sendAnother = document.querySelector('#send-another-message');

  if (form && status) {
    const setSubmitting = (submit, submitting) => {
      submit.disabled = submitting;
      submit.setAttribute('aria-disabled', String(submitting));
      submit.textContent = submitting ? 'Sending…' : 'Send message';
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const submit = form.querySelector('button[type="submit"]');
      if (!submit) return;

      setSubmitting(submit, true);
      status.className = 'form-status';
      status.textContent = 'Sending your message…';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        const result = await response.json().catch(() => null);
        if (!response.ok || (result && result.success === false)) {
          throw new Error(result?.message || 'Submission failed');
        }

        form.reset();
        status.textContent = '';
        form.hidden = true;
        if (successPanel) {
          successPanel.hidden = false;
          successPanel.focus({ preventScroll: true });
          successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } catch (error) {
        status.className = 'form-status error';
        status.innerHTML = 'I could not confirm the submission. Please try again, or email <a href="mailto:hello@charittyn.com">hello@charittyn.com</a>.';
      } finally {
        setSubmitting(submit, false);
      }
    });
  }

  if (sendAnother && form && successPanel) {
    sendAnother.addEventListener('click', () => {
      successPanel.hidden = true;
      form.hidden = false;
      const firstField = form.querySelector('input:not([type="hidden"]):not(.hidden-field)');
      firstField?.focus();
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
