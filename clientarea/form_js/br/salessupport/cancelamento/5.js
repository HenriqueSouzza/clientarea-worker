HgZendeskForms.registerForm(function (form) {
    return {
        subject: 'Suporte Financeiro - Solicitação de Cancelamento',
        key: 'solicitarcancelamento5',
        tags: [
            'whmcs_form_financeiro_solicitar_cancelamento',
        ],
        visible: function () {
            return !!form.product
                && HgZendeskFormValidation.isProduct(form.product.pid, HgProducts.JUMPSTART)
        },
        root: {
            name: 'salessupport',
            as: 'Solicitação de Cancelamento',
        },
        text: [
            'Lamentamos que tenha optado pelo cancelamento do JumpStart.',
            'Se optar por prosseguir com o cancelamento, é importante que você saiba:',
            '  - O cancelamento só será finalizado quando enviarmos nossa confirmação. É possível que outras informações sejam solicitadas para concluir o processo.',
            '  - Caso tenha direito ao reembolso, o valor pode ser adicionado como crédito no seu Painel Financeiro, ou você pode receber o estorno (com desconto das taxas administrativas).',
            '  - O reembolso será realizado conforme os critérios descritos abaixo:',
            '    - 100% do valor: nos casos em que o cancelamento é solicitado antes do agendamento do serviço;',
            '    - 50% do valor: nos casos em que a solicitação é encaminhada após o agendamento do atendimento.',
            '  - Caso desista do agendamento duas vezes, você pode solicitar o cancelamento e receber 50% do valor de volta (como crédito ou reembolso, com desconto das taxas administrativas).',
            '  - Caso o serviço não seja utilizado em até 30 dias após a primeira tentativa de agendamento, a validade expira. Neste caso, o cancelamento será realizado automaticamente, e não há possibilidade de reembolso.',
            '  - No caso de dúvida, entre em contato com nossa equipe através dos [Canais de Atendimento](http://suporte.hostgator.com.br) disponíveis.',
            '',
            'Para solicitar o cancelamento da sua conta, por favor, preencha as informações abaixo.',
            '',
            'Os campos marcados com * são de preenchimento obrigatório:'
        ].join('\n'),
        fields: [
            {
                label: 'Deseja cancelar também a renovação do domínio vinculado a essa conta?',
                type: 'select',
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
                name: 'motivocancelamento5',
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
                depends: 'motivocancelamento5',
                options: [
                    {
                        name: 'Dificuldade na configuração dos produtos e serviços',
                        value: 1,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 1,
                    },
                    {
                        name: 'Problemas com servidor/desempenho',
                        value: 2,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 1,
                    },
                    {
                        name: 'Soluções oferecidas não eram satisfatórias',
                        value: 3,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 2,
                    },
                    {
                        name: 'Tempo de espera elevado',
                        value: 4,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 2,
                    },
                    {
                        name: 'Não sei como começar',
                        value: 5,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 4,
                    },
                    {
                        name: 'Não tive/tenho tempo',
                        value: 6,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 4,
                    },
                    {
                        name: 'Falta de assistência',
                        value: 7,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 4,
                    },
                    {
                        name: 'A empresa fechou',
                        value: 8,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 5,
                    },
                    {
                        name: 'Questões financeiras',
                        value: 9,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 5,
                    },
                    {
                        name: 'Não tive o retorno que esperava',
                        value: 10,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 5,
                    },
                    {
                        name: 'Projeto encerrado',
                        value: 11,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 5,
                    },
                    {
                        name: 'Preço',
                        value: 12,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 6,
                    },
                    {
                        name: 'Suporte',
                        value: 13,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 6,
                    },
                    {
                        name: 'Terceirização do trabalho',
                        value: 14,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 6,
                    },
                    {
                        name: 'Produto mais adequado às minhas necessidades',
                        value: 15,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 6,
                    },
                    {
                        name: 'Cobrança indevida de pagamento',
                        value: 16,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 7,
                    },
                    {
                        name: 'Dificuldade de comunicação',
                        value: 17,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 7,
                    },
                    {
                        name: 'Baixo diferencial de mercado',
                        value: 18,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 7,
                    },
                    {
                        name: 'Pouca variedade de produtos',
                        value: 19,
                        hidden: form.motivocancelamento5 && form.motivocancelamento5.value !== 7,
                    },
                ],
                visible: function() {
                    return form.motivocancelamento5
                        && form.motivocancelamento5.value !== 3
                        && form.motivocancelamento5.value !== 8
                }
            },
            {
                label: 'Li as orientações e permito o encerramento imediato do plano',
                type: 'checkbox',
                depends: 'motivocancelamento5',
            },
        ],
    }
})