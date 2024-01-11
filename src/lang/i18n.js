"use client"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
      validationMessages: {
        mixed: {
          required: "Campo requerido",
          default: "Dato inválido",
          notType: "Ingresa un dato válido",
          min: "Debe tener al menos {{min}} caracteres",
          max: "Debe tener máximo {{max}} caracteres",
          matches: "Dato no válido",
        },
        number: {
          min: "Debe ser mayor que {{min}}",
          max: "Debe ser menor a {{max}}",
          lessThan: "Debe ser menor que {{less}}",
          moreThan: "Debe ser mayor que {{more}}",
          positive: "Debe ser un número positivo",
          negative: "Debe ser un número negativo",
          integer: "Debe ser un número entero",
        },
        string: {
          length: "Debe tener exactamente ${length} caracteres",
          min: "Debe tener al menos {{min}} caracteres",
          max: "Debe tener máximo {{max}} caracteres",
          email: "E-mail inválido",
          url: "Debe ter un formato de URL válida",
          trim: "No debe contener espacios no iniciar con uno.",
          matches: "Dato no válido",
        },
        date: {
          min: "Debe ser después de ${min}",
          max: "Debe ser antes de ${max}",
        },
        array: {
          min: "Debe tener mínimo ${min} items",
          max: "Debe tener máximo ${max} items",
          length: "Debe tener ${max} items",
        },
      },
      data: "new data",
      Home: {
        title: "Bienvenido",
        titleError: "Get information Failed",
        subTitleError: "Contact administrator for help",
      },
      header: {
        signOut: "Cerrar Sesión",
        store: "Tienda:",
        cashRegister: "Caja:",
        roleName: "Vendedor",
        sessionExp: "Tu sesión está por expirar",
        continueSessionPrefix: "La sesión se cerrará automáticamente en",
        continueSessionSuffix:
          "segundos, confirma para continuar con la sesión",
      },
      common: {
        yes: "Si",
        accept: "Aceptar",
        no: "No",
        cancel: "Cancelar",
        send: "Enviar",
        save: "Guardar",
        name: "Nombre",
        names: "Nombre(s)",
        lastName: "Apellido paterno",
        secondName: "Apellido materno",
        street: "Calle",
        extNumber: "Número exterior",
        colony: "Colonia",
        CP: "Código postal",
        upload: "Cargar archivo",
        goBack: "Regresar",
        goForward: "Continuar",
        goToLoginButton: "Ir a login",
        search: "Buscar",
        htmlTitle: "Macropay Financing",
        themedark: "Modo Oscuro",
        goToMenu: "Ir a menú",
      },
      home: {
        title: "Página de inicio",
      },
      validateCURPPhone: {
        title: "Validar teléfono",
        description: "Nueva pre-solicitud",
        successValidation: {
          title: "Validación exitosa",
          description: "La validación del teléfono se realizo correctamente",
        },
        radio: {
          new: {
            label: "Generar una nueva solicitud",
          },
          search: {
            label: "Buscar una solicitud existente",
          },
        },
        checkBox: {
          label: "El cliente no cuenta con número celular",
        },
        inputCURP: {
          label: "CURP del cliente",
          placeholder: "XXXX010101ABBCCC00",
        },
        inputPhone: {
          label: "Número celular",
          placeholder: "9999000000",
        },
        button: {
          title: "¿Cómo desea el cliente validar su número?",
          SmsDescription: "Validar por SMS",
          WhatsAppDescription: "Validar por WhatsApp",
        },
        modal: {
          content: "Se ha enviado el código.",
        },
        goForward: "Continuar sin número celular",
      },
      restoreJourney: {
        alert: {
          message:
            "Para hacer la búsqueda pide al cliente su nombre, CURP, teléfono, PR o SL",
        },
        form: {
          btnSubmit: "Buscar pre-solicitud",
        },
        inputName: {
          label: "",
          placeholder: "Nombre, CURP, teléfono, PR o SL",
        },
        inputBirthDay: {
          label: "Fecha de nacimiento",
          placeholder: "DD/MM/YYYY",
        },
        table: {
          columns: {
            client: "Cliente",
            birthDay: "Fecha de nacimiento",
            pr: "Pre-solicitud",
            sl: "Solicitud",
            email: "Correo",
            status: "Estado",
            actions: "Acciones",
            curp: "CURP",
            phone: "Teléfono",
          },
          actions: {
            getJourney: "Continuar pre-solicitud",
          },
          status: {
            0: "cancelada",
            1: "incompleta",
            2: "completa",
          },
        },
      },
      validateSmsCode: {
        title:
          "Hemos enviado un código para validar el número celular del cliente, ingrese el número aquí abajo.",
      },
      validateSms: {
        title: "Código de Validación",
        description: "Escribe el código que envíamos al celular del cliente.",
        successValidation: {
          title: "Validación exitosa",
          description: "El código es correcto",
        },
        successGetCode: {
          title: "Código generado correctamente",
          description: "El código del usuario se ha generado correctamente",
        },
        verifyCode: "Verificar código",
      },
      biometrics: {
        page: {
          title: "Documentación y prueba de vida",
          description:
            "A continuación vamos a subir la documentación de nuestro cliente, para eso <strong>dale click al botón de Verificame</strong> y sigue las instrucciones",
        },
        modal: {
          title: "Proceso completado",
          description:
            "La carga de sus datos ha finalizado con éxito, de clic en aceptar para continuar.",
        },
        error: {
          title: "Ups",
          message: "Ocurrió un error al cargar sus datos, intente de nuevo.",
        },
        errorValidate: {
          title: "Ups",
          message: "Ocurrió un error al verificar sus datos, intente de nuevo.",
        },
        miscellaneous: {
          labelMati: "Verificar identidad",
        },
      },
      personalData: {
        title: {
          form: "Datos del cliente",
          modal: "Datos guardados correctamente",
          prerequest: "Presolicitud: ",
        },
        dataForm: {
          options: {
            man: "Hombre",
            woman: "Mujer",
          },
        },
        personal: {
          gender: "Sexo",
          firstName: "Primer Nombre",
          secondName: "Segundo Nombre",
          lastName: "Apellido Paterno",
          secondLastName: "Apellido Materno",
          dateBirthday: "Fecha de nacimiento",
          stateBirthday: "Estado de nacimiento",
          curp: "CURP",
          rfc: "RFC",
          email: "Correo electrónico",
          phone: "Número de celular",
          scholarship: "Último grado de estudios",
          maritalStatus: "Estado civil",
          maritalStatusSeniority: "Año de estado civil",
          dependentsNumber: "Núm. de dependientes económicos",
        },
        laboral: {
          occupation: "Ocupación",
          company: "Nombre de la empresa",
          position: "Puesto que ocupa",
          monthlySalary: "Ingreso neto mensual",
          seniorityJob: "Antigüedad en empresa actual",
          jobPhone: "Teléfono laboral",
        },
        address: {
          zipCode: "Código Postal",
          state: "Estado",
          municipality: "Municipio o Delegación",
          city: "Localidad o ciudad",
          settlement: "Asentamiento",
          settlementType: "Tipo de asentamiento",
          street: "Calle",
          exteriorNumber: "Núm. exterior",
          interiorNumber: "Núm. interior",
          crossings: "Cruzamientos",
          domicileAntiquity: "Antiguedad en el domicilio",
          addressType: "Tipo de domicilio",
          addressReference: "Referencias del domicilio",
        },
        placeholders: {
          firstName: "Ej. Mario",
        },
        tabs: {
          personal: "Datos personales",
          laboral: "Datos laborales",
          address: "Datos del domicilio",
        },
        button: {
          next: "Siguiente",
          save: "Guardar datos y continuar",
        },
      },
      errors: {
        default: {
          title: "No pudimos cargar alguno de los datos solicitados.",
          message:
            "Si continua apareciendo este mensaje por favor contacta a soporte.",
        },
        // EXAMPLE ERROR
        "MP-001": {
          title: "Error",
          message: "Se esperaban parámetros",
        },
        "ERR-GENERAL-01": {
          title: "Error",
          message: "No se obtuvieron la configuración del sistema",
        },
        "CAMUS-00004-01": {
          title: "Envío de Código",
          message:
            "Ya fue enviado un Código. Por favor Espera de 30 segundos a 1 minuto para continuar.",
        },
        "CAMUS-00004-02": {
          title: "Error",
          message:
            "Ocurrió un error con el proveedor por favor contacta al administrador.",
        },
        "CAMUS-00004-03": {
          title: "Error",
          message:
            "Ocurrió un error con el proveedor, por favor contacta al administrador.",
        },
        "CAMUS-00004-04": {
          title: "Error",
          message:
            "Clave de presolicitud no identificada, por favor vuelve a intentarlo o contacta al administrador",
        },
        "CAMUS-00004-05": {
          title: "Error",
          message:
            "Ya ha pasado la vigencia de ese código, por favor vuelve a enviar el SMS",
        },
        "CAMUS-00004-06": {
          title: "Error",
          message: "Código incorrecto, por favor vuelve a intentarlo",
        },
        "CAMUS-00004-07": {
          title: "Envió de Código",
          message: "Los intentos permitidos a este numero se han agotado.",
        },
        isBlackListed: {
          title: "Rechazado",
          message: "No se le puede otorgar un crédito al cliente.",
        },
        isRejected: {
          title: "Rechazado",
          message:
            "No se le puede otorgar un crédito al cliente. Por favor indícale que puede volver a intentar dentro de {{remainingDays}} día(s).",
        },
        IsActivePr: {
          title: "PR Activa",
          message: "El cliente cuenta con una PreSolicitud activa.",
        },
        IsActiveSL: {
          title: "SL Activa",
          message: "El cliente cuenta con una Solicitud activa.",
        },
        IsWhiteListed: {
          title: "Proceso exitoso",
          message: "Continuar con el proceso",
        },
        UnAuthorized: {
          title: "La sesión a caducado",
          message: "Inicia sesión nuevamente",
        },
        IsInvalidNumber: {
          title: "Número incorrecto",
          message: "El número no es valido, intente con otro número",
        },
        DeletedUser: {
          title: "No se puede recuperar contigencia",
          message: "{{message}}",
        },
        ErrorGeneral: {
          title: "",
          message: "{{ message }}",
        },
      },
      menu: {
        section: {
          dashboard: "Comisiones",
          transfer: "Transferir o recibir mercancía",
          wares: "Transacción ZMIGO",
          stock: "Stock de mercancía",
          "stock-commodity/transaction-ZMB01": "Transacción ZMB01",
          stockCurrent: "Transacción MB5T",
          stockCenter: "Transacción MB52",
        },
      },
      login: {
        title: "Sistema SAP",
        description:
          "Visualiza y gestiona los datos de ventas y materiales en centros de distribución y tiendas Macropay.",
        buttonCognito: "Iniciar sesión",
      },
      forbidden: {
        description: "No cuentas con los permisos para visualizar esta pagina.",
      },
      notFound: {
        description: "Pagina no encontrada.",
      },
      errorPage: {
        description: "Error al cargar la pagina.",
      },
    },
  },
  en: {
    translation: {
      validationMessages: {
        mixed: {
          required: "Required field",
          default: "Invalid field",
          notType: "Enter a valid data",
          min: "Must have at least {{min}} characters",
          max: "Must have maximun {{max}} characters",
        },
        number: {
          min: "Must be greater than {{min}}",
          max: "Must be less than {{max}}",
          lessThan: "Must be less than {{less}}",
          moreThan: "Must be greater than {{more}}",
          positive: "Must be a positive number",
          negative: "Must be a negative number",
          integer: "Must be a number",
        },
        string: {
          length: "Must have exactly ${length} characters",
          min: "Must have at least {{min}} characters",
          max: "Must have max {{max}} characters",
          email: "Invalid E-mail",
          url: "Must have a valid URL format",
          trim: "Must not contain spaces, not start with one.",
        },
        date: {
          min: "Must be after ${min}",
          max: "Must be before ${max}",
        },
        array: {
          min: "Must have minimun ${min} items",
          max: "Must have maximun ${max} items",
          length: "Must have ${max} items",
        },
      },
      data: "New data",
      Home: {
        title: "Welcome",
        titleError: "Get information Failed",
        subTitleError: "Contact administrator for help",
      },
      header: {
        signOut: "Sign out",
        store: "Store:",
        cashRegister: "Box:",
        roleName: "Salesman",
        sessionExp: "Your session is about to expire",
        continueSessionPrefix: "The session will be automatically closed in",
        continueSessionSuffix: "Seconds, confirm to continue with the session",
      },
      common: {
        yes: "Yes",
        accept: "Accept",
        no: "No",
        cancel: "Cancel",
        send: "Send",
        save: "Save",
        name: "Name",
        names: "Name(s)",
        lastName: "Last name",
        secondName: "Second name",
        street: "Street",
        extNumber: "Ext. Number",
        colony: "Colony",
        CP: "CP",
        upload: "File Upload",
        goBack: "Go Back",
        goForward: "Go Forward",
        goToLoginButton: "Go to Login",
        search: "Search",
        htmlTitle: "Macropay Financing",
        themedark: "Dark Mode",
      },
      home: {
        title: "Home",
      },
      validatePhone: {
        title: "Validate Phone",
        description: "Write the client's cell phone to search for the request",
        successValidation: {
          title: "Successful Validation",
          description: "Phone validation was successful",
        },
      },
      validateSms: {
        title: "Validation code",
        description: "Write the code that we send to the client's cell phone.",
        successValidation: {
          title: "Successful validation",
          description: "The code is correct",
        },
      },
      biometrics: {
        page: {
          title: "Documentation & liveness",
          description:
            "Below is the documentation of our client, for that <strong>click the Verify me button</strong> and follow the instructions",
        },
        modal: {
          title: "Success process",
          description:
            "The upload of your data has finished successfully, click accept to continue.",
        },
        error: {
          title: "Oops",
          message: "An error occurred loading your data, please try again.",
        },
        errorValidate: {
          title: "Oops",
          message:
            "An error occurred while verifying your data, please try again.",
        },
        miscellaneous: {
          labelMati: "Verify identity",
        },
      },
      personalData: {
        title: {
          form: "Client data",
          modal: "Data saved successfully",
          prerequest: "PresoPre request: ",
        },
        dataForm: {
          options: {
            man: "Man",
            woman: "Woman",
          },
        },
        personal: {
          gender: "Gender",
          firstName: "First Name",
          secondName: "Second Name",
          lastName: "Last Name",
          secondLastName: "Second Last Name",
          dateBirthday: "Date Birthday",
          stateBirthday: "State Birthday",
          curp: "CURP",
          rfc: "RFC",
          email: "Email",
          phone: "Phone",
          scholarship: "Last grade of studies",
          maritalStatus: "Civil status",
          maritalStatusSeniority: "Year of marital status",
          dependentsNumber: "Num. of economic dependents",
        },
        laboral: {
          occupation: "Occupation",
          company: "Company name",
          position: "Position he occupies",
          monthlySalary: "Monthly net income",
          seniorityJob: "Seniority in current company",
          jobPhone: "Work phone",
        },
        address: {
          zipCode: "Postal Code",
          state: "State",
          municipality: "Municipality or Delegation",
          city: "Town or city",
          settlement: "Settlement",
          settlementType: "Settlement type",
          street: "Street",
          exteriorNumber: "Outside number",
          interiorNumber: "Internal number",
          crossings: "Crosses",
          domicileAntiquity: "Seniority at home",
          addressType: "Type of address",
          addressReference: "Address references",
        },
        placeholders: {
          firstName: "Example. Mario",
        },
        tabs: {
          personal: "Personal information",
          laboral: "Labor data",
          address: "Address data",
        },
        button: {
          next: "Continue",
          save: "Save data and continue",
        },
      },
      errors: {
        default: {
          title: "Internal Error",
          message: "An internal error occurred.",
        },
        "STC-DASH-400": {
          title: "Dashboard Error",
          message: "Parameters were expected",
        },
      },
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
