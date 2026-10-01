const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER
const WHATSAPP_MESSAGE =
  "Hello Quoxova, I visited quoxova.com and I'd like to discuss a software project with your team."

export default function WhatsAppButton() {
  if (!WHATSAPP_NUMBER) return null

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE || '')}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-md bg-[#128C7E] text-white hover:bg-[#0e6f64]"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M16.002 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.627 4.627 1.813 6.64L2.667 29.333l6.907-1.787A13.253 13.253 0 0 0 16.002 29.333c7.363 0 13.332-5.97 13.332-13.333S23.365 2.667 16.002 2.667zm0 24c-2.133 0-4.213-.573-6.04-1.66l-.427-.253-4.107 1.06 1.093-3.987-.28-.44A10.627 10.627 0 0 1 5.334 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.002 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.36-.5-2.587-1.587-.96-.853-1.6-1.907-1.787-2.227-.187-.32-.02-.493.14-.653.147-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013a1.19 1.19 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.827.763.333 1.36.533 1.827.68.767.24 1.467.207 2.013.127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  )
}
