HgZendeskForms.registerForm(function (form) {
    var nextDueDate = '';
    if(!!form.product && !!form.product.nextduedate)
        nextDueDate = form.product.nextduedate.split('-').reverse().join('/');
    return {
        subject: 'Suporte Técnico - Solicitação de Licença Google G-Suite',
        key: 'solicitargsuite',
        tags: [
            'whmcs_form_tecnico_solicitar_licenca_gsuite',
        ],
        automation: 'solicitar_licenca_gsuite',
        visible: function () {
            return !!form.product && HgZendeskFormValidation.isProduct(form.product.pid, HgProducts.GOOGLE_APPS)
        },
        text: [
            'Se você já possui uma conta do Google Apps e deseja adquirir novas licenças, utilize o formulário abaixo para encaminhar a solicitação para nossa equipe.',
            'Para enviar a solicitação de licenças adicionais, informe os dados abaixo e clique no botão enviar:',
            'A(s) conta(s) vinculada(s) ao domínio possuem renovação prevista para ' + nextDueDate + '.',
            'O valor da(s) nova(s) licença(s) será calculado de forma proporcional, o que permitirá a renovação de todas as suas contas na mesma data. Na renovação, o valor integral será cobrado.',
        ].join('\n'),
        root: {
            name: 'techsupport',
            as: 'Solicitação de Licença Google G-Suite',
        },
        fields: [
            {
                label: 'Por favor, informe quantas licenças adicionais do Google Apps deseja adquirir',
                type: 'number',
                extra: 'quantity',
                min: 1,
            },
            {
                label: 'Ao clicar no botão Enviar você confirma que aceita a cobrança do valor informado neste formulário. A fatura será enviada para o seu e-mail cadastrado conosco.',
                type: 'checkbox',
            },
        ],
    }
})