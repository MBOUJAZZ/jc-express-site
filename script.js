const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const phoneLink = document.querySelector(".header-phone");
const quoteForm = document.querySelector("[data-quote-form]");
const formNote = document.querySelector("[data-form-note]");
const contactForm = document.querySelector("[data-contact-form]");
const contactNote = document.querySelector("[data-contact-note]");
const formSteps = Array.from(document.querySelectorAll("[data-form-step]"));
const stepIndicators = Array.from(document.querySelectorAll("[data-step-indicator]"));
const brand = document.querySelector("[data-brand]");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll("[data-slide-dot]"));
const slideTitle = document.querySelector("[data-slide-title]");
const slideCopy = document.querySelector("[data-slide-copy]");
const pauseButton = document.querySelector("[data-hero-pause]");
const fleetTabs = Array.from(document.querySelectorAll("[data-fleet-tab]"));
const fleetImage = document.querySelector("[data-fleet-image]");
const fleetCard = document.querySelector("[data-fleet-card]");
const accordionItems = Array.from(document.querySelectorAll(".accordion-item"));
const missionTabs = Array.from(document.querySelectorAll("[data-mission]"));
const missionKicker = document.querySelector("[data-mission-kicker]");
const missionTitle = document.querySelector("[data-mission-title]");
const missionCopy = document.querySelector("[data-mission-copy]");
const missionVehicle = document.querySelector("[data-mission-vehicle]");
const missionFocus = document.querySelector("[data-mission-focus]");
const missionCta = document.querySelector("[data-mission-cta]");
const galleryItems = Array.from(document.querySelectorAll("[data-gallery-index]"));
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const slideContent = [
  {
    title: "Flotte complète",
    copy: "Porteurs, tracteurs, VL et semi-remorques logotisés pour une présence terrain claire."
  },
  {
    title: "Événementiel",
    copy: "Chargements propres, accès techniques et matériel sensible pris en charge avec méthode."
  },
  {
    title: "Marchandises",
    copy: "Tracteurs et semi-remorques prêts pour les lots dédiés, les volumes et les départs planifiés."
  },
  {
    title: "France entière",
    copy: "Une préparation fiable du trajet pour les transports régionaux comme pour les longues distances."
  },
  {
    title: "Paris & Île-de-France",
    copy: "VL et porteurs adaptés aux accès urbains, aux créneaux précis et aux interventions rapides."
  }
];

const fleetData = {
  porteurs: {
    image: "assets/fleet-lineup-jc-express-badges.jpg",
    kicker: "Porteurs MAN",
    title: "Porteurs pour missions urbaines, événementielles et marchandises.",
    body:
      "Idéal pour les accès techniques, les livraisons encadrées, les rotations en Île-de-France et les missions nécessitant un bon compromis entre capacité et maniabilité.",
    points: ["Chargements événementiels et matériel sensible", "Livraisons planifiées ou urgentes", "Suivi direct avec l'équipe JC EXPRESS"]
  },
  tracteurs: {
    image: "assets/route-semi-jc-express-badges.jpg",
    kicker: "Tracteurs Mercedes",
    title: "Tracteurs pour traction, lots dédiés et départs longues distances.",
    body:
      "Pour les besoins plus lourds ou plus structurés, les tracteurs permettent d'organiser des transports dédiés avec une vraie logique de planification.",
    points: ["Trajets France entière", "Départs organisés et contrôlés", "Solution adaptée aux volumes importants"]
  },
  vl: {
    image: "assets/route-paris-jc-express-badges.jpg",
    kicker: "VL Ford & Renault Master",
    title: "Utilitaires légers pour les interventions rapides et les accès contraints.",
    body:
      "Les VL Ford et Renault Master sont adaptés aux missions agiles : livraison rapide, matériel événementiel, marchandises moins volumineuses ou accès urbain.",
    points: ["Interventions rapides", "Accès ville et sites événementiels", "Souplesse sur les horaires"]
  },
  semi: {
    image: "assets/fleet-semi-jc-express-badges.jpg",
    kicker: "Semi-remorques",
    title: "Semi-remorques pour les volumes, les palettes et les opérations structurées.",
    body:
      "Quand la capacité devient prioritaire, JC EXPRESS organise le transport en semi-remorque en tenant compte du volume, du chargement et des contraintes logistiques.",
    points: ["Palettes et lots dédiés", "Transport planifié", "Organisation du chargement à la livraison"]
  }
};

const missionData = {
  event: {
    kicker: "Événement",
    title: "Une coordination précise autour du montage et du démontage.",
    copy:
      "Flight cases, mobilier, stands ou matériel technique : les horaires et les accès sont intégrés à la préparation pour que le véhicule arrive dans le bon créneau.",
    vehicle: "Porteur ou Renault Master",
    focus: "Accès technique et créneau de livraison",
    cta: "Parler de mon événement"
  },
  luxe: {
    kicker: "Luxe",
    title: "Une livraison discrète, ponctuelle et soignée jusque dans les détails.",
    copy:
      "Boutique, showroom, lancement ou présentation privée : la mission privilégie la qualité de prise en charge, le respect du lieu et une communication mesurée.",
    vehicle: "VL dédié ou porteur",
    focus: "Présentation, discrétion et ponctualité",
    cta: "Organiser une livraison luxe"
  },
  urgent: {
    kicker: "Urgence",
    title: "Une réponse rapide sans perdre la maîtrise des informations essentielles.",
    copy:
      "JC EXPRESS identifie immédiatement le volume, le départ, l'arrivée et l'heure impérative afin de proposer le moyen disponible le plus cohérent.",
    vehicle: "VL Ford ou Renault Master",
    focus: "Disponibilité et heure impérative",
    cta: "Demander une prise en charge"
  },
  volume: {
    kicker: "Grand volume",
    title: "Une capacité adaptée aux palettes, lots dédiés et opérations structurées.",
    copy:
      "Le plan de transport est construit autour du métrage, du poids, des moyens de chargement et des contraintes du site pour éviter toute mauvaise surprise.",
    vehicle: "Tracteur et semi-remorque",
    focus: "Volume, poids et moyens de manutention",
    cta: "Étudier mon volume"
  }
};

const galleryData = galleryItems.map((item) => {
  const image = item.querySelector("img");
  return { src: image.src, alt: image.alt };
});

let activeSlide = 0;
let activeGalleryItem = 0;
let activeFormStep = 0;
let isPaused = false;
let slideTimer;

const setPageProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
  document.documentElement.style.setProperty("--route-progress", `${percent}%`);
};

const setHeaderState = () => {
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  setPageProgress();
};

const setSlide = (index) => {
  if (!slides.length) return;
  activeSlide = index;
  slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === activeSlide));
  dots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeSlide;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-selected", String(isActive));
  });
  if (slideTitle) slideTitle.textContent = slideContent[activeSlide].title;
  if (slideCopy) slideCopy.textContent = slideContent[activeSlide].copy;
};

const startHeroAnimation = () => {
  window.clearInterval(slideTimer);
  if (reduceMotion || slides.length < 2) return;
  slideTimer = window.setInterval(() => {
    if (!isPaused) setSlide((activeSlide + 1) % slides.length);
  }, 5200);
};

const updateFleet = (key) => {
  const data = fleetData[key];
  if (!data || !fleetImage || !fleetCard) return;
  fleetImage.src = data.image;
  fleetImage.alt = data.title;
  fleetCard.innerHTML = `
    <p class="card-kicker">${data.kicker}</p>
    <h3>${data.title}</h3>
    <p>${data.body}</p>
    <ul>${data.points.map((point) => `<li>${point}</li>`).join("")}</ul>
  `;
  fleetTabs.forEach((tab) => {
    const isActive = tab.dataset.fleetTab === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
};

const updateMission = (key) => {
  const data = missionData[key];
  if (!data) return;
  missionKicker.textContent = data.kicker;
  missionTitle.textContent = data.title;
  missionCopy.textContent = data.copy;
  missionVehicle.textContent = data.vehicle;
  missionFocus.textContent = data.focus;
  missionCta.textContent = data.cta;
  missionTabs.forEach((tab) => {
    const isActive = tab.dataset.mission === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
};

const showGalleryItem = (index) => {
  activeGalleryItem = (index + galleryData.length) % galleryData.length;
  const data = galleryData[activeGalleryItem];
  lightboxImage.src = data.src;
  lightboxImage.alt = data.alt;
  lightboxCaption.textContent = data.alt;
};

const openLightbox = (index) => {
  showGalleryItem(index);
  if (typeof lightbox.showModal === "function") lightbox.showModal();
  else lightbox.setAttribute("open", "");
};

const closeMenu = () => {
  if (!menuToggle) return;
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  header?.classList.remove("is-open");
  nav?.classList.remove("is-open");
  phoneLink?.classList.remove("is-open");
};

const showFormStep = (index) => {
  if (!formSteps.length) return;
  activeFormStep = Math.min(formSteps.length - 1, Math.max(0, index));
  formSteps.forEach((step, stepIndex) => {
    step.hidden = stepIndex !== activeFormStep;
  });
  stepIndicators.forEach((indicator, indicatorIndex) => {
    indicator.classList.toggle("is-active", indicatorIndex === activeFormStep);
    indicator.classList.toggle("is-complete", indicatorIndex < activeFormStep);
    indicator.setAttribute("aria-current", indicatorIndex === activeFormStep ? "step" : "false");
  });
  formSteps[activeFormStep].querySelector("input, select, textarea")?.focus({ preventScroll: true });
  formSteps[activeFormStep].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
};

const validateFormStep = (index, report = true) => {
  const fields = Array.from(formSteps[index]?.querySelectorAll("input, select, textarea") || []);
  const invalidField = fields.find((field) => !field.checkValidity());
  if (!invalidField) return true;
  if (report) invalidField.reportValidity();
  return false;
};

setHeaderState();
setSlide(0);
startHeroAnimation();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", setPageProgress);

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  document.body.classList.toggle("menu-open", !isOpen);
  header?.classList.toggle("is-open", !isOpen);
  nav?.classList.toggle("is-open", !isOpen);
  phoneLink?.classList.toggle("is-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target.tagName === "A") closeMenu();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setSlide(Number(dot.dataset.slideDot));
    startHeroAnimation();
  });
});

pauseButton?.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Lecture" : "Pause";
  pauseButton.setAttribute("aria-pressed", String(isPaused));
});

fleetTabs.forEach((tab) => tab.addEventListener("click", () => updateFleet(tab.dataset.fleetTab)));
missionTabs.forEach((tab) => tab.addEventListener("click", () => updateMission(tab.dataset.mission)));

document.querySelectorAll("[data-step-next]").forEach((button) => {
  button.addEventListener("click", () => {
    if (validateFormStep(activeFormStep)) showFormStep(activeFormStep + 1);
  });
});

document.querySelectorAll("[data-step-prev]").forEach((button) => {
  button.addEventListener("click", () => showFormStep(activeFormStep - 1));
});

const quoteDate = document.querySelector("#q-date");
if (quoteDate) {
  const localToday = new Date();
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
  quoteDate.min = localToday.toISOString().split("T")[0];
}

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      const shouldOpen = otherItem === item;
      otherItem.classList.toggle("is-open", shouldOpen);
      otherItem.setAttribute("aria-expanded", String(shouldOpen));
    });
  });
});

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );
  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-revealed"));
}

const countElements = Array.from(document.querySelectorAll("[data-count]"));
const animateCount = (element) => {
  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || "";
  const start = target > 100 ? target - 12 : 0;
  const duration = 900;
  const startedAt = performance.now();
  const step = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(start + (target - start) * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

if ("IntersectionObserver" in window && !reduceMotion) {
  const countObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.7 }
  );
  countElements.forEach((element) => countObserver.observe(element));
}

if (brand && !reduceMotion) {
  brand.addEventListener("pointermove", (event) => {
    const bounds = brand.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    brand.style.setProperty("--brand-ry", `${x * 4}deg`);
    brand.style.setProperty("--brand-rx", `${y * -4}deg`);
  });
  brand.addEventListener("pointerleave", () => {
    brand.style.setProperty("--brand-ry", "0deg");
    brand.style.setProperty("--brand-rx", "0deg");
  });
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(Number(item.dataset.galleryIndex)));
});

document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox.close());
document.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => showGalleryItem(activeGalleryItem - 1));
document.querySelector("[data-lightbox-next]")?.addEventListener("click", () => showGalleryItem(activeGalleryItem + 1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.open) return;
  if (event.key === "ArrowLeft") showGalleryItem(activeGalleryItem - 1);
  if (event.key === "ArrowRight") showGalleryItem(activeGalleryItem + 1);
});

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const invalidStep = formSteps.findIndex((step) => !validateFormStep(Number(step.dataset.formStep), false));
  if (invalidStep !== -1) {
    showFormStep(invalidStep);
    validateFormStep(invalidStep);
    return;
  }

  const data = new FormData(quoteForm);
  const subject = "Demande de devis transport - JC EXPRESS";
  const body = [
    "Bonjour JC EXPRESS,",
    "",
    "Je souhaite obtenir un devis pour un transport.",
    "",
    `Nom : ${data.get("name") || ""}`,
    `Entreprise : ${data.get("company") || ""}`,
    `Téléphone : ${data.get("phone") || ""}`,
    `Email : ${data.get("email") || ""}`,
    `Type de transport : ${data.get("service") || ""}`,
    `Véhicule envisagé : ${data.get("vehicle") || ""}`,
    `Date souhaitée : ${data.get("date") || ""}`,
    `Horaire ou créneau : ${data.get("time") || ""}`,
    `Adresse de départ : ${data.get("departure") || ""}`,
    `Adresse d'arrivée : ${data.get("arrival") || ""}`,
    `Marchandise ou matériel : ${data.get("goods") || ""}`,
    `Poids ou volume estimé : ${data.get("weight") || ""}`,
    `Accès ou manutention : ${data.get("access") || ""}`,
    "",
    "Message :",
    data.get("message") || "",
    "",
    "Cordialement,"
  ].join("\n");

  const mailto = `mailto:contact@jcexpresstransport.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = "Votre messagerie va s'ouvrir avec la demande pré-remplie.";
  window.location.href = mailto;
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const subject = `Contact site JC EXPRESS - ${data.get("subject") || "Message"}`;
  const body = [
    "Bonjour JC EXPRESS,",
    "",
    `Nom : ${data.get("name") || ""}`,
    `Entreprise : ${data.get("company") || ""}`,
    `Téléphone : ${data.get("phone") || ""}`,
    `Email : ${data.get("email") || ""}`,
    `Objet : ${data.get("subject") || ""}`,
    "",
    "Message :",
    data.get("message") || "",
    "",
    "Cordialement,"
  ].join("\n");

  const mailto = `mailto:contact@jcexpresstransport.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  contactNote.textContent = "Votre messagerie va s'ouvrir avec le message pré-rempli.";
  window.location.href = mailto;
});
