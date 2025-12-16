export interface HistorialInteraccion {
  interaccion_id: number;
  usuario_id: number;
  sitio_id: number;
  tipo_interaccion: 'visita' | 'like' | 'favorito' | 'reserva';
  fecha_interaccion?: string; // formato ISO yyyy-mm-dd HH:mm:ss
  duracion?: number; // opcional, en segundos o minutos según tu DB
}
