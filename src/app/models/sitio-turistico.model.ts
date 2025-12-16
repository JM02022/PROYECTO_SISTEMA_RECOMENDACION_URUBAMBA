export interface SitioTuristico {
  sitio_id: number;
  nombre: string;
  descripcion?: string;
  direccion?: string;
  latitud?: number;
  longitud?: number;
  telefono?: string;
  email?: string;
  pagina_web?: string;
  fecha_creacion?: string;    // formato ISO yyyy-mm-dd HH:mm:ss
  estado?: 'activo' | 'inactivo' | 'pendiente';
  rating_promedio?: number;   // decimal 0-5
  visitas?: number;
  precio_estimado?: number;   // decimal
}
