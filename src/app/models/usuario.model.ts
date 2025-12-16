export interface Usuario {
  usuario_id: number;
  nombre: string;
  email: string;
  contrasena?: string;          // solo se usa en login/registro
  fecha_nacimiento?: string;   // yyyy-mm-dd
  genero?: 'M' | 'F' | 'Otro';
  pais_origen?: string;
  idioma_preferido?: string;
  fecha_registro?: string;     // yyyy-mm-dd HH:mm:ss
  ultima_actividad?: string;   // yyyy-mm-dd HH:mm:ss
}
