var HgZendeskFormBlockedConfig = function() {
    return [
        {
            name: 'email',
            label: 'E-mail (de cadastro)',
            type: 'text',
            order: 1,
            form: {
                tags: ['whmcs_form_validar_cadastro'],
                subject: 'Validação Cadastral'
            }
        },
        {
            name: 'doc',
            label: 'CPF/CNPJ (de cadastro)',
            type: 'text',
            order: 2,
        },
        {
            name: 'docfile',
            label: 'Anexar documento',
            info: 'RG, CPF e CNPJ',
            type: 'file',
            order: 3,
        },
        {
            name: 'birthdate',
            label: 'Data de nascimento (de cadastro)',
            type: 'text',
            order: 4,
        },
        {
            name: 'maindomain',
            label: 'Domínio principal da conta',
            type: 'text',
            order: 5,
        },
        {
            name: 'phone',
            label: 'Telefone para contato',
            type: 'text',
            order: 6,
        },
        {
            name: 'contact',
            label: 'E-mail para contato',
            type: 'text',
            order: 7,
        },
    ]
}