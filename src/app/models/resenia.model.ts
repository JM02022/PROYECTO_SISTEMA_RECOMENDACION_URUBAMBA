export interface Resenia {
  resena_id: number;
  usuario_id: number;
  sitio_id: number;
  puntuacion: number;       // 1 a 5, según tu base
  comentario?: string;      // opcional
  fecha_resena?: string;    // formato ISO yyyy-mm-dd HH:mm:ss
}
