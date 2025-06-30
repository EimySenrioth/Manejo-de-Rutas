import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes de página
const Inicio = () => (
  <div className="page-container">
    <header className="page-header">
      <div className="header-content">
        <h1 className="page-title">Sistema de Citas Médicas</h1>
        <p className="page-subtitle">Gobierno del Estado - Secretaría de Salud</p>
      </div>
    </header>
    <main className="main-content">
      <div className="hero-section">
        <h2>Bienvenido al Portal de Citas Médicas</h2>
        <p>Administra y consulta tus citas médicas de manera eficiente y segura.</p>
        <div className="action-buttons">
          <a href="/citas" className="btn btn-primary">Ver Mis Citas</a>
          <a href="/citas" className="btn btn-secondary">Agendar Nueva Cita</a>
        </div>
      </div>
      <div className="info-grid">
        <div className="info-card">
          <h3>Servicios Disponibles</h3>
          <ul>
            <li>Consulta General</li>
            <li>Especialidades Médicas</li>
            <li>Estudios de Laboratorio</li>
            <li>Medicina Preventiva</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>Horarios de Atención</h3>
          <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
          <p>Sábados: 8:00 AM - 2:00 PM</p>
          <p>Domingos: Cerrado</p>
        </div>
      </div>
    </main>
  </div>
);

const ListaCitas = () => {
  const citas = [
    { id: 1, fecha: '2025-07-01', hora: '10:00', doctor: 'Dr. García López', especialidad: 'Medicina General' },
    { id: 2, fecha: '2025-07-03', hora: '14:30', doctor: 'Dra. Martínez Ruiz', especialidad: 'Cardiología' },
    { id: 3, fecha: '2025-07-05', hora: '09:15', doctor: 'Dr. Hernández Silva', especialidad: 'Dermatología' },
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">Mis Citas Médicas</h1>
          <p className="page-subtitle">Consulta y administra tus citas programadas</p>
        </div>
      </header>
      <main className="main-content">
        <div className="toolbar">
          <a href="/" className="btn btn-secondary">← Volver al Inicio</a>
          <button className="btn btn-primary">Nueva Cita</button>
        </div>
        <div className="citas-grid">
          {citas.map(cita => (
            <div key={cita.id} className="cita-card">
              <div className="cita-header">
                <span className="cita-fecha">{cita.fecha}</span>
                <span className="cita-hora">{cita.hora}</span>
              </div>
              <div className="cita-body">
                <h3>{cita.doctor}</h3>
                <p className="especialidad">{cita.especialidad}</p>
                <div className="cita-actions">
                  <a href={`/cita/${cita.id}`} className="btn btn-outline">Ver Detalles</a>
                  <button className="btn btn-danger-outline">Cancelar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const DetalleCita = () => {
  const { id } = window.location.pathname.split('/').pop();
  
  const cita = {
    id: id,
    fecha: '2025-07-01',
    hora: '10:00',
    doctor: 'Dr. García López',
    especialidad: 'Medicina General',
    ubicacion: 'Consultorio 205, Centro de Salud Norte',
    telefono: '(222) 123-4567',
    preparacion: 'Presentarse en ayunas. Traer identificación oficial y tarjeta del seguro médico.',
    estado: 'Confirmada'
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">Detalles de la Cita</h1>
          <p className="page-subtitle">Información completa de su cita médica</p>
        </div>
      </header>
      <main className="main-content">
        <div className="toolbar">
          <a href="/citas" className="btn btn-secondary">← Volver a Mis Citas</a>
          <div className="status-badge status-confirmed">{cita.estado}</div>
        </div>
        <div className="detail-card">
          <div className="detail-section">
            <h3>Información de la Cita</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Fecha:</label>
                <span>{cita.fecha}</span>
              </div>
              <div className="detail-item">
                <label>Hora:</label>
                <span>{cita.hora}</span>
              </div>
              <div className="detail-item">
                <label>Doctor:</label>
                <span>{cita.doctor}</span>
              </div>
              <div className="detail-item">
                <label>Especialidad:</label>
                <span>{cita.especialidad}</span>
              </div>
              <div className="detail-item">
                <label>Ubicación:</label>
                <span>{cita.ubicacion}</span>
              </div>
              <div className="detail-item">
                <label>Teléfono:</label>
                <span>{cita.telefono}</span>
              </div>
            </div>
          </div>
          <div className="detail-section">
            <h3>Preparación e Instrucciones</h3>
            <p className="preparation-text">{cita.preparacion}</p>
          </div>
          <div className="detail-actions">
            <button className="btn btn-primary">Reagendar</button>
            <button className="btn btn-secondary">Imprimir</button>
            <button className="btn btn-danger">Cancelar Cita</button>
          </div>
        </div>
      </main>
    </div>
  );
};

const PaginaError = () => (
  <div className="page-container">
    <header className="page-header">
      <div className="header-content">
        <h1 className="page-title">Página No Encontrada</h1>
        <p className="page-subtitle">Error 404</p>
      </div>
    </header>
    <main className="main-content">
      <div className="error-section">
        <div className="error-icon">⚠️</div>
        <h2>Lo sentimos, la página que buscas no existe</h2>
        <p>La URL que ingresaste no corresponde a ninguna página válida en nuestro sistema.</p>
        <div className="error-actions">
          <a href="/" className="btn btn-primary">Ir al Inicio</a>
          <a href="/citas" className="btn btn-secondary">Ver Mis Citas</a>
        </div>
      </div>
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/citas" element={<ListaCitas />} />
          <Route path="/cita/:id" element={<DetalleCita />} />
          <Route path="*" element={<PaginaError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;