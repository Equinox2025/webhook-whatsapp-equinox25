# webhook-whatsapp-equinox25

Este proyecto contiene una función serverless para gestionar el webhook de WhatsApp y está preparado para desplegarse en **Vercel**.

## Desarrollo local

1. Instala las dependencias (si las hubiera) y ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Configura la variable de entorno `VERIFY_TOKEN` con el valor que utilizarás para la verificación del webhook.

## Despliegue en Vercel

1. Crea un proyecto en Vercel y sube este repositorio.
2. Define la variable de entorno `VERIFY_TOKEN` desde el panel de configuración de Vercel.
3. Ejecuta `vercel --prod` para desplegar.
