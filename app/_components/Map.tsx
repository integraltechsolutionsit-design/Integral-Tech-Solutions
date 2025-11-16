import React from 'react'

function MapView() {
  return (
    <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200">
      <iframe
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3277689789393!2d73.77352347692036!3d18.64928206522671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c34b8825ed%3A0x1be37c9e7c1a163d!2sMhalsakant%20Chowk%2C%20Sector%2027A%2C%20Pradhikaran%2C%20Nigdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411044!5e0!3m2!1sen!2sin!4v1763298489987!5m2!1sen!2sin"
      ></iframe>
    </div>
  )
}

export default MapView