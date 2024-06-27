HgZendeskForms.registerForm(function (form) {
    return {
        subject: 'Suporte Técnico - Smarter Tool',
        key: 'upsmartertool',
        tags: [
            'whmcs_form_tecnico_windows_smartertool',
        ],
        visible: function () {
            return !!form.product
                && HgZendeskFormValidation.isProduct(form.product.pid , [
                    HgProducts.DEDICADO_WINDOWS_BASICO,
                    HgProducts.DEDICADO_WINDOWS_STANDARD,
                    HgProducts.DEDICADO_WINDOWS_ELITE,
                    HgProducts.DEDICADO_WINDOWS_PRO,
                ])
        },
        root: {
            name: 'techsupport',
            as: 'Smarter Tool',
        },
        fields: [
            {
                label: 'Selecione qual ferramenta deseja realizar o upgrade',
                type: 'select',
                name: 'smartertoolproduct',
                options: [
                    { name: 'SmarterMail', value: 1 },
                    { name: 'SmarterStats', value: 2 },
                    { name: 'SmarterTrack', value: 3 },
                ]
            },
            {
                label: 'Selecione a forma de pagamento',
                type: 'select',
                depends: 'smartertoolproduct',
                name: 'smartertoolpagto',
                visible: function() {
                    return !!form.smartertoolproduct && form.smartertoolproduct.value !== 3
                },
                options: [
                    { name: 'Taxa única', value: 1 },
                    { name: 'Taxa mensal', value: 2 },
                ]
            },
            {
                label: 'SmarterMail Upgrade',
                type: 'select',
                depends: 'smartertoolpagto',
                name: 'smartermail',
                visible: function() {
                    return !!form.smartertoolpagto && form.smartertoolproduct.value === 1
                },
                options: [
                    {
                        name: 'SmarterMail Professional 250 usuários - R$400,00 uma vez',
                        value: 1,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterMail Professional 1000 usuários - R$800,00 uma vez',
                        value: 2,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterMail Professional Ilimitado - R$1.600,00 uma vez',
                        value: 3,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterMail Enterprise 250 usuários - R$400,00 uma vez',
                        value: 4,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterMail Enterprise 1000 usuários - R$1.200,00 uma vez',
                        value: 5,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterMail Enterprise Ilimitado  - R$2.000,00 uma vez',
                        value: 6,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },

                    {
                        name: 'SmarterMail Professional 250 usuários - R$30,00 mensal',
                        value: 7,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterMail Professional 1000 usuários - R$80,00 mensal',
                        value: 8,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterMail Professional Ilimitado - R$120,00 mensal',
                        value: 9,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterMail Enterprise 250 usuários - R$80,00 mensal',
                        value: 10,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterMail Enterprise 1000 usuários - R$120,00 mensal',
                        value: 11,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterMail Enterprise Ilimitado  - R$200,00 mensal',
                        value: 12,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                ]
            },
            {
                label: 'SmarterStats Upgrade',
                type: 'select',
                depends: 'smartertoolpagto',
                name: 'smarterstats',
                visible: function() {
                    return !!form.smartertoolpagto && form.smartertoolproduct.value === 2
                },
                options: [
                    {
                        name: 'SmarterStats Professional 50 sites - R$400,00 uma vez',
                        value: 1,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterStats Professional 250 sites - R$800,00 uma vez',
                        value: 2,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterStats Professional 1000 sites - R$1.200,00 uma vez',
                        value: 3,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterStats Enterprise 50 sites - R$400,00 uma vez',
                        value: 4,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterStats Enterprise 250 sites - R$1.400,00 uma vez',
                        value: 5,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },
                    {
                        name: 'SmarterStats Enterprise 1000 sites  - R$2.400,00 uma vez',
                        value: 6,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1
                    },

                    {
                        name: 'SmarterStats Professional 50 sites - R$30,00 mensal',
                        value: 7,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterStats Professional 250 sites - R$80,00 mensal',
                        value: 8,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterStats Professional 1000 sites - R$150,00 mensal',
                        value: 9,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterStats Enterprise 50 sites  - R$80,00 mensal',
                        value: 10,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterStats Enterprise 250 sites - R$160,00 mensal',
                        value: 11,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                    {
                        name: 'SmarterStats Enterprise 1000 sites - R$250,00 mensal',
                        value: 12,
                        hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2
                    },
                ]
            },
            {
                label: 'SmarterTrack Upgrade',
                type: 'select',
                depends: 'smartertoolproduct',
                name: 'smartertrack',
                visible: function() {
                    return !!form.smartertoolproduct && form.smartertoolproduct.value === 3
                },
                options: [
                    {
                        name: 'SmarterTrack Professional 2 agentes - R$400,00 uma vez',
                        value: 1,
                    },
                    {
                        name: 'SmarterTrack Professional 5 agentes - R$800,00 uma vez',
                        value: 2,
                    },
                    {
                        name: 'SmarterTrack Professional 10 agentes - R$1.000,00 uma vez',
                        value: 3,
                    },
                    {
                        name: 'SmarterTrack Enterprise 5 agentes - R$800,00 uma vez',
                        value: 4,
                    },
                    {
                        name: 'SmarterTrack Enterprise 10 agentes - R$1.600,00 uma vez',
                        value: 5,
                    },
                ]
            },
            {
                label: 'Chave de licença atual',
                info: 'xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx',
                type: 'text',
                visible: function() {
                    return !!form.smartermail || !!form.smartertrack || !!form.smarterstats
                }
            },
            {
                label: 'Email registrado no Smartertools.com',
                type: 'text',
                visible: function() {
                    return !!form.smartermail || !!form.smartertrack || !!form.smarterstats
                }
            },
            {
                label: 'Senha no Smartertools.com',
                type: 'text',
                visible: function() {
                    return !!form.smartermail || !!form.smartertrack || !!form.smarterstats
                }
            }
        ],
    }
})