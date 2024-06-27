HgZendeskForms.registerForm(form => ({
  subject: 'Suporte Financeiro - Alterar método de pagamento padrão',
  key: 'changepaymentmethod',
  tags: [
    'whmcs_form_financeiro_alterar_forma_de_pagamento',
  ],
  visible() { return true; },
  root:
 { name: 'salessupport', as: 'Alterar método de pagamento padrão' },
  text: [
    'Independente do método padrão, <b>toda vez que você receber uma fatura você pode escolher como quer pagá-la, se com Boleto, Cartão de Crédito ou PayPal</b>. Veja como fazer no material \'<a href="https://suporte.hostgator.com.br/hc/pt-br/articles/115000348214-Como-alterar-a-forma-de-pagamento-de-uma-fatura-" target="_blank">Como alterar a forma de pagamento para Boleto, PayPal ou Cartão de Crédito</a>\'.',
    '<br><br>',
  ].join('\n'),
  fields: [
    {
      label: 'Caso queira mudar o método padrão para todas as suas faturas do produto acima, nos diga qual você deseja:',
      type: 'select',
      options: [
        { name: 'Boleto', value: 'boleto', hidden: form.product && form.product.paymentmethod == 'boleto' },
        { name: 'PayPal', value: 'paypal', hidden: form.product && form.product.paymentmethod == 'paypal' },
        { name: 'Cartão de Crédito', value: 'braspag', hidden: form.product && form.product.paymentmethod == 'braspag' },
      ],
    },
    { label: '✔️ Confirmo a alteração da forma de pagamento do serviço selecionado', type: 'checkbox' },
  ],
}));
