/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable func-names */
const isBrazil = country === 'br';

let currentSelectedProductdata = {};
let shouldUseV2 = false;

const lang = country != 'br' ? {
  FORM_PRODUCT_SELECT_LABEL: '¿Para qué producto/servicio desea soporte?',
  FORM_PAGE_TITLE: 'Abrir ticket',
  FORM_PAGE_SEND: 'Enviar',
  FORM_SECTOR: 'Sector',
  FORM_SALES_SUPPORT: 'Soporte Financiero',
  FORM_TECH_SUPPORT: 'Soporte Técnico',
  FORM_SUPPORT_LABEL: '¿Cuál es su necesidad?',
  FORM_SUCCESS: 'Ticket creado con éxito!',
  FORM_ERROR: 'Error al abrir el ticket.',
  FORM_ACTIVE_LABEL: 'PRODUCTOS/SERVICIOS ACTIVOS',
  FORM_SUSPENDED_LABEL: 'PRODUCTOS/SERVICIOS SUSPENDIDOS',
  FORM_MY_ACCOUNT_LABEL: 'MI CUENTA',
  FORM_PRODUCT_LABEL: 'Producto',
  FORM_SERVER_LABEL: 'Servidor',
  FORM_REQUEST_LABEL: 'Solicitación',
  FORM_PRODUCT_ID_LABEL: 'ID del producto',
  FORM_OPEN_CHAT_DISCLAIMER: 'Si no encuentra la opción que desea en la lista de abajo, inicie un <b>servicio de chat.</b>',
} : {
  SSL_ZENDESK_WILDCARD_SUBJECT: 'Solicita\u00e7\u00e3o de SSL Wildcard',
  SSL_ZENDESK_EV_SUBJECT: 'Solicita\u00e7\u00e3o de SSL com Certifica\u00e7\u00e3o de Identidade Empresarial',
  SSL_ZENDESK_CERT_SUBJECT: 'Solicita\u00e7\u00e3o de SSL ',
  SSL_ZENDESK_INSTALATION_FAIL_SUBJECT: 'Falha na instala\u00e7\u00e3o de Certificado SSL ',
  SSL_ZENDESK_EMISSION_FAIL_SUBJECT: 'Falha na emiss\u00e3o de Certificado SSL ',
  SSL_ZENDESK_INSTALATION_FAIL_CONTENT: ' Ol\u00e1, %1$s \n Encontramos um problema na instala\u00e7\u00e3o do seu Certificado SSL no dom\u00ednio %2$s. A equipe de suporte est\u00e1 trabalhando para solucionar essa quest\u00e3o e te manteremos atualizado atrav\u00e9s desse chamado.\n Qualquer d\u00favida, conte conosco.',
  SSL_ZENDESK_EMISSION_FAIL_CONTENT: ' Ol\u00e1, %1$s \n Encontramos um problema na emiss\u00e3o do seu Certificado SSL no dom\u00ednio %2$s. A equipe de suporte est\u00e1 trabalhando para solucionar essa quest\u00e3o e te manteremos atualizado atrav\u00e9s desse chamado.\n Qualquer d\u00favida, conte conosco.',
  SSL_ZENDESK_PRODUCT_WILDCARD: 'Produto: Comodo Positive Wildcard Certificate ',
  SSL_ZENDESK_CLIENT_USER_NAME: '\u2022 Nome de usu\u00e1rio do Cliente: ',
  SSL_ZENDESK_CLIENT_SITE_PASSWORD: '\u2022 Senha do site do cliente: ',
  SSL_ZENDESK_CLIENT_EMAIL: '\u2022 Email do Cliente: ',
  SSL_ZENDESK_CLIENT_NAME: '\u2022 Nome do Cliente: ',
  SSL_ZENDESK_CLIENT_SURNAME: '\u2022 Sobrenome do Cliente: ',
  SSL_ZENDESK_CLIENT_FONE: '\u2022 Telefone do Cliente: ',
  SSL_ZENDESK_CLIENT_ADDRESS: '\u2022 Endere\u00e7o do Cliente: ',
  SSL_ZENDESK_CLIENT_CITY: '\u2022 Cidade do Cliente: ',
  SSL_ZENDESK_CLIENT_STATE: '\u2022 Estado do Cliente: ',
  SSL_ZENDESK_CLIENT_POSTAL_CODE: '\u2022 CEP do Cliente: ',
  SSL_ZENDESK_CLIENT_COUNTRY: '\u2022 Pa\u00eds do Cliente: ',
  SSL_ZENDESK_ORGANIZATION: '\u2022 Organiza\u00e7\u00e3o: ',
  SSL_ZENDESK_COMPANY: '\u2022 Empresa: ',
  SSL_ZENDESK_SERVER: '\u2022 Servidor: ',
  SSL_ZENDESK_INSTALATION_URL: '\u2022 URLs para instala\u00e7\u00e3o do SSL: ',
  SSL_ZENDESK_PRICE: '\u2022 Pre\u00e7o: ',
  SSL_ZENDESK_BEST_CONTACT_TIME: '\u2022 Melhor hor\u00e1rio para contato: ',
  SSL_ZENDESK_BILL_AUTHORIZATION: '\u2022 Autoriza\u00e7\u00e3o de cobran\u00e7a: Sim ',
  SSL_ZENDESK_DOCUMENT: '\u2022 CNPJ: ',
  SSL_ZENDESK_HOSTNAME: '\u2022 Hostname: ',
  FORM_PRODUCT_SELECT_LABEL: 'Para qual produto\/servi\u00e7o deseja suporte?',
  FORM_PAGE_TITLE: 'Abrir chamado',
  FORM_PAGE_SEND: 'Enviar',
  FORM_SECTOR: 'Setor',
  FORM_SALES_SUPPORT: 'Suporte Financeiro',
  FORM_TECH_SUPPORT: 'Suporte T\u00e9cnico',
  FORM_SUPPORT_LABEL: 'Qual a sua necessidade?',
  FORM_SUCCESS: 'Chamado criado com sucesso!',
  FORM_ERROR: 'Não foi possível abrir o chamado no momento. Por favor, tente mais tarde :)',
  FORM_ACTIVE_LABEL: 'PRODUTOS\/SERVI\u00c7OS ATIVOS',
  FORM_SUSPENDED_LABEL: 'PRODUTOS\/SERVI\u00c7OS SUSPENSOS',
  FORM_MY_ACCOUNT_LABEL: 'MINHA CONTA',
  FORM_PRODUCT_LABEL: 'Produto',
  FORM_SERVER_LABEL: 'Servidor',
  FORM_REQUEST_LABEL: 'Solicita\u00e7\u00e3o',
  FORM_PRODUCT_ID_LABEL: 'ID do produto',
  NFSE_CLIENT_GENERAL_TYPE: 'general',
  NFSE_CLIENT_ERROR_MESSAGE_NAME: 'Falha na emiss\u00e3o da sua Nota Fiscal',
  NFSE_CLIENT_ERROR_SUBJECT: 'HostGator.com.br \u2013 Falha na emiss\u00e3o da Nota Fiscal',
  NFSE_CLIENT_ERROR_MESSAGE: 'Ol\u00e1, {$firstname},\n\n Encontramos uma falha na emiss\u00e3o da sua Nota Fiscal. O erro encontrado foi: "{$message}".\n \n Por gentileza, ajuste o seu <b>{$field}<\/b> diretamente na \u00c1rea do Cliente atrav\u00e9s deste <a href="{$url}\/clientarea.php?action=details">link<\/a>.\n \n \n \n Se precisar de ajuda, entre em contato conosco atrav\u00e9s dos nossos Canais de Atendimento.\n \n Atenciosamente,\n HostGator',
  BRASPAG_DOMAIN_LABEL: 'Dom\u00ednio',
  BRASPAG_DOMAINREGISTER_LABEL: 'Registro de dom\u00ednio',
  BRASPAG_DOMAINTRANSFER_LABEL: 'Transfer\u00eancia de dom\u00ednio',
  BRASPAG_DOMAINADDONIDP_LABEL: 'Addon de dom\u00ednio',
  BRASPAG_UPGRADE_LABEL: 'Upgrade',
  BRASPAG_GENERAL_ERROR: 'Falha na comunica\u00e7\u00e3o.',
  BRASPAG_CARD_HOLDER_NULL: 'O titular do cart\u00e3o n\u00e3o pode ser nulo.',
  BRASPAG_CARD_NUMBER_NULL: 'O n\u00famero do cart\u00e3o n\u00e3o pode ser nulo.',
  BRASPAG_CARD_EXPIRATION_NULL: 'A data de expira\u00e7\u00e3o do cart\u00e3o n\u00e3o pode ser nula.',
  BRASPAG_CARD_EXPIRATION_NOT_VALID: 'A data de expira\u00e7\u00e3o do cart\u00e3o n\u00e3o \u00e9 v\u00e1lida (Formato: MM\/yyyy).',
  BRASPAG_CARD_TYPE_NULL: 'O tipo do cart\u00e3o n\u00e3o pode ser nulo.',
  BRASPAG_ERROR_04: 'Sua transa\u00e7\u00e3o n\u00e3o foi autorizada, por favor entre em contato o banco emissor do seu cart\u00e3o.',
  BRASPAG_ERROR_05: 'Sua transa\u00e7\u00e3o n\u00e3o foi autorizada, por favor entre em contato o banco emissor do seu cart\u00e3o.',
  BRASPAG_ERROR_06: 'Sua transa\u00e7\u00e3o n\u00e3o foi autorizada, por favor entre em contato o banco emissor do seu cart\u00e3o.',
  BRASPAG_ERROR_07: 'Sua transa\u00e7\u00e3o n\u00e3o foi autorizada, por favor entre em contato o banco emissor do seu cart\u00e3o.',
  BRASPAG_ERROR_13: 'Ocorreu um erro, por favor confira os dados de sua compra e refa\u00e7a a transa\u00e7\u00e3o.',
  BRASPAG_ERROR_14: 'N\u00e3o foi poss\u00edvel processar a transa\u00e7\u00e3o. reveja os dados informados e tente novamente. Se o erro persistir, entre em contato com seu banco emissor.',
  BRASPAG_ERROR_51: 'Transa\u00e7\u00e3o n\u00e3o autorizada. Entre em contato com seu banco emissor.',
  BRASPAG_ERROR_57: 'Transa\u00e7\u00e3o n\u00e3o autorizada. Entre em contato com seu banco emissor.',
  BRASPAG_ERROR_62: 'Cart\u00e3o inv\u00e1lido para compras online, entre em contato com o seu banco emissor.',
  BRASPAG_ERROR_63: 'Transa\u00e7\u00e3o n\u00e3o autorizada. Entre em contato com seu banco emissor.',
  BRASPAG_STATUS_NEW: 'Em processo',
  BRASPAG_STATUS_VELOCITY_REJECT: 'Rejeitado pelo Velocity',
  BRASPAG_STATUS_AUTHORIZATION_FAILED: 'Falha na autoriza\u00e7\u00e3o',
  BRASPAG_STATUS_ANTIFRAUD: 'Em processo de valida\u00e7\u00e3o',
  BRASPAG_STATUS_ANTIFRAUD_REVIEW: 'Em revis\u00e3o',
  BRASPAG_STATUS_ANTIFRAUD_REJECT: 'Rejeitado pelo AntiFraude',
  BRASPAG_STATUS_ANTIFRAUD_FAILED: 'Falha na valida\u00e7\u00e3o',
  BRASPAG_STATUS_CAPTURE: 'Em captura',
  BRASPAG_STATUS_CAPTURE_FAILED: 'Falha na captura',
  BRASPAG_STATUS_CAPTURED: 'Capturado',
  BRASPAG_STATUS_INACTIVE: 'Inativo',
  BRASPAG_STATUS_CANCELLED: 'Cancelado',
  BRASPAG_STATUS_DISAPPROVED: 'Desaprovado',
  BRASPAG_PAYMENT_STATUS_0: 'N\u00e3o finalizado',
  BRASPAG_PAYMENT_STATUS_1: 'Autorizado',
  BRASPAG_PAYMENT_STATUS_2: 'Pagamento Confirmado',
  BRASPAG_PAYMENT_STATUS_3: 'Negado',
  BRASPAG_PAYMENT_STATUS_10: 'Anulado',
  BRASPAG_PAYMENT_STATUS_11: 'Reembolsado',
  BRASPAG_PAYMENT_STATUS_12: 'Pendente',
  BRASPAG_PAYMENT_STATUS_13: 'Abortado',
  BRASPAG_PAYMENT_STATUS_20: 'Agendado',
  FRIENDLY_STATUS: {
    Unpaid: 'unpaid', 'Unpaid Expired': 'unpaidExpired', Paid: 'paid', 'Payment Pending': 'paymentPending', Cancelled: 'cancelled', Refunded: 'refunded', Collections: 'sentBilling',
  },
  PAYMENT_METHODS: { cc: 'braspag', paypal: 'paypal', boleto: 'boleto' },
  FORM_OPEN_CHAT_DISCLAIMER: 'Caso não encontre a opção desejada na lista abaixo, inicie um <b>atendimento por chat.</b>',
};

const HgProducts = country != 'br'
  ? {
    LINUX_PROFESIONAL: 7,
    SSL_FREE: 176,
    PLAN_EMPRENDEDOR: 5,
    PLAN_D_NEGOCIOS: 6,
    PLAN_PROFESSIONAL: 7,
    SHARED_GID: 1,
    WEB_HOSTING_COMPARTIDO_WINDOWS_PLAN_EMPRENDEDOR: 8,
    WEB_HOSTING_COMPARTIDO_WINDOWS_PLAN_DE_NEGOCIOS: 9,
    WEB_HOSTING_COMPARTIDO_WINDOWS_PLAN_PROFESSIONAL: 10,
    ALOJAMENTO_3: 213,
    GMAIL_PROFESIONAL: 12,
    RESELLER_GID: 4,
    RESELLER_ALUMINIO: 50,
    RESELLER_COBRE: 51,
    RESELLER_PLATA: 52,
    RESELLER_ORO: 53,
    RESELLER_DIAMANTE: 54,
    RESELLER_INICIANDO: 229,
    RESELLER_CRECIENDO: 230,
    RESELLER_EXPANDIENDO: 231,
    RESELLER_VETERANO: 232,
    RESELLER_VETERANO_100: 233,
    RESELLER_VETERANO_150: 234,
    RESELLER_VETERANO_200: 235,
    RESELLER_VETERANO_300: 236,
    RESELLER_VETERANO_500: 237,
    RESELLER_VETERANO_1000: 240,
    RESELLER_VETERANO_1200: 238,
    DEDICATED_GID: 5,
    SERVIDOR_DEDICADO_LINUX_PLAN_BASICO: 56,
    SERVIDOR_DEDICADO_WINDOWS_PLAN_BASICO: 57,
    SERVIDOR_DEDICADO_LINUX_PLAN_ESTANDAR: 58,
    SERVIDOR_DEDICADO_WINDOWS_PLAN_ESTANDAR: 59,
    SERVIDOR_DEDICADO_LINUX_PLAN_ELITE: 60,
    SERVIDOR_DEDICADO_WINDOWS_PLAN_ELITE: 61,
    SERVIDOR_DEDICADO_LINUX_PLAN_PRO: 64,
    SERVIDOR_DEDICADO_WINDOWS_PLAN_PRO: 65,
    DEDICADO_LINUX_BLACK: 204,
    DEDICADO_LINUX_SAPPHIRE: 205,
    DEDICADO_LINUX_DIAMOND: 206,
    DEDICADO_WINDOWS_BLACK: 208,
    DEDICADO_WINDOWS_SAPPHIRE: 209,
    DEDICADO_WINDOWS_DIAMOND: 210,
    DEDICATED_ALL: [
      56,
      57,
      58,
      59,
      60,
      61,
      64,
      65,
      204,
      205,
      206,
      208,
      209,
      210,
    ],
    BLOG: 100,
    BUSINESS: 101,
    PRO: 102,
    VPS_GID: 8,
    VPS_SNAPPY_500: 133,
    VPS_SNAPPY_1000_CPANEL: 134,
    VPS_SNAPPY_1000: 135,
    VPS_SNAPPY_2000_CPANEL: 136,
    VPS_SNAPPY_2000: 137,
    VPS_SNAPPY_4000_CPANEL: 138,
    VPS_SNAPPY_4000: 139,
    VPS_SNAPPY_8000_CPANEL: 140,
    VPS_SNAPPY_8000: 141,
    VPS_STANDARD: 203,
    VPS_OPTIMIZED: 202,
    VPS_PLATINUM: 201,
    VPS_ENTRY: 215,
    VPS_PREMIUM: 216,
    VPS_ALL: [
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      203,
      202,
      201,
      215,
      216,
    ],
    TRANSFERENCIA: 143,
    HORA_TECNICA: 144,
    CAMBIO_DE_DOMINIO_PRIMARIO: 146,
    POSITIVE_SSL: 147,
    EV_SSL: 148,
    EXTENDED_SSL: 149,
    IP_DEDICADA: 150,
    INSTALACION_DE_SSL: 152,
    RESTAURACION_DE_COPIA_DE_SEGURIDAD: 153,
    CHIP_RAM_12GB: 155,
    COMODO_WILDCARD_SSL: 156,
    CODEGUARD_PLAN_BASICO: 157,
    CODEGUARD_PLAN_INICIANTE: 158,
    CODEGUARD_PLAN_PROFESIONAL: 159,
    CODEGUARD_PLAN_EMPRESARIAL: 160,
    WEEBLY_BASICO: 161,
    WEEBLY_INICIANTE: 162,
    WEEBLY_PROFESIONAL: 163,
    CREADOR_DE_SITIOS_GID_ADDON: 13,
    CREADOR_DE_SITIOS_GID: 14,
    CREADOR_DE_SITIOS_PERSONAL: 164,
    CREADOR_DE_SITIOS_PROFESIONAL: 165,
    CREADOR_DE_SITIOS_TIENDA_EN_LINEA: 166,
    CREADOR_DE_SITIOS_PERSONAL_ADDON: 167,
    CREADOR_DE_SITIOS_ADDON: 214,
    CREADOR_DE_SITIOS_PROFESIONAL_ADDON: 168,
    CREADOR_DE_SITIOS_TIENDA_EN_LINEA_ADDON: 169,
    CREADOR_DE_SITIOS: [
      164,
      165,
      166,
      167,
      168,
      169,
      214,
    ],
    WEB_HOSTING_CREADOR_DE_SITIOS_PERSONAL: 170,
    WEB_HOSTING_CREADOR_DE_SITIOS_PROFESIONAL: 171,
    WEB_HOSTING_CREADOR_DE_SITIOS_TIENDA_EN_LINEA: 172,
    HOSTING_CREADOR_DE_SITIOS: [
      170,
      171,
      172,
    ],
    PROTECCION_WHOIS: 173,
    PLAN_PERSONAL: 174,
    SSL_GRATUITO: 176,
    SSL_PRIVADO: 177,
    SSL_EV: 178,
    SSL_WILDCARD: 179,
    PRODUCT_GROUPS: {
      ssl: [
        176,
        178,
        177,
        179,
      ],
      websitebuilder: [
        170,
        171,
        172,
        164,
        165,
        166,
        167,
        168,
        169,
        214,
      ],
      reseller: [50,
        51,
        52,
        53,
        54],
    },
    STANDALONE_GROUPS: [],
    PRODUCT_GIDS: {
      vps: 8,
      dedicated: 5,
      reseller: 4,
      shared: 1,
      wphosting: [],
      weebly: [],
      websitebuilder: [],
      gapps: [],
    },
    PORTAL_PRODUCT_IDS: [
      174,
      5,
      6,
      7,
      50,
      51,
      52,
      53,
      54,
      56,
      58,
      60,
      64,
      57,
      59,
      61,
      65,
      134,
      136,
      138,
      140,
      161,
      162,
      163,
      164,
      165,
      166,
    ],
    PRO_EMAIL_GID: 16,
    PRO_EMAIL_PRO_TRIAL: 244,
    PRO_EMAIL_PRO: 242,
    PRO_EMAIL_PREMIUM: 243,
    PRO_EMAIL_ULTRA: 245,
    PRO_EMAIL_ALL: [
      242,
      243,
      244,
      245,
    ],
  }
  : {
    BUSINESS: 7,
    PLUS: 47,
    SHARED_GID: 1,
    PLANO_P: 5,
    PLANO_M: 6,
    PLANO_START: 437,
    PLANO_STARTER: 437,
    PLANO_BUSINESS: 7,
    HOSPEDAGEM_3: 335,
    HOSPEDAGEM_COLABORADORES: 247,
    SHARED_ALL: [
      5,
      6,
      7,
      247,
      335,
      437,
    ],
    RESELLER_GID: 4,
    REVENDA_1: 50,
    REVENDA_2: 51,
    REVENDA_3: 52,
    REVENDA_4: 53,
    REVENDA_5: 54,
    REVENDA_COMECANDO: 385,
    REVENDA_CRESCENDO: 388,
    REVENDA_EXPANDINDO: 391,
    REVENDA_VETERANO: 394,
    REVENDA_VETERANO_100: 397,
    REVENDA_VETERANO_200: 400,
    REVENDA_VETERANO_300: 403,
    REVENDA_VETERANO_500: 406,
    REVENDA_VETERANO_150: 409,
    REVENDA_VETERANO_1000: 412,
    REVENDA_VETERANO_1200: 415,
    RESELLER_ALL: [
      50,
      51,
      52,
      53,
      54,
      385,
      388,
      391,
      394,
      397,
      400,
      403,
      406,
      409,
      412,
      415,
    ],
    DEDICATED_GID: 5,
    DEDICADO_LINUX_BASICO: 56,
    DEDICADO_WINDOWS_BASICO: 57,
    DEDICADO_LINUX_STANDARD: 58,
    DEDICADO_WINDOWS_STANDARD: 59,
    DEDICADO_LINUX_ELITE: 60,
    DEDICADO_WINDOWS_ELITE: 61,
    DEDICADO_HG1_EMPRESA: 62,
    DEDICADO_HG2_EMPRESA: 63,
    DEDICADO_LINUX_PRO: 64,
    DEDICADO_WINDOWS_PRO: 65,
    DEDICADO_LINUX_BLACK: 311,
    DEDICADO_LINUX_SAPPHIRE: 314,
    DEDICADO_LINUX_DIAMOND: 317,
    DEDICADO_WINDOWS_BLACK: 320,
    DEDICADO_WINDOWS_SAPPHIRE: 326,
    DEDICADO_WINDOWS_DIAMOND: 323,
    DEDICATED_ALL: [
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      311,
      314,
      317,
      320,
      326,
      323,
    ],
    VPS_GID: 6,
    VPS_1: 68,
    VPS_2: 69,
    VPS_3: 70,
    VPS_4: 71,
    VPS_5: 72,
    VPS_6: 73,
    VPS_7: 74,
    VPS_8: 75,
    VPS_9: 76,
    VPS_500: 133,
    VPS_1000_WHM: 134,
    VPS_1000_SEM_WHM: 135,
    VPS_2000_WHM: 136,
    VPS_2000_SEM_WHM: 137,
    VPS_4000_WHM: 138,
    VPS_4000_SEM_WHM: 139,
    VPS_8000_WHM: 140,
    VPS_8000_SEM_WHM: 141,
    VPS_OPTIMIZED: 302,
    VPS_PLATINUM: 305,
    VPS_STANDARD: 308,
    VPS_ENTRY: 343,
    VPS_PREMIUM: 346,
    VPS_ALL: [
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      302,
      305,
      308,
      343,
      346,
    ],
    CRIADORDESITES: [
      272,
      278,
      284,
    ],
    SERVICES_GID: 7,
    CERTIFICADO_SSL: 8,
    CERTIFICADO_SSL_IP: 9,
    CERTIFICADO_SSL_EMPRESARIAL: 10,
    HORA_TECNICA_SYSADMIN: 13,
    INSTALACAO_WHMCS: 14,
    IP_DEDICADO: 15,
    PROTECAO_WHOIS_ENOM: 48,
    PLACA_RAID: 49,
    UPGRADE_UPLINK_100: 67,
    WHMCS_VPS: 78,
    CPANEL_VPS: 85,
    STREAMING_ADICIONAL_128: 88,
    STREAMING_AUTODJ_2GB: 89,
    INSTALACAO_SSL: 90,
    UPGRADE_RAM: 91,
    MSSQL_2014_STANDARD: 92,
    MSSQL_2014_ENTERPRISE: 93,
    RESTAURACAO_BACKUP: 94,
    SMARTERMAIL_PROFESSIONAL_UNLIMITED_MENSAL: 95,
    UPGRADE_HD_250GB: 96,
    UPGRADE_HD_500GB: 97,
    UPGRADE_HD_750GB: 98,
    UPGRADE_HD_1TB: 99,
    ALTERACAO_DOMINIO_PRIMARIO: 100,
    UPGRADE_HD_2TB: 101,
    UPGRADE_HD_3TB: 102,
    LICENCA_TERMINAL_SERVICES: 103,
    MSSQL_2014_WEB: 104,
    UPGRADE_UPLINK_1000: 105,
    SMARTERMAIL_ENTERPRISE_UNLIMITED_MENSAL: 106,
    SITEBUILDER_50_LICENCAS: 111,
    SITEBUILDER_100_LICENCAS: 112,
    SITEBUILDER_500_LICENCAS: 113,
    SMARTERMAIL_ENTERPRISE_250_MENSAL: 114,
    SMARTERMAIL_ENTERPRISE_250_UNICO: 115,
    UPGRADE_SAN_PROVO_100GB: 117,
    UPGRADE_SAN_PROVO_250GB: 118,
    UPGRADE_SAN_PROVO_500GB: 119,
    UPGRADE_SAN_PROVO_750GB: 120,
    UPGRADE_SAN_PROVO_1TB: 121,
    UPGRADE_SAN_PROVO_2TB: 122,
    GOMOBI: 123,
    UPGRADE_SAN_PROVO_2_5TB: 125,
    UPGRADE_SAN_PROVO_3TB: 126,
    UPGRADE_SAN_PROVO_3_5TB: 127,
    UPGRADE_SAN_PROVO_4TB: 128,
    LOGO_FREELOGOSERVICES: 129,
    CARTOES_250_FREELOGOSERVICES: 130,
    JUMPSTART: 132,
    UPGRADE_RAM_PROVO_4GB: 142,
    UPGRADE_RAM_PROVO_8GB: 143,
    UPGRADE_RAM_PROVO_12GB: 144,
    UPGRADE_RAM_PROVO_16GB: 145,
    UPGRADE_RAM_PROVO_20GB: 146,
    UPGRADE_RAM_PROVO_24GB: 147,
    UPGRADE_RAM_PROVO_28GB: 148,
    WEEBLY_INICIANTE: 151,
    WEEBLY_PRO: 152,
    WEEBLY_EMPRESARIAL: 153,
    WEEBLY_BASICO: 154,
    SMARTERMAIL_ENTERPRISE_1000_UNICO: 156,
    SMARTERMAIL_PROFESSIONAL_1000_UNICO: 157,
    SMARTERMAIL_PROFESSIONAL_250_UNICO: 165,
    SMARTERMAIL_PROFESSIONAL_250_MENSAL: 168,
    SMARTERMAIL_PROFESSIONAL_1000_MENSAL: 171,
    SMARTERMAIL_PROFESSIONAL_UNLIMITED_UNICO: 174,
    SMARTERMAIL_ENTERPRISE_1000_MENSAL: 177,
    SMARTERMAIL_ENTERPRISE_UNLIMITED_UNICO: 180,
    SMARTERSTATS_PROFESSIONAL_50_UNICO: 186,
    SMARTERSTATS_PROFESSIONAL_50_MENSAL: 189,
    SMARTERSTATS_PROFESSIONAL_250_UNICO: 192,
    SMARTERSTATS_PROFESSIONAL_250_MENSAL: 195,
    SMARTERSTATS_PROFESSIONAL_1000_UNICO: 198,
    SMARTERSTATS_PROFESSIONAL_1000_MENSAL: 201,
    SMARTERSTATS_ENTERPRISE_50_UNICO: 204,
    SMARTERSTATS_ENTERPRISE_50_MENSAL: 207,
    SMARTERSTATS_ENTERPRISE_250_UNICO: 210,
    SMARTERSTATS_ENTERPRISE_250_MENSAL: 213,
    SMARTERSTATS_ENTERPRISE_1000_UNICO: 216,
    SMARTERSTATS_ENTERPRISE_1000_MENSAL: 219,
    SMARTERTRACK_PROFESSIONAL_2: 222,
    SMARTERTRACK_PROFESSIONAL_5: 225,
    SMARTERTRACK_PROFESSIONAL_10: 228,
    SMARTERTRACK_ENTERPRISE_5: 231,
    SMARTERTRACK_ENTERPRISE_10: 234,
    CERTIFICADO_SSL_WILDCARD: 261,
    CRIADOR_SITES_LOJA: 272,
    CRIADOR_SITES_LOJA_ADDON: 275,
    CRIADOR_SITES_PESSOAL: 278,
    CRIADOR_SITES_PESSOAL_ADDON: 281,
    CRIADOR_SITES_PROFISSIONAL: 284,
    CRIADOR_SITES_PROFISSIONAL_ADDON: 287,
    CRIADOR_SITES_ADDON: 338,
    SSL_FREE: 290,
    SSL_PRIVADO: 293,
    SSL_EMPRESARIAL: 296,
    SSL_WILDCARD: 299,
    MSSQL_2017_2CORE_WEB: 349,
    MSSQL_2017_2CORE_STANDARD: 352,
    MSSQL_2017_2CORE_ENTERPRISE: 355,
    MSSQL_2017_4CORE_WEB: 358,
    MSSQL_2017_4CORE_STANDARD: 361,
    MSSQL_2017_4CORE_ENTERPRISE: 364,
    MSSQL_2017_8CORE_WEB: 367,
    MSSQL_2017_8CORE_STANDARD: 370,
    MSSQL_2017_8CORE_ENTERPRISE: 373,
    MSSQL_2017_16CORE_WEB: 376,
    MSSQL_2017_16CORE_STANDARD: 379,
    MSSQL_2017_16CORE_ENTERPRISE: 382,
    SERVICES_ALL: [
      8,
      9,
      10,
      13,
      14,
      15,
      48,
      49,
      67,
      78,
      85,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      125,
      126,
      127,
      128,
      129,
      130,
      132,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      151,
      152,
      153,
      154,
      156,
      157,
      165,
      168,
      171,
      174,
      177,
      180,
      186,
      189,
      192,
      195,
      198,
      201,
      204,
      207,
      210,
      213,
      216,
      219,
      222,
      225,
      228,
      231,
      234,
      261,
      272,
      275,
      278,
      281,
      284,
      287,
      290,
      293,
      296,
      299,
      338,
      349,
      352,
      355,
      358,
      361,
      364,
      367,
      370,
      373,
      376,
      379,
      382,
    ],
    SITELOCK_BASIC: 107,
    SITELOCK_PROFESSIONAL: 108,
    SITELOCK_PREMIUM: 109,
    SITELOCK_ENTERPRISE: 110,
    SITELOCK_ALL: [
      107,
      108,
      109,
      110,
    ],
    PLUS_GID: 10,
    HOSPEDAGEM_PLUS: 47,
    PLUS_2: 83,
    PLUS_3: 84,
    REVENDA_PLUS: 86,
    PLUS_ALL: [
      47,
      83,
      84,
      86,
    ],
    DOMAINS_GID: 12,
    DOMINIO_INTERNACIONAL: 11,
    DOMINIO_NACIONAL: 12,
    TRANSFERENCIA_DOMINIO_INTERNACIONAL: 66,
    DOMAINS_ALL: [
      11,
      12,
      66,
    ],
    STREAMING_GID: 13,
    RADIO_ONLINE_1: 79,
    RADIO_ONLINE_2: 80,
    RADIO_ONLINE_3: 81,
    RADIO_ONLINE_4: 82,
    STREAMING_1_AUTOMATICO: 116,
    STREAMING_ALL: [
      79,
      80,
      81,
      82,
      116,
    ],
    WEEBLY_GID: 15,
    WEEBLY_HOST_INICIANTE: 149,
    WEEBLY_HOST_PRO: 150,
    WEEBLY_HOST_BASICO: 155,
    WEEBLY_ALL: [
      149,
      150,
      155,
    ],
    GAPPS_GID: 16,
    GOOGLE_APPS: 159,
    GAPPS_ALL: [
      159,
    ],
    GAPPS_ADDON_MONTH: 6,
    GAPPS_ADDON_ANNUALY: 12,
    CODEGUARD_GID: 19,
    CODEGUARD_BASICO: 235,
    CODEGUARD_INICIANTE: 238,
    CODEGUARD_PROFISSIONAL: 241,
    CODEGUARD_PREMIUM: 244,
    CODEGUARD_ALL: [
      235,
      238,
      241,
      244,
    ],
    WPHOSTING_GID: 22,
    WORDPRESS_BLOG: 250,
    WORDPRESS_STARTUP: 253,
    WORDPRESS_PRO: 256,
    WORDPRESS_VIP: 259,
    WPHOSTING_ALL: [
      250,
      253,
      256,
      259,
    ],
    CRIADOR_SITES_GID: 23,
    CRIADOR_SITES_HOST_PESSOAL: 263,
    CRIADOR_SITES_HOST_PROFISSIONAL: 266,
    CRIADOR_SITES_HOST_LOJA: 269,
    CRIADOR_SITES_ALL: [
      263,
      266,
      269,

    ],
    CRIADOR_SITES_ALL_AND_ADDONS: [
      263,
      266,
      269,
      272,
      278,
      284,
      275,
      281,
      287,
      338,
    ],
    PRODUCT_GROUPS: {
      ssl: [
        296,
        290,
        293,
        299,
      ],
      websitebuilder: [
        263,
        266,
        269,
        272,
        278,
        284,
        275,
        281,
        287,
        338,
      ],
      wphosting: [
        250,
        253,
        256,
        259,
      ],
      sitelock: [
        107,
        108,
        109,
        110,
      ],
      reseller: [
        50,
        51,
        52,
        53,
        54,
      ],
      webpresence: [

      ],
    },
    STANDALONE_GROUPS: {
      sitelock: [
        107,
        108,
        109,
        110,
      ],
      websitebuilder: [
        263,
        266,
        269,
        272,
        278,
        284,
        275,
        281,
        287,
        338,
      ],
      wphosting: [
        250,
        253,
        256,
        259,
      ],
      codeguard: [
        235,
        238,
        241,
        244,
      ],
      weebly: [
        149,
        150,
        155,
      ],
      gapps: [
        159,
      ],
      radio: [
        79,
        80,
        81,
        82,
        116,
      ],
    },
    PRODUCT_GIDS: {
      vps: 6,
      dedicated: 5,
      reseller: 4,
      shared: 1,
      wphosting: 22,
      weebly: 15,
      websitebuilder: 23,
      gapps: 16,
      plus: 10,
    },
    PORTAL_PRODUCT_IDS: [
      247,
      5,
      6,
      7,
      155,
      149,
      150,
      50,
      51,
      52,
      53,
      54,
      56,
      58,
      60,
      64,
      57,
      59,
      61,
      65,
      134,
      136,
      138,
      140,
      47,
      250,
      256,
      253,
      259,
      272,
      278,
      284,
    ],
    PRO_EMAIL_GID: 28,
    PRO_EMAIL_PRO_TRIAL: 430,
    PRO_EMAIL_PRO: 421,
    PRO_EMAIL_PREMIUM: 424,
    PRO_EMAIL_ULTRA: 443,
    PRO_EMAIL_ALL: [
      421,
      424,
      430,
      443,
    ],
  };

HgZendeskFormValidation = (function () {
  return {
    isInGroup(id, group) {
      let ids;
      if (group.some(Array.isArray)) {
        ids = group.reduce((prev, next) => prev.concat(Array.isArray(next) ? next : [next]), []);
      } else {
        ids = group;
      }
      return ids.indexOf(id) !== -1;
    },
    isProduct(id, products) {
      if (!Array.isArray(products)) return id === products;
      return products.indexOf(id) !== -1;
    },
  };
}());

HgZendeskFormConfig = (function () {
  return function (f) {
    const form = Object.assign({}, f);
    const allForms = HgZendeskForms.getAll(form);
    const disabledCancelSolicitationOption = (jQuery('#disabledCancelSolicitationOption').val() === 'true');

    if (disabledCancelSolicitationOption) {
      allForms.shift();
    }

    const formItems = allForms;

    const rootInputs = [
      {
        label: lang.FORM_SECTOR,
        type: 'radio',
        inline: true,
        name: 'support',
        depends: 'product',
        visible() {
          return form.product && form.product.value > 0;
        },
        options: [
          { name: lang.FORM_SALES_SUPPORT, value: 1 },
          { hidden: form.product && !form.product.active, name: lang.FORM_TECH_SUPPORT, value: 2 },
        ],
      },
      {
        label: lang.FORM_OPEN_CHAT_DISCLAIMER,
        type: 'disclaimer',
        inline: true,
        name: 'explanation',
        optional: true,
        visible() {
          return form.product && form.product.value > 0;
        },
      },
      {
        label: lang.FORM_SUPPORT_LABEL,
        type: 'select',
        name: 'salessupport',
        depends: 'support',
        visible() {
          return form.support && form.support.value == 1;
        },
        root: true,
        options: [],
      },
      {
        label: lang.FORM_SUPPORT_LABEL,
        type: 'select',
        name: 'techsupport',
        depends: 'support',
        visible() {
          return form.support && form.support.value == 2;
        },
        root: true,
        options: [],
      },
    ].filter(item => !!item).filter(input => input.visible());

    const otherInptus = [];
    function setInputsForRoot(root, name) {
      const inputName = name || root.name;
      const options = formItems.filter(item => item.root.name == root.name && item.visible());
      root.options = options.map((option) => {
        const config = {
          tags: option.tags,
          subject: option.subject,
          key: option.key,
          automation: option.automation || false,
          category_id: option.category_id,
          category_value: option.category_value,
          group_id: option.group_id,
          sub_category_id: option.sub_category_id,
          sub_category_value: option.sub_category,
        };
        return Object.assign({ name: option.root.as, value: option.key }, option.root.option, {
          form: config,
          fields: option.fields,
          text: option.text,
          optOrder: option.optOrder,
        });
      }).sort((a, b) => {
        if (a.optOrder && b.optOrder) {
          if (a.optOrder < b.optOrder) return -1;
          if (a.optOrder > b.optOrder) return 1;
          return 0;
        }
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      for (var j = 0; j < root.options.length; j++) {
        if (form[inputName] && form[inputName].value == root.options[j].value) {
          root.options[j].fields.forEach((field, index) => {
            if (!field.visible || field.visible()) otherInptus.push(Object.assign({ depends: inputName, name: root.options[j].form.key + index }, field));
          });
        }
        delete root.options[j].fields;
      }
    }

    for (let i = 0; i < rootInputs.length; i++) {
      if (rootInputs[i].root) {
        setInputsForRoot(rootInputs[i]);
      }
    }

    const validatedVPS = form.products.map((product) => {
      if (product.dedicatedip !== '' && product.dedicatedip !== undefined) {
        const newProduct = { ...product };
        newProduct.name = `${newProduct.name} - IP: ${newProduct.dedicatedip}`;
        if (newProduct.active) {
          return newProduct;
        }
      }

      return product;
    });
    form.products = validatedVPS;

    const ativos = {
      group: true,
      groupLabel: lang.FORM_ACTIVE_LABEL,
      options: form.products.filter((a) => {
        const isFreeSsl = (isBrazil && a.pid === 290) || (!isBrazil && a.pid === 170);
        return a.active && !isFreeSsl;
      }),
    };

    const suspensos = {
      group: true,
      groupLabel: lang.FORM_SUSPENDED_LABEL,
      options: form.products.filter(a => !a.active),
    };

    const opts = [];
    const myAccount = {
      group: true,
      groupLabel: lang.FORM_MY_ACCOUNT_LABEL,
      options: [],
      name: 'accountsupport',
    };

    setInputsForRoot(myAccount, 'product');
    delete myAccount.name;
    opts.push(myAccount);

    if (ativos.options.length) {
      opts.push(ativos);
    }

    if (suspensos.options.length) {
      opts.push(suspensos);
    }

    const inputs = [{
      label: lang.FORM_PRODUCT_SELECT_LABEL,
      type: 'select',
      name: 'product',
      visible: true,
      options: opts,
      depends: 'products',
    }]
      .concat(rootInputs.filter(root => root.visible()))
      .concat(otherInptus)
      .map((opt, index) => Object.assign(opt, { order: index }));
    return inputs;
  };
}());

HgZendeskForms = (function () {
  const forms = [];
  const getFormValue = function (form, fields) {
    let temp = form;
    while (fields.length) {
      const next = fields.shift();
      if (!temp[next]) { return ''; }
      temp = temp[next];
    }
    return temp;
  };

  const getVal = function (form, array) {
    const from = array.shift();
    switch (from) {
      case 'local':
        return array.shift();
      case 'form':
        return getFormValue(form, array);
    }
  };

  var validate = function (form, rule) {
    if (rule.or) {
      return rule.or.some(item => validate(form, item));
    } if (rule.and) {
      return rule.and.every(item => validate(form, item));
    }
    const { method } = rule;
    switch (method) {
      case 'eq':
        var a = Array.isArray(rule.vars[0]) ? getVal(form, rule.vars[0]) : rule.vars[0];
        var b = Array.isArray(rule.vars[1]) ? getVal(form, rule.vars[1]) : rule.vars[1];
        return a == b;
      case 'isInGroup':
        var groups = rule.vars.map(r => HgProducts[r]);
        var pid = getVal(form, ['form', 'product', 'pid']);
        if (pid) return HgZendeskFormValidation.isInGroup(pid, groups);
      case 'isProduct':
      case 'notIsProduct':
        var products = rule.vars.map(r => HgProducts[r]);
        var pid = getVal(form, ['form', 'product', 'pid']);
        if (pid) {
          if (method == 'isProduct') return HgZendeskFormValidation.isProduct(pid, products);
          return !HgZendeskFormValidation.isProduct(pid, products);
        }
    }
    return false;
  };
  return {
    getAll(form) {
      return forms.map(f => f(form));
    },
    registerForm(item) {
      forms.push(item);
    },
    registerFromYaml(data) {
      forms.push((form) => {
        const obj = JSON.parse(JSON.stringify(data));
        if (!obj.showWhen) {
          obj.visible = function () {
            return true;
          };
        } else {
          obj.visible = function () {
            return obj.showWhen.some(rule => validate(form, rule));
          };
        }
        for (let i = 0; i < obj.fields.length; i++) {
          const field = obj.fields[i];
          if (field.defaultValue) {
            field.default = getVal(form, Array.isArray(field.defaultValue) ? field.defaultValue : ['local', field.defaultValue]);
            delete field.defaultValue;
          }
          if (!field.options) continue;
          for (let j = 0; j < field.options.length; j++) {
            const option = field.options[j];
            if (!option.hideWhen) continue;
            option.hidden = option.hideWhen.some(rule => validate(form, rule));
            delete option.hideWhen;
          }
        }
        return obj;
      });
    },
  };
}());

const hgFeedbackTpl = '        <div class="alert alert-info2" v-show="total != 0" role="alert">\n'
    + '            <p v-html="text"></p>\n'
    + '        </div>';


const hgCancelTpl = '        <div id="hg-cancel-wizard">\n'
    + '            <label class="form-check-label">O que deseja cancelar?</label>\n'
    + '\n'
    + '            <!-- Nenhum produto para ser cancelado-->\n'
    + '            <div v-if="showWarning">\n'
    + '                <div class="alert alert-warning" role="alert">\n'
    + '                    Não é possível realizar cancelamento, pois você não possui nenhum produto ativo ou suspenso.\n'
    + '                </div>\n'
    + '            </div>\n'
    + '\n'
    + '\n'
    + '            <div v-if="hostings.length">\n'
    + '                <div class="section panel panel-default panel-actions">\n'
    + '                    <div class="panel-heading">\n'
    + '                        <span class="arrow-toggle" data-toggle="collapse" data-target="#collapseH">\n'
    + '                            <h4 class="panel-title">Hospedagens\n'
    + '                              <span class="fa fa-chevron-up pull-right" ></span>\n'
    + '                              <span class="fa fa-chevron-down pull-right" ></span>\n'
    + '                            </h4>\n'
    + '                        </span>\n'
    + '                    </div>\n'
    + '\n'
    + '                    <div id="collapseH" class="collapse in" aria-expanded="true">\n'
    + '                        <div class="panel-body">\n'
    + '                            <form class="" id="">\n'
    + '                                <div v-if="gsuiteHosting" class="alert alert-warning alert-dismissible fade show" role="alert">\n'
    + '                                    <button type="button" class="close" @click="gsuiteHosting=false" aria-label="Close">\n'
    + '                                        <span aria-hidden="true">&times;</span>\n'
    + '                                    </button>\n'
    + '                                    Você está cancelando o E-mail Profissional (Google Apps). Como a contratação foi realizada em conjunto com a hospedagem, com esse cancelamento você perderá o desconto nela.\n'
    + '                                </div>\n'
    + '                                <div v-for="(opt, index) in hostings">\n'
    + '                                    <div class="form-group">\n'
    + '                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" :value="opt.id" v-model="selectedHostings" @change="checkProductService(opt, $event)">\n'
    + '                                        <span class="form-check-label" for="exampleCheck1" >{{opt.name}} ({{opt.domain}}) - Usuário: {{opt.username}}</span>\n'
    + '                                        <span class="alert alert-success" v-if="opt.domainstatus == \'Active\' && opt.cancelling_scheduled == null">Ativo - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                        <span class="alert alert-dark" v-if="opt.domainstatus != \'Active\'">Suspenso - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                        <span class="alert alert-warning" v-if="opt.cancelling_scheduled != null">Cancelamento agendado para - {{convertDate(opt.cancelling_scheduled)}}</span>\n'
    + '                                    </div>\n'
    + '                                </div>\n'
    + '                            </form>\n'
    + '                        </div>\n'
    + '                    </div>\n'
    + '                </div>\n'
    + '            </div>\n'
    + '\n'
    + '            <div v-if="domains.length">\n'
    + '                <div class="section panel panel-default panel-actions">\n'
    + '                    <div class="panel-heading">\n'
    + '                        <span class="arrow-toggle" data-toggle="collapse" data-target="#collapseD">\n'
    + '                            <h4 class="panel-title">Dominios\n'
    + '                              <span class="fa fa-chevron-up pull-right" ></span>\n'
    + '                              <span class="fa fa-chevron-down pull-right" ></span>\n'
    + '                            </h4>\n'
    + '                        </span>\n'
    + '                    </div>\n'
    + '\n'
    + '                    <div id="collapseD" class="collapse in" aria-expanded="false">\n'
    + '                        <div class="panel-body">\n'
    + '                            <form class="" id="">\n'
    + '                                <div v-if="domainsRelatedToHosting.length" class="alert alert-warning alert-dismissible fade show" role="alert">\n'
    + '                                    <button type="button" class="close" @click="domainsRelatedToHosting=false" aria-label="Close">\n'
    + '                                        <span aria-hidden="true">&times;</span>\n'
    + '                                    </button>\n'
    + '                                    Você está cancelando a renovação do domínio <b>{{domainsRelatedToHosting}}</b>. Lembre-se de verificar se ele é o domínio que você utiliza na sua hospedagem, pois seu site poderá ser afetado.\n'
    + '                                </div>\n'
    + '\n'
    + '                                <div v-for="(opt, index) in domains">\n'
    + '                                    <div class="form-group">\n'
    + '                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" :value="opt.id" v-model="selectedDomains" @change="checkProductService(opt, $event)">\n'
    + '                                        <span class="form-check-label" for="exampleCheck1">{{opt.domain}}</span>\n'
    + '                                        <span class="alert alert-success" v-if="opt.status == \'Active\' && opt.donotrenew == 0">Ativo - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                        <span class="alert alert-dark" v-if="opt.status != \'Active\'">Suspenso - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                        <span class="alert alert-warning" v-if="opt.donotrenew != 0">Cancelamento agendado para - {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                    </div>\n'
    + '\n'
    + '                                </div>\n'
    + '                            </form>\n'
    + '                        </div>\n'
    + '                    </div>\n'
    + '                </div>\n'
    + '            </div>\n'
    + '\n'
    + '            <div v-if="services.length">\n'
    + '                <div class="section panel panel-default panel-actions">\n'
    + '                    <div class="panel-heading">\n'
    + '                        <span class="arrow-toggle" data-toggle="collapse" data-target="#collapseA">\n'
    + '                            <h4 class="panel-title">Adicionais\n'
    + '                              <span class="fa fa-chevron-up pull-right" ></span>\n'
    + '                              <span class="fa fa-chevron-down pull-right" ></span>\n'
    + '                            </h4>\n'
    + '                        </span>\n'
    + '                    </div>\n'
    + '\n'
    + '                    <div id="collapseA" class="collapse in" aria-expanded="false">\n'
    + '                        <div class="panel-body">\n'
    + '                            <form class="" id="">\n'
    + '                                <div v-if="sitelockFeeback" class="alert alert-warning alert-dismissible fade show" role="alert">\n'
    + '                                    <button type="button" class="close" @click="sitelockFeeback=false" aria-label="Close">\n'
    + '                                        <span aria-hidden="true">&times;</span>\n'
    + '                                    </button>\n'
    + '                                    Ao cancelar seu Sitelock você perderá a proteção diária. Caso esteja cancelando um Sitelock Premium ou Enterprise, seu site deve parar de funcionar porque usa a função WAF.\n'
    + '                                </div>\n'
    + '                                <div v-if="gsuite" class="alert alert-warning alert-dismissible fade show" role="alert">\n'
    + '                                    <button type="button" class="close" @click="gsuite=false" aria-label="Close">\n'
    + '                                        <span aria-hidden="true">&times;</span>\n'
    + '                                    </button>\n'
    + '                                    Você está cancelando o E-mail Profissional (Google Apps). Lembre-se de fazer os ajustes de apontamento para que o seu e-mail não pare de funcionar.\n'
    + '                                </div>\n'
    + '\n'
    + '                                <div v-if="sslFeedback" class="alert alert-warning alert-dismissible fade show" role="alert">\n'
    + '                                    <button type="button" class="close" @click="sslFeedback=false" aria-label="Close">\n'
    + '                                        <span aria-hidden="true">&times;</span>\n'
    + '                                    </button>\n'
    + '                                    Você está cancelando o seu Certificado SSL. Lembre-se de realizar os ajustes de protocolo HTTPS, pois sem o SSL o funcionamento do seu site estará comprometido.\n'
    + '                                </div>\n'
    + '\n'
    + '                                <div class="" v-for="(opt, index) in services" v-if="opt.origin == \'addon\'">\n'
    + '                                    <div class="form-group">\n'
    + '                                        <input type="checkbox" class="form-check-input"  @change="checkServiceAddons(opt, $event)" :value="opt.id" v-model="selectedAddons">\n'
    + '                                        <span class="form-check-label" for="exampleCheck1">{{opt.name}} ({{opt.domain}}) - Usuário: {{opt.username}}</span>\n'
    + '                                         <span class="alert alert-success" v-if="opt.status == \'Active\' && opt.cancelling_scheduled == null">Ativo - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                         <span class="alert alert-dark" v-if="opt.status == \'Suspended\'">Suspenso - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                         <span class="alert alert-warning" v-if="opt.cancelling_scheduled != null">Cancelamento agendado para - {{convertDate(opt.cancelling_scheduled)}}</span>\n'
    + '                                     </div>\n'
    + '                                </div>\n'
    + '\n'
    + '                                <div class="" v-for="(opt, index) in services" v-if="opt.origin == \'hosting\'">\n'
    + '                                    <div class="form-group">\n'
    + '                                        <input type="checkbox" class="form-check-input"  @change="checkServiceAddons(opt, $event)" :value="opt.id" v-model="selectedHostingsAddons">\n'
    + '                                        <span class="form-check-label" for="exampleCheck1">{{opt.name}} ({{opt.domain}}) - Usuário: {{opt.username}}</span>\n'
    + '                                        <span class="alert alert-success" v-if="opt.domainstatus == \'Active\' && opt.cancelling_scheduled == null">Ativo - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                        <span class="alert alert-dark" v-if="opt.domainstatus == \'suspended\'">Suspenso - Vence em {{convertDate(opt.nextinvoicedate)}}</span>\n'
    + '                                        <span class="alert alert-warning" v-if="opt.cancelling_scheduled != null">Cancelamento agendado para - {{convertDate(opt.cancelling_scheduled)}}</span>\n'
    + '                                    </div>\n'
    + '                                </div>\n'
    + '\n'
    + '\n'
    + '                            </form>\n'
    + '                        </div>\n'
    + '                    </div>\n'
    + '                </div>\n'
    + '            </div>\n'
    + '\n'
    + '\n'
    + '            <div v-show="!loadingTotal && (selectedHostings.length + selectedDomains.length + selectedAddons.length + selectedHostingsAddons.length)">\n'
    + '                <div  v-if="total_refund != 0">\n'
    + '                    <label>\n'
    + '                        Escolha a forma de cancelamento:\n'
    + '                    </label>\n'
    + '                    <ul class="list-unstyled">\n'
    + '                        <li v-if="showScheduled()">\n'
    + '                            <input @click="showCredit=false"  type="radio" v-model="cancel_type" value="final_cycle"/> Permanecer com produtos ativos até as datas de vencimento (após esse período o cancelamento será automático).\n'
    + '                        </li>\n'
    + '                        <li>\n'
    + '                            <input @click="showCredit=true" type="radio" v-model="cancel_type" value="credit_client"/> Cancelar agora e deixar o valor como crédito na conta (para adquirir novos produtos ou serviços).\n'
    + '                        </li>\n'
    + '                    </ul>\n'
    + '                </div>\n'
    + '\n'
    + '                <div v-if="showCredit">\n'
    + '                   <!-- Feedback-->\n'
    + '                   <feedback-msg :x="creditFeedback" :total="total_refund" />\n'
    + '                </div>\n'
    + '\n'
    + '                <div class="form-group">\n'
    + '                    <label class="control-label">\n'
    + '                        Qual o motivo do cancelamento?\n'
    + '                    </label>\n'
    + '                  \n'
    + '                     <select id="motivo1" class="form-control" v-model="selectedReason">\n'
    + '                        <template v-for="(opt, index) in reason" v-if="!opt.hidden">\n'
    + '                            <option :key="index" :disabled="opt.separator" :value="opt.id">{{opt.value}}</option>\n'
    + '                        </template>\n'
    + '                    </select>\n'
    + '                    \n'
    + '                </div>\n'
    + '\n'
    + '                <div class="form-group" v-if="subReason.length">\n'
    + '                    <label class="control-label">\n'
    + '                        Por quê?\n'
    + '                    </label>\n'
    + '                    <select id="motivo2" class="form-control" v-model="selectedSubReason">\n'
    + '                        <template v-for="(opt, index) in subReason">\n'
    + '                            <option :key="index" :value="opt.id">{{opt.value}}</option>\n'
    + '                        </template>\n'
    + '                    </select>\n'
    + '                </div>\n'
    + '\n'
    + '                <div role="alert" class="alert alert-info2">\n'
    + '                    <p><i class="fa fa-exclamation-circle"></i>\n'
    + '                        Lembre-se que, após o cancelamento, todos os dados da conta serão apagados do servidor e não será possível recuperá-los. Antes de confirmar o pedido de cancelamento,\n'
    + '                        <a href="https://suporte.hostgator.com.br/hc/pt-br/articles/115000384513" target="_blank"> realize um backup de sua conta.</a>\n'
    + '                        <br><br>\n'
    + '                        <small>O cancelamento da sua conta só será finalizado quando enviarmos uma confirmação, pois é possível que outras informações sejam solicitadas para concluir o processo.</small>\n'
    + '                    </p>\n'
    + '                </div>\n'
    + '            </div>\n'
    + '\n'
    + '            <div class="section" v-if="(selectedHostings.length + selectedDomains.length + selectedAddons.length + selectedHostingsAddons.length) != 0">\n'
    + '                <button class="btn btn-default" @click="clickCancelar">Não quero mais cancelar</button>\n'
    + '                <button class="btn btn-primary" @click="showDoubleConfirmationModal" :disabled="!sendButton">Confirmar o cancelamento</button>\n'
    + '            </div>\n'
    + '        </div>';

let clientId = 0;

Vue.component('hg-cancel-wizard', {
  props: ['config'],
  template: hgCancelTpl,
  data() {
    return {
      total_refund: 0,
      hostingsType: ['ssl_hosting', 'domain', 'hosting', 'websitebuilder', 'paginafacil', 'codeguard', 'sitelock_hosting', 'sitelock_addon', 'google_addon', 'gsuitestandalone'],
      hostings: [],
      services: [],
      domainsRelatedToHosting: [],
      domains: [],
      gsuite: false,
      gsuiteHosting: false,
      sitelockFeeback: false,
      hostingRelation: false,
      sslFeedback: false,
      creditFeedback: false,
      credit: false,
      confirmouCancelamento: false,
      ids: [],
      finalCycle: true,
      selectedHostings: [],
      selectedDomains: [],
      selectedAddons: [],
      selectedHostingsAddons: [],
      scheduled: [],
      cancelar: false,
      cancel_type: 'final_cycle',
      selectedReason: null,
      selectedSubReason: false,
      reason: [],
      modalTexts: {
        title: '',
        body: '',
        btnCancel: '',
        btnSuccess: '',
      },
      loading: true,
      loadingTotal: false,
      showCredit: false,
    };
  },
  mounted() {
    $('#first-loading').hide();
    ApiService.accessLog(clientId);
  },
  beforeMount() {
    $('#first-loading').show();
    this.getHostings();
    this.getAddons();
    this.getDomains();
    this.getReasons();
  },
  watch: {
    selectedReason() {
      this.selectedSubReason = false;
    },
  },
  computed: {
    sendButton() {
      return (this.selectedHostings.length + this.selectedDomains.length + this.selectedAddons.length
                    + this.selectedHostingsAddons.length) == 0 || (this.selectedReason && (this.subReason.length == 0 || this.selectedSubReason));
    },
    subReason() {
      const self = this;
      const r = this.reason.filter(reason => reason.id == self.selectedReason).pop();
      return r ? r.subreason : [];
    },
    selectedProducts() {
      const self = this;
      let products = [];

      products = products.concat(this.hostings.filter(hosting => self.selectedHostings.indexOf(hosting.id) !== -1).map(hosting => ({
        id: hosting.id,
        type: hosting.type,
      })));

      products = products.concat(this.domains.filter(domain => self.selectedDomains.indexOf(domain.id) !== -1).map(domain => ({
        id: domain.id,
        type: 'domain',

      })));

      products = products.concat(this.services.filter((hostingAddon) => {
        if (hostingAddon.origin == 'addon') {
          return false;
        }
        return self.selectedHostingsAddons.indexOf(hostingAddon.id) !== -1;
      }).map(hostingAddon => ({
        id: hostingAddon.id,
        type: hostingAddon.type,
      })));
      return products;
    },

    showWarning() {
      return !this.loading
                && !this.hostings.length
                && !this.domains.length
                && !this.services.length;
    },

    domainWarning() {
      const self = this;
      self.domainsRelatedToHosting = [];

      const domainsName = this.domains.filter(domain => self.selectedDomains.indexOf(domain.id) !== -1).map(domain => ({
        id: domain.id,
        name: domain.domain,
      }));

      for (let i = 0; i < domainsName.length; i++) {
        self.domainsRelatedToHosting.push(domainsName[i].name);
      }
      self.domainsRelatedToHosting = self.domainsRelatedToHosting.join(', ');
    },
  },
  methods: {

    feedbackMsgs(product, service, toCheck) {
      const self = this;
      // Hosting feedback
      if (product.type == 'hosting') {
        if (service.type == 'domain' && self.selectedDomains.indexOf(service.id) === -1) {
          self.modalTexts.title = 'Cancelamento da Renovação de Domínio';
          self.modalTexts.body = `<p>Você está cancelando o plano <strong>\"${product.name}\"</strong> deseja cancelar também a renovação do seu domínio? </p>`;
          self.modalTexts.btnCancel = 'Não quero cancelar';
          self.modalTexts.btnSuccess = 'Sim, quero cancelar';
          self.showModal(self.modalTexts, toCheck);
        }

        if (service.type == 'sitelock_addon') {
          self.modalConfirme(toCheck);
          self.sitelockFeeback = true;
        }

        if (service.type == 'gsuitestandalone') {
          self.gsuite = true;
        }
      }

      if (product.type == 'google_addon') {
        self.gsuite = true;
      }

      if (product.type == 'ssl_hosting') {
        self.sslFeedback = true;
      }

      if (product.type == 'criador_hosting') {
        if (service.type == 'domain') {
          self.modalTexts.title = 'Cancelamento da Renovação de Domínio';
          self.modalTexts.body = `<p>Você está cancelando o plano <strong>\"${product.name}\"</strong> deseja cancelar também a renovação do seu domínio? </p>`;
          self.modalTexts.btnCancel = 'Não quero cancelar';
          self.modalTexts.btnSuccess = 'Sim, quero cancelar';
          self.showModal(self.modalTexts, toCheck);
        }
      }

      // domain feedback
      if (product.origin == 'domain') {
        if (service.type == 'hosting') {
          return;
        }
        self.modalTexts.title = 'Cancelamento da Renovação de Domínio';

        if (service.type == 'ssl_hosting') {
          self.modalTexts.body = `<p>Você está cancelando o dominio<strong>\"${product.domain}\"</strong> deseja cancelar também a renovação do ${service.name} </p>`;
          self.modalTexts.btnCancel = 'Não quero cancelar';
          self.modalTexts.btnSuccess = 'Sim, quero cancelar';
          self.showModal(self.modalTexts, toCheck);
        }
        if (service.type == 'gsuitestandalone') {
          self.gsuite = true;
        }
      }
      if (product.origin == 'hosting') {
        if (product.type == 'gsuitestandalone') {
          self.gsuite = true;
          if (service.type == 'hosting') {
            self.gsuiteHosting = true;
          }
        }
      }

      if (product.origin == 'addon') {
        if (product.type == 'sitelock_addon') {
          self.sitelockFeeback = true;
        }
      }
    },
    checkProductService(data, event) {
      this.totalRefunds();
      const self = this;
      self.selectedProducts;

      if (event.target.checked) {
        $('#first-loading').show();

        ApiService.checkServices(data.id, data.origin)
          .done((response) => {
            $('#first-loading').hide();

            for (let i = 0; i < response.data.length; i++) {
              self.feedbackMsgs(data, response.data[i], {
                id: response.data[i].id,
                type: response.data[i].type,
                parentId: data.id,
              });
            }
          });
      } else {
        for (let i = 0; i < self.ids.length; i++) {
          if (self.ids[i].parentId == data.id) {
            if (self.ids[i].type == 'domain') {
              for (var j = 0; j < self.selectedDomains.length; j++) {
                if (self.selectedDomains[j] == self.ids[i].id) {
                  self.selectedDomains.splice(j, 1);
                  break;
                }
              }
            } else if (self.ids[i].type == 'sitelock_addon') {
              for (var j = 0; j < self.selectedAddons.length; j++) {
                if (self.selectedAddons[j] == self.ids[i].id) {
                  self.selectedAddons.splice(j, 1);
                  break;
                }
              }
            } else if (self.hostingsType.indexOf(self.ids[i].type) !== -1) {
              for (var j = 0; j < self.selectedHostingsAddons.length; j++) {
                if (self.selectedHostingsAddons[j] == self.ids[i].id) {
                  self.selectedHostingsAddons.splice(j, 1);
                  break;
                }
              }
            }
            // selfselectedproducts
            for (var j = 0; j < self.selectedProducts.length; j++) {
              if (self.selectedProducts[j].id == self.ids[i].id && self.selectedProducts[j].type == self.ids[i].type) {
                self.selectedProducts.splice(j, 1);
                break;
              }
            }
            self.ids.splice(i, 1);
            i--;
          }
        }
        this.totalRefunds();
      }
      self.gsuite = false;
      self.domainWarning;
    },

    checkServiceAddons(data, event) {
      const self = this;
      $('#first-loading').show();
      self.selectedProducts;

      if (event.target.checked) {
        ApiService.checkServices(data.id, data.origin)
          .done((response) => {
            const hostingId = [];
            for (let i = 0; i < response.data.length; i++) {
              if (hostingId.indexOf(response.data[i].id) === -1) {
                hostingId.push(response.data[i].id);
              }
              self.feedbackMsgs(data, response.data[i]);
            }

            if (!response.data.length) {
              self.feedbackMsgs(data, {});
            }
            $('#first-loading').hide();
          });
      } else {
        if (data.type == 'sitelock_addon') {
          self.sitelockFeeback = false;
        }
        if (data.type == 'google_addon' || data.type == 'gsuitestandalone') {
          self.gsuite = false;
          self.gsuiteHosting = false;
        }
        if (data.type == 'ssl_hosting') {
          self.sslFeedback = false;
        }
        $('#first-loading').hide();
      }
      this.totalRefunds();
    },

    checkHostingAddons(data, event) {
      this.totalRefunds();
      self.selectedProducts;
    },

    showScheduled() {
      const self = this;
      let data = [];

      data = data.concat(this.hostings.filter(hosting => self.selectedHostings.indexOf(hosting.id) !== -1));

      data = data.concat(this.services.filter(service => self.selectedHostingsAddons.indexOf(service.id) !== -1));

      let show = true;
      for (let i = 0; i < data.length; i++) {
        if (data[i].cancelling_scheduled !== null) {
          show = false;
          break;
        } else show = true;
      }
      return show;
    },

    getHostings() {
      const self = this;
      ApiService.getHostings()
        .done((response) => {
          self.hostings = response.data;
          self.loading = false;
        });
    },
    getAddons() {
      const self = this;
      ApiService.getAddons()
        .done((response) => {
          self.services = response.data.productAddons.concat(response.data.addons);
        });
    },

    getDomains() {
      const self = this;
      ApiService.getDomains()
        .done((response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].donotrenew != 1) {
              self.domains.push(response.data[i]);
            }
          }
        });
    },

    getReasons(data) {
      const self = this;
      ApiService.getReasons()
        .done((response) => {
          self.loading = false;
          self.reason = response.data;
        });
    },

    totalRefunds() {
      const self = this;
      self.loadingTotal = true;
      ApiService.totalRefunds(this.selectedHostings, this.selectedAddons, this.selectedHostingsAddons)
        .done((response) => {
          self.loadingTotal = false;
          self.total_refund = response.data.total_refund || 0;
        });
    },

    checkServices(id, origin) {
      ApiService.checkServices(id, origin)
        .done((response) => {
          self.produtoVinculado = response.data;
        });
    },
    // confirma o cancelamento
    modalConfirme(toCheck) {
      const self = this;

      if (toCheck) {
        self.ids.push(toCheck);
      }
      for (let i = 0; i < self.ids.length; i++) {
        if (self.ids[i].type == 'domain') {
          if (self.selectedDomains.indexOf(self.ids[i].id) === -1) {
            self.selectedDomains.push(self.ids[i].id);
          }
        } else if (self.hostingsType.indexOf(self.ids[i].type) !== -1) {
          if (self.ids[i].type == 'sitelock_addon') {
            if (self.selectedAddons.indexOf(self.ids[i].id) === -1) {
              self.selectedAddons.push(self.ids[i].id);
            }
          } else if (self.selectedHostingsAddons.indexOf(self.ids[i].id) === -1) {
            self.selectedHostingsAddons.push(self.ids[i].id);
          }
        }
      }
      this.totalRefunds();
      self.selectedProducts;
    },

    clickCancelar() {
      this.home();
      this.hideModal();
    },

    finalizarCancelamento() {
      const self = this;
      const finalizarCancelamento = true;
      $('#first-loading').show();
      if (self.total_refund == 0) {
        self.cancel_type = 'cancelled_no_refund';
      }

      ApiService.cancelProducts(this.selectedProducts, this.cancel_type, this.selectedAddons, this.selectedReason, this.selectedSubReason)
        .done((response) => {
          $('#first-loading').hide();

          if (response.success == true) {
            self.modalTexts.title = 'Cancelamento realizado com sucesso';
            self.modalTexts.body = 'Você receberá um e-mail com os detalhes deste cancelamento';
            self.showModalSuccess(self.modalTexts);
            ApiService.cancelSuccess(clientId);
          } else {
            self.modalTexts.title = 'Não foi possivel realizar o cancelamento';
            self.modalTexts.body = 'Por favor tente novamente';
            self.showModalError(self.modalTexts);
          }
        })
        .fail((response) => {
          $('#first-loading').hide();
          self.modalTexts.title = 'Não foi possivel realizar o cancelamento';
          self.modalTexts.body = 'Ocorreu um erro e não foi possível realizar o cancelamento. Por favor entre em contato conosco através dos nossos ';
          self.modalTexts.body += '<a href="https://suporte.hostgator.com.br/hc/pt-br" target="_blank">canais de ajuda</a>';
          self.showModalError(self.modalTexts);
        });
      return finalizarCancelamento;
    },

    continuarCancelamento() {
      const self = this;
      self.modalTexts.title = 'Você está prestes a realizar este cancelamento';
      self.modalTexts.body = 'Certifique-se de que realizou backup, pois ao confirmar esta ação, você está ciente que seus dados serão deletados, sem a possibilidade de recuperá-los. Deseja continuar?"';
      self.showModal(self.modalTexts);
    },

    home() {
      window.location.href = '/suporte';
    },

    showModalSuccess(modalTexts) {
      window.dataLayer.push({
        event: 'gaEvent',
        gaEventCategory: 'cancelamento',
        gaEventAction: 'view',
        gaEventLabel: 'sucesso',
      });
      const self = this;
      const modal = $(`${'<div class="modal" tabindex="-1" role="dialog">'
                + '  <div class="modal-dialog" role="document">'
                + '    <div class="modal-content">'
                + '      <div class="modal-header bg-primary">'
                + '        <h4 class="modal-title">'}${modalTexts.title}</h4>`
                + '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                + '          <span aria-hidden="true">&times;</span>'
                + '        </button>'
                + '      </div>'
                + `      <div class="modal-body">${modalTexts.body
                }      <div class="modal-footer">`
                + '        <button type="button" class="btn btn-primary">Ir para página inicial</button>'
                + '      </div>'
                + '    </div>'
                + '  </div>'
                + '</div>');
      modal.modal({
        backdrop: true,
      });

      modal.find('.btn-primary').click(() => {
        self.home();
        modal.modal('hide');
      });

      modal.on('hidden.bs.modal', (e) => {
        self.home();
        modal.modal('hide');
      });
    },

    showModalError(modalTexts) {
      const self = this;
      const modal = $(`${'<div class="modal" tabindex="-1" role="dialog">'
                + '  <div class="modal-dialog" role="document">'
                + '    <div class="modal-content">'
                + '      <div class="modal-header error">'
                + '        <h4 class="modal-title">'}${modalTexts.title}</h4>`
                + '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                + '          <span aria-hidden="true">&times;</span>'
                + '        </button>'
                + '      </div>'
                + `      <div class="modal-body">${modalTexts.body
                }      <div class="modal-footer">`
                + '        <button type="button" class="btn btn-primary">Ir para página inicial</button>'
                + '      </div>'
                + '    </div>'
                + '  </div>'
                + '</div>');
      modal.modal({
        backdrop: true,
      });

      modal.find('.btn-primary').click(() => {
        self.home();
        modal.modal('hide');
      });

      modal.on('hidden.bs.modal', (e) => {
        self.home();
        modal.modal('hide');
      });
    },

    showModal(modalTexts, toCheck) {
      const self = this;
      const modal = $(`${'<div class="modal" tabindex="-1" role="dialog">'
                + '  <div class="modal-dialog" role="document">'
                + '    <div class="modal-content">'
                + '      <div class="modal-header bg-primary">'
                + '        <h4 class="modal-title">'}${modalTexts.title}</h4>`
                + '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                + '          <span aria-hidden="true">&times;</span>'
                + '        </button>'
                + '      </div>'
                + `      <div class="modal-body">${modalTexts.body
                }      <div class="modal-footer">`
                + '        <button type="button" class="btn btn-default">Não quero cancelar</button>'
                + '        <button type="button" class="btn btn-success">Sim, quero cancelar</button>'
                + '      </div>'
                + '    </div>'
                + '  </div>'
                + '</div>');
      modal.modal({
        backdrop: true,
      });
      modal.find('.btn-success').click(() => {
        self.modalConfirme(toCheck);
        modal.modal('hide');
      });

      modal.find('.btn-default').click(() => {
        modal.modal('hide');
      });

      modal.on('hidden.bs.modal', (e) => {
        modal.remove();
      });
    },

    showDoubleConfirmationModal() {
      const self = this;
      const modal = $('<div class="modal" tabindex="-1" role="dialog">'
                + '  <div class="modal-dialog" role="document">'
                + '    <div class="modal-content">'
                + '      <div class="modal-header bg-primary">'
                + '        <h4 class="modal-title">Confirmar o cancelamento</h4>'
                + '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                + '          <span aria-hidden="true">&times;</span>'
                + '        </button>'
                + '      </div>'
                + '      <div class="modal-body"> Tem certeza que deseja realizar o cancelamento do(s) produto(s) e serviço(s) selecionado(s)?'
                + '      <div class="modal-footer">'
                + '        <button type="button" class="btn btn-default">Não quero mais cancelar</button>'
                + '        <button type="button" class="btn btn-success">Sim, quero cancelar</button>'
                + '      </div>'
                + '    </div>'
                + '  </div>'
                + '</div>');
      modal.modal({
        backdrop: true,
      });
      modal.find('.btn-success').click(() => {
        self.finalizarCancelamento();
        modal.modal('hide');
      });

      modal.find('.btn-default').click(() => {
        modal.modal('hide');
      });

      modal.on('hidden.bs.modal', (e) => {
        modal.remove();
      });
    },

    // Convert Date from "2018-08-01" format to "01/08/2018" format
    convertDate(dateString, defaultValue) {
      if (dateString == null) return defaultValue;

      const p = dateString.split(/\D/g);
      return [p[2], p[1], p[0]].join('/');
    },
  },
});

Vue.component('feedback-msg', {
  props: ['x', 'msg', 'icon', 'total'],
  template: hgFeedbackTpl,
  computed: {
    text() {
      if (this.total != 0) {
        var str = '';
        str += '<i class="fa fa-exclamation-circle"></i>';

        let total = this.total.toString();
        total = total.replace('.', ',');
        str += ` Ao cancelar os itens selecionado(s),<strong> você ficará com um crédito de R$${total}.</strong>`;
        if (this.total <= 10) {
          str += '<br>Dica:</strong> Por esta quantia é mais vantajoso ficar usando seus produtos até o fim do período vigente.';
        }
      }
      return str;
    },
  },
});
const hgInputTpl = ''
    + ' <div :class="{ required: !config.optional }">\n'
    + '            <div v-if="config.type === \'select\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                <select id="productSelect" class="form-control" :name="config.name" v-model="selected">\n'
    + '                    <template v-for="(opt, index) in config.options" v-if="!opt.hidden">\n'
    + '                        <option :key="index" :disabled="opt.separator" :value="opt.value" v-if="!opt.group">{{opt.name}}</option>\n'
    + '                        <optgroup v-if="opt.group" :label="opt.groupLabel">\n'
    + '                            <option v-for="(opt2, index2) in opt.options" :key="index2" :disabled="opt2.separator" :value="opt2.value" :data-id="opt2.id">{{opt2.name}}</option>\n'
    + '                        </optgroup>\n'
    + '                    </template>\n'
    + '                </select>\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'radio\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                <p v-if="config.inline">\n'
    + '                <div :class="{ radio: !config.inline, \'radio-inline\': config.inline }" v-for="(opt, index) in config.options" v-if="!opt.hidden">\n'
    + '                    <label>\n'
    + '                        <input type="radio" :name="config.name" v-model="selected" :value="opt.value" id="sectorRadio" /> {{opt.name}}\n'
    + '                    </label>\n'
    + '                </div>\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'text\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                <input class="form-control" v-if="!config.mask" type="text" :name="config.name" v-model="selected" />\n'
    + '                <input class="form-control" v-if="config.mask" type="text" :name="config.name" v-model="selected" v-mask="config.mask" />\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'number\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                <input class="form-control" type="number" :name="config.name" :min="config.min" :max="config.max" v-model="selected" />\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'date\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                <input class="form-control" type="date" :name="config.name" v-model="selected" />\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'textarea\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                <textarea style="resize: vertical;" class="form-control" :rows="config.rows" :name="config.name" v-model="selected" id="ticket-textarea" @change="textAreaChanged($event)" ref="myInput"></textarea>\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'checkbox\'" class="checkbox">\n'
    + '                <label><input type="checkbox" :name="config.name" v-model="selected" />{{config.label}}</label>\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'file\'" class="form-group">\n'
    + '                <label class="control-label">{{config.label}}</label>\n'
    + '                   <input type="file" :name="config.name"  @change="fileChanged($event)"  :accept="config.accept"/>\n'
    + '                <p v-if="config.info" class="help-block" v-html="config.info"></p>\n'
    + '            </div>\n'
    + '\n'
    + '            <div v-if="config.type === \'cancelamento\'">\n'
    + '                <hg-cancel-wizard :config="config" />\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'rebuildDisclaimer\'">\n'
    + '                <p class="rebuildDisclaimer" v-html="config.label" ></p>\n'
    + '            </div>\n'
    + '            <div v-if="config.type === \'disclaimer\'">\n'
    + '                <p class="disclaimer" v-html="config.label" ></p>\n'
    + '            </div>\n'
    + '\n'
    + '            <vue-markdown\n'
    + '                    :anchorAttributes="{target:\'_blank\'}"\n'
    + '                    v-if="!!config.text || (!!form[config.name] && !!form[config.name].text)"\n'
    + '                    :source="config.text || form[config.name].text"></vue-markdown>\n'
    + '        </div>';
Vue.component('hg-dynamic-input', {
  template: hgInputTpl,
  props: ['config', 'form'],
  data() {
    return {
      selected: this.config.type == 'checkboxmultiple' ? [] : null,
    };
  },
  mounted() {
    if (this.config.default) this.selected = this.config.default;
    else if (this.form[this.config.name]) this.selected = this.form[this.config.name].value;
  },
  watch: {
    selected(newVal) {
      let data = {};
      const self = this;
      switch (this.config.type) {
        case 'select':
          data = this.config.options.reduce((prev, next) => {
            if (!next.group) return prev.concat([next]);
            return prev.concat(next.options);
          }, []).find(o => o.value === newVal) || {};
          data.bodyEntry = { label: this.config.label, value: data.name };
          if (data.bodyEntry.value == 'Solicitação de Cancelamento') {
            window.dataLayer.push({
              event: 'gaEvent',
              gaEventCategory: 'cancelamento',
              gaEventAction: 'event',
              gaEventLabel: 'Solicitação de Cancelamento',
            });
          }
          break;
        case 'radio':
          data = this.config.options.reduce((prev, next) => {
            if (!next.group) return prev.concat([next]);
            return prev.concat(next.options);
          }, []).find(o => o.value === newVal) || {};
          data.bodyEntry = { label: this.config.label, value: data.name };
          break;
        case 'checkbox':
          data.value = newVal === true ? true : '';
          data.bodyEntry = { label: this.config.label, value: data.value ? 'Sim' : 'Não' };
          break;
        case 'date':
          data.value = newVal || '';
          data.bodyEntry = { label: this.config.label, value: data.value.split('-').reverse().join('/') };
          break;
        default:
          data.value = newVal;
          data.bodyEntry = { label: this.config.label, value: data.value };
          break;
      }
      this.emitItemChanged(data);
    },
    form(newVal) {
      if (!newVal[this.config.name]) this.selected = null;
    },
  },
  methods: {
    fileChanged(event) {
      const data = {};
      data.value = 'ok';
      data.bodyEntry = { label: this.config.label, value: event.target.files[0] };
      this.emitItemChanged(data);
    },
    textAreaChanged() {
      const eppTransferClientarea = localStorage.getItem('eppTransferClientarea');
      if (eppTransferClientarea) {
        const dataToEmit = {
          value: this.$refs.myInput.value,
          bodyEntry: {
            label: this.config.label,
            value: this.$refs.myInput.value,
          },
        };

        this.emitItemChanged(dataToEmit, this.config);
        this.selected = this.$refs.myInput.value;
        localStorage.removeItem('eppTransferClientarea');
      }
    },
    emitItemChanged(data, objData) {
      if (data.id || data.pid || data.serverhostname) {
        currentSelectedProductdata = data;
      }
      const obj = Object.assign({
        label: objData?.label || this.config.label,
        key: objData?.name || this.config.name,
        order: objData?.order || this.config.order,
        type: objData?.type || this.config.type,
        depends: objData?.depends || this.config.depends,
        extra: objData?.extra || this.config.extra,
        form: objData?.form || this.config.form,
      }, data);
      this.$emit('itemchanged', obj);
    },
  },
});
const hgFormTpl = '        <div class="row">\n'
    + '            <div class="col-sm-12 col-md-12">\n'
    + '                <hg-dynamic-input\n'
    + '                    v-for="(item, index) in config"\n'
    + '                    :key="index"\n'
    + '                    :config="item"\n'
    + '                    :form="form"\n'
    + '                    v-on:itemchanged="itemChanged" />\n'
    + '                <button class="btn btn-primary btn-send" v-if="!hideSendBtn" :disabled="!output.valid" @click="send">{{lang.FORM_PAGE_SEND}}</button>\n'
    + '                <br>\n' + '                <br>\n'
    + '                <div v-if="sent" class="alert" :class="{\'alert-danger\':sendError}">\n'
    + '                    <div v-if="sendError">{{lang.FORM_ERROR}}</div>\n'
    + '                </div>\n'
    + '                <div v-if="sending" class="form-loading">\n'
    + '                    <div class="lds-css ng-scope">\n'
    + '                        <div class="lds-cube">\n'
    + '                            <div></div>\n'
    + '                            <div></div>\n'
    + '                            <div></div>\n'
    + '                            <div></div>\n'
    + '                        </div>\n'
    + '                    </div>\n'
    + '                </div>\n'
    + '            </div>\n'
    + '        </div>';
Vue.component('hg-zendesk-form', {
  template: hgFormTpl,
  props: ['formConfig', 'clientProducts', 'clientData', 'enabledNewCancel', 'verde', 'enableZendeskV2'],
  mounted() {
    $('#first-loading').hide();
    clientId = this.clientData.id;
  },
  data() {
    return {
      reserved: ['products', 'client'],
      form: {
        products: this.clientProducts,
        client: this.clientData,
      },
      sending: false,
      sendError: false,
      sent: false,
      loading: false,
      modalTexts: {
        title: '',
        body: '',
        btn: '',
      },
      hostings: [],
    };
  },
  computed: {
    hideSendBtn() {
      let hide = false;
      for (let i = 0; i < this.config.length; i++) {
        if (this.config[i].type == 'cancelamento') {
          hide = true;
          break;
        }
      }
      return hide;
    },
    config() {
      return this.formConfig(this.form);
    },
    output() {
      const data = [];
      for (const key in this.form) {
        if (this.reserved.indexOf(key) === -1) {
          data.push(this.form[key]);
        }
      }
      data.sort((a, b) => a.order - b.order);
      const withForm = data.filter(d => !!d.form).pop();
      let formData;
      if (withForm) {
        formData = JSON.parse(JSON.stringify(withForm.form));
        delete formData.text;
        const bodyLines = [
          this.form.product && { label: lang.FORM_PRODUCT_LABEL, value: this.form.product.name },
          this.form.product && { label: lang.FORM_SERVER_LABEL, value: this.form.product.serverhostname },
          { label: lang.FORM_REQUEST_LABEL, value: formData.subject.split(' - ')[1] },
        ].filter(line => !!line);
        for (let i = 0; i < data.length; i++) {
          if (data[i].order > withForm.order && data[i].bodyEntry) {
            if (data[i].type !== 'file') {
              bodyLines.push(data[i].bodyEntry);
              if (data[i].extra) {
                formData[data[i].extra] = data[i].value;
              }
            } else {
              if (!formData.files) {
                formData.files = [];
              }
              formData.files.push(data[i].bodyEntry.value);
            }
          }
        }
        this.form.product && bodyLines.push({ label: lang.FORM_PRODUCT_ID_LABEL, value: this.form.product.id });
        formData.body = this.buildBody(bodyLines);
        if (this.form.product) {
          this.form.product.serverhostname && formData.tags.push(this.form.product.serverhostname);
          this.form.product.originalName && formData.tags.push(this.form.product.tag.toLowerCase());
          formData.pid = this.form.product.pid;
          formData.product = this.form.product.id;
        }
        if (this.form.customSubject && this.form.customContent) {
          formData.subject = this.form.customSubject.bodyEntry.value;
          formData.customContent = this.form.customContent.bodyEntry.value;
        }
      }
      const self = this;
      const valid = this.config
        .map(item => item.optional || (!!self.form[item.name] && (!item.validation || item.validation(self.form[item.name].value))))
        .every(item => item) && !!formData;
      return { data, formData, valid };
    },
  },
  methods: {
    itemChanged(data) {
      this.sendError = false;
      if (data.value !== '' && data.value !== null && data.value !== undefined) {
        const obj = {};
        obj[data.key] = data;
        this.form = Object.assign({}, this.form, obj);
      } else {
        this.removeKey(data.key);
      }
      this.removeDependents(data.key);
    },
    removeKey(key) {
      const { form } = this;
      delete form[key];
      this.form = Object.assign({}, form);
    },
    removeDependents(key) {
      const self = this;
      const keys = Object.keys(this.form)
        .filter(k => self.reserved.indexOf(k) === -1);
      const options = keys.map(k => ({
        key: k,
        depends: self.form[k].depends,
      }));
      const toRemove = options.reduce((prev, next) => {
        if (prev.indexOf(next.depends) !== -1) return prev.concat([next.key]);
        return prev;
      }, [key]);
      toRemove.shift();
      for (let i = 0; i < toRemove.length; i++) this.removeKey(toRemove[i]);
    },
    send() {
      $('#first-loading').show();
      const data = this.output.formData;
      data.server_value = currentSelectedProductdata.serverhostname;
      data.domain_value = currentSelectedProductdata.domain;

      if (data.subject.includes('subject')) {
        data.domain_id = '27835972869267';
        data.server_id = '27836218257939';
        data.plan_id = '28285611660947';
        data.plan_value = currentSelectedProductdata.originalName;
      } else {
        data.domain_id = '27835972869267';
        data.server_id = '28285611660947';
      }

      this.sending = true;
      this.sent = false;
      this.sendError = false;
      const self = this;
      const fd = new FormData();
      for (const key in data) {
        if (!Array.isArray(data[key])) {
          fd.append(key, data[key]);
        } else {
          for (let i = 0; i < data[key].length; i++) {
            fd.append(`${key}[]`, data[key][i]);
          }
        }
      }
      jQuery.ajax({
        url: shouldUseV2 ? `${jQuery('#base_url').val()}/api/v3/submitForm` : `${jQuery('#base_url').val()}/api/v2/submitForm`,
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        crossDomain: true,
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
        .done(() => {
          setTimeout(() => {
            self.resetForm();
            self.sent = true;
            self.sending = false;
            $('#first-loading').hide();
            setTimeout(() => {
              self.sent = false;
            }, 3000);
            self.showModalSuccess(self.modalTexts);
          }, 500);
        })
        .fail(() => {
          setTimeout(() => {
            self.sent = true;
            self.sendError = true;
            self.sending = false;
            $('#first-loading').hide();
            setTimeout(() => {
              self.sent = false;
              self.sendError = false;
            }, 5000);
          }, 500);
        });
    },
    home() {
      const redirect = country === 'br' ? '/suporte' : '/soporte';
      window.location.href = redirect;
    },
    showModalSuccess(modalTexts) {
      window.dataLayer.push({
        event: 'gaEvent',
        gaEventCategory: 'abrir chamado',
        gaEventAction: 'view',
        gaEventLabel: 'sucesso',
      });
      const self = this;

      if (country === 'br') {
        self.modalTexts.title = 'Recebemos seu chamado!';
        self.modalTexts.subtitle = 'Fique atento ao prazo de resposta!';
        self.modalTexts.body = [
          'Em até ',
          '48h úteis',
          ' (De segunda à sexta) você receberá um retorno do nosso time de suporte',
        ];
        self.modalTexts.btn = 'Voltar para Suporte';
      } else {
        self.modalTexts.title = '¡Recibimos su ticket!';
        self.modalTexts.subtitle = 'Este atento al plazo de respuesta.';
        self.modalTexts.body = [
          'En hasta ',
          '48h horas hábiles',
          ' (De lunes a viernes) recibirá una respuesta de nuestro equipo de soporte',
        ];
        self.modalTexts.btn = 'Volver a Soporte';
      }
      const modal = $(`${'<div class="modal" tabindex="-1" role="dialog" aria-hidden="true" data-keyboard="false">'
              + '  <div class="modal-dialog" role="document">'
              + '    <div class="modal-content">'
              + '      <div class="modal-header bg-primary">'
              + '        <h4 class="modal-title">'}${modalTexts.title}</h4>`
              + '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
              + '          <span aria-hidden="true">&times;</span>'
              + '        </button>'
              + '      </div>'
              + '      <div class="modal-body">'
              + `        <h5 class="modal-subtitle">${modalTexts.subtitle}</h5>`
              + `        ${modalTexts.body[0]}`
              + `        <strong>${modalTexts.body[1]}</strong>`
              + `        ${modalTexts.body[2]}`
              + '     <div class="modal-footer">'
              + `        <button type="button" class="btn btn-primary">${modalTexts.btn}</button>`
              + '      </div>'
              + '    </div>'
              + '  </div>'
              + '</div>');
      modal.modal({
        backdrop: 'static',
      });

      modal.find('.btn-primary').click(() => {
        self.home();
        modal.modal('hide');
      });

      modal.on('hidden.bs.modal', (e) => {
        self.home();
        modal.modal('hide');
      });
    },
    resetForm() {
      const obj = {};
      for (let i = 0; i < this.reserved.length; i++) {
        obj[this.reserved[i]] = this.form[this.reserved[i]];
      }
      this.form = obj;
    },
    buildBody(data) {
      return data.filter(item => !!item.value).map(item => ` • ${item.label}: ${item.value}`).join('\n');
    },
  },
});
Vue.use(VueMarkdown);


function load(url, index) {
  const ext = url.split('.').pop();
  if (ext == 'js') { return loadScript(url); }
  return loadFile(url, index);
}

function loadScript(url) {
  return $.ajax({
    url: `/form_js/${url}`,
    dataType: 'script',
    async: true,
  });
}


function loadFile(url, index) {
  return $.ajax({
    mimeType: 'text/plain',
    url: `/form_js/${url}`,
    async: true,
  }).then((data) => {
    loadMarkdown(data, index);
  });
}

function loadMarkdown(
  data,
  index,
  formData,
  enableZendeskV2,
) {
  try {
    shouldUseV2 = enableZendeskV2;
    const temp = data.split('---');
    const yaml = jsyaml.safeLoad(temp[1]);
    HgZendeskForms.registerFromYaml(Object.assign({
      key: `formmd${index}`,
      fields: [],
      category_id: formData.category_id,
      category_value: formData.category_value,
      group_id: formData.group_id,
      sub_category: formData.sub_category,
      sub_category_id: formData.sub_category_id,
    }, yaml, { text: temp[2] }));
  } catch (e) {
    console.error('Error loading form ', e);
  }
}
