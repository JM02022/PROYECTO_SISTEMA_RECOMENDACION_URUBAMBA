export interface Imagenss {
  imagen_id: number;
  sitio_id: number;
  url_imagen: string;
  descripcion?: string;   // opcional
  fecha_subida?: string;  // formato ISO yyyy-mm-dd HH:mm:ss
  orden?: number;         // opcional, default 1
}
