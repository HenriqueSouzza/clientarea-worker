HgZendeskForms.registerForm(function (form) {
        var domains = form.products.filter(function (prod) {
        return HgProducts.DOMAINS_ALL.indexOf(prod.pid) !== -1
    })

    var services = form.products.filter(function (serv){
        return HgProducts.SERVICES_ALL.indexOf(serv.pid) !== -1

    })

    var custom = {
        // hostings: hostings,
        domains: domains,
        services: services,
    }

    var select = { 
       
    }

    return {
        subject: 'Suporte Técnico - Solicitação de Cancelamento',
        key: 'cancelamentonovo',
        tags: [
            'whmcs_form_tecnico_windows_smartertool',
        ],
        optOrder: 3,
        visible: function () {
            return true
        },
        root: {
            name: 'accountsupport',
            as: 'Solicitação de Cancelamento',
        },

        fields: [
            {
                type: 'cancelamento',
                url: 'clientarea.php',
                custom: custom,
                select:select
            },
        ],
    }


})