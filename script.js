document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.progress-cb')
  const progressFill = document.getElementById('progress-fill')
  const progressText = document.getElementById('progress-text')

  // Gera IDs únicos temporários/dinâmicos baseados no index para o localStorage
  checkboxes.forEach((cb, index) => {
    const storageId = cb.dataset.storageId || 'java_roadmap_task_' + index

    // Carrega estado salvo
    if (localStorage.getItem(storageId) === 'true') {
      cb.checked = true
    }

    // Adiciona evento de mudança
    cb.addEventListener('change', () => {
      localStorage.setItem(storageId, cb.checked)
      updateProgress()
    })
  })

  function updateProgress() {
    const total = checkboxes.length
    const checked = document.querySelectorAll('.progress-cb:checked').length

    if (total === 0) return

    const percentage = Math.round((checked / total) * 100)

    progressFill.style.width = percentage + '%'
    progressText.textContent = percentage + '%'

    // Muda cor se completar tudo
    if (percentage === 100) {
      progressFill.style.backgroundColor = '#3b82f6' // Muda para azul primário
      progressText.style.color = '#3b82f6'
    } else {
      progressFill.style.backgroundColor = 'var(--success)'
      progressText.style.color = 'var(--text-color)'
    }
  }

  // Inicializa a barra no primeiro load
  updateProgress()

  const calendarDay = document.getElementById('calendar-day')
  const calendarMonth = document.getElementById('calendar-month')
  const calendarWeekday = document.getElementById('calendar-weekday')
  const calendarTime = document.getElementById('calendar-time')

  function updateCalendar() {
    const now = new Date()
    const weekday = now.toLocaleDateString('pt-BR', { weekday: 'long' })
    const monthYear = now.toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric',
    })
    const dayNumber = String(now.getDate()).padStart(2, '0')

    if (calendarWeekday) {
      calendarWeekday.textContent = weekday
    }
    if (calendarMonth) {
      calendarMonth.textContent = monthYear
    }
    if (calendarDay) {
      calendarDay.textContent = dayNumber
    }
    if (calendarTime) {
      calendarTime.textContent = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
  }

  updateCalendar()
  setInterval(updateCalendar, 1000)

  // Reveal das headings ao rolar
  const revealElements = document.querySelectorAll(
    'h1, .section-title, .section-subtitle, h2, h3',
  )
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -12% 0px',
    },
  )

  revealElements.forEach((el) => revealObserver.observe(el))
})
