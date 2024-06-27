HgZendeskForms.registerForm(function (form) {
    return {
        subject: 'Suporte Financeiro - Solicitação de Cancelamento',
        key: 'solicitarcancelamento4',
        tags: [
            'whmcs_form_financeiro_solicitar_cancelamento',
        ],
        visible: function () {
            return !!form.product
                && HgZendeskFormValidation.isProduct(form.product.pid, HgProducts.GOOGLE_APPS)
        },
        root: {
            name: 'salessupport',
            as: 'Solicitação de Cancelamento',
        },
        fields: [
            {
                label: 'Por favor, indique o que deseja fazer',
                name: 'opcancelamento4',
                type: 'select',
                options: [
                    {
                        name: 'Cancelar minha conta Google Apps',
                        value: 1,
                        text: [
                            '',
                            'Lamentamos que tenha optado pelo cancelamento da sua conta Google Apps.',
                            'Se optar por prosseguir com o cancelamento, é importante que você saiba:',
                            '  - O cancelamento da sua conta no Google Apps será agendado para 7 dias após o término do ciclo pago, independentemente da data de envio da solicitação. No período até o cancelamento agendado você pode continuar utilizando a sua conta normalmente.',
                            '  - Após os 7 dias (citados no item 1) a conta será excluída e não será possível recuperar o histórico de e-mails e/ou documentos. Para realizar o backup do conteúdo, acesse o Admin Console da sua conta no Google Apps.',
                            '  - Este formulário refere-se ao cancelamento apenas de sua conta Google Apps. Caso tenha adquirido um combo, e queira realizar o cancelamento, siga os procedimentos abaixo:',
                            '    - Hospedagem de sites + Domínio: selecione o produto adquirido junto com o Google Apps para realizar o cancelamento. No mesmo formulário, informe se deseja ou não cancelar a renovação do domínio vinculado a essa conta;',
                            '    - Apenas Domínio: informe no campo do formulário abaixo que deseja cancelar a renovação do domínio vinculado a essa conta do Google Apps.',
                            'No caso de dúvida, entre em contato com nossa equipe através dos [Canais de Atendimento](http://suporte.hostgator.com.br) disponíveis.',
                            '',
                            'Para solicitar o cancelamento da sua conta, por favor, preencha as informações abaixo.',
                            '',
                            'Os campos marcados com * são de preenchimento obrigatório:'
                        ].join('\n'),
                    },
                    {
                        name: 'Cancelar a renovação de uma licença',
                        value: 2,
                        text: [
                            'Antes de solicitar o cancelamento de uma ou mais licenças do Google Apps é importante que saiba:',
                            '  - O cancelamento da sua conta no Google Apps será agendado para 7 dias após o término do ciclo pago, independentemente da data de envio da solicitação. No período até o cancelamento agendado você pode continuar utilizando todas as licenças normalmente.',
                            '  - Após os 7 dias (citados no item 1) a conta será excluída e não será possível recuperar o histórico de e-mails e/ou documentos. Para realizar o backup do conteúdo, acesse o Admin Console da sua conta no Google Apps.',
                            '  - A escolha da licença que será excluída, assim como o backup do conteúdo dessa conta, deve ser realizada diretamente através do Admin Console da sua conta no Google.',
                            '  - No caso de dúvida, entre em contato com nossa equipe através dos [Canais de Atendimento](http://suporte.hostgator.com.br) disponíveis.',
                            '',
                            'Para solicitar o cancelamento da sua conta, por favor, preencha as informações abaixo.',
                            '',
                            'Os campos marcados com * são de preenchimento obrigatório:'
                        ].join('\n'),
                    },
                ]
            },
            {
                label: 'Número de licenças que deseja cancelar',
                type: 'number',
                min: 1,
                visible: function() {
                    return !!form.opcancelamento4 && form.opcancelamento4.value === 2
                },
            },
            {
                label: 'Deseja cancelar também a renovação do domínio vinculado a essa conta?',
                type: 'select',
                visible: function() {
                    return !!form.opcancelamento4
                },
                options: [
                    {
                        name: 'Sim',
                        value: 'Sim',
                    },
                    {
                        name: 'Não',
                        value: 'Nao',
                    },
                ]
            },
            {
                label: 'Por favor, indique o motivo do cancelamento',
                type: 'select',
                visible: function() {
                    return !!form.opcancelamento4
                },
                name: 'motivocancelamento4',
                options: [
                    { name: 'Produto não atende às expectativas', value: 1 },
                    { name: 'Suporte não atendeu às expectativas', value: 2 },
                    { name: 'Preço não atende às expectativas', value: 3 },
                    { name: 'Não consegui colocar meu site no ar', value: 4 },
                    { name: 'Não vou mais ter site/presença online', value: 5 },
                    { name: 'Mudei a hospedagem de meu site para outra empresa', value: 6 },
                    { name: 'HostGator não atendeu as expectativas', value: 7 },
                    { name: 'Já possuo outro(s) plano(s) com a HostGator / Estou migrando para outro plano', value: 8 },
                ]
            },
            {
                label: 'Sub-Categoria',
                type: 'select',
                depends: 'motivocancelamento4',
                options: [
                    {
                        name: 'Dificuldade na configuração dos produtos e serviços',
                        value: 1,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 1,
                    },
                    {
                        name: 'Problemas com servidor/desempenho',
                        value: 2,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 1,
                    },
                    {
                        name: 'Soluções oferecidas não eram satisfatórias',
                        value: 3,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 2,
                    },
                    {
                        name: 'Tempo de espera elevado',
                        value: 4,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 2,
                    },
                    {
                        name: 'Não sei como começar',
                        value: 5,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 4,
                    },
                    {
                        name: 'Não tive/tenho tempo',
                        value: 6,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 4,
                    },
                    {
                        name: 'Falta de assistência',
                        value: 7,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 4,
                    },
                    {
                        name: 'A empresa fechou',
                        value: 8,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 5,
                    },
                    {
                        name: 'Questões financeiras',
                        value: 9,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 5,
                    },
                    {
                        name: 'Não tive o retorno que esperava',
                        value: 10,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 5,
                    },
                    {
                        name: 'Projeto encerrado',
                        value: 11,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 5,
                    },
                    {
                        name: 'Preço',
                        value: 12,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 6,
                    },
                    {
                        name: 'Suporte',
                        value: 13,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 6,
                    },
                    {
                        name: 'Terceirização do trabalho',
                        value: 14,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 6,
                    },
                    {
                        name: 'Produto mais adequado às minhas necessidades',
                        value: 15,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 6,
                    },
                    {
                        name: 'Cobrança indevida de pagamento',
                        value: 16,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 7,
                    },
                    {
                        name: 'Dificuldade de comunicação',
                        value: 17,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 7,
                    },
                    {
                        name: 'Baixo diferencial de mercado',
                        value: 18,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 7,
                    },
                    {
                        name: 'Pouca variedade de produtos',
                        value: 19,
                        hidden: form.motivocancelamento4 && form.motivocancelamento4.value !== 7,
                    },
                ],
                visible: function() {
                    return form.motivocancelamento4
                        && form.motivocancelamento4.value !== 3
                        && form.motivocancelamento4.value !== 8
                }
            },
            {
                label: 'Li as orientações e permito o encerramento imediato do plano',
                type: 'checkbox',
                depends: 'motivocancelamento4',
                visible: function() {
                    return !!form.opcancelamento4
                },
            },
        ],
    }
})