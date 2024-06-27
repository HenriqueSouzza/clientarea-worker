HgZendeskForms.registerForm(function (form) {
    return {
        subject: 'Suporte Financeiro - Solicitação de Cancelamento',
        key: 'solicitarcancelamento2',
        tags: [
            'whmcs_form_financeiro_solicitar_cancelamento',
        ],
        visible: function () {
            return !!form.product
                && HgZendeskFormValidation.isProduct(form.product.pid, [
                    HgProducts.WEEBLY_INICIANTE,
                    HgProducts.WEEBLY_PRO,
                    HgProducts.WEEBLY_EMPRESARIAL,
                    HgProducts.WEEBLY_BASICO,
                ])
        },
        root: {
            name: 'salessupport',
            as: 'Solicitação de Cancelamento',
        },
        text: [
            'Se optar por prosseguir com o cancelamento, é importante que você saiba:',
            'O cancelamento só será finalizado quando enviarmos nossa confirmação. É possível que outras informações sejam solicitadas para concluir o processo.',
            'Após o cancelamento, sua conta Weebly será imediatamente desativada. Você continuará com acesso ao seu site utilizando o Weebly Básico (que é gratuito para os clientes de planos de hospedagem), mas alguns recursos podem deixar de funcionar (caso estejam listados como recursos extras disponíveis apenas na versão Iniciante ou Pro).',
            'Política de Garantia de Satisfação: caso não fique satisfeito com os recursos do Weebly nos primeiros 7 dias após a contratação, você pode solicitar o cancelamento e receber seu dinheiro de volta. O valor pode ser adicionado como crédito no seu painel financeiro, ou você pode solicitar o reembolso.',
            'No caso de dúvida, entre em contato com nossa equipe através dos [Canais de Atendimento](http://suporte.hostgator.com.br) disponíveis.',
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
                name: 'motivocancelamento2',
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
                depends: 'motivocancelamento2',
                options: [
                    {
                        name: 'Dificuldade na configuração dos produtos e serviços',
                        value: 1,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 1,
                    },
                    {
                        name: 'Problemas com servidor/desempenho',
                        value: 2,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 1,
                    },
                    {
                        name: 'Soluções oferecidas não eram satisfatórias',
                        value: 3,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 2,
                    },
                    {
                        name: 'Tempo de espera elevado',
                        value: 4,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 2,
                    },
                    {
                        name: 'Não sei como começar',
                        value: 5,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 4,
                    },
                    {
                        name: 'Não tive/tenho tempo',
                        value: 6,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 4,
                    },
                    {
                        name: 'Falta de assistência',
                        value: 7,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 4,
                    },
                    {
                        name: 'A empresa fechou',
                        value: 8,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 5,
                    },
                    {
                        name: 'Questões financeiras',
                        value: 9,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 5,
                    },
                    {
                        name: 'Não tive o retorno que esperava',
                        value: 10,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 5,
                    },
                    {
                        name: 'Projeto encerrado',
                        value: 11,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 5,
                    },
                    {
                        name: 'Preço',
                        value: 12,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 6,
                    },
                    {
                        name: 'Suporte',
                        value: 13,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 6,
                    },
                    {
                        name: 'Terceirização do trabalho',
                        value: 14,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 6,
                    },
                    {
                        name: 'Produto mais adequado às minhas necessidades',
                        value: 15,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 6,
                    },
                    {
                        name: 'Cobrança indevida de pagamento',
                        value: 16,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 7,
                    },
                    {
                        name: 'Dificuldade de comunicação',
                        value: 17,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 7,
                    },
                    {
                        name: 'Baixo diferencial de mercado',
                        value: 18,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 7,
                    },
                    {
                        name: 'Pouca variedade de produtos',
                        value: 19,
                        hidden: form.motivocancelamento2 && form.motivocancelamento2.value !== 7,
                    },
                ],
                visible: function() {
                    return form.motivocancelamento2
                        && form.motivocancelamento2.value !== 3
                        && form.motivocancelamento2.value !== 8
                }
            },
            {
                label: 'Li as orientações e permito o encerramento imediato do plano',
                type: 'checkbox',
                depends: 'motivocancelamento2',
            },
        ],
    }
})