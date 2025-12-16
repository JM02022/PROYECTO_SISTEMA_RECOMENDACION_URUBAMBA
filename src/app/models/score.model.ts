export interface Score {
  score_id: number;
  usuario_id: number;
  sitio_id: number;
  score: number;                  // decimal, ej. 4.75
  metodo: 'colaborativo' | 'contenido' | 'hibrido';
  fecha_calculo?: string;         // formato ISO yyyy-mm-dd HH:mm:ss
}
