TweetCaracas_Aplicacion
=======================

La aplicacion esta en construccion.

=======================

  Antes que nada, para poder correr la aplicacion o hacerle modificaciones se debe descargar:
    1. Descargar el SDK y el ADT de Android. http://developer.android.com/sdk/index.html#download 
    2. Descargar Node.js. http://nodejs.org/
    3. Instalar PhoneGap. (sudo npm install -g phonegap)
    4. Seguir las instrucciones que estan en: http://docs.phonegap.com/en/3.0.0/guide_platforms_index.md.html#Platform%20Guides

  Cualquier otra cosa que no este explicada aqui se puede revisar en la documentacion de PhoneGap: http://docs.phonegap.com/en/3.0.0/index.html

  Luego de haber instalado todo lo anterior se debe configurar como se va a correr la aplicacion. Para eso seguir las instrucciones de este link:
http://aerogear.org/docs/guides/CordovaAndroidDevJBDS/
a partir de la seccion "Run Configuration Setup", "Setup AVD" y "Launching AVD", las instrucciones que se encuentran antes son para crear una aplicacion desde el IDE, se pueden ignorar, de todas maneras el command line interface de Android proporciona toda la informacion necesaria para crear un nuevo proyecto (para mas informacion: http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface)

  Para construir el .apk simplemente:
    
    Colocarse en la carpeta del proyecto y desde la terminal: 
      cordova -d build android
  
    o tambien se puede hacer:
      cd platforms/android
      ./cordova/build
      
  Para verlo en el telefono simplemente debe pasarse el archivo nombre_app-debug.apk e instalarlo en el dispositivo.





