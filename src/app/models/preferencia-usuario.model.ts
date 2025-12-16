export interface PreferenciaUsuario {
  preferencia_id: number;
  usuario_id: number;
  categoria_id: number;
  nivel_interes?: number;        // opcional, default 3
  fecha_actualizacion?: string;  // formato ISO yyyy-mm-dd HH:mm:ss
}
