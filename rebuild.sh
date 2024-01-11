show_install_message() {
  local step="$1"
  local command="$2"
  echo -e "\e[34m ▶️ Paso $step: $command\e[0m"
}

remove_if_exists() {
  if [ -e "$1" ]; then
    echo -e "\e[33m   ⚠️ Borrando $1\e[0m"
    rm -r "$1"
    echo -e "\e[32m     ✓ $1 borrado\e[0m"
  else
    echo -e "\e[33m   ⚠️ $1 no existe, omitiendo...\e[0m"
  fi
}

confirm() {
  while true; do
    read -p "🚀 Este proceso eliminará las carpetas .next y node_modules, y el archivo package-lock-json. ¿Desea continuar con el proceso? (y/n): " choice
    case $choice in
      [Yy]* ) break;;
      [Nn]* ) exit;;
      * ) echo "Por favor, responda con 'y' o 'n'.";;
    esac
  done
}

create_docker_file() {
  while true; do
    read -p "🚀 ¿Desea crear un archivo docker? (Debe estar abierto el programa Docker Desktop) (y/n): " choice
    case $choice in
      [Yy]* ) {
          show_install_message 11 "Construyendo la imagen de Docker"
          docker build -t front-mf .
        };;
      [Nn]* ) break;;
      * ) echo "Por favor, responda con 'y' o 'n'.";;
    esac
  done
}


confirm

show_install_message 1 "Verificando carpeta '.next'"
remove_if_exists .next

show_install_message 2 "Verificando carpeta '.node_modules'"
remove_if_exists node_modules

show_install_message 3 "Verificando archivo 'package-lock.json'"
remove_if_exists package-lock.json

show_install_message 4 "Instalando dependencias con 'npm install'"
npm install

show_install_message 5 "Instalando con 'npm install' de nuevo"
npm install

show_install_message 6 "Ejecutando 'npm ci'"
npm ci

show_install_message 7 "Ejecutando 'npm ci' de nuevo"
npm ci

show_install_message 8 "Ejecutando perrito"
npm husky:prepare

show_install_message 9 "Ejecutando fix slint"
npm run lint -- --fix

show_install_message 10 "Compilando la aplicación con 'npm run build'"
npm run build

create_docker_file
