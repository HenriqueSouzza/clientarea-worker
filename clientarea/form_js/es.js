if (country != 'br') {
  HgZendeskForms.registerForm((form) => {
    function getPreco(brand) {
      switch (brand) {
        case 1:
          return 'El precio del certificado SSL Privado es de 480/anõ, certificado SSL WildCard es de 2,710/año, y el certificado SSL EV es de 8,400/año;\n';
        case 2:
          return 'El precio del certificado SSL Privado es de 45,000/anõ, certificado SSL WildCard es de 215,000/año, y el certificado SSL EV es de 680,000/año;\n';
        case 3:
          return 'El precio del certificado SSL Privado es de 45,000/anõ, certificado SSL WildCard es de 215,000/año, y el certificado SSL EV es de 680,000/año;\n';
        default:
          return '';
      }
    }


    return {
      subject: 'Soporte Técnico - Solicitar SSL',
      key: 'sslwildcardlatam',
      tags: [
        'whmcs_ssl',
      ],
      visible() {
        return !!form.product
                && HgZendeskFormValidation.isProduct(form.product.pid, [
                  HgProducts.DEDICATED_ALL,
                  HgProducts.VPS_ALL,
                ]);
      },
      root: {
        name: 'techsupport',
        as: 'Solicitar SSL',
      },
      text: [
        `${'¡Atención!\n'
            + 'Este formulario se dirige sólo a los dueños de planes VPS y Dedicado. Si tiene un plan Web Hosting, Creador de Sitios o Reseller, siga los pasos de nuestra FAQ haciendo clic [AQUÍ](https://soporte-latam.hostgator.com/hc/es-419/articles/360007602492-Como-contratar-un-certificado-SSL);\n'}${
          getPreco(form.client.brand)
        }Los campos marcados con * son obligatorios;`,
      ].join(''),
      fields: [
        {
          label: 'Tipo',
          type: 'select',
          options: [
            { name: 'Certificado SSL Privado', value: 1 },
            { name: 'Certificado SSL EV', value: 2 },
            { name: 'Certificado SSL WildCard', value: 3 },
          ],
        },
        {
          label: 'Su Nombre',
          type: 'text',
        },
        {
          label: 'Regístre su e-mail',
          type: 'text',
        },
        {
          label: 'Nombre de la Empresa',
          type: 'text',
        },
        {
          label: 'Dirección',
          type: 'text',
        },
        {
          label: 'Ciudad',
          type: 'text',
        },
        {
          label: 'Provincia/Región',
          type: 'text',
        },
        {
          label: 'País',
          type: 'text',
        },
        {
          label: 'CEP',
          type: 'text',
        },
        {
          label: 'Documento',
          type: 'text',
        },
        {
          label: 'Nombre',
          type: 'text',
        },
        {
          label: 'Cargo',
          type: 'text',
        },
        {
          label: 'E-mail',
          type: 'text',
        },
        {
          label: 'Teléfono',
          type: 'text',
        },
        {
          label: '¿Está usted de acuerdo con el cobro relacionado con el Certificado SSL citado arriba?',
          type: 'checkbox',
        },
      ],
    };
  });

  HgZendeskForms.registerForm(form => ({
    subject: 'Suporte Técnico - Solicitud de rebuild/reload',
    key: 'reloadrebuild',
    tags: ['whmcs_form_tecnico_reload-rebuild'],
    visible() {
      return !!form.product
      && (
        HgZendeskFormValidation.isInGroup(form.product.pid,
          [
            HgProducts.VPS_ALL,
            HgProducts.DEDICATED_ALL,
          ])
      );
    },
    root: { name: 'techsupport', as: 'Solicitud de rebuild/reload' },
    text: [
      '<b>Lea con atención los términos a continuación:</b>',
      '<p>',
      '<b>- No realizaremos backup de su servidor.</b>',
      '<b>- Caso usted desee que restauremos su backup, luego del procedimiento, deberá subir todos los archivos para un mismo directorio en hasta 48 horas.</b>',
      '<b>- No nos responsabilizamos por el contenido restaurado, pues no tenemos control sobre el backup disponibilizado.</b>',
      '</p>',
      '<b>IMPORTANTE:</b>',
      '<p>',
      '<b>Este formulario es para solicitudes de Reload/Rebuild. Al solicitar el procedimiento todo el contenido del servidor será removido sin posibilidad de restauración.</b>',
      '</p>',
    ].join('<br/>'),
    fields: [
      {
        text: [
          '<p>',
          '<b>ATENCIÓN:</b><br/>',
          '<b>- El procedimiento será realizado en el servidor con este IP. No habrá doble confirmación</b>',
          '<b>- Al seleccionar una imagen linux sin cPanel, el servidor solo se entrega con SSH configurado. Cualquier configuración adicional es responsabilidad del cliente.</b>',
          '<b>- Si tu servidor contratado es Windows, solo puedes elegir una imagen Windows, si tu servidor contratado es Linux, solo puedes elegir una imagen  Linux. Para cambiar el Sistema Operativo en estos casos, deberá solicitar la baja y realizar una nueva contratación.</b>',
          '</p><br/>',
        ].join('<br/>'),
        optional: true,
      },
      {
        label: 'Cual es la imagen deseada?*',
        type: 'select',
        name: 'selectImage',
        options: [
          {
            group: true,
            groupLabel: 'Imágenes Linux con cPanel',
            options: [
              { name: 'CentOS 7 cPanel', value: 'CentOS 7 cPanel', groupLabel: 'TESTE' },
            ],
          },
          {
            group: true,
            groupLabel: 'Imágenes Linux sin cPanel    ',
            options: [
              { name: 'CentOS 8', value: 'CentOS 8' },
              { name: 'CentOS 7', value: 'CentOS 7' },
              { name: 'Debian 10', value: 'Debian 10' },
              { name: 'Debian 9', value: 'Debian 9' },
              { name: 'Ubuntu 20.04', value: 'Ubuntu 20.04' },
              { name: 'Ubuntu 18.04', value: 'Ubuntu 18.04' },
            ],
          },
          {
            group: true,
            groupLabel: 'Imágenes Windows con Plesk (no incluida la licencia, debe ser contratada directamente con ellos)',
            options: [
              { name: 'CentOS 8 con Plesk', value: 'CentOS 8 con Plesk' },
              { name: 'CentOS 7 con Plesk', value: 'CentOS 7 con Plesk' },
              { name: 'Debian 10 con Plesk', value: 'Debian 10 con Plesk' },
              { name: 'Debian 9 con Plesk', value: 'Debian 9 con Plesk' },
              { name: 'Ubuntu 20.04 con Plesk', value: 'Ubuntu 20.04 con Plesk' },
              { name: 'Ubuntu 18.04 con Plesk', value: 'Ubuntu 18.04 con Plesk' },
            ],
          },
          {
            group: true,
            groupLabel: 'Imágenes Windows con Plesk (incluida la licencia)',
            options: [
              { name: 'Windows Server 2016', value: 'Windows Server 2016' },
              { name: 'Windows Server 2019', value: 'Windows Server 2019' },
            ],
          }
        ],
      },
      {
        label: 'Podemos hacerlo en horario comercial.',
        type: 'select',
        name: 'selectTime',
        options: [
          { name: 'Si', value: 'Si' },
          { name: 'No', value: 'No' },
        ],
      },
      { label: '✔️ 08:00 as 18:00', type: 'checkbox' },
      { label: '✔️ Confirmo que he leído y estoy de acuerdo con los Términos de Reload/Rebuild', type: 'checkbox' },
      { label: '✔️ Confirmo que he leído y estoy de acuerdo con los términos antes descritos y con la cobranza del valor de Hora Técnica en caso se encaje en los escenarios descritos en los términos', type: 'checkbox' },
      { label: '✔️ Confirmo que he leído y estoy de acuerdo en que es mi responsabilidad hacer backups para posterior restauración', type: 'checkbox' },
    ],
  }));
}
