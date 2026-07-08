import React from 'react'

export default function IsoStrip() {
  return (
    <div className="iso-strip">
      <div className="container">
        <div className="iso-text">
          <h3>Quality Care &amp; Certification</h3>
          <p>Committed to providing products &amp; services of excellent quality at economical cost and on-time delivery.</p>
        </div>
        <div className="iso-badge">
          <div className="iso-cert">
            <div className="iso-cert-num">ISO 9001:2015</div>
            <div className="iso-cert-label">Quality Management</div>
          </div>
          <div className="iso-cert">
            <div className="iso-cert-num">QRS</div>
            <div className="iso-cert-label">Certified Registrar</div>
          </div>
        </div>
      </div>
    </div>
  )
}
