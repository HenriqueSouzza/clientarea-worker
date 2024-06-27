HgZendeskForms.registerForm(function (form) {
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
        visible: function () {
            return !!form.product
                && HgZendeskFormValidation.isProduct(form.product.pid , [
                    HgProducts.DEDICATED_ALL,
                    HgProducts.VPS_ALL,
                ])
        },
        root: {
            name: 'techsupport',
            as: 'Solicitar SSL',
        },
        text: [
            '¡Atención!\n' +
            'Este formulario se dirige sólo a los dueños de planes VPS y Dedicado. Si tiene un plan Web Hosting, Creador de Sitios o Reseller, siga los pasos de nuestra FAQ haciendo clic [AQUÍ](https://soporte-latam.hostgator.com/hc/es-419/articles/360007602492-Como-contratar-un-certificado-SSL);\n' +
            getPreco(form.client.brand) +
            'Los campos marcados con * son obligatorios;'
        ].join(''),
        fields: [
            {
                label: 'Tipo',
                type: 'select',
                options: [
                    { name: 'Certificado SSL Privado', value: 1 },
                    { name: 'Certificado SSL EV', value: 2 },
                    { name: 'Certificado SSL WildCard', value: 3 },
                ]
            },
            {
                label: 'Su Nombre',
                type: 'text'
            },
            {
                label: 'Regístre su e-mail',
                type: 'text'
            },
            {
                label: 'Nombre de la Empresa',
                type: 'text'
            },
            {
                label: 'Dirección',
                type: 'text'
            },
            {
                label: 'Ciudad',
                type: 'text'
            },
            {
                label: 'Provincia/Región',
                type: 'text'
            },
            {
                label: 'País',
                type: 'text'
            },
            {
                label: 'CEP',
                type: 'text'
            },
            {
                label: 'Documento',
                type: 'text'
            },
            {
                label: 'Nombre',
                type: 'text'
            },
            {
                label: 'Cargo',
                type: 'text'
            },
            {
                label: 'E-mail',
                type: 'text'
            },
            {
                label: 'Teléfono',
                type: 'text'
            },
            {
                label: '¿Está usted de acuerdo con el cobro relacionado con el Certificado SSL citado arriba?',
                type: 'checkbox',
            },
        ],
    }
})