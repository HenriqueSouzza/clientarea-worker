HgZendeskForms.registerForm(form => ({
  subject: 'Suporte Financeiro - Alterar Data de Vencimento',
  key: 'changeduedate',
  tags: ['whmcs_form_financeiro_alterar_data_de_vencimento'],
  visible() { return !HgZendeskFormValidation.isInGroup(form.product.pid, [HgProducts.SERVICES_ALL, HgProducts.DOMAINS_ALL]); },
  root: { name: 'salessupport', as: 'Alterar Data de Vencimento' },
  text: [
    '<b>Leia com atenção os termos a seguir:</b>',
    '- A nova data precisa ser <b>de até 30 dias a partir da data de vencimento atual</b> do serviço;',
    '- Alterar a data de vencimento <b>poderá gerar um acréscimo de valor na sua próxima fatura</b> por conta da readequação da data.',
    '<br><br>',
  ].join('\n'),
  fields: [
    { label: 'Qual a data de vencimento desejada?', type: 'date' },
    { label: '✔️ Confirmo que li e concordo com os termos acima.', type: 'checkbox' },
  ],
}));
