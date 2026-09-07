import { useEffect } from 'react';
import { servicesData } from '../data/services';

interface ServiceModalProps {
  serviceKey: string | null;
  onClose: () => void;
}

export function ServiceModal({ serviceKey, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (serviceKey) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [serviceKey]);

  if (!serviceKey) return null;

  const data = servicesData[serviceKey];
  if (!data) return null;

  return (
    <div className="modal open" id="serviceModal" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-top">
          <div>
            <div className="eyebrow">Schedulos service</div>
            <h2 id="modalTitle">{data.title}</h2>
          </div>
          <button className="close-modal" id="closeModal" onClick={onClose}>×</button>
        </div>
        
        <p className="modal-description" id="modalDescription">
          {data.description}
        </p>

        <div className="modal-services" id="modalServices">
          {data.items.map((item, idx) => (
            <div key={idx} className="modal-service">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="modal-bottom">
          <div>
            <strong>Quer saber quanto ficaria para o seu negócio?</strong>
            <p style={{ marginTop: '5px', fontSize: '10px', color: '#777' }}>
              Todos os projetos são personalizados.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary" id="modalCTA" onClick={onClose}>Pedir proposta →</a>
        </div>
      </div>
    </div>
  );
}
