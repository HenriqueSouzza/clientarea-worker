HgZendeskForms.registerForm(function (form) {
    return {
        subject: 'Suporte Financeiro - Solicitação de Cancelamento',
        key: 'solicitarcancelamento1',
        tags: [
            'whmcs_form_financeiro_solicitar_cancelamento',
        ],
        visible: function () {
            return !!form.product
                && (HgZendeskFormValidation.isInGroup(form.product.pid, [
                    HgProducts.SHARED_ALL,
                    HgProducts.PLUS_ALL,
                    HgProducts.WPHOSTING_ALL,
                    HgProducts.RESELLER_ALL,
                    HgProducts.DEDICATED_ALL,
                    HgProducts.VPS_ALL,
                    HgProducts.WEEBLY_ALL,
                    HgProducts.CRIADOR_SITES_ALL,
                    HgProducts.STREAMING_ALL,
                    HgProducts.CODEGUARD_ALL,
                ]) || HgZendeskFormValidation.isProduct(form.product.pid , [
                    HgProducts.SITELOCK_BASIC,
                    HgProducts.SITELOCK_PROFESSIONAL,
                    HgProducts.SITELOCK_PREMIUM,
                    HgProducts.SITELOCK_ENTERPRISE,
                    HgProducts.CERTIFICADO_SSL,
                    HgProducts.CERTIFICADO_SSL_IP,
                    HgProducts.CERTIFICADO_SSL_EMPRESARIAL,
                    HgProducts.CERTIFICADO_SSL_WILDCARD,
                    HgProducts.SSL_FREE,
                    HgProducts.SSL_PRIVADO,
                    HgProducts.SSL_EMPRESARIAL,
                    HgProducts.SSL_WILDCARD,
                    HgProducts.IP_DEDICADO,
                    HgProducts.LICENCA_TERMINAL_SERVICES,
                    HgProducts.SMARTERMAIL_ENTERPRISE_1000_UNICO,
                    HgProducts.SMARTERMAIL_PROFESSIONAL_1000_UNICO,
                    HgProducts.SMARTERMAIL_PROFESSIONAL_250_UNICO,
                    HgProducts.SMARTERMAIL_PROFESSIONAL_250_MENSAL,
                    HgProducts.SMARTERMAIL_PROFESSIONAL_1000_MENSAL,
                    HgProducts.SMARTERMAIL_PROFESSIONAL_UNLIMITED_UNICO,
                    HgProducts.SMARTERMAIL_ENTERPRISE_1000_MENSAL,
                    HgProducts.SMARTERMAIL_ENTERPRISE_UNLIMITED_UNICO,
                    HgProducts.SMARTERSTATS_PROFESSIONAL_50_UNICO,
                    HgProducts.SMARTERSTATS_PROFESSIONAL_50_MENSAL,
                    HgProducts.SMARTERSTATS_PROFESSIONAL_250_UNICO,
                    HgProducts.SMARTERSTATS_PROFESSIONAL_250_MENSAL,
                    HgProducts.SMARTERSTATS_PROFESSIONAL_1000_UNICO,
                    HgProducts.SMARTERSTATS_PROFESSIONAL_1000_MENSAL,
                    HgProducts.SMARTERSTATS_ENTERPRISE_50_UNICO,
                    HgProducts.SMARTERSTATS_ENTERPRISE_50_MENSAL,
                    HgProducts.SMARTERSTATS_ENTERPRISE_250_UNICO,
                    HgProducts.SMARTERSTATS_ENTERPRISE_250_MENSAL,
                    HgProducts.SMARTERSTATS_ENTERPRISE_1000_UNICO,
                    HgProducts.SMARTERSTATS_ENTERPRISE_1000_MENSAL,
                    HgProducts.SMARTERTRACK_PROFESSIONAL_2,
                    HgProducts.SMARTERTRACK_PROFESSIONAL_5,
                    HgProducts.SMARTERTRACK_PROFESSIONAL_10,
                    HgProducts.SMARTERTRACK_ENTERPRISE_5,
                    HgProducts.SMARTERTRACK_ENTERPRISE_10,
                    HgProducts.WHMCS_VPS,
                    HgProducts.UPGRADE_SAN_PROVO_100GB,
                    HgProducts.UPGRADE_SAN_PROVO_250GB,
                    HgProducts.UPGRADE_SAN_PROVO_500GB,
                    HgProducts.UPGRADE_SAN_PROVO_750GB,
                    HgProducts.UPGRADE_SAN_PROVO_1TB,
                    HgProducts.UPGRADE_SAN_PROVO_2TB,
                    HgProducts.UPGRADE_SAN_PROVO_2_5TB,
                    HgProducts.UPGRADE_SAN_PROVO_3TB,
                    HgProducts.UPGRADE_SAN_PROVO_3_5TB,
                    HgProducts.UPGRADE_SAN_PROVO_4TB,
                    HgProducts.UPGRADE_RAM_PROVO_4GB,
                    HgProducts.UPGRADE_RAM_PROVO_8GB,
                    HgProducts.UPGRADE_RAM_PROVO_12GB,
                    HgProducts.UPGRADE_RAM_PROVO_16GB,
                    HgProducts.UPGRADE_RAM_PROVO_20GB,
                    HgProducts.UPGRADE_RAM_PROVO_24GB,
                    HgProducts.UPGRADE_RAM_PROVO_28GB,
                    HgProducts.STREAMING_ADICIONAL_128,
                    HgProducts.STREAMING_AUTODJ_2GB,
                ]))
        },
        root: {
            name: 'salessupport',
            as: 'Solicitação de Cancelamento',
        },
        text: [
            'O cancelamento da sua conta só será finalizado quando enviarmos nossa confirmação. É possível que outras informações sejam solicitadas para concluir o processo.',
            'Após o cancelamento, todos os dados da conta serão deletados do servidor, sem possibilidade de recuperação. Veja como realizar um [backup de sua conta](https://suporte.hostgator.com.br/hc/pt-br/articles/115000385173).',
            'Política de Reembolso: para fazer uso da garantia de 7 dias, confira os termos disponíveis no item 7 dos nossos Termos de Serviço. Caso tenha direito ao reembolso, após a confirmação do cancelamento, nossa equipe entrará em contato solicitando os dados bancários necessários. No caso de dúvida, entre em contato com nossa equipe através dos [Canais de Atendimento](http://suporte.hostgator.com.br) disponíveis.',
            'Se você estiver cancelando sua conta para fazer upgrade/downgrade para outro plano, certifique-se de que a atualização foi totalmente concluída e todos os arquivos movidos para sua nova conta antes de enviar o formulário.',
            'Lembre-se que serviços adicionais ligados ao seu plano como Sitelock e Criador de Sites vão ser cancelados automaticamente (apenas add-ons).',
            'Se você realiza o pagamento via PayPal, lembre-se de cancelar os pagamentos recorrentes para a HostGator em sua conta. [Clique aqui](https://www.paypal.com/br/selfhelp/article/como-cancelo-um-pagamento-recorrente,-assinatura-ou-contrato-de-cobran%C3%A7a-autom%C3%A1tica-faq1067) para saber como fazer isso.',
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
                name: 'motivocancelamento1',
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
                depends: 'motivocancelamento1',
                options: [
                    {
                        name: 'Dificuldade na configuração dos produtos e serviços',
                        value: 1,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 1,
                    },
                    {
                        name: 'Problemas com servidor/desempenho',
                        value: 2,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 1,
                    },
                    {
                        name: 'Soluções oferecidas não eram satisfatórias',
                        value: 3,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 2,
                    },
                    {
                        name: 'Tempo de espera elevado',
                        value: 4,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 2,
                    },
                    {
                        name: 'Não sei como começar',
                        value: 5,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 4,
                    },
                    {
                        name: 'Não tive/tenho tempo',
                        value: 6,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 4,
                    },
                    {
                        name: 'Falta de assistência',
                        value: 7,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 4,
                    },
                    {
                        name: 'A empresa fechou',
                        value: 8,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 5,
                    },
                    {
                        name: 'Questões financeiras',
                        value: 9,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 5,
                    },
                    {
                        name: 'Não tive o retorno que esperava',
                        value: 10,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 5,
                    },
                    {
                        name: 'Projeto encerrado',
                        value: 11,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 5,
                    },
                    {
                        name: 'Preço',
                        value: 12,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 6,
                    },
                    {
                        name: 'Suporte',
                        value: 13,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 6,
                    },
                    {
                        name: 'Terceirização do trabalho',
                        value: 14,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 6,
                    },
                    {
                        name: 'Produto mais adequado às minhas necessidades',
                        value: 15,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 6,
                    },
                    {
                        name: 'Cobrança indevida de pagamento',
                        value: 16,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 7,
                    },
                    {
                        name: 'Dificuldade de comunicação',
                        value: 17,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 7,
                    },
                    {
                        name: 'Baixo diferencial de mercado',
                        value: 18,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 7,
                    },
                    {
                        name: 'Pouca variedade de produtos',
                        value: 19,
                        hidden: form.motivocancelamento1 && form.motivocancelamento1.value !== 7,
                    },
                ],
                visible: function() {
                    return form.motivocancelamento1
                        && form.motivocancelamento1.value !== 3
                        && form.motivocancelamento1.value !== 8
                }
            },
            {
                label: 'Li as orientações e permito o encerramento imediato do plano',
                type: 'checkbox',
                depends: 'motivocancelamento1',
            },
        ],
    }
})